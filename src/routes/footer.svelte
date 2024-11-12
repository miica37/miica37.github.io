<script lang="ts">
	import * as config from '$lib/site-config'

  import { ChevronUp } from 'lucide-svelte';
  
	/*
		 onclick PreventDefault()
		==========================================
	*/
	function preventDefault(fn) {
		return function (event) {
			event.preventDefault();
			fn.call(this, event);
		};
	}

  function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
</script>

<footer>
  <div></div>
  <div class="animate-bounce">
    <img class="rabbit-logo" src="/favicon.png" alt="rabbit heart logo">
  </div>
  <!-- <div class="text-sm font-bold "><a href="" uk-tooltip="To Top" uk-totop ></a></div> -->
  <div><a href="" uk-tooltip="To Top" onclick={preventDefault(() => scrollToTop())}><ChevronUp size="2rem" /></a></div>
  <div class="text-lg font-bold ">{new Date().getFullYear()} &copy; {config.title} by <a href="mailto:miicaneo@gmail.com" uk-tooltip="My email - miicaneo@gmail.com">miica</a></div>
  <div class="text-sm font-bold ">♥ Build with <a href="https://kit.svelte.dev/">SvelteKit</a> | <a href="https://getuikit.com/">UIKit</a> ♥</div>
</footer>

<style>
  footer {
    /* background-color: #1c1c1c; */
    padding-block: 5rem;
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .rabbit-logo {
    filter: saturate(0);
    transition: all .5s;

    &:hover {
      filter: saturate(1);
    }
  }
</style>