import { expect, type Locator, type Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly getEmailField: Locator;
  readonly getPasswordField: Locator;
  readonly getLoginBtn: Locator;
  readonly getForgottenPasswordBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getEmailField = page.locator("xpath=//input[@name='email']");
    this.getPasswordField = page.locator("xpath=//input[@name='password']");
    this.getLoginBtn = page.locator("xpath=//button[text()='LOGIN']");
    this.getForgottenPasswordBtn = page.locator(
      "xpath=//button[text()='Forgotten password?')]"
    );
  }
}
