<script>
	let { title, column1, column2, column3 } = $props();
</script>

{#if title}
	<h3>{title}</h3>
{/if}
<div class="container">
	<!-- <div class="element-1" style="flex: 0 0 {ratio};"> -->
	<div>
		{@render column1()}
	</div>
	<div>
		{@render column2()}
	</div>
	<div>
		{@render column3()}
	</div>
</div>


<!-- <div class="uk-section uk-section-muted">
	<div class="uk-container">
		{#if title}
			<h3>{title}</h3>
		{/if}
		<div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
			<div>
				{@render column1()}
			</div>
			<div>
				{@render column2()}
			</div>
			<div>
				{@render column3()}
			</div>
		</div>
	</div>
</div> -->

<style>
	.container {
		/* background-color: blue;
		width: 100%; */
		display: flex;
		flex-wrap: wrap; /* Allows wrapping if needed on smaller screens */
	}

	.container > div {
		flex: 1;
	}

	@media (max-width: 1000px) {
	.container > div {
		flex: 0 0 100%; /* Stack elements on smaller screens */
	}
}

</style>
