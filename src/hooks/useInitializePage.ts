import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { LocalStorageKey } from '@/constants/localStorage';

import {
  DEFAULT_APP_ENVIRONMENT,
  DydxNetwork,
  isValidDydxNetwork,
} from '@/constants/networks';

import { useLocalStorage } from '@/hooks';

import { initializeLocalization } from '@/state/app';

import abacusStateManager from '@/lib/abacus';

export const useInitializePage = () => {
  const dispatch = useDispatch();

  // Sync localStorage value with Redux
  const [localStorageNetwork] = useLocalStorage<DydxNetwork>({
    key: LocalStorageKey.SelectedNetwork,
    defaultValue: DEFAULT_APP_ENVIRONMENT,
    validateFn: isValidDydxNetwork, // backwards compatibility
  });

  useEffect(() => {
    dispatch(initializeLocalization());
    abacusStateManager.start({ network: localStorageNetwork });
  }, []);
};
