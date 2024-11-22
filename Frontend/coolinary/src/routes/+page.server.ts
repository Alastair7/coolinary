import { AUTH0_CLIENTID, AUTH0_DOMAIN } from '$env/static/private';
export function load() {
	return {
		authClientId: AUTH0_CLIENTID,
		authDomain: AUTH0_DOMAIN
	};
}
