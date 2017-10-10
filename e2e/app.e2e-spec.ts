import { NewEssPage } from './app.po';

describe('new-ess App', () => {
  let page: NewEssPage;

  beforeEach(() => {
    page = new NewEssPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
