<script lang="ts">
	import { Button } from "$lib/components";
</script>

<header>
    <h1>COOLINARY</h1>
    <h2>Welcome to Coolinary a place where you can share your recipees</h2>
</header>
<div class="buttons-wrapper">
    <Button text='Login' />
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