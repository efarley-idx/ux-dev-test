import { UxDevTestPage } from './app.po';

describe('ux-dev-test App', () => {
  let page: UxDevTestPage;

  beforeEach(() => {
    page = new UxDevTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
