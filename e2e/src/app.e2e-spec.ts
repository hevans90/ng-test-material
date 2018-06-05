import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should navigate to blocks', async () => {
    page.navigateTo();

    const currUrl = await browser.getCurrentUrl();
    expect(currUrl).toEqual('WHY IS THE BROWSER NOT NAVIGATING?!');
  });
});
