import { Auth0Client, createAuth0Client } from '@auth0/auth0-spa-js';

let auth0Client: Auth0Client;

export const getAuth0Client = async () => {
	if (!auth0Client) {
		auth0Client = await createAuth0Client({
			// TODO: Use .env variables to get this values
			domain: 'AUTH0 DOMAIN',
			clientId: 'AUTH0 CLIENTID'
		});
	}

	return auth0Client;
};
