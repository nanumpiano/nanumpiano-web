const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true
  });
  const context = await browser.newContext({
    viewport: { width: 1600, height: 1200 }
  });
  const page = await context.newPage();
  
  await page.goto('http://127.0.0.1:8088/');
  await page.waitForTimeout(2000);

  // 1. Hero
  await page.screenshot({ path: 'verification/screenshots/01-hero.png' });

  // 2. Step 1
  await page.locator('#step1-title').scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'verification/screenshots/02-step1-preview.png' });

  // 3. Step 2
  await page.locator('#step2-title').scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'verification/screenshots/03-step2-preview.png' });

  // 4. Editor
  await page.locator('#editor-title').scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'verification/screenshots/04-editor-preview.png' });

  // 5. Reapply
  await page.locator('#reapply-title').scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'verification/screenshots/05-reapply-preview.png' });

  // 6. Expansion
  await page.locator('#expansion-title').scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'verification/screenshots/06-expansion.png' });

  await browser.close();
  console.log("Screenshots captured successfully.");
})();
