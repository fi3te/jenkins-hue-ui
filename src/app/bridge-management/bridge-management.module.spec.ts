import { BridgeManagementModule } from './bridge-management.module';

describe('BridgeManagementModule', () => {
  let bridgeManagementModule: BridgeManagementModule;

  beforeEach(() => {
    bridgeManagementModule = new BridgeManagementModule();
  });

  it('should create an instance', () => {
    expect(bridgeManagementModule).toBeTruthy();
  });
});
