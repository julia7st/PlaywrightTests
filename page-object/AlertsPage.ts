import { expect, type Locator, type Page } from "@playwright/test";

export class AlertsPage {
  readonly page: Page;
  readonly getSimpleBtn: Locator;
  readonly getConfirmBtn: Locator;
  readonly getPromptBtn: Locator;
  readonly getModernBtn: Locator;
  readonly getMyName: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getSimpleBtn = page.locator("xpath=//button[@id='Simple Alert']");
    this.getConfirmBtn = page.locator("xpath=//button[@id='Confirm Alert']");
    this.getPromptBtn = page.locator("xpath=//button[@id='Prompt Alert']");
    this.getModernBtn = page.locator("xpath=//button[@id='Modern Alert']");
    this.getMyName = page.locator("xpath=//[@id='myName']");
  }
}
