import { expect, type Locator, type Page } from "@playwright/test";

export class ButtonPage {
  readonly page: Page;
  readonly getHomeBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getHomeBtn = page.locator("xpath=//button[@id='home']");
  }
}
