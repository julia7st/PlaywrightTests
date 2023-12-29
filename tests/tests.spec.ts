import { test, expect } from "@playwright/test";
import { HomePage } from "../page-object/HomePage";
import { WorkSpacePage } from "../page-object/WorkSpacePage";
import { NavBar } from "../page-object/NavBar";
import { ButtonPage } from "../page-object/ButtonPage";
import { InputPage } from "../page-object/InputPage";
import { ElementsPage } from "../page-object/ElementsPage";

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
