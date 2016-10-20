import { UpgradePage } from './app.po';

describe('upgrade App', function() {
  let page: UpgradePage;

  beforeEach(() => {
    page = new UpgradePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
