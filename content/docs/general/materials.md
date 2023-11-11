---
title: "└ Materials"
weight: 20
bookToc: true
draft: false
---

Materials
=======================================

<hr style="border: 1px solid #44c0c9;">

These are some of the materials. {{< object "MA_Generic" >}} and its variations (masked, tint and masked+tint) is commonly used for clothing.

![Materials diagram](../img/materials/materials-diagram.jpg)

{{% admonition note "Naming Conventions" %}}

"MA_" is the prefix of the names for master material. Master materials (besides MA_Transparent) are not meant to be used as it is and should be instanced.

"MI_" is the prefix of the names for instanced materials.

{{% /admonition %}}

<br/>

### MA_Generic

![MA_Generic Parameters](../img/materials/ma-generic-parameters.jpg)

<br/>

### MA_Generic_Masked

{{% admonition info "Extends MA_Generic" %}}
{{< object "MA_Generic_Masked" >}} inherited all the parameters from {{< object "MA_Generic" >}}
{{% /admonition %}}

Besides masking (hiding a part of mesh), it's also used by the caps or hats to disable their shadows

![MA_Generic_Masked Parameters](../img/materials/ma-generic-masked-parameters.jpg)

The masking only works if the mesh has vertex colors (red, green or blue).

![Vertex Color Meshes](../img/materials/vertex-color-meshes.jpg)

{{% admonition info "See the vertex color of the mesh with this material!" %}}
There is a material called {{< object "MA_Vertex_Color_Display" >}} inside {{< path "Demo > Background_Assets > Materials" >}} that you can use to see the vertex color of a mesh.
{{% /admonition %}}

The Shadow parameter is too turn shadow on and off (Value 0.0 == Shadow Off, Value 1.0 == Shadow On. Can be either 1.0 or 0.0, not inbetween)

![Shadow Parameter](../img/materials/shadow-parameter.jpg)

![Hat Shadow On/Off](../img/materials/hat-shadow-on-off.webp)

{{% admonition warning "It will also affect ground shadow!" %}}
![Ground Shadow On/Off](../img/materials/ground-shadow-on-off.webp)
{{% /admonition %}}

<br/>

### MA_Generic_Tint

{{% admonition info "Extends MA_Generic" %}}
{{< object "MA_Generic_Tint" >}} inherited all the parameters from {{< object "MA_Generic" >}}
{{% /admonition %}}

![MA_Generic_Tint Parameters](../img/materials/ma-generic-tint-parameters.jpg)

{{% admonition type="tip" title="Power1? Power2" details="true" %}}

The order of process looks like this:

![Tint Material Process](../img/materials/tint-material-process.jpg)

Power is the math's power, and the **Power** node of the material graph. The color value change exponentially when adjusting the value. I don't understand math and somehow reducing the value towards 0 (or negatives) brighten up the color while increasing it darkens the color.

The reason Power2 exists is because sometimes I couldn't get a near total black color using Power1. If I remove Power1 and just use Power2, the effect is different, that's why I use the two of them. Most of the time though, I think you can untick Power2 and just use Power1.

{{% /admonition %}}

This material uses the provided RGB map to tint different areas with different colors.

![RGB Tint Texture](../img/materials/rgb-tint-texture.jpg)

{{% admonition note "Uses of T_Uniform_RGB" %}}
In cases where the RGB map is not provided, like for the skirt (or the gloves) for example, you can use {{< object "T_Uniform_RGB" >}} map to tint the whole mesh. *You can also use it for the hairs*.
![Skirt Highlight](../img/materials/skirt-highlight.jpg)

![Uniform RGB Map](../img/materials/uniform-rgb-map.jpg)
{{% /admonition %}}

<br/>

### MA_Generic_Tint_Masked

Just a combination of {{< object "MA_Generic_Tint" >}} and {{< object "MA_Generic_Masked" >}}

<br/>

---

Skin Materials
---------------

![Skin Materials diagram](../img/materials/skin-materials-diagram.jpg)

<br/>

### MA_Fullbody

![MA_Fullbody Parameters](../img/materials/ma-full-body-parameters.jpg)

#### Eye Makeup Tint

![Eye makeup tint](../../meryl/img/changelog/2023-11-08/eye-makeup.webp)
