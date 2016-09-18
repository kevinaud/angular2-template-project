import { NgFinalPage } from './app.po';

describe('angular2-template-project App', function() {
  let page: NgFinalPage;

  beforeEach(() => {
    page = new NgFinalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
