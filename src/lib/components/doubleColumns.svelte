<script>
	let { title, ratio='50', column1, column2 } = $props();

</script>

{#if title}
	<h3>{title}</h3>
{/if}
<div class="container">
	<!-- <div class="element-1" style="flex: 0 0 {ratio};"> -->
	<div class="element-1-ratio-{ratio}">
		{@render column1()}
	</div>
	<div class="element-2">
		{@render column2()}
	</div>
</div>

<style>
.container {
	/* background-color: blue;
	width: 100%; */
  display: flex;
  flex-wrap: wrap; /* Allows wrapping if needed on smaller screens */
}

.element-1-ratio-20 {	flex: 0 0 20%; }
.element-1-ratio-30 {	flex: 0 0 30%; }
.element-1-ratio-40 {	flex: 0 0 40%; }
.element-1-ratio-50 {	flex: 0 0 50%; }
.element-1-ratio-60 {	flex: 0 0 60%; }
.element-1-ratio-70 {	flex: 0 0 70%; }
.element-1-ratio-80 {	flex: 0 0 80%; }

.element-2 {
	flex: 1; /* Takes the remaining space */
}

@media (max-width: 1000px) {
	.element-1-ratio-20,
	.element-1-ratio-30,
	.element-1-ratio-40,
	.element-1-ratio-50,
	.element-1-ratio-60,
	.element-1-ratio-70,
	.element-1-ratio-80,
	.element-2 {
		flex: 0 0 100%; /* Stack elements on smaller screens */
	}
}

</style>