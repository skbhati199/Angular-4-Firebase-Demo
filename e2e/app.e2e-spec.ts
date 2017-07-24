import { FbHostAppDemoPage } from './app.po';

describe('fb-host-app-demo App', () => {
  let page: FbHostAppDemoPage;

  beforeEach(() => {
    page = new FbHostAppDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
