import { browser, element, by } from 'protractor';

export class JenkinsHueUiPage {
  navigateTo() {
    return browser.get('/');
  }

  getLoginButtonText() {
    return element(by.tagName('button')).getText();
  }
}
