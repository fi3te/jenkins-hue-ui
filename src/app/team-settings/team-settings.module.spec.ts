import { TeamSettingsModule } from './team-settings.module';

describe('TeamSettingsModule', () => {
  let teamSettingsModule: TeamSettingsModule;

  beforeEach(() => {
    teamSettingsModule = new TeamSettingsModule();
  });

  it('should create an instance', () => {
    expect(teamSettingsModule).toBeTruthy();
  });
});
