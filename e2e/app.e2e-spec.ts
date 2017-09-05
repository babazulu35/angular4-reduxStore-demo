import { StoreSidePage } from './app.po';

describe('store-side App', () => {
  let page: StoreSidePage;

  beforeEach(() => {
    page = new StoreSidePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
