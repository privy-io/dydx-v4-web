import { useMemo, useState } from 'react';
import styled, { AnyStyledComponent, css } from 'styled-components';
import { AES } from 'crypto-js';

import { AlertType } from '@/constants/alerts';
import { ButtonSize } from '@/constants/buttons';
import { STRING_KEYS } from '@/constants/localization';
import { useAccounts, useStringGetter } from '@/hooks';
import { layoutMixins } from '@/styles/layoutMixins';

import { AlertMessage } from '@/components/AlertMessage';
import { Dialog } from '@/components/Dialog';
import { Icon, IconName } from '@/components/Icon';
import { ToggleButton } from '@/components/ToggleButton';
import { QrCode } from '@/components/QrCode';
import { log } from '@/lib/telemetry';

type ElementProps = {
  setIsOpen: (open: boolean) => void;
};


const MobileQrCode = ({
}: {
}) => {
  const stringGetter = useStringGetter();

  const appLink = 'https://apps.apple.com/app/id6475599596';

  return (
    <Styled.QrCodeContainer isShowing={true}>
      <QrCode hasLogo size={432} value={appLink} />
      <span>{stringGetter({ key: STRING_KEYS.CLICK_TO_SHOW })}</span>
    </Styled.QrCodeContainer>
  );
};

export const MobileDownloadDialog = ({ setIsOpen }: ElementProps) => {
  const stringGetter = useStringGetter();

  const content = (
      <>
        <p>
          {stringGetter({
            key: STRING_KEYS.WHILE_ONBOARDING,
            params: {
              SYNC_WITH_DESKTOP: (
                <strong>{stringGetter({ key: STRING_KEYS.SYNC_WITH_DESKTOP })}</strong>
              ),
            },
          })}
        </p>
        <MobileQrCode
        />
      </>
    );

  return (
    <Dialog isOpen setIsOpen={setIsOpen} title={'Download mobile app'}>
      <Styled.Content>{content}</Styled.Content>
    </Dialog>
  );
};

const Styled: Record<string, AnyStyledComponent> = {};

Styled.Content = styled.div`
  ${layoutMixins.column}
  gap: 1rem;

  strong {
    font-weight: 900;
    color: var(--color-text-2);
  }

  footer {
    ${layoutMixins.row}
    justify-content: space-between;

    svg {
      width: auto;
    }
  }
`;

Styled.WaitingSpan = styled.span`
  strong {
    color: var(--color-warning);
  }
`;

Styled.QrCodeContainer = styled.figure<{ isShowing: boolean }>`
  ${layoutMixins.stack}

  overflow: hidden;
  border-radius: 0.75em;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    filter: brightness(var(--hover-filter-base));
  }

  > * {
    position: relative;
    transition: 0.16s;
  }

  > :first-child {
    pointer-events: none;

    ${({ isShowing }) =>
      !isShowing &&
      css`
        filter: blur(1rem) brightness(1.4);
        will-change: filter;
      `}
  }

  > span {
    place-self: center;

    font-size: 1.4em;
    color: var(--color-text-2);

    ${({ isShowing }) =>
      isShowing &&
      css`
        opacity: 0;
      `}
  }
`;
