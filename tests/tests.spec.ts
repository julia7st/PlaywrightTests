import { test, expect } from "@playwright/test";
import { HomePage } from "../page-object/HomePage";
import { WorkSpacePage } from "../page-object/WorkSpacePage";
import { NavBar } from "../page-object/NavBar";
import { ButtonPage } from "../page-object/ButtonPage";
import { InputPage } from "../page-object/InputPage";
import { ElementsPage } from "../page-object/ElementsPage";
import { RadioPage } from "../page-object/RadioPage";
import { DropPage } from "../page-object/DropPage";
import { LoginPage } from "../page-object/LoginPage";
import { SignUpPage } from "../page-object/SignUpPage";
import { AlertsPage } from "../page-object/AlertsPage";

//Test1
test("Fill in the FullName field with valid data", async ({ page }) => {
  const homePage = new HomePage(page);
  const navBar = new NavBar(page);
  const workSpacePage = new WorkSpacePage(page);
  const inputPage = new InputPage(page);

  await homePage.goto();
  await homePage.getDoNotConsentBtn.click();
  await navBar.getWorkSpacePage.click();
  await workSpacePage.getInputPage.click();
  expect(page.url()).toBe("https://letcode.in/edit");
  await inputPage.getFullNameField.pressSequentially("Test Tester");
});

//Test2
test("Back to Home page from Button page", async ({ page }) => {
  const homePage = new HomePage(page);
  const workSpacePage = new WorkSpacePage(page);
  const buttonPage = new ButtonPage(page);
  const navBar = new NavBar(page);

  await homePage.goto();
  await homePage.getDoNotConsentBtn.click();
  await navBar.getWorkSpacePage.click();
  await workSpacePage.getButtonPage.click();
  await buttonPage.getHomeBtn.click();
  expect(page.url()).toBe("https://letcode.in/");
});

//Test3
test("Verify the Table page url", async ({ page }) => {
  const homePage = new HomePage(page);
  const workSpacePage = new WorkSpacePage(page);
  const navBar = new NavBar(page);

  await homePage.goto();
  await homePage.getDoNotConsentBtn.click();
  await navBar.getWorkSpacePage.click();
  await workSpacePage.getTablePage.click();
  expect(page.url()).toBe("https://letcode.in/table");
});

//Test4
test("Find the user by using search button", async ({ page }) => {
  const homePage = new HomePage(page);
  const workSpacePage = new WorkSpacePage(page);
  const navBar = new NavBar(page);
  const elementsPage = new ElementsPage(page);

  await homePage.goto();
  await homePage.getDoNotConsentBtn.click();
  await navBar.getWorkSpacePage.click();
  await workSpacePage.getElementsPage.click();
  expect(page.url()).toBe("https://letcode.in/elements");
  await elementsPage.getUsernameField.pressSequentially("test");
  await elementsPage.getSearchBtn.click();
});

//Test5
test("Select the specific element from drop-down list", async ({ page }) => {
  const homePage = new HomePage(page);
  const workSpacePage = new WorkSpacePage(page);
  const navBar = new NavBar(page);

  await homePage.goto();
  await homePage.getDoNotConsentBtn.click();
  await navBar.getWorkSpacePage.click();
  await workSpacePage.getDropDownPage.click();

  const dropdownSelector = "select#fruits";

  await page.selectOption(dropdownSelector, "Apple");
});

//Test1 for HW10
test("Verify if Enter button is in Disabled state", async ({ page }) => {
  const homePage = new HomePage(page);
  const navBar = new NavBar(page);
  const inputPage = new InputPage(page);
  const workSpacePage = new WorkSpacePage(page);

  await homePage.goto();
  await homePage.getDoNotConsentBtn.click();
  await navBar.getWorkSpacePage.click();
  await workSpacePage.getInputPage.click();
  expect(await page.isDisabled("xpath=//input[@id='noEdit']")).toBe(true);
});

//Test2 for HW10
test("Uncheck checkbox on Radio page", async ({ page }) => {
  const homePage = new HomePage(page);
  const navBar = new NavBar(page);
  const radioPage = new RadioPage(page);
  const workSpacePage = new WorkSpacePage(page);

  await homePage.goto();
  await homePage.getDoNotConsentBtn.click();
  await navBar.getWorkSpacePage.click();
  await workSpacePage.getRadioPage.click();

  await page.waitForSelector(
    "input:below(:text('Find if the checkbox is selected'))"
  );
  const checkBox = await page.$(
    "input:below(:text('Find if the checkbox is selected'))"
  );

  if (checkBox) {
    expect(await checkBox.isChecked()).toBe(true);
    await checkBox.uncheck();
  } else {
    throw new Error("An error occured");
  }
});

//Test3 for HW10
test("Verify url for Radio page", async ({ page }) => {
  const homePage = new HomePage(page);
  const workSpacePage = new WorkSpacePage(page);
  const navBar = new NavBar(page);

  await homePage.goto();
  await homePage.getDoNotConsentBtn.click();
  await navBar.getWorkSpacePage.click();
  await workSpacePage.getRadioPage.click();
  expect(page.url()).toBe("https://letcode.in/radio");
});

