<script lang="ts">
  import { search } from "$lib/form";
  import iso from "iso-3166-1";
  import ProductsIcon from "../components/icons/products.svelte";
  import SwitchIcon from "../components/icons/Switch.svelte";
  import Search from "../components/search.svelte";
</script>

<svelte:head>
  <meta name="description" content="A Google Clone made with Svelte Kit" />
</svelte:head>

<div class="relative flex h-screen min-h-screen flex-col">
  <header class="flex h-[60px] items-center justify-between py-[6px] px-[15px] text-sm">
    <div class="flex items-center">
      <SwitchIcon />
    </div>
    <div class="flex items-center">
      <button class="link">Gmail</button>
      <button class="link">Images</button>
      <button class="product" aria-label="producs">
        <ProductsIcon />
      </button>
    </div>
  </header>

  <div class="logo mx-auto flex flex-col items-center">
    <div class="relative mt-auto max-h-24">
      <img class="mt-auto h-full dark:hidden" alt="Google" height="92" src="/googlelogo.png" width="272" />
      <img class="mt-auto hidden h-full dark:block" alt="Google" height="92" src="/googlelogo_dark.png" width="272" />
    </div>
  </div>

  <div class="main">
    <form
      class="mx-auto flex h-[160px] w-full max-w-[584px] flex-col items-center justify-center px-6"
      action="/search"
      method="get"
      use:search
    >
      <Search />
      <div class="mt-9 flex w-full items-center justify-center space-x-2 text-sm text-[#202124] dark:text-white">
        <button type="submit" class="form-button">Search with google</button>
        <button type="submit" class="form-button">I&#39;m lucky</button>
      </div>
    </form>
  </div>

  <div class="flex flex-1 flex-col justify-end">
    <footer class="bg-[#f2f2f2] text-sm text-[#757575] dark:bg-[#171717] dark:text-[#9aa0a6]">
      <div class="min-h-[45px] border-b border-[#dadce0] py-3 px-8 dark:border-[#3c4043]">
        {typeof navigator !== "undefined"
          ? iso.whereAlpha2(navigator.language.split("-")[1])?.country ?? navigator.language
          : ""}
      </div>
      <div class="flex flex-col items-center justify-center px-4 md:flex-row">
        <div class="flex w-full flex-wrap items-center justify-center md:w-3/5 md:flex-nowrap md:justify-start">
          <button class="p-3">About</button>
          <button class="p-3">Advertising</button>
          <button class="p-3">Business</button>
          <button class="p-3">How Search Works</button>
        </div>
        <div class="flex w-full flex-wrap items-center justify-center md:w-2/5 md:justify-end">
          <button class="p-3">Privacy</button>
          <button class="p-3">Conditions</button>
          <button class="p-3">Preferences</button>
        </div>
      </div>
    </footer>
  </div>
</div>
