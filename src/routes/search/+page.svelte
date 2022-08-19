<script lang="ts">
  import type { PageData } from "./$types";
  import type { SearchResults } from "src/types/search-response";

  import Search from "../../components/search.svelte";
  import ProductsIcon from "../../components/icons/products.svelte";
  import SettingsIcon from "../../components/icons/settings.svelte";
  import UserIcon from "../../components/icons/user.svelte";
  import Categories from "../../components/categories.svelte";
  import SearchImage from "../../components/search-img.svelte";

  export let data: PageData;
  const results = data.results as SearchResults;
</script>

<div class="w-full p-4 md:hidden">
  <div class="mb-3 flex items-center justify-between">
    <div class="">
      <svg style="fill:#8a8a8a;width:24px;height:24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
        ><path d="M0 0h24v24H0z" fill="none" /><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" /></svg
      >
    </div>
    <SearchImage />
    <div class="">
      <UserIcon />
    </div>
  </div>
  <form action="/search" method="get">
    <Search value={data.query} active />
  </form>
  <Categories />
</div>

<div class="hidden min-w-[1024px] items-center justify-between px-10 py-4 md:flex">
  <div class="flex flex-1 items-center">
    <SearchImage />
    <form action="/search" method="get">
      <Search value={data.query} active searchButtonRight quitButton className="ml-10 w-[540px]" />
    </form>
  </div>
  <div class="flex items-center">
    <a href="#products" class="product mx-0">
      <SettingsIcon />
    </a>
    <a href="#products" class="product mx-0">
      <ProductsIcon />
    </a>
    <div class="flex h-10 w-10 items-center justify-center">
      <UserIcon />
    </div>
  </div>
</div>

<div class="hidden px-10 md:block lg:px-44">
  <Categories />
</div>

<div class="mt-2 px-4 text-xs text-black dark:text-[#bdc1c6] md:block md:px-10 lg:px-44">
  About {results?.searchInformation?.formattedTotalResults || 0} results ({results?.searchInformation
    ?.formattedSearchTime || 0} seconds)
</div>

<div class="px-4 text-xs md:block md:px-10 lg:px-44" id="search">
  {#each results?.items || [] as result}
    <div class="group mt-6 md:max-w-[600px]">
      <a class="space-y-1" href={result.link} alt={result.title}>
        <div class="truncate text-black dark:text-[#bdc1c6]">{result.link}</div>
        <div class="text-lg text-[#1a0dab] group-hover:underline dark:text-[#8ab4f8]">{result.title}</div>
        <div class="text-[#4d5156] dark:text-[#bdc1c6]">{result.snippet}</div>
      </a>
    </div>
  {/each}
</div>

<div class="my-5 mx-4 flex items-center justify-center space-x-4 md:mx-10 md:max-w-[600px] lg:mx-44">
  {#if results?.queries?.previousPage}
    <div class="flex justify-center">
      <a
        sveltekit:reload
        href="/search?q={data.query}&start={results.queries.previousPage[0]?.startIndex ?? 0}"
        class="text-lg text-[#1a0dab] dark:text-[#8ab4f8]"
      >
        Previous
      </a>
    </div>
  {/if}
  {#if results?.queries?.nextPage}
    <div class="flex justify-center">
      <a
        sveltekit:reload
        href="/search?q={data.query}&start={results.queries.nextPage[0]?.startIndex ?? 0}"
        class="text-lg text-[#1a0dab] dark:text-[#8ab4f8]"
      >
        Load more
      </a>
    </div>
  {/if}
</div>
