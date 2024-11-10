<script lang="ts">
    import type { HTMLButtonAttributes } from 'svelte/elements';
    
    interface Props extends HTMLButtonAttributes {
        text : string;
    }

    let { text, ...rest } : Props = $props()
</script>

<button {...rest}>
    {text}
</button>

<style>
    button {
        background-color: #56b356;
        border: none;
        color: whitesmoke;
        font-size: large;
        width: 5rem;
        height: 2.5rem;
    }
</style>