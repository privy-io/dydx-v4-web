import type { AbacusTrackingProtocol, Nullable } from '@/constants/abacus';

class AbacusTracking implements AbacusTrackingProtocol {
  log(event: string, data: Nullable<string>) {
    console.log({ event, data });
  }
}

export default AbacusTracking;
