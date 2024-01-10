import { expect, type Locator, type Page } from "@playwright/test";

export class WorkSpacePage {
  readonly page: Page;
  readonly getInputPage: Locator;
  readonly getButtonPage: Locator;
  readonly getTablePage: Locator;
  readonly getElementsPage: Locator;
  readonly getDropDownPage: Locator;
  readonly getRadioPage: Locator;
  readonly getDropPage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getInputPage = page.locator("xpath=//a[contains(text(),'Edit')]");
    this.getButtonPage = page.locator("xpath=//a[contains(text(),'Click')]");
    this.getTablePage = page.locator(
      "xpath=//a[contains(text(),'Simple table')]"
    );
    this.getElementsPage = page.locator(
      "xpath=//a[contains(text(),'Find Elements')]"
    );
    this.getDropDownPage = page.locator(
      "xpath=//a[contains(text(),'Drop-Down')]"
    );
    this.getRadioPage = page.locator("xpath=//a[contains(text(),'Toggle')]");
    this.getDropPage = page.locator("xpath=//a[contains(text(),'AUI - 2')]");
  }
}
