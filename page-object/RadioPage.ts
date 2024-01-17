import { expect, type Locator, type Page } from "@playwright/test";

export class RadioPage {
  readonly page: Page;
  readonly getWatchTutorialBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getWatchTutorialBtn = page.locator(
      "xpath=//a[contains(text(),'Watch tutorial')]"
    );
  }
}
