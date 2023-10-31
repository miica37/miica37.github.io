---
title: "└ Cloth Pack1"
weight: 11
bookToc: true
draft: false
---

Casual Cloth Pack1 Documentation
================================

{{% admonition type="info" title="Youtube Videos" details="false" %}}
{{< youtube k_TyBXVFMsI >}}
{{% /admonition %}}

This cloth pack consists of:

  * 4x Tops (T-Shirt, Button Up, Crop Top, Knitted Top)
  * 3x Bottoms (2 Skirts & 1 Short pants)
  * 1x Face Mask
  * 2x Glasses
  * 2x Scarfs
  * 1x Bag
  * 1x Shoe
  * Total: 14 New Mesh

There are no clothing or any dynamic meshes in this pack.

{{% admonition warning "Please Note! Only for Shenya!" false %}}
This cloth pack only works with Shenya. It wouldn't work with any other characters and no support will be provided for integration with any other characters.
{{% /admonition %}}

<br/>

Adding Cloth Pack1 to Shenya
----------------------------

When you add Cloth Pack1 to Project that already has Shenya, you will get a Overwrite Files prompt.

![Overwrite Files](../img/cloth-pack1/overwrite-files.jpg)

It doesn't matter whether you replace the files or not so either "Yes" or "Cancel" is fine.

The Cloth Pack1 will be inside the same folder as Shenya, they share the same Meshes, Materials and Textures folder. You can then start using the cloth just like Shenya's other cloths.

{{% admonition note "Note" false %}}
If you first add Cloth Pack1 to your project, and then adding Shenya second. It's the same, just make sure you have the \****most recent update***\* to both package. The duplicate files should be the exact same files across both package.
{{% /admonition %}}

<br/>

Morph Targets
-------------
In order to fit different tops and bottoms together, initially, I was exporting a different mesh for each variation that I can find. For example, to fit T-Shirt to Skirt, I created a new T-Shirt mesh with its shape adjusted to fir the skirts. Things look good until I start working on creating fit shapes for button up. Because now besides fitting it to the skirt, jeans and short pants, I also need to fit it to the bag and scarf. If you can imaging, the combination is something like this:

  * Fit Skirt
  * Fit Skirt + Bag
  * Fit Skirt + Scarf
  * Fit Skirt + Bag + Scarf
  * Fit Jeans
  * Fit Jeans + Bag
  * Fit Jeans + Scarf
  * Fit Jeans + Bag + Scarf
  * Fit Shortpants
  * Fit Shortpants + Bag
  * Fit Shortpants + Scarf
  * Fit Shortpants + Bag + Scarf

although I don't really need that many combinations because I can just make a shape that will fit skirt + jeans + shortpants:

  * Fit Skirt/Jeans/Shortpants
  * Fit Skirt/Jeans/Shortpants + Bag
  * Fit Skirt/Jeans/Shortpants + Scarf
  * Fit Skirt/Jeans/Shortpants + Bag + Scarf

but I have two versions of button up, one has loose ends hanging on the outside while another on is tucked into the bottom. I can't combine the skirt, jeans and shortpants here because they all starts at different height (shortpants starts at higher up of the body while jeans at the more bottom part). So this is what need to be:

  * Tuck Skirt
  * Tuck Skirt + Bag
  * Tuck Skirt + Scarf
  * Tuck Skirt + Bag + Scarf
  * Tuck Jeans
  * Tuck Jeans + Bag
  * Tuck Jeans + Scarf
  * Tuck Jeans + Bag + Scarf
  * Tuck Shortpants
  * Tuck Shortpants + Bag
  * Tuck Shortpants + Scarf
  * Tuck Shortpants + Bag + Scarf

and then I thought of another version of button up that will fit inside the jacket 😱 Yikes:

  * Fit Skirt/Jeans/Shortpants ***for jacket***
  * Fit Skirt/Jeans/Shortpants ***for jacket*** + Bag
  * Fit Skirt/Jeans/Shortpants ***for jacket*** + Scarf
  * Fit Skirt/Jeans/Shortpants ***for jacket*** + Bag + Scarf
  * Tuck Skirt ***for jacket***
  * Tuck Skirt ***for jacket*** + Bag
  * Tuck Skirt ***for jacket*** + Scarf
  * Tuck Skirt ***for jacket*** + Bag + Scarf
  * Tuck Jeans ***for jacket***
  * Tuck Jeans ***for jacket*** + Bag
  * Tuck Jeans ***for jacket*** + Scarf
  * Tuck Jeans ***for jacket*** + Bag + Scarf
  * Tuck Shortpants ***for jacket***
  * Tuck Shortpants ***for jacket*** + Bag
  * Tuck Shortpants ***for jacket*** + Scarf

We ended up with 31 Meshes for the button up!

Let's say in the future, we are going to fit it to a new bottom with a different height (probably on a new separate pack, and actually I would try to design the new bottom to have the same height as one of the 3 existing height so I don't have to create new shapes for it), we would have double of those meshes.

This is why I ended up storing the shapes in morph targets. Now I only have 4 different button up meshes:

  * Buttonup
  * Buttonup_tuck
  * Buttonup_for_jacket
  * Buttonup_for_jacket_tuck

It's easier to manage them inside Maya, and in Unreal too when I only need to manage 4 meshes, it's also less prone to human errors. It might need some blueprint setup for it to work though inside Unreal Engine, it wasn't as easy as selecting the mesh, you need to create a bunch of "Set morph target" nodes, so that's one of the downsides.

I could also scripted something in Maya to output the mesh combinations automatically from the 4 meshes, I could do that but if large amount of meshes doesn't concern you and you actually prefer that over morph targets, let me know in [this github issue](https://github.com/miica37/Rabbit-Heart-Characters/issues/1). I will make an update if I believe that's the overall better decision.

Although it's good to know that button up is the only extreme example in this cloth pack, the other meshes has very little morph targets (usually less than 4) because as long as they don't need a different kind of combination with ***bag*** or ***scarf***, the shapes won't multiply.

Pose Fix Morph Targets
----------------------

#### left_leg_back
This is a different kind of morph target that is added only to the skirts. It is being used differently compared to the "fit" morph targets above. It is to fix skirt intersection with the legs:

![Skirt intersection with leg](../img/cloth-pack1/skirt-intersection-with-leg.gif)

Skirt1 and Skirt2 each have a left_leg_back morph target and during import of skirts mesh, this morph target is added to the skeleton as an anim curve. You can open SK_Shenya_Skeleton to see this:

![left_leg_back anim curve in skeleton](../img/cloth-pack1/left-leg-back-morph-target-in-skeleton.jpg)

I manually add the anim curve to Anim_Echo_Jog_Fwd and Anim_Aurora_Jog_Fwd (see gif above) and animate them to trigger when the leg moves to the back and causes intersections.

The skirts or other meshes might intersect on other animations and let me know if I need to add more "pose fix morph target".

Scarf Material
--------------

#### MA_Scarf_Tint (Master Material)

The scarfs (Scarf1 and Scarf2) use a special master material so they can utilize a tiling background texture.

![Scarf material](../img/cloth-pack1/scarf-material.jpg)

This pack comes with 10 bg textures that you can try:

![Scarf background textures](../img/cloth-pack1/scarf-bg-textures.jpg)

All the textures come from [Pixabay](https://pixabay.com/) ([License](https://pixabay.com/service/license-summary/)). Please see [Image Credits](./image-credits.md).

<br/>

Change Log
===========

<hr style="border: 1px solid #44c0c9;">

### Cloth Pack1 1.0

`2023-11-01`

First Release