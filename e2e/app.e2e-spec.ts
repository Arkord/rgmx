import { Rgmx2Page } from './app.po';

describe('rgmx2 App', () => {
  let page: Rgmx2Page;

  beforeEach(() => {
    page = new Rgmx2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
