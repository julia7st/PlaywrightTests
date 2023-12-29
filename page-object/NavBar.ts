import { expect, type Locator, type Page } from "@playwright/test";

export class NavBar {
  readonly page: Page;
  readonly getWorkSpacePage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getWorkSpacePage = page.locator("xpath=//a[@id='testing']");
  }
}
