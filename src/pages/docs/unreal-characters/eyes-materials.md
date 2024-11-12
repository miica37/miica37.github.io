---
title: Eyes Materials
---
<script>
	export let callbackAfterUpdate;
	import PageTitle from "$lib/components/pageTitle.svelte"
	import Admonition from "$lib/components/admonitions.svelte"
	import Collapsible from "$lib/components/collapsible.svelte"
	import Image from "$lib/components/image.svelte"
	import Youtube from "$lib/components/youtube.svelte"
	import Heading from "$lib/components/heading.svelte"
	import { afterUpdate } from 'svelte';
	
	afterUpdate(() => {
		callbackAfterUpdate()
	});
</script>

# Eyes materials


We have the main eye material and a duo eye material.

![Eye Materials diagram](/images/common/materials-eyes/materials-eyes-diagram.jpg)

--Material Update for other characters in Progress

I have recently upgraded the master eyes material for my new character Aren, some of the options below might be missing in some of my older characters, but I will update the materials and eye mask textures for all characters hopefully before the end of February 2024.

--

### MA_Eyes

![Eye Material Parameters](/images/common/materials-eyes/eye-material-parameters.jpg)

### MA_Duo_Eyes

![Duo Eyes Material Parameters](/images/common/materials-eyes/duo-eye-material-parameters.jpg)

![Aren using Duo Eyes Material](/images/common/materials-eyes/aren-duo-eye.jpg)

#### Eye Masks

The duo eye material uses the vertex color of the eyes to separate the left side and right side. Then it uses the eye mask input to tint the area specified by the mask.

![Eyes vertex color](/images/common/materials-eyes/eyes-vertex-color.jpg)

![Eyes masks](/images/common/materials-eyes/eye-masks.webp)

![Eyes masks in the Eye Textures folder](/images/common/materials-eyes/eye-masks-content.jpg)