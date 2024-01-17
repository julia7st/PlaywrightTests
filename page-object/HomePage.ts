import { expect, type Locator, type Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly getDoNotConsentBtn: Locator;
  readonly getLoginBtn: Locator;
  readonly getSignUpBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getDoNotConsentBtn = page.locator(
      "xpath=//p[contains(text(),'Do not consent')]"
    );
    this.getLoginBtn = page.locator("xpath=//a[contains(text(),'Log in')]");
    this.getSignUpBtn = page.locator("xpath=//a[contains(text(),'Sign up')]");
  }

  async goto() {
    await this.page.goto("https://letcode.in/");
  }
}
