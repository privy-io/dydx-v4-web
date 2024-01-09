import { createConfig, createConnector, http, usePublicClient } from 'wagmi';
import {
  type Chain,
  arbitrum,
  arbitrumGoerli,
  avalanche,
  avalancheFuji,
  bsc,
  bscTestnet,
  optimism,
  optimismGoerli,
  base,
  baseGoerli,
  polygon,
  polygonMumbai,
  linea,
  lineaTestnet,
  mantle,
  mantleTestnet,
  moonbeam,
  moonbaseAlpha,
  filecoin,
  filecoinHyperspace,
  fantom,
  fantomTestnet,
  celo,
  celoAlfajores,
  mainnet,
  goerli,
  sepolia,
} from 'wagmi/chains';

import { coinbaseWallet, injected, metaMask, walletConnect } from 'wagmi/connectors';
import type { ExternalProvider } from '@ethersproject/providers';

import {
  type WalletConnectConfig,
  type WalletConnection,
  WalletConnectionType,
  WalletType,
  WALLET_CONNECTION_TYPES,
  wallets,
  WALLET_CONNECT_EXPLORER_RECOMMENDED_IDS,
  WalletConfig,
} from '@/constants/wallets';

import { isTruthy } from './isTruthy';
import { log } from './telemetry';

// Config
const WAGMI_SUPPORTED_CHAINS: Parameters<typeof createConfig>[0]['chains'] = [
  mainnet,
  goerli,
  sepolia,
  arbitrum,
  arbitrumGoerli,
  avalanche,
  avalancheFuji,
  bsc,
  bscTestnet,
  optimism,
  optimismGoerli,
  base,
  baseGoerli,
  polygon,
  polygonMumbai,
  linea,
  lineaTestnet,
  mantle,
  mantleTestnet,
  moonbeam,
  moonbaseAlpha,
  filecoin,
  filecoinHyperspace,
  fantom,
  fantomTestnet,
  celo,
  celoAlfajores,
];

export const config = createConfig({
  chains: WAGMI_SUPPORTED_CHAINS,
  transports: Object.fromEntries(
    Object.values(WAGMI_SUPPORTED_CHAINS).map(({ id }) => [id, http()])
  ),
});

const createdInjectedConnectorWithProvider = ({ provider }: { provider: ExternalProvider }) => {
  console.log(provider);
  return injected({
    target() {
      return {
        id: 'windowProvider',
        name: 'Injected',
        provider,
      };
    },
    shimDisconnect: true,
  });
};

const getConnector = ({
  walletConnectionType,
  walletConnectConfig,
}: {
  walletConnectionType: WalletConnectionType;
  walletConnectConfig: WalletConnectConfig;
}) => {
  console.log(walletConnectionType);
  switch (walletConnectionType) {
    case WalletConnectionType.WalletConnect2:
      return [
        walletConnect(
          getConnectorInfoForWc2({
            walletConnectConfig,
          })
        ),
      ];
    case WalletConnectionType.CoinbaseWalletSdk:
      return [
        coinbaseWallet({
          appName: 'dYdX',
          appLogoUrl: walletConnectConfig.client.iconUrl,
          reloadOnDisconnect: false,
          darkMode: true,
        }),
      ];
    case WalletConnectionType.InjectedEip1193:
      return injected({
        target() {
          return {
            id: 'windowProvider',
            name: 'Injected',
            provider: window.ethereum,
          };
        },
        shimDisconnect: true,
      });
    case WalletConnectionType.CosmosSigner:
    default: {
      return undefined;
    }
  }
};

const getConnectorInfoForWc2 = ({
  walletConnectId,
  walletConnectConfig,
}: {
  walletConnectId?: string;
  walletConnectConfig: WalletConnectConfig;
}) => {
  const explorerRecommendedWalletIds = walletConnectId
    ? [walletConnectId]
    : WALLET_CONNECT_EXPLORER_RECOMMENDED_IDS;

  return {
    projectId: walletConnectConfig.v2.projectId,
    metadata: {
      name: walletConnectConfig.client.name,
      description: walletConnectConfig.client.description,
      url: import.meta.env.VITE_BASE_URL,
      icons: [walletConnectConfig.client.iconUrl],
    },
    showQrModal: true,
    qrModalOptions: {
      themeMode: 'dark' as const,
      themeVariables: {
        '--wcm-accent-color': 'var(--color-accent)',
        '--wcm-font-family': 'var(--fontFamily-base)',
        '--wcm-background-color': 'var(--color-accent)',
      },
      explorerRecommendedWalletIds,
    },
  };
};

// Custom connector from wallet selection
export const resolveWagmiConnector = ({
  walletType,
  walletConnection,
  walletConnectConfig,
}: {
  walletType: WalletType;
  walletConnection: WalletConnection;
  walletConnectConfig: WalletConnectConfig;
}) => {
  const walletConfig = wallets[walletType];

  if (walletConnection.type === WalletConnectionType.InjectedEip1193 && walletConnection.provider) {
    if (walletType === WalletType.MetaMask) {
      return metaMask();
    }
    return createdInjectedConnectorWithProvider({ provider: walletConnection.provider });
  } else if (
    walletConnection.type === WalletConnectionType.WalletConnect2 &&
    walletConfig.walletconnect2Id
  ) {
    return walletConnect(
      getConnectorInfoForWc2({
        walletConnectId: walletConfig.walletconnect2Id,
        walletConnectConfig,
      })
    );
  } else {
    return getConnector({ walletConnectionType: walletConnection.type, walletConnectConfig });
  }
};
