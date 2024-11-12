---
title: Materials
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

# Materials


These are some of the materials. `MA_Generic` and its variations (masked, tint and masked+tint) is commonly used for the clothing on the character.

![Materials diagram](/images/common/materials/materials-diagram.jpg)

--Naming Conventions

"<mark>MA_</mark>" is the prefix for <mark>**MA**ster Materials</mark>. Master materials <span class="smaller-font">(other than MA_Transparent*)</span> are not meant to be used as it is and should be instanced.

"<mark>MI_</mark>" is the prefix for <mark>Instanced Materials</mark>.

<small>* You can use <b>MA_Transparent</b> to temporarily and quickly hide objects in the scene.</small>

--

<br/>

### MA_Generic

![MA_Generic Parameters](/images/common/materials/ma-generic-parameters.jpg)

<br/>

### MA_Generic_Masked

--Extends MA_Generic

`MA_Generic_Masked` inherited all the parameters from `MA_Generic`

--

Besides masking (hiding a part of mesh), it's also used by the caps or hats to disable their shadows

![MA_Generic_Masked Parameters](/images/common/materials/ma-generic-masked-parameters.jpg)

The masking only works if the mesh has vertex colors (red, green or blue).

![Vertex Color Meshes](/images/common/materials/vertex-color-meshes.jpg)

--Display the vertex color of the mesh with this material!

There is a material called `MA_Vertex_Color_Display` in `Demo > Background_Assets > Materials` that you can use directly to see the vertex color of a mesh.

--

#### Hide Shadows

The Shadow parameter can be used to turn shadow on and off (Value <mark>0.0</mark> == Shadow <mark>Off</mark>, Value <mark>1.0</mark> == Shadow <mark>On</mark>. The value can only be either 1.0 or 0.0, values in between doesn't work unfortunately)

![Shadow Parameter](/images/common/materials/shadow-parameter.jpg)

![Hat Shadow On/Off](/images/common/materials/hat-shadow-on-off.webp)

--Be aware! It will also affect ground shadow!, warning

![Ground Shadow On/Off](/images/common/materials/ground-shadow-on-off.webp)

--

<br/>

### MA_Generic_Tint

--Extends MA_Generic

`MA_Generic_Tint` inherited all the parameters from `MA_Generic`

--

![MA_Generic_Tint Parameters](/images/common/materials/ma-generic-tint-parameters.jpg)

--Power1? Power2

The order of process looks like this:

![Tint Material Process](/images/common/materials/tint-material-process.jpg)

Power is the math's power, and the **Power** node of the material graph. The color value change exponentially when adjusting the value. I don't understand math and somehow reducing the value towards 0 (or negatives) brighten up the color while increasing it darkens the color.

The reason Power2 exists is because sometimes I couldn't get a near total black color using Power1. If I remove Power1 and just use Power2, the effect is different, that's why I use the two of them. Most of the time though, I think you can untick Power2 and just use Power1.

--

This material uses the provided RGB map to tint different areas with different colors.

![RGB Tint Texture](/images/common/materials/rgb-tint-texture.jpg)

--Uses of T_Uniform_RGB

In cases where the RGB map is not provided, like for the skirt (or the gloves) for example, you can use `T_Uniform_RGB` map to tint the whole mesh. *You can also use it for Meryl hairs*.
![Skirt Highlight](/images/common/materials/skirt-highlight.jpg)

![Uniform RGB Map](/images/common/materials/uniform-rgb-map.jpg)

--

<br/>

### MA_Generic_Tint_Masked

Just a combination of `MA_Generic_Tint` and `MA_Generic_Masked`

<br/>

---

Skin Materials
---------------

![Skin Materials diagram](/images/common/materials/skin-materials-diagram.jpg)

<br/>

### MA_Fullbody

![MA_Fullbody Parameters](/images/common/materials/ma-full-body-parameters.jpg)

#### Eye Makeup Tint

![Eye makeup tint](/images/meryl/changelog/2023-11-08/eye-makeup.webp)
