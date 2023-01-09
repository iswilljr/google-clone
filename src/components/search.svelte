<script lang="ts">
  import MicIcon from "./icons/mic.svelte";
  import SearchIcon from "./icons/search.svelte";
  export let active = false;
  export let searchButtonRight = false;
  export let quitButton = false;
  export let className = "";
  export let value = "";

  function onHandleClick() {
    value = "";
  }
</script>

<div
  class="flex w-full items-center rounded-full border p-3 shadow-[#9aa0a6] focus-within:shadow-md hover:shadow-md {active
    ? 'shadow-md'
    : ''} focus:shadow-md dark:border-[#5f6368] dark:shadow-[#171717] dark:hover:border-transparent {active
    ? 'dark:border-transparent'
    : ''} dark:hover:bg-[#303134] {active ? 'dark:bg-[#303134]' : ''} {className}"
>
  {#if !searchButtonRight}
    <span>
      <button type="submit" class="flex items-center justify-center" aria-label="search">
        <SearchIcon />
      </button>
    </span>
  {/if}

  <label hidden for="query">Query</label>
  <input
    spellcheck="false"
    autocomplete="off"
    autocapitalize="false"
    {value}
    class="mx-2 flex-1 border-0 bg-transparent text-base outline-none dark:text-white"
    type="text"
    name="q"
    id="query"
  />
  {#if quitButton}
    <button
      type="button"
      on:click={onHandleClick}
      class="cursor-pointer border-r border-black pr-3  dark:border-[#5f6368]"
      ><svg
        fill="#9aa0a6"
        width="24"
        height="24"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        ><path
          d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
        /></svg
      ></button
    >
  {/if}
  <span class={quitButton ? "ml-3" : ""}><MicIcon /></span>
  {#if searchButtonRight}
    <span class="ml-5">
      <button type="submit" class="flex items-center justify-center" aria-label="search">
        <SearchIcon />
      </button>
    </span>
  {/if}
</div>
