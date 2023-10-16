import { AVAILABLE_ENVIRONMENTS, type DydxNetwork } from '@/constants/networks';

export const validateAgainstAvailableEnvironments = (value: DydxNetwork) =>
  AVAILABLE_ENVIRONMENTS.environments.includes(value);
