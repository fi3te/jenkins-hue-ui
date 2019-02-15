import { JenkinsHueUiPage } from './app.po';

describe('jenkins-hue-ui App', function() {
  let page: JenkinsHueUiPage;

  beforeEach(() => {
    page = new JenkinsHueUiPage();
  });

  it('should display login page', () => {
    page.navigateTo();
    expect(page.getLoginButtonText()).toContain('Login');
  });
});
