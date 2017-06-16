import { RestorationStationPage } from './app.po';

describe('restoration-station App', () => {
  let page: RestorationStationPage;

  beforeEach(() => {
    page = new RestorationStationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
