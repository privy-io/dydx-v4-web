import { useCallback, useEffect, useMemo } from 'react';
import { UseSwitchChainReturnType, useAccount, useSwitchChain } from 'wagmi';

export const useMatchingEvmNetwork = ({
  chainId,
  switchAutomatically = false,
  onError,
}: {
  chainId?: string | number;
  switchAutomatically?: boolean;
  onError?: Parameters<UseSwitchChainReturnType['switchChainAsync']>[1]['onError'];
}) => {
  const { chain } = useAccount();
  const { switchChainAsync, isPending } = useSwitchChain();

  // If chainId is not a number, we can assume it is a non EVM compatible chain
  const isMatchingNetwork = useMemo(
    () => Boolean(chain && chainId && typeof chainId === 'number' && chain.id === chainId),
    [chainId, chain]
  );

  const matchNetwork = useCallback(async () => {
    if (!isMatchingNetwork) {
      await switchChainAsync?.(
        {
          chainId: Number(chainId),
        },
        {
          onError,
        }
      );
    }
  }, [chainId, chain]);

  useEffect(() => {
    if (switchAutomatically) {
      matchNetwork();
    }
  }, [chainId, chain]);

  return {
    isMatchingNetwork,
    matchNetwork,
    isSwitchingNetwork: isPending,
  };
};
