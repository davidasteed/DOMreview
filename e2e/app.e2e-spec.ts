import { DOMreviewPage } from './app.po';

describe('domreview App', function() {
  let page: DOMreviewPage;

  beforeEach(() => {
    page = new DOMreviewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