//Test4 for HW10
test("Verify url for Drop page", async ({ page }) => {
  const homePage = new HomePage(page);
  const workSpacePage = new WorkSpacePage(page);
  const navBar = new NavBar(page);

  await homePage.goto();
  await homePage.getDoNotConsentBtn.click();
  await navBar.getWorkSpacePage.click();
  await workSpacePage.getDropPage.click();
  expect(page.url()).toBe("https://letcode.in/dropable");
});

//Test5 for HW10
test("Navigate to Tutorial page from Radio page", async ({ page }) => {
  const homePage = new HomePage(page);
  const workSpacePage = new WorkSpacePage(page);
  const navBar = new NavBar(page);
  const radioPage = new RadioPage(page);

  await homePage.goto();
  await homePage.getDoNotConsentBtn.click();
  await navBar.getWorkSpacePage.click();
  await workSpacePage.getRadioPage.click();
  await radioPage.getWatchTutorialBtn.click();
  expect(page.url()).toBe("https://letcode.in/video/radio");
});

//Test6 for HW10
test("Verify fields on Log in page", async ({ page }) => {
  const homePage = new HomePage(page);
  const workSpacePage = new WorkSpacePage(page);
  const loginPage = new LoginPage(page);

  await homePage.goto();
  await homePage.getDoNotConsentBtn.click();
  await homePage.getLoginBtn.click();
  await expect(loginPage.getEmailField).toBeVisible;
  await expect(loginPage.getPasswordField).toBeVisible;
  await expect(loginPage.getForgottenPasswordBtn).toBeVisible;
});

//Test7 for HW10
test("Verify fields on Sign up page", async ({ page }) => {
  const homePage = new HomePage(page);
  const workSpacePage = new WorkSpacePage(page);
  const signUpPage = new SignUpPage(page);

  await homePage.goto();
  await homePage.getDoNotConsentBtn.click();
  await homePage.getSignUpBtn.click();
  await expect(signUpPage.getNameField).toBeVisible;
  await expect(signUpPage.getEmailField).toBeVisible;
  await expect(signUpPage.getAgreeField).toBeVisible;
  await expect(signUpPage.getSignUpField).toBeVisible;
});

//Test8 for HW10
test("Perform drag and drop", async ({ page }) => {
  const homePage = new HomePage(page);
  const workSpacePage = new WorkSpacePage(page);
  const navBar = new NavBar(page);
  const dropPage = new DropPage(page);

  await homePage.goto();
  await homePage.getDoNotConsentBtn.click();
  await navBar.getWorkSpacePage.click();
  await workSpacePage.getDropPage.click();
  await expect(dropPage.getWatchTutorialBtn).toBeVisible;

  const src = await page.$("#draggable");
  const trg = await page.$("#droppable");
  if (src && trg) {
    const srcBound = await src.boundingBox();
    const trgBound = await trg.boundingBox();
    if (srcBound && trgBound) {
      await page.mouse.move(
        srcBound.x + srcBound.width / 3,
        srcBound.y + srcBound.height / 2
      );
      await page.mouse.down();
      await page.mouse.move(
        trgBound.x + trgBound.width / 3,
        trgBound.y + trgBound.height / 2
      );
      await page.mouse.down();
    } else {
      throw new Error("An error occured: no element found");
    }
  }
});

//Test1 for HW11
test("Verify the url for Alerts page", async ({ page }) => {
  const homePage = new HomePage(page);
  const workSpacePage = new WorkSpacePage(page);
  const navBar = new NavBar(page);

  await homePage.goto();
  await homePage.getDoNotConsentBtn.click();
  await navBar.getWorkSpacePage.click();
  await workSpacePage.getAlertPage.click();
  expect(page.url()).toBe("https://letcode.in/alert");
});

//Test2 for HW11,
test("Verify buttons on Alerts page", async ({ page }) => {
  const homePage = new HomePage(page);
  const workSpacePage = new WorkSpacePage(page);
  const navBar = new NavBar(page);
  const alertsPage = new AlertsPage(page);

  await homePage.goto();
  await homePage.getDoNotConsentBtn.click();
  await navBar.getWorkSpacePage.click();
  await workSpacePage.getAlertPage.click();
  await expect(alertsPage.getSimpleBtn).toBeVisible;
  await expect(alertsPage.getConfirmBtn).toBeVisible;
  await expect(alertsPage.getPromptBtn).toBeVisible;
  await expect(alertsPage.getModernBtn).toBeVisible;
});

//Test3 for HW11
test("Verify Prompt Alert button ", async ({ page }) => {
  const homePage = new HomePage(page);
  const workSpacePage = new WorkSpacePage(page);
  const navBar = new NavBar(page);
  const alertsPage = new AlertsPage(page);

  await homePage.goto();
  await homePage.getDoNotConsentBtn.click();
  await navBar.getWorkSpacePage.click();
  await workSpacePage.getAlertPage.click();
  const element = await page.$("#prompt");
  page.on("dialog", (dialog) => {
    console.log("Message: " + dialog.message());
    console.log("Default Value:" + dialog.defaultValue());
    console.log("Type: " + dialog.type());
    dialog.accept("Test Data");
  });
  await element?.click();
  expect(alertsPage.getMyName).toBeVisible;
});
