<script lang="ts">
  import { enhance } from "../lib/form";
  import iso from "iso-3166-1";
  import MicIcon from "../components/icons/mic.svelte";
  import SearchIcon from "../components/icons/search.svelte";
  import ProductsIcon from "../components/icons/products.svelte";
  import SwitchIcon from "../components/icons/Switch.svelte";
</script>

<div class="relative flex h-screen min-h-screen flex-col">
  <header class="flex h-[60px] items-center justify-between py-[6px] px-[15px] text-sm">
    <div class="flex items-center">
      <SwitchIcon />
    </div>
    <div class="flex items-center">
      <a href="#gmail" class="link">Gmail</a>
      <a href="#images" class="link">Images</a>
      <a href="#products" class="product">
        <ProductsIcon />
      </a>
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
      use:enhance
    >
      <div
        class="flex w-full items-center rounded-full border p-3 shadow-[#9aa0a6] focus-within:shadow-md hover:shadow-md focus:shadow-md dark:border-[#5f6368] dark:shadow-[#171717] dark:hover:border-transparent dark:hover:bg-[#303134]"
      >
        <span>
          <button type="submit" class="flex items-center justify-center">
            <SearchIcon />
          </button>
        </span>
        <input
          spellcheck="false"
          autocomplete="off"
          autocapitalize="false"
          class="mx-2 flex-1 border-0 bg-transparent text-base outline-none dark:text-white"
          type="text"
          name="q"
          id="query"
        />
        <span><MicIcon /></span>
      </div>
      <div class="mt-9 flex w-full items-center justify-center space-x-2 text-sm text-[#202124] dark:text-white">
        <button type="submit" class="form-button">Search with google</button>
        <button type="submit" class="form-button">I&#39;m lucky</button>
      </div>
    </form>
  </div>

  <div class="flex flex-1 flex-col justify-end">
    <footer class="bg-[#f2f2f2] text-sm text-[#70757a] dark:bg-[#171717] dark:text-[#9aa0a6]">
      <div class="min-h-[45px] border-b border-[#dadce0] py-3 px-8 dark:border-[#3c4043]">
        {typeof navigator !== "undefined"
          ? iso.whereAlpha2(navigator.language.split("-")[1])?.country ?? navigator.language
          : ""}
      </div>
      <div class="flex flex-col items-center justify-center px-4 md:flex-row">
        <div class="flex w-full flex-wrap items-center justify-center md:w-3/5 md:flex-nowrap md:justify-start">
          <a href="#a" class="p-3">About</a>
          <a href="#a" class="p-3">Advertising</a>
          <a href="#a" class="p-3">Business</a>
          <a href="#a" class="p-3">How Search Works</a>
        </div>
        <div class="flex w-full flex-wrap items-center justify-center md:w-2/5 md:justify-end">
          <a href="#a" class="p-3">Privacy</a>
          <a href="#a" class="p-3">Conditions</a>
          <a href="#a" class="p-3">Preferences</a>
        </div>
      </div>
    </footer>
  </div>
</div>
