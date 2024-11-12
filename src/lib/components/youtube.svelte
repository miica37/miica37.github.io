<script>
	export let code = ''
	export let scale = 1

	// const width = scale * 640
	// const height = scale * 390

</script>

<div>
	<iframe
		src="https://www.youtube.com/embed/{code}"
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen>
	</iframe>
</div>

<style>
	/* div {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	} */

	div {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
    overflow: hidden;
	}
	
	iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
}
</style>
