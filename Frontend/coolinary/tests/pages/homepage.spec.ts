import { describe, expect, it } from 'vitest';

import { render, screen } from '@testing-library/svelte';

import Page from '../../src/routes/+page.svelte';

describe('Homepage', async () => {
	it('has headers when rendered', () => {
		render(Page);

		const expectedTitle = 'COOLINARY';
		const expectedSubtitle = 'Welcome to Coolinary a place where you can share your recipees';

		const titleHeader = screen.getByRole('heading', { level: 1 });
		const subtitleHeader = screen.getByRole('heading', { level: 2 });

		expect(titleHeader).toHaveTextContent(expectedTitle);
		expect(subtitleHeader).toHaveTextContent(expectedSubtitle);
	});

	it('has login button when rendered', () => {
		render(Page);

		const loginButton = screen.getByRole('button', { name: 'Login' });

		expect(loginButton).toBeVisible();
	});
});
