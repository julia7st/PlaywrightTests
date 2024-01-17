import { expect, type Locator, type Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly getDoNotConsentBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getDoNotConsentBtn = page.locator(
      "xpath=//p[contains(text(),'Do not consent')]"
    );
  }

  async goto() {
    await this.page.goto("https://letcode.in/");
  }
}
