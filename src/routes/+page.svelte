
<script lang="ts">
	export let data

	import * as config from '$lib/site-config.js'

	import Image from "$lib/components/image.svelte"
</script>

<div class="cover ANIM_fadeOut">
	<div class="cover__image ANIM_scaleCycle"></div>
	<a class="cover__title animate-pulse" href="#characters" uk-scroll>Rabbit Heart,</a>
	<div class="cover__subtitles">
		<div>
			We <span class="font-extrabold text-3xl">Love</span> Characters
		</div>
		<div style="animation-delay: 5s;">
			We <span class="font-extrabold text-3xl">Create</span> Characters
		</div>
	</div>
</div>

<div class="content-grid" style="margin-top:10rem; row-gap: 8rem;">
	
	<section class="ANIM_fadeOut">
		<div class="section-header ml-auto" id="characters">Characters I made</div>
		<div class="text-2xl ml-auto">for <a href="https://www.unrealengine.com/">Unreal Engine</a></div>
	</section>
	
	<section class="full-width">
		<div class="content-grid w-full">
			<div class="flex items-center justify-center">
				<div class="thumbnails">
					<div>
						<a class="animate-pulse" href="/characters/meryl">Meryl</a>
						<img src="/images/front-page/meryl-card.jpg" alt="">
					</div>
					<div>
						<a class="animate-pulse" href="/characters/shenya">Shenya</a>
						<!-- <a class="animate-pulse" href="/characters/shenya">Shenya</a> -->
						<img src="/images/front-page/shenya-card.jpg" alt="">
					</div>
					<div>
						<a class="animate-pulse" href="/characters/lia">Lia</a>
						<img src="/images/front-page/lia-card.jpg" alt="">
					</div>
					<div>
						<a class="animate-pulse" href="/characters/aren">Aren</a>
						<img src="/images/front-page/aren-card.jpg" alt="">
					</div>
				</div>
		</div>
	</div>
	</section>

	<!-- <hr> -->
	
	<section class="ANIM_fadeOut">
		<div class="section-header ml-auto">Tools</div>

		<div class="text-right" style="width:100%;">
			<!-- <div class="text-3xl">RIn.Rename</div> -->
			<div class="text-xl mr-auto">
				for <a href="https://www.blender.org/">Blender</a><br>
			</div>
		</div>

		<div class="tools-section">

			<div class="flex items-center justify-center">
				<div class="thumbnails">
					<div>
						<a class="rinrename-thumbnails-title" href="/tools/blender/rinrename">_</a>
						<img src="/images/front-page/rinrename-card.png" alt="">
					</div>
			</div>

		</div>

	</section>

	<p>&nbsp;</p>

	<hr>

	<section>
		<div class="section-header mr-auto">Updates</div>
		<div class="update-section">
			<div>
				<svelte:component this={data.content} />
			</div>

			<div class="bubble-section">
				<div class="float-bubble">
					<img class="avatar-image" style="width:7rem" src="/images/front-page/avatar-circle.png" alt="">
					<br>
					<span class="apalu">Hi,</span> I am miica, a 3d Character Artist. <br>
					I am currently exploring the world of 3d and games development. <br>
					<br>
					<span class="apalu">Welcome</span> to my website :)
				</div>
				<div uk-scrollspy="cls: uk-animation-fade; repeat: true">
					<!-- <img class="size-25" src="/images/front-page/avatar-circle.png" alt=""> -->
				</div>
			</div>
		</div>
	</section>

<p>&nbsp;</p>

</div> <!-- END OF content-grid -->

