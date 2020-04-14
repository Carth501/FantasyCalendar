import { AppPage } from './app.po';
import { browser, logging, $$, element, by } from 'protractor';

describe('Custom Calendar', () => {
  let page: AppPage;

  beforeAll(() => {
    page = new AppPage();
    page.navigateTo();
    browser.waitForAngular();
  });

  it('should display the site title', () => {
    browser.sleep(4);
    expect(page.getTitleText()).toEqual('Custom Calendar');
  });

  it('should display 12 months by default during 2020', () => {
    const monthList = $$('.month');
    expect(monthList.count()).toEqual(12);
  });

  it('should display 366 days by default during 2020', () => {
    const dayList = $$('.day-id');
    expect(dayList.count()).toEqual(366);
  });

  it('should have the options button', () => {
    expect($$('.sidebarToggle .buttonText').isPresent()).toBe(true);
  });

  it('should start with the options menu hidden', () => {
    expect($$('.settings-panel').isPresent()).toBe(true);
    expect(element(by.css('.settings-panel')).isDisplayed()).toBe(false);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
