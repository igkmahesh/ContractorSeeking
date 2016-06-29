import { ContractorSeekingPage } from './app.po';

describe('contractor-seeking App', function() {
  let page: ContractorSeekingPage;

  beforeEach(() => {
    page = new ContractorSeekingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
