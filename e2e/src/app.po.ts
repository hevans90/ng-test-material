import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('http://localhost:4300/block-test');
    // browser.navigate();
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
