import { LampManagementModule } from './lamp-management.module';

describe('LampManagementModule', () => {
  let lampManagementModule: LampManagementModule;

  beforeEach(() => {
    lampManagementModule = new LampManagementModule();
  });

  it('should create an instance', () => {
    expect(lampManagementModule).toBeTruthy();
  });
});
