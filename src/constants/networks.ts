import environments from '../../public/configs/env.json';

// TODO: Update for Mainnet deployment
export const AVAILABLE_ENVIRONMENTS =
  import.meta.env.MODE === 'production'
    ? environments.deployments.TESTNET
    : environments.deployments.DEV;

export const CURRENT_ABACUS_DEPLOYMENT = import.meta.env.MODE === 'production' ? 'TESTNET' : 'DEV';
export const ENVIRONMENT_CONFIG_MAP = environments.environments;
export type DydxNetwork = (typeof AVAILABLE_ENVIRONMENTS.environments)[number];
export const DEFAULT_APP_ENVIRONMENT = AVAILABLE_ENVIRONMENTS.default as DydxNetwork;
