import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

// 1. Pata lagao kaunsa environment hai (qa, sit, prod)
const environment = process.env.ENV || 'qa';

// 2. Path banao (Ye variable pehle define hona chahiye!)
// Hum 'process.cwd()' use kar rahe hain jo sabse safe tareeka hai root folder lene ka
const envPath = path.resolve(process.cwd(), `.env.${environment}`);

// 3. File Load karo
console.log('--------------------------------------------------');
console.log(`🌍 Environment: ${environment}`);
console.log(`📂 Loading .env from: ${envPath}`);

const result = dotenv.config({ path: envPath });

// 4. Check karo load hua ya nahi
if (result.error) {
  console.log('❌ Error: .env file nahi mili! Path check karo.');
} else {
  console.log('✅ File mil gayi!');
  console.log(`🔗 BASE_URL Value: ${process.env.BASE_URL}`); // Yahan asli value dikhni chahiye
}
console.log('--------------------------------------------------');

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['line'],
    ['html'],
    ['allure-playwright']
  ],
  use: {
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});