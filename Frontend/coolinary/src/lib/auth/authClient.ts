import { Auth0Client, createAuth0Client } from '@auth0/auth0-spa-js';

let auth0Client: Auth0Client;

export const getAuth0Client = async (clientId: string, domain: string) => {
	if (!auth0Client) {
		auth0Client = await createAuth0Client({
			domain: domain,
			clientId: clientId
		});
	}

	return auth0Client;
};
