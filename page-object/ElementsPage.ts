import { expect, type Locator, type Page } from "@playwright/test";

export class ElementsPage {
  readonly page: Page;
  readonly getSearchBtn: Locator;
  readonly getUsernameField: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getSearchBtn = page.locator("xpath=//button[@id='search']");
    this.getUsernameField = page.locator("xpath=//input[@name='username']");
  }
}
