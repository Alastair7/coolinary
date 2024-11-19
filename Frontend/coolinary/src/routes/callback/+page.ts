import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ url }) {
	if (!url) {
		redirect(303, '/');
	}
	const params = url.searchParams;

	// TODO: Call backend token/login/auth endpoint to get access token.

	if (params.get('code') && params.get('state')) {
		return {
			authCallback: true
		};
	}

	return {
		authCallback: false
	};
}
