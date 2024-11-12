<script>
	let { data } = $props()

	import Header from './header.svelte';
	import Footer from './footer.svelte';

	// import { Jumper } from 'svelte-loading-spinners';
	// import { navigating } from '$app/stores'
	// import { resolveRoute } from '$app/paths';

	// import 'open-props/style'
	// import 'open-props/normalize'
	// import 'open-props/buttons'

	import '../app.scss'
	import '../app.css'

	import { onMount } from 'svelte'

	onMount(() => {
		import('$lib/uikit.min.js')
		import('$lib/uikit-icons.js')

		const el = document.getElementById("main")
		el.classList.add("visible")
	})
</script>

<div class="layout" id="main">
	<Header data={data} />
		<main>
			<slot />
		</main>
	<Footer />
</div>

<style>
	div#main {
		opacity: 0;
		transition: opacity 2s;
	}
</style>
