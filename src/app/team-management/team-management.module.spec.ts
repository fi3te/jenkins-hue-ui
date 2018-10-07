import { TeamManagementModule } from './team-management.module';

describe('TeamManagementModule', () => {
  let teamManagementModule: TeamManagementModule;

  beforeEach(() => {
    teamManagementModule = new TeamManagementModule();
  });

  it('should create an instance', () => {
    expect(teamManagementModule).toBeTruthy();
  });
});
