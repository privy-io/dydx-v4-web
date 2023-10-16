import environments from '../../../public/configs/env.json';

import { validateAgainstAvailableEnvironments } from '../network';

describe('validateAgainstAvailableEnvironments', () => {
  describe('production environment', () => {
    beforeAll(() => {
      jest.mock('../../constants/networks', () => ({
        AVAILABLE_ENVIRONMENTS: {
          environments: [],
          default: 'dydxprotocol-testnet-dydx',
        }, //environments.deployments.TESTNET,
      }));
    });

    afterAll(() => {
      jest.unmock('../../constants/networks');
    });

    it('Returns true for valid environments', () => {
      expect(validateAgainstAvailableEnvironments('dydxprotocol-testnet-dydx')).toEqual(true);
    });

    it('Returns false for invalid environments', () => {
      expect(validateAgainstAvailableEnvironments('dydxprotocol-dev')).toEqual(false);
    });
  });

  describe('staging environment', () => {
    it('Returns true for valid environments', () => {
      expect(validateAgainstAvailableEnvironments('dydxprotocol-dev')).toEqual(true);
    });

    it('Returns false for invalid environments', () => {
      expect(validateAgainstAvailableEnvironments('INVALID')).toEqual(false);
    });
  });
});
