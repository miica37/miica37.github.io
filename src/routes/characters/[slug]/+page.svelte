<script lang="ts">
	let { data } = $props()

	import { onMount } from 'svelte'

	// Markdown (*.md) pages
	import Features from '$pages/characters/common/features.md'
	import Skeleton from '$pages/characters/common/skeleton.md'
	import Helps from '$pages/characters/common/helps.md'

	// Custom Components
	import Youtube from "$lib/components/youtube.svelte"

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

	/*
		 SECOND NAV'S OBSERVER
		==========================================
	*/
	let previous_entry = ''

	const entry_to_ratio = {
		"GALLERY_SECTION": 0,
		"YOUTUBE_SECTION": 0,
		"CHARACTERS_COMMON_SECTION": 0,
		"ADDITIONAL_BONES_SECTION": 0,
		"CHANGE_LOG_SECTION": 0
	}

	const options = {
		threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]
	}

	onMount(() => {
		const observer = new IntersectionObserver(callbackFunction, options)
		observer.observe(document.getElementById("GALLERY_SECTION"))
		observer.observe(document.getElementById("YOUTUBE_SECTION"))
		observer.observe(document.getElementById("SPECS_SECTION"))
		observer.observe(document.getElementById("COMMON_FEATURES_SECTION"))
		observer.observe(document.getElementById("ADDITIONAL_BONES_SECTION"))
		observer.observe(document.getElementById("CHANGE_LOG_SECTION"))

		toggle_specs("DIV_EXTRA_NOTES")
	})

	function callbackFunction (entries) {
		entries.forEach(entry => {
			entry_to_ratio[entry.target.id] = entry.intersectionRatio
		});

		// Get entries with highest ratio
		// https://stackoverflow.com/questions/1069666/sorting-object-property-by-values
		const sorted_entries = Object.fromEntries(Object.entries(entry_to_ratio).sort(([,a],[,b]) => b-a))
		const keys = Object.keys(sorted_entries);
		keys.forEach((entry, index) => {
			const el = document.getElementById(entry.replace("_SECTION", "_LINK"))
			if (el != null){
				if (index === 0) {
					el.style.borderTop = "3px solid #44c0c9";
				}
				else {
					el.style.borderTop = "none";
				}
			}
		})

		// Update second nav
		if (keys[0] != previous_entry) {
			const el = document.getElementById("second_nav")
			el.classList.add("visible")
			setTimeout(function (){ el.classList.remove("visible") }, 2000)
		}
		previous_entry = keys[0]
	}

	/*
		 YOUTUBE VIDEO SECTION
		==========================================
	*/

	let youtube_active_video = 0;
	let youtube_video_html = '';

	function showYoutubeVideo(section_id, youtube_code) {
			youtube_active_video = section_id;
			youtube_video_html = `
				<div class="youtube-iframe-wrap">
					<iframe class="youtube-iframe"
						src="https://www.youtube.com/embed/${youtube_code}"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen>
					</iframe>
				</div>
			`
	}

	/*
		 COMMON FEATURES SECTION
		==========================================
	*/

	let common_features_active_section = 'features';

	/*
		 SPECS'S SECTION
		==========================================
	*/
	const specs_divs = ["DIV_POLYCOUNT",
	                    "DIV_SKELETON",
	                    "DIV_MORPH_TARGETS",
	                    "DIV_CLOTHING",
											"DIV_ANIMATIONS",
											"DIV_TEXTURES",
											"DIV_MATERIALS",
											"DIV_EXTRA_NOTES",
											"DIV_ADDITIONAL_BONES",
											"DIV_CHANGE_LOG"];
	
	function toggle_specs(div) {
		specs_divs.forEach( div_ => {
			const div_el = document.getElementById(div_)
			if ( div_el ) {
				div_el.style.display = "none"
			}
		} )
		const div_el = document.getElementById(div)
		if ( div_el ) {
			div_el.style.display = "block"
		}
	}

</script>

<!-- 
			Show on first loading of page
-->
{( showYoutubeVideo(0, Object.values(data.meta.youtube)[0]) )}

<div class="content-grid">
	
	<div id="GALLERY_SECTION">
		<h1 id="gallery">Documentation of {data.meta.character_name}</h1>
		<hr style="border: 1px solid #44c0c9;">
	</div>

	<div class="breakout" style="position:relative">
		<div uk-lightbox="index:3">
			{#each data.gallery_image_urls as image_url}
					<a class="uk-button uk-button-default" href="{image_url}"></a>
			{/each}
		</div>
		<div style="width:clamp(20rem, 3.425rem + 70.718vw, 60rem);margin:0 auto;">
			<div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow>
				<div class="uk-slideshow-items">
					{#each data.gallery_image_urls as image_url}
						<div>
							<img src="{image_url}" alt="" uk-cover>
						</div>
					{/each}
				</div>
				<a class="uk-position-center-left uk-position-small uk-hidden-hover" href uk-slidenav-previous uk-slideshow-item="previous"></a>
				<a class="uk-position-center-right uk-position-small uk-hidden-hover" href uk-slidenav-next uk-slideshow-item="next"></a>
				<div class="uk-position-bottom-center uk-position-small">
					<ul class="uk-dotnav">
					{#each data.gallery_image_urls as image_url, index}
						<li uk-slideshow-item="{index}"><a href="#">Item {1}</a></li>
					{/each}
					</ul>
				</div>
			</div>
		</div>
	</div>

	<div class="section-anchor" id="youtube"></div>

	<div class="breakout uk-section uk-section-muted" id="YOUTUBE_SECTION">
		<div class="uk-container">
			<h1> ‧꒰ა  Youtube  ໒꒱‧ </h1>
			<div class="uk-grid-match uk-child-width-1-2@m" uk-grid>
				<div>
					<ul class="youtube_ul_links uk-nav uk-nav-default">
						{#each Object.entries(data.meta.youtube) as [youtube_title, youtube_code], index}
							<li class:youtube_link={youtube_active_video === index}>
								<!-- <a href="#" on:click|preventDefault={() => showYoutubeVideo(index, youtube_code)}>{youtube_title}</a> -->
								<a href="#" onclick={preventDefault(() => showYoutubeVideo(index, youtube_code))}>{youtube_title}</a>
							</li>
						{/each}
					</ul>
				</div>
				<div>
					{@html youtube_video_html}
				</div>
			</div>
		</div>
	</div>

	<div class="breakout uk-section uk-section-muted" id="SPECS_SECTION">
		<div class="uk-container">
			<h1 id="specs">{data.meta.character_name}'s Specs</h1>
			<ul uk-tab>
				<li><a href="#" onclick={ preventDefault( ()=> toggle_specs("DIV_POLYCOUNT") ) }>Polycount</a></li>
				{#if data.meta.specs !== undefined && data.meta.specs.includes('skeleton')}<li><a href="#" onclick={ preventDefault( ()=> toggle_specs("DIV_SKELETON") ) }>Skeleton</a></li>{/if}
				<li><a href="#" onclick={ preventDefault( ()=> toggle_specs("DIV_CLOTHING") ) }>Clothing</a></li>
				<li><a href="#" onclick={ preventDefault( ()=> toggle_specs("DIV_ANIMATIONS") ) }>Animations</a></li>
				{#if data.meta.specs !== undefined && data.meta.specs.includes('morph-targets')}<li><a href="#" onclick={ preventDefault( ()=> toggle_specs("DIV_MORPH_TARGETS") ) }>Morph Targets</a></li>{/if}
				<li><a href="#" onclick={ preventDefault( ()=> toggle_specs("DIV_TEXTURES") ) }>Textures</a></li>
				<li><a href="#" onclick={ preventDefault( ()=> toggle_specs("DIV_MATERIALS") ) }>Materials</a></li>
				<li class="uk-active"><a href="#" onclick={ preventDefault( ()=> toggle_specs("DIV_EXTRA_NOTES") ) }>Extra Notes</a></li>
			</ul>

			<div id="DIV_POLYCOUNT">
				<table class="uk-table uk-table-striped uk-table-hover" style="width: clamp(15rem, 13.239rem + 7.512vw, 20rem)"> <!-- min max: 375, 1440 -->
					<tbody id="POLYCOUNT_TBODY">
						{#each Object.entries(data.meta.polycount) as [mesh_part, tris]}
							<tr><td>{mesh_part}</td><td>({tris} Tris)</td></tr>
						{/each}
					</tbody>
				</table>
			</div>

			<div id="DIV_SKELETON">
				<svelte:component this={data.content} SKELETON={true} />
			</div>

			<div id="DIV_CLOTHING">
				<svelte:component this={data.content} CLOTHING={true} />
			</div>

			<div id="DIV_ANIMATIONS">
				<svelte:component this={data.content} ANIMATIONS={true} />
			</div>

			<div id="DIV_MORPH_TARGETS">
				<svelte:component this={data.content} MORPH_TARGETS={true} />
			</div>

			<div id="DIV_TEXTURES">
				<svelte:component this={data.content} TEXTURES={true} />
			</div>

			<div id="DIV_MATERIALS">
				<svelte:component this={data.content} MATERIALS={true} />
			</div>

			<div id="DIV_EXTRA_NOTES">
				<svelte:component this={data.content} EXTRA_NOTES={true} />
			</div>

		</div>
	</div>

	<div class="breakout uk-section uk-section-muted" id="COMMON_FEATURES_SECTION">
		<div class="uk-container">
			<!-- <h1 id="common-features">Features Common to all characters</h1> -->
			<nav aria-label="Breadcrumb">
					<ul class="uk-breadcrumb">
							<!-- <li><a href="#" on:click|preventDefault={() => showYoutubeVideo(1, 'aaa')}>Features</a></li> -->
							<li><a href="#" onclick={preventDefault(() => (common_features_active_section = 'features'))}>Common Features</a></li>
							<li><a href="#" onclick={preventDefault(() => (common_features_active_section = 'skeleton'))}>Skeleton</a></li>
							<li><a href="#" onclick={preventDefault(() => (common_features_active_section = 'helps'))}>Help & Supports</a></li>
					</ul>
			</nav>
			<div class="center">
				{#if common_features_active_section == 'features'}
					<Features />
				{:else if common_features_active_section == 'skeleton'}
					<Skeleton />
				{:else if common_features_active_section == 'helps'}
					<Helps />
				{:else}
					<Features />
				{/if}
			</div>
		</div>
	</div>

	<div class="breakout uk-section uk-section-muted" id="ADDITIONAL_BONES_SECTION">
		<div class="uk-container">
			<h1 id="additional-bones">Additional Bones</h1>
			<svelte:component this={data.content} ADDITIONAL_BONES={true} />
		</div>
	</div>

	<div class="breakout uk-section uk-section-muted" id="CHANGE_LOG_SECTION">
		<div class="uk-container">
			<h1 id="change-log">Change Log</h1>
			<svelte:component this={data.content} CHANGE_LOG={true} />
		</div>
	</div>
</div>

<style>
	:global(.youtube-iframe-wrap) {
		position: relative;
		width: 100%;
		padding-bottom: 56.25%; /* 16:9 aspect ratio */
		height: 0;
		overflow: hidden;
	}

	:global(.youtube-iframe) {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border: 0;
	}

	div[uk-lightbox] {
		position:absolute;
		left: 50%;
		transform: translate(-50%, -50%);
		top:50%;
		z-index:100;
		width:60%;
		height:70%;
	}

	div[uk-lightbox] > a:first-child {
		border: none;
		display:block;
		width:100%;
		height:100%;
		
	}

	div[uk-lightbox] > a {
		font-style: none;
	}

	div[uk-lightbox] a.uk-button {
		border: none;
	}

	.youtube_ul_links {
		font-size: 1.1rem;
	}

	.youtube_link > a {
		color: #666666;
	}
	.youtube_link > a::before {
		content: "●";
		position: absolute;
		margin-left: -2rem; 
		color: var(--teal-color)
	}

	.uk-breadcrumb a {
		/* font-size: 1.3rem; */
		color: var(--logo-color);
		font-weight: bold;
	}

	.uk-table tr > td:first-child {
		padding-left: 1rem;
	}

	.uk-table tr > td:last-child {
		/* background-color: red; */
		font-size: .85rem;
		width: 6rem;
		text-align: right;
		padding-left: 1rem;
	}

	.uk-table td {
		padding: 0;
		font-size: 1rem;
		font-weight: 500;
	}
</style>
