import { Angular3Page } from './app.po';

describe('angular3 App', function() {
  let page: Angular3Page;

  beforeEach(() => {
    page = new Angular3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
