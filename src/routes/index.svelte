<script lang="ts">
  import {} from "$app/navigation";
</script>

<div class="flex flex-col min-h-screen h-screen min-w-[400px] relative">
  <header class="flex items-center justify-between h-[60px] py-[6px] px-[15px] text-sm">
    <div class="flex items-center">
      <a href="#about" class="link">About</a>
      <a href="#atore" class="link">Store</a>
    </div>
    <div class="flex items-center">
      <a href="#gmail" class="link">Gmail</a>
      <a href="#images" class="link">Images</a>
      <a href="#sign-in" class="product">
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"
          />
        </svg>
      </a>
      <a href="#sign-in" class="button">Sign In</a>
    </div>
  </header>

  <div class="flex flex-col items-center mx-auto logo">
    <div class="max-h-24 relative mt-auto">
      <img
        class="mt-auto h-full"
        alt="Google"
        height="92"
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        width="272"
      />
    </div>
  </div>

  <div class="main">
    <form
      class="w-full mx-auto flex flex-col items-center justify-center max-w-[584px] h-[160px] px-6"
      action="/search"
      method="get"
    >
      <div
        class="flex items-center w-full border p-3 rounded-full shadow-[#9aa0a6] hover:shadow-md focus:shadow-md focus-within:shadow-md"
      >
        <span>
          <svg fill="#9aa0a6" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            ><path
              d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
            /></svg
          >
        </span>
        <input class="flex-1 outline-none mx-2 text-base" type="text" name="search" id="search" />
        <span>
          <svg width="24" height="24" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
            ><path
              fill="#4285f4"
              d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
            /><path fill="#34a853" d="m11 18.08h2v3.92h-2z" /><path
              fill="#fbbc05"
              d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
            /><path
              fill="#ea4335"
              d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
            /></svg
          >
        </span>
      </div>
      <div class="flex justify-center items-center w-full mt-9 space-x-2 text-sm text-[#202124]">
        <button
          type="submit"
          class="flex items-center justify-center min-w-[150px] h-9 bg-[#f8f9fa] border border-transparent px-4 rounded-sm hover:shadow-md hover:border-[#dadce0]"
          >Search with google</button
        >
        <button
          type="submit"
          class="flex items-center justify-center min-w-[150px] h-9 bg-[#f8f9fa] border border-transparent px-4 rounded-sm hover:shadow-md hover:border-[#dadce0]"
          >I&#39;m lucky</button
        >
      </div>
    </form>
  </div>
  <div class="flex-1" />
  <footer class="bg-[#f2f2f2] text-[#70757a]">
    <div class="border-b border-[#dadce0] py-3 px-8">Colombia</div>
    <div class="flex flex-col md:flex-row items-center justify-center px-4">
      <div class="flex flex-wrap w-full items-center justify-center md:justify-start md:w-3/5 md:flex-nowrap">
        <a href="#a" class="p-3">About Google</a>
        <a href="#a" class="p-3">Advertising</a>
        <a href="#a" class="p-3">Business</a>
        <a href="#a" class="p-3">How Search Works</a>
      </div>
      <div class="flex flex-wrap w-full items-center justify-center md:w-2/5 md:justify-end">
        <a href="#a" class="p-3">Privacy</a>
        <a href="#a" class="p-3">Conditions</a>
        <a href="#a" class="p-3">Preferences</a>
      </div>
    </div>
  </footer>
</div>
