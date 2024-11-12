<script>
	export let src = '';
	export let alt = '';
	// export let loading: 'lazy' | 'eager' | null | undefined = 'lazy';
	export let loading = 'lazy';
	// export let class_ = '';
	export let width = '100%';

	alt = alt.replace(">>", "<br />")
</script>

<figure>
	<div uk-lightbox style="width:{width}">
		<a href="{src}">
			<img {src} {alt} {loading}>
			{#if alt}
				<div id="caption-box"><figcaption>{@html alt}</figcaption></div>
			{/if}
		</a>
	</div>
</figure>

<style>
	figure {
		width: 100%;
	}

	div[uk-lightbox] {
		/* display: flex;
		align-items: center;
		justify-content: center; */
	}

	a {
		/* background-color: red; */
		display: inline-grid;
		/* grid-template-columns: 1 1;  */
		/* width: auto auto; */
	}

	img, div#caption-box {
		grid-column: 1;
		grid-row: 1;
	}

	div#caption-box {
		/* background-color: blue; */
		position: relative;
		display: flex;
		/* display: inline-grid; */
		align-items: flex-end;
		justify-content: center;
		opacity: 0;
		transition: opacity 1s;
	}

	div#caption-box:hover {
		opacity: 1;
	}

	figcaption {
		/* background-color: #45596d5d; */
		background-color: rgba(34, 34, 40, 0.75);
		color: white;
		/* font-family: "Bona Nova SC"; */
		/* font-size: 1rem; */
		font-weight: 100;
		/* letter-spacing: 0.1rem; */
		position: absolute;
		bottom: 1rem;
		width: 100%;
		padding-block: .7rem;
		text-align: center;
		box-shadow: rgba(116, 116, 156, 0.25) 0px 30px 60px -12px inset, rgba(187, 187, 187, 0.3) 0px 18px 36px -18px inset;
	}


</style>