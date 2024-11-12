<script>
	let { data } = $props()

	import * as config from '$lib/site-config';
	// import { base } from '$app/paths';
	import { page } from '$app/stores';
	import MediaQuery from "$lib/components/mediaQuery.svelte";
	import { House, Share2, Menu, Sun } from 'lucide-svelte';

	/*
		 onclick PreventDefault()
		==========================================
	*/
	function preventDefault(fn) {
		return function (event) {
			event.preventDefault();
			if (fn) {
				fn.call(this, event);
			}
		};
	}

	const isDocsPage = $page.route.id.includes('/docs/')
	
	let sections = [
		"Gallery",
		"Youtube",
		"Specs",
		"Common Features",
		"Additional Bones",
		"Change Log",
	]

	const base = ""
	// const base = "https://miica2.github.io"

	import { onMount } from 'svelte'

	onMount(() => {
		/*
		//		BUILD DOCS MENU
		*/
		// data.docs.forEach(doc_metadata => {
		// 	const docs_ul = document.getElementById("docs-ul")
		// 	const li = document.createElement('li');
		// 	const a = document.createElement('a');
		// 	a.href = '/docs/unreal-characters/' + doc_metadata.doc_slug;
		// 	a.textContent = doc_metadata.title;
		// 	li.appendChild(a);
		// 	docs_ul.appendChild(li);
		// 	// console.log(doc_metadata)
		// });
	})
</script>

{#snippet HouseIcon()}
	<li><a href="/"><House  style="min-width:1rem" /></a></li>
{/snippet}

{#snippet DocsMenuIcon()}
	<li><a href="#offcanvas-usage" uk-toggle><Menu  style="min-width:1rem" /></a></li>
{/snippet}

<div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
	<nav class="uk-navbar-container">
		<div class="uk-container">
			<div uk-navbar>
				<div class="uk-navbar-left">
						<MediaQuery query="(min-width: 801px)" let:matches> <!-- more than 800px Desktop -->
							{#if matches}
								<a href="/" class="text-logo uk-navbar-item uk-logo" aria-label="Back to Home">{config.title}</a>
							{/if}
						</MediaQuery>
						<ul class="uk-navbar-nav">

							<MediaQuery query="(min-width: 801px) and (max-width: 1100px)" let:matches> <!-- between 801px and 1100px Tablet -->
								{#if matches && isDocsPage}
									<!-- {@render DocsMenuIcon()} -->
								{/if}
							</MediaQuery>

							<MediaQuery query="(max-width: 800px)" let:matches> <!-- less than 800px Mobile -->
								{#if matches}
									{#if isDocsPage}
										<!-- {@render DocsMenuIcon()} -->
									{/if}
									{@render HouseIcon()}
								{/if}
							</MediaQuery>

						<li>
							<a href="/" onclick={preventDefault()}>Characters <span uk-navbar-parent-icon></span></a>
							<div class="uk-navbar-dropdown">
								<ul class="uk-nav uk-navbar-dropdown-nav">
									{#each Object.entries(config.characters_menu) as [character_name, character_slug]}
										<li><a href="/characters/{character_slug}">{character_name}</a></li>
									{/each}
									<!-- <li><a href="/">ShaoLei & Llynx</a></li>
									<li><a href="/">Aren</a></li>
									<li><a href="/">Lia</a></li>
									<li><a href="/characters/shenya">Shenya</a></li>
									<li><a href="/characters/meryl">Meryl</a></li> -->
									<!-- <li class="uk-nav-divider"></li> -->
								</ul>
							</div>
						</li>

						<li>
							<a href="/" onclick={preventDefault()}>Docs<span uk-navbar-parent-icon></span></a>
							<div class="uk-navbar-dropdown">
								<ul class="uk-nav uk-navbar-dropdown-nav" id="docs-ul">
									
									<li class="uk-nav-header px-4">Characters Documentation</li>
									{#each data.docs as doc_metadata, index}
										<li><a href="{base}/docs/unreal-characters/{doc_metadata.doc_slug}">{doc_metadata.title}</a></li>
									{/each}

									<li class="uk-nav-header px-4">Tools Documentation</li>
									{#each Object.entries(config.tools_docs_menu) as [doc_title, doc_slug]}
										<li><a href="#">{doc_title} (Under Development)</a></li>
									{/each}

								</ul>
							</div>
						</li>

						<!-- <li>
							<a href="/" onclick={preventDefault(()=>{})}>Blogs<span uk-navbar-parent-icon></span></a>
						</li> -->

						<li>
							<a href="/" onclick={preventDefault()}>Tools <span uk-navbar-parent-icon></span></a>
							<div class="uk-navbar-dropdown">
								<ul class="uk-nav uk-navbar-dropdown-nav">

									<li class="uk-nav-header px-4">Blender</li>
										{#each Object.entries(config.tools_menu) as [tool_title, tool_slug]}
											<li><a href="{base}{tool_slug}">{tool_title}</a></li>
										{/each}

								</ul>
							</div>
						</li>						

					</ul>
				</div>
				<div class="uk-navbar-right">
					<ul class="uk-navbar-nav">
						<!-- <li class="" style="opacity:.3"><a href="#"><Sun size="1.3rem" color="var(--logo-color)" /></a></li> -->
						<li>
							<a href="/">
								<MediaQuery query="(min-width: 600px)" let:matches>
									{#if matches}
										<Share2 size="1rem" /> Explore<span uk-navbar-parent-icon></span>
									{:else} 
										<Share2 />
									{/if}
								</MediaQuery>
							</a>
							<div class="uk-navbar-dropdown">
								<ul class="uk-nav uk-navbar-dropdown-nav">
									<li><a href="https://www.artstation.com/miica">Artstation</a></li>
									<li><a href="https://www.youtube.com/@miica37">Youtube</a></li>
									<li><a href="https://github.com/miica37/">Github</a></li>
									<li class="uk-nav-divider"></li>
									<li class="uk-nav-header px-4">Marketplaces</li>
									<li><a href="https://www.fab.com/sellers/Rabbit%20Heart">FAB</a></li>
									<li><a href="https://www.unrealengine.com/marketplace/en-US/profile/Rabbit+Heart">Unreal Marketplace</a></li>
									<li><a href="https://blendermarket.com/creators/miica">Blender Market</a></li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
	{#if $page.route.id.includes('/characters/')}
	<nav id="second_nav">
		<ul class="second_nav_ul">
			{#each sections as section}
				{@const section_lowercase = section.toLowerCase().replace(' ', '-')}
				{@const section_uppercase = section.toUpperCase().replace(' ', '_')}
				<li><a href="#{section_lowercase}" id="{section_uppercase}_LINK" uk-scroll>{section}</a></li>
			{/each}
		</ul>
	</nav>
	{/if}
</div>

<style>
	.text-logo {
		font-family: Apalu; 
		font-size: clamp(2.4rem, 1.748rem + 1.391vw, 3rem);
		color: var(--logo-color);
		padding-inline: 2rem;
	}

	.text-logo:hover {
		color: var(--logo-color);
	}

	nav.uk-navbar-container {
		/* background-color: rgb(255 255 255 / .2); */
		background-color: rgb(255 255 255 / .2);
		transition: all 1s;

		&:hover {
			background-color: rgb(255 255 255 / .8);
		}

		@media (width <= 600px) {
			background-color: rgb(255 255 255 / .8);
		}
	}

	nav#second_nav {
		/* background-color: #292d32; */
		display: flex;
		justify-content: center;
		opacity: 0;
		transition: opacity 1s;
	}

	nav#second_nav:hover {
		opacity: 1 !important;
	}

	nav#second_nav > ul,
	.second_nav_ul {
		/* background-color: red; */
		margin:0;
		display: flex;
		flex-direction: row;
		padding-left: 0;
	}

	nav#second_nav > ul > li,
	.second_nav_li {
		/* background-color: blue; */
		margin-inline: clamp(0rem, -0.829rem + 3.536vw, 2rem);
		list-style-type: none;
		padding-left: 0;
		margin-bottom: 0;
	}

	nav#second_nav > ul > li > a,
	.second_nav_a {
		/* background-color: green; */
		color: var(--logo-color);
		font-size: clamp(0.75rem, 0.571rem + 0.476vw, 1rem); /* minmax: 600, 1440 */
		font-weight: 700;
		/* background-color: transparent; */
		backdrop-filter: blur(2px);
		box-sizing: border-box;
		display: block;
		padding: 0.5rem;
		border-radius: .5rem;
	}
</style>
