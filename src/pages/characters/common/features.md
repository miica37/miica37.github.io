<script>
		import Heading from "$lib/components/heading.svelte"
</script>

<h1 id="common-features" style="font">Features</h1>

<table class="uk-table">
	<tbody>
		<tr>
			<td>Morph Targets</td>
			<td>Yes</td>
			<td>~55 <a href="https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/">Apple Blendshapes</a></td>
		</tr>
		<tr>
			<td>Full Body Under Clothes</td>
			<td>Yes</td>
			<td></td>
		</tr>
		<tr>
			<td>Source Fbx</td>
			<td>Included</td>
			<td>You can find the source fbx files in the <kbd>Source > Fbx</kbd> folder</td>
		</tr>
		<tr>
			<td>Change Material Color</td>
			<td>Yes</td>
			<td>RGB Mask Textures are provided to make color changes</td>
		</tr>
		<tr>
			<td>Skeleton</td>
			<td>Based on UE4 Mannequin</td>
			<td>No Additional Bones</td>
		</tr>
		<tr>
			<td>Textures</td>
			<td>PBR (Physically Based Rendering)</td>
			<td>Metallic Roughness Workflow</td>
		</tr>
		<tr>
			<td>Animations</td>
			<td>Only Demo Animations</td>
			<td>Retargeted UE4 Mannequin Default Animations, a few of Paragon Animations and a few of Echo's Animation (for Demonstrations only)</td>
		</tr>
	</tbody>
</table>

<style>

h1 {
	font-family: Apalu;
	font-size: 5.5rem;
	color: var(--teal-color);
	letter-spacing: 0.4rem;
}

tr {
	border-top: 1px solid hsla(184, 55%, 53%, 0.4);
}

tr > :first-child {
	color: var(--teal-color);
	letter-spacing: clamp(0rem, -0.041rem + 0.177vw, 0.1rem);
}

tr > :first-child:before {
	content: "✭";
	margin-right: clamp(0.3rem, 0.01rem + 1.238vw, 1rem);
	color: gold;
}

tr > :first-child,
tr > :nth-child(2) {
	text-transform: uppercase;
	font-size: clamp(0.8rem, 0.634rem + 0.707vw, 1.2rem);
	font-weight: 600;
}

tr > :last-child {
	font-size: clamp(0.5rem, 0.334rem + 0.707vw, 0.9rem);
	/* width: 20rem; */
}

</style>
