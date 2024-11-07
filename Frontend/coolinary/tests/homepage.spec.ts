import test, { expect } from '@playwright/test';

test('has headers', async ({ page }) => {
	await page.goto('http://localhost:5173/');

	await expect(page.getByRole('heading', { name: 'COOLINARY', level: 1 })).toHaveText('COOLINARY');
	await expect(page.getByRole('heading', { name: /Welcome to Coolinary/, level: 2 })).toBeVisible();
});
