import { useEffect, useRef, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import isEmpty from 'lodash/isEmpty';

import { LanguageCode, ResolutionString, widget } from 'public/tradingview/charting_library';

import { DEFAULT_RESOLUTION } from '@/constants/candles';
import { SUPPORTED_LOCALE_BASE_TAGS, STRING_KEYS } from '@/constants/localization';

import { LocalStorageKey } from '@/constants/localStorage';

import { useDydxClient, useLocalStorage, useStringGetter } from '@/hooks';
import { store } from '@/state/_store';

import { getSelectedNetwork } from '@/state/appSelectors';
import { getAppTheme, getAppColorMode } from '@/state/configsSelectors';
import { getSelectedLocale } from '@/state/localizationSelectors';
import { setShowOrderLines } from '@/state/perpetuals';
import {
  getCurrentMarketId,
  getShouldShowOrderLines,
  getMarketIds,
} from '@/state/perpetualsSelectors';

import { getDydxDatafeed } from '@/lib/tradingView/dydxfeed';
import { getSavedResolution, getWidgetOptions, getWidgetOverrides } from '@/lib/tradingView/utils';

/**
 * @description Hook to initialize TradingView Chart
 */
export const useTradingView = ({
  tvWidgetRef,
  setIsChartReady,
}: {
  tvWidgetRef: React.MutableRefObject<any>;
  setIsChartReady: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const stringGetter = useStringGetter();
  const dispatch = useDispatch();

  const appTheme = useSelector(getAppTheme);
  const appColorMode = useSelector(getAppColorMode);

  const [displayOrdersButton, setDisplayOrdersButton] = useState(null);
  const showOrderLines = useSelector(getShouldShowOrderLines);

  const marketId = useSelector(getCurrentMarketId);
  const marketIds = useSelector(getMarketIds, shallowEqual);
  const selectedLocale = useSelector(getSelectedLocale);
  const selectedNetwork = useSelector(getSelectedNetwork);
  const { getCandlesForDatafeed, isConnected: isClientConnected } = useDydxClient();

  const [savedTvChartConfig, setTvChartConfig] = useLocalStorage<object | undefined>({
    key: LocalStorageKey.TradingViewChartConfig,
    defaultValue: undefined,
  });

  const savedResolution = getSavedResolution({ savedConfig: savedTvChartConfig });
  const hasMarkets = marketIds.length > 0;

  useEffect(() => {
    if (displayOrdersButton) {
      displayOrdersButton.onclick = () => {
        const newShowOrderLinesState = !showOrderLines;
        if (newShowOrderLinesState) {
          displayOrdersButton?.classList?.add('order-lines-active');
        } else {
          displayOrdersButton?.classList?.remove('order-lines-active');
        }
        dispatch(setShowOrderLines({ showOrderLines: newShowOrderLinesState }));
      };
    }
  }, [displayOrdersButton, showOrderLines]);

  useEffect(() => {
    if (hasMarkets && isClientConnected && marketId) {
      const widgetOptions = getWidgetOptions();
      const widgetOverrides = getWidgetOverrides({ appTheme, appColorMode });
      const options = {
        ...widgetOptions,
        ...widgetOverrides,
        datafeed: getDydxDatafeed(store, getCandlesForDatafeed),
        interval: (savedResolution || DEFAULT_RESOLUTION) as ResolutionString,
        locale: SUPPORTED_LOCALE_BASE_TAGS[selectedLocale] as LanguageCode,
        symbol: marketId,
        saved_data: !isEmpty(savedTvChartConfig) ? savedTvChartConfig : undefined,
      };

      const tvChartWidget = new widget(options);
      tvWidgetRef.current = tvChartWidget;

      tvWidgetRef.current.onChartReady(() => {
        tvWidgetRef?.current?.headerReady().then(() => {
          const button = tvWidgetRef?.current?.createButton();

          if (button) {
            button.innerHTML = `<span>${stringGetter({
              key: STRING_KEYS.ORDER_LINES,
            })}</span> <div class="displayOrdersButton-toggle"></div>`;
            button.setAttribute('title', stringGetter({ key: STRING_KEYS.ORDER_LINES_TOOLTIP }));
            setDisplayOrdersButton(button);
          }
        });

        tvWidgetRef?.current?.subscribe('onAutoSaveNeeded', () =>
          tvWidgetRef?.current?.save((chartConfig: object) => setTvChartConfig(chartConfig))
        );

        setIsChartReady(true);
      });
    }

    return () => {
      tvWidgetRef.current?.remove();
      tvWidgetRef.current = null;
      setIsChartReady(false);
    };
  }, [
    getCandlesForDatafeed,
    isClientConnected,
    hasMarkets,
    selectedLocale,
    selectedNetwork,
    !!marketId,
  ]);

  return { savedResolution };
};
