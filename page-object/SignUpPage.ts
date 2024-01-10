import { expect, type Locator, type Page } from "@playwright/test";

export class SignUpPage {
  readonly page: Page;
  readonly getNameField: Locator;
  readonly getEmailField: Locator;
  readonly getAgreeField: Locator;
  readonly getSignUpField: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getNameField = page.locator("xpath=//input[@id='name']");
    this.getEmailField = page.locator("xpath=//input[@id='email']");
    this.getAgreeField = page.locator("xpath=//input[@id='agree']");
    this.getSignUpField = page.locator("xpath=//button[text() = 'SIGN UP']");
  }
}
