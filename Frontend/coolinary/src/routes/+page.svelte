<script lang="ts">
	import { getAuth0Client } from "$lib/auth/authClient";
	import { Button } from "$lib/components";
	import type { Auth0Client } from "@auth0/auth0-spa-js";
	import { onMount } from "svelte";

    let auth0Client : Auth0Client;
    
    onMount(async () => {
        auth0Client = await getAuth0Client();
    })
    
    const handleLogin = async () => {
        await auth0Client.loginWithRedirect({
            authorizationParams: {
                redirect_uri: 'http://localhost:5173/callback'
            }
        });
    }
</script>

<header>
    <h1>COOLINARY</h1>
    <h2>Welcome to Coolinary a place where you can share your recipees</h2>
</header>
<div class="buttons-wrapper">
    <Button text='Login' onclick={handleLogin} />
</div>

<style>
    header {
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .buttons-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;
    }
    h1 {
        color: #458f45;
    }
    h2 {
        color: #224822
    }
</style>