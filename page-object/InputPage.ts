import { expect, type Locator, type Page } from "@playwright/test";

export class InputPage {
  readonly page: Page;
  readonly getFullNameField: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getFullNameField = page.locator("xpath=//input[@id='fullName']");
  }
}