<style>
	.apalu {
		font-family: Apalu;
		font-size: 2.5em;
	}
	
	.content-grid {
		--padding-inline: 2rem;

		display: grid;
		grid-template-columns:
			[full-width-start]
				/* minmax(var(--padding-inline), 1fr) */
				1fr
						/* [content-start] minmax( 100% - (var(--padding-inline) * 2), 7fr ) [content-end] */
						[content-start] 4fr [content-end]
				/* minmax(var(--padding-inline), 1fr) */
				1fr
			[full-width-end];
		row-gap: 6rem;
	}

	.content-grid > :not(.full-width),
	.full-width > :not(.full-width) {
		grid-column: content;
	}

	.content-grid > .full-width {
		grid-column: full-width;
	}

	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2rem;
	}

	.thumbnails {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		gap: 3rem;
	}

	.thumbnails > div {
		display: grid;
		width: 18rem;
		border-top-left-radius: 1rem;
		border-top-right-radius: 3rem;
		border-bottom-left-radius: 5rem;
		overflow: hidden;
		z-index: 100;
	}

	.thumbnails div > * {
		grid-row: 1;
		grid-column: 1;
	}

	.thumbnails div > a {
		font-family: 'Bona Nova SC';
		color: rgba(255, 255, 255, 0.85);
		font-size: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 2rem;
		transition: scale 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
		z-index: 10;
	}

	.thumbnails div > a:hover {
		text-shadow:1px 1px 30px #fff, 1px 1px 10px #ccc;
		scale: 1.1;
	}

	@keyframes pulse {
		  0% { scale: 1.00; -webkit-filter: blur(0);	}
		 50% { scale: 1.05; -webkit-filter: blur(.8px); }
		100% { scale: 1.00; -webkit-filter: blur(0); }
	}

	.thumbnails div > a:hover ~ img {
		/* scale: 1.2; */
		animation: pulse 2.5s infinite;
	}

	.thumbnails div > img {
		transition: scale 1s linear;
	}

	div.tools-section {
		display: grid;
		grid-auto-flow: column;
		width: 100%;
		grid-template-columns: 3fr 1fr;

		@media (max-width:900px) {
			display: flex;
			flex-direction: column;
		}
	}

	div.update-section {
		display: grid;
		grid-auto-flow: column;
		width: 100%;
		grid-template-columns: 2fr 2fr;

		@media (max-width:900px) {
			display: flex;
			flex-direction: column;
		}
	}


	/*
		-----------------------
			FLOAT BUBBLE (https://codepen.io/kirstenallen/details/MWwPYYm)
		-----------------------
	*/

	.bubble-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		margin-top: -5rem;

		@media (max-width:900px) {
			margin-top: 5rem;
		}
	}

	:root {
		--color-blue: #6ec0f2;
		--color-beige: #ffdac148;
	}
	
	div.float-bubble {
		/* background-image: url("/images/front-page/anime-night-sky-illustration.png"); */
		/* background-color: #f2f1ed; */
		background-color: #f2f1ed;
		/* font-family: Apalu; */
		font-size: 1.3rem;
		/* color: white; */
		/* text-shadow: 2px 2px 4px #00000086; */
		width:60%;
		transform: translatey(0px);
		animation: float 5s ease-in-out infinite;
		padding: 50px;
		border-radius: 11px;
		position: relative;
		box-shadow: 20px 20px var(--color-blue);
		transition: all 1sec;
		border-top: 4px solid var(--logo-color);
		/* border-left: 5px solid var(--logo-color); */
	}

	/* div.float-bubble:hover {
		font-family: revert;
		font-size: 1.3rem;
	} */

	div.float-bubble:after {
		transform: translatey(0px);
		animation: float2 5s ease-in-out infinite;
		content: ".";
		font-weight: bold;
		-webkit-text-fill-color: var(--color-beige);
		text-shadow: 22px 22px var(--color-blue);
		text-align: left;
		font-size: 55px;
		width: 55px;
		height: 11px;
		line-height: 30px;
		border-radius: 11px;
		background-color: var(--color-beige);
		position: absolute;
		display: block;
		bottom: -30px;
		left: 0;
		box-shadow: 22px 22px var(--color-blue);
		z-index: -2;
	}

	@keyframes float {
		0% {
			transform: translatey(0px);
		}
		50% {
			transform: translatey(-20px);
		}
		100% {
			transform: translatey(0px);
		}
	}

	@keyframes float2 {
		0% {
			line-height: 30px;
			transform: translatey(0px);
		}
		55% {
			transform: translatey(-20px);
		}
		60% {
			line-height: 10px;
		}
		100% {
			line-height: 30px;
			transform: translatey(0px);
		}
	}


	/*
		-----------------------
			CONTENT GRID
		-----------------------
	*/
	.bona {
		font-family: 'Bona Nova SC';
	}

	.section-header {
		font-family: 'Bona Nova SC';
		font-size: 4.5em;
		line-height: 1;
		color: white;
		background-color: var(--logo-color);
		padding: 2rem;
		border-radius: .2rem;
	}

	hr {
		border-top: 2px solid var(--logo-color);
		width: 50%;
		margin: auto;
	}

	@keyframes fadeIn {
			0%		    { opacity: 0; -webkit-filter: blur(10px); }
			45%, 100%	{ opacity: 1; -webkit-filter: blur(0px);}
	}

	@keyframes shrink {
			25%		{ width: 50%; }
			85%		{ width:  4%; }
			100%	{ width:  4%; }
	}

	@keyframes letterSpacing {
			0%		    { letter-spacing: 0.5rem; opacity: 0; }
			80%, 100%	{ letter-spacing: 0.1rem; opacity: 1; }
	}

	/* animation-timeline DOESN'T WORK ON FIREFOX */
	@supports (animation-timeline: auto){
		hr {
			width: 100%;
			animation: shrink linear forwards;  
			animation-timeline: view();
			/* animation-range: exit 100px; */
		}

		.section-header {
			animation: letterSpacing linear forwards;
			animation-timeline: view();
		}

		.ANIM_fadeIn {
			animation: fadeIn linear forwards;
			animation-timeline: view();
		}
	}

	/*
		-----------------------
			COVER & COVER IMAGE
		-----------------------
	*/
	.cover {
		position: relative;
		width: 100%;
		height: 100svb;
		overflow: hidden;
		container-type: inline-size;
		container-name: hero;
		display: flex;
		flex-direction: column;
		gap: 0;
		justify-content: center;
		align-items: center;
	}

	.cover__image {
		/* background-image: url('images/a-simple-digital-wallpaper-minimalist-free-photo.jpg'); */
		background-image: url('/images/cover.jpg');
		position: absolute;
		overflow: hidden;
		top: 0px;
		left: 0;
		right: 0;
		bottom: 0;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		background-repeat: no-repeat;
		background-position: center;
		-webkit-background-size: cover;
		background-size: cover;
		/* opacity: 0; */
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: -1;
	}

	.cover__image::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		opacity: 1;
		pointer-events: none;
		background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 60%, var(--bg-color) 100%);
	}

	.cover__title {
		font-family: 'Bona Nova SC', serif;
		font-size: 4rem;
		font-weight: 400;
		font-style: italic;
		color: #fff;
		transition: scale 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	.cover__title:hover {
		/* color: red; */
		text-shadow:1px 1px 30px #fff, 1px 1px 10px #ccc;
		scale: 1.1;
	}

	.cover__subtitles {
		display: grid;
	}

	.cover__subtitles > * {
		grid-row: 1;
		grid-column: 1;
		text-decoration: underline;
		letter-spacing: .1rem;
		font-size: 1.4rem;
		color: #493a2d;
		margin-top: -.5rem;
		font-weight: 500;
		opacity: 0;
		text-shadow: 1px 1px 30px #fff;
	}

	/*
		-----------------------
			COVER ANIMATIONS
		-----------------------
	*/
	@supports (animation-timeline: auto){
		.ANIM_fadeOut {
			animation: fadeOut linear forwards;
			animation-timeline: view();  /* DOESN'T WORK ON FIREFOX */
			animation-range: exit 100px;
		}
	}
	
	@keyframes fadeOut {
		  /* to { opacity: 0; } */
			25%		{ opacity: 1; }
			85%		{ opacity: 0; }
			100%	{ opacity: 0; }
	}

	@keyframes scaleCycle {
		  0%	{scale: 1.1; -webkit-filter: blur(10px);}
		 50%	{scale: 1.0; -webkit-filter: blur( 0px);}
		100%	{scale: 1.1; -webkit-filter: blur(10px);}
	}

	.ANIM_scaleCycle {
		animation: scaleCycle;
		animation-duration: 10s;
		animation-iteration-count: infinite;
	}
	
	@keyframes slideInOut {
		  0%	{ transform: translateX(-150%); opacity: 0; letter-spacing: .1rem; }
		 20%	{ transform: translateX(   0%); opacity: 1; letter-spacing: .35rem; }
		 40%	{ transform: translateX(   0%); opacity: 1; letter-spacing: .35rem; }
		 50%	{ transform: translateX( 150%); opacity: 0; letter-spacing: .1rem; }
		100%	{ transform: translateX( 150%); opacity: 0; letter-spacing: .1rem; }
	}

	.cover__subtitles > * {
		animation-name: slideInOut;
		animation-iteration-count: infinite;
		/* animation-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22); */
		animation-duration: 10s;
	}

</style>
