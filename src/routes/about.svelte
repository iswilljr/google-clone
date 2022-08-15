<script context="module">
  import { browser, dev } from "$app/env";
  export const hydrate = dev;
  export const router = browser;
  export const prerender = true;
</script>

<svelte:head>
  <title>About</title>
  <meta name="description" content="About this app" />
</svelte:head>

<p>aksdm</p>
