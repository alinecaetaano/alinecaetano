import { CursoprojetoPage } from './app.po';

describe('cursoprojeto App', function() {
  let page: CursoprojetoPage;

  beforeEach(() => {
    page = new CursoprojetoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
