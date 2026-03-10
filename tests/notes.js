// 1️⃣ Check URL
await expect(page).toHaveURL(/dashboard/);

// ✔ Verifies page changed correctly

// 2️⃣ Check Text Is Visible
await expect(page.getByText('Dashboard')).toBeVisible();

// ✔ Verifies element exists on page

// 3️⃣ Check Title
await expect(page).toHaveTitle(/OrangeHRM/);
// 4️⃣ Check Input Value
await expect(page.locator('#username')).toHaveValue('Admin');
// 5️⃣ Check Element Count
await expect(page.locator('li')).toHaveCount(5);

// 1️⃣ Button
await page.getByRole('button', { name: 'Login' }).click();

// ✔ Finds button with text "Login"

// 2️⃣ Link
await page.getByRole('link', { name: 'Forgot your password?' }).click();

// ✔ Works for <a> elements

// 3️⃣ Textbox (Input Field)
await page.getByRole('textbox', { name: 'Username' }).fill('Admin');

// ✔ Works if input has associated label

// 4️⃣ Heading
await expect(
  page.getByRole('heading', { name: 'Dashboard' })
).toBeVisible();

// ✔ Works for <h1>, <h2>, etc.

{/* 5️⃣ Checkbox */}
await page.getByRole('checkbox', { name: 'Remember Me' }).check();
/////////////////////////////////////////////////////////////

//Built In Locators.
/*
page.getByAltText() -> to locate an element, usually image, by it's text alternative;
page.getByPlaceholder() --> to locate an inout by placeholder.
page.getByRole() --> to locate by explicit and implicit accessibility attributes.
page.getByText()--> to locate by text content.
page.getBylabel() --> to locate a form control by associated label's text.
page.getBytitle() --> to locate an element by it's title attribute.
page.getByTestId() --> to locate an element based on it's data-testId attribute(other attributes can be count) 
*/

////////////////////////////////////////////////////////////////////////////////////////////
// 1️⃣ Assertions
await expect(page.locator('#success')).toBeVisible();
await expect(page).toHaveURL('https://example.com/dashboard');
// 2️⃣ Hooks

// Used to run code before/after tests:

test.beforeEach(async ({ page }) => {
  await page.goto('https://example.com');
});
// 3️⃣ Handling Forms Example
test('login test', async ({ page }) => {
  await page.goto('https://example.com/login');

  await page.fill('#email', 'admin@test.com');
  await page.fill('#password', '123456');
  await page.click('button[type="submit"]');

  await expect(page).toHaveURL(/dashboard/);
});
// 4️⃣ Handling Dropdown
await page.selectOption('#country', 'Pakistan');
// 5️⃣ Handling Alerts
page.on('dialog', async dialog => {
  await dialog.accept();
});
// 6️⃣ Handling Multiple Pages (Tabs)
const [newPage] = await Promise.all([
  context.waitForEvent('page'),
  page.click('#openTab'),
]);
//////////////////////////////////////////////////////////////////////////



// 1️⃣ Page Object Model (POM) 🔥

// Instead of writing everything in test file:

loginPage.js
export class LoginPage {
  constructor(page) {
    this.page = page;
    this.email = page.locator('#email');
    this.password = page.locator('#password');
    this.loginBtn = page.locator('#login');
  }

  async login(email, password) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.loginBtn.click();
  }
}
// test file
import { LoginPage } from './loginPage';

test('login test', async ({ page }) => {
  const login = new LoginPage(page);
  await login.login('admin@test.com', '123456');
});

// This makes framework clean & professional.

// 2️⃣ Running Tests in Parallel

// Playwright runs tests parallel by default.

// In config:

workers: 4
// 3️⃣ Cross Browser Testing

// In playwright.config.js:

projects: [
  { name: 'Chromium', use: { browserName: 'chromium' } },
  { name: 'Firefox', use: { browserName: 'firefox' } },
]
// 4️⃣ API Testing
test('API test', async ({ request }) => {
  const response = await request.get('https://api.example.com/users');
  expect(response.status()).toBe(200);
});
// 5️⃣ Handling Waits Properly

// Playwright auto-waits 👌
// But sometimes:

await page.waitForSelector('#dashboard');

Avoid:

// waitForTimeout(5000) ❌
// 6️⃣ Environment Variables

// Use .env for:

// URLs

// Credentials

// 🟣 PHASE 4 – Real Framework Structure

// Professional folder structure:

tests/
pages/
utils/
fixtures/
playwright.config.js
//////////////////////////////////////////////////////////////////////////////////


// 🔹 toHaveText() (Assertion)
await expect(locator).toHaveText('Login Successful');

textContent() (Method)
// const text = await locator.textContent();

const text = await locator.textContent();
expect(text).toBe('Login Successful');

// 👉 toHaveText() = validation + auto wait
// 👉 textContent() = just fetch data




/////////////////////////////////////////////////////////////////////////////
// Callback → “Call me when done”

// Promise → “I promise I’ll finish”

// async/await → “Wait until done”

// Callback Hell → “Too many calls inside calls 😵


// CALLBACK FUNCTION: 
// A callback function is a function that you pass into another function, and it runs later.

// 👉 “Call me back when you finish.”

function greet(name, callback) {
  console.log("Hi " + name);
  callback();
}

function sayBye() {
  console.log("Bye!");
}

greet("Ali", sayBye);

//sayBye is the callback

// It runs after greet finishes


function mainFunction(callback) {
  console.log("Step 1");
  callback(); // ← this is where it runs
  console.log("Step 2");
}

function myCallback() {
  console.log("I am callback");
}

mainFunction(myCallback);
//////////////////////////////////////////////////////////////////////////////

/*A Promise is like a delivery order.

It says:

✔️ I will complete (resolve)

❌ Or I will fail (reject)*/

let myPromise = new Promise(function (resolve, reject) {
  let success = true;

  if (success) {
    resolve("Task completed!");
  } else {
    reject("Task failed!");
  }
});

myPromise
  .then(result => console.log(result))
  .catch(error => console.log(error));

//////////////////////////////////////////////////////
  function loginUser(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "Admin" && password === "admin123") {
        resolve("Login Successful");
      } else {
        reject("Invalid Credentials");
      }
    }, 2000);
  });
}

loginUser("Admin", "admin123")
  .then(result => console.log(result))
  .catch(error => console.log(error));
  ///////////////////////////////////////////////////////


  // async/await is a cleaner way to write promises.
// It makes asynchronous code look like normal synchronous code.

function loginUser(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "Admin" && password === "admin123") {
        resolve("Login Successful");
      } else {
        reject("Invalid Credentials");
      }
    }, 2000);
  });
}

async function testLogin() {
  try {
    let result = await loginUser("Admin", "admin123");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

testLogin();

/*CALLBACK HELL
When callbacks are nested inside callbacks inside callbacks 😵
Code becomes messy and hard to read.*/

setTimeout(() => {
  console.log("Step 1");

  setTimeout(() => {
    console.log("Step 2");

    setTimeout(() => {
      console.log("Step 3");
    }, 1000);

  }, 1000);

}, 1000);


// Github command for pushing code 
// git init
// git remote add origin https://github.com/username/repo.git
// git add .
// git commit -m "first commit"
// git branch -M main
// git push -u origin main