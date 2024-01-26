---
title: "└ Metahuman Eyes"
weight: 100
bookToc: true
draft: false
---

Metahuman Eyes
=======================================

<hr style="border: 1px solid #44c0c9;">

You can apply metahuman eyes shader to all Rabbit Heart characters.

![Lia's using metahuman eyes](../img/metahuman-eyes/lia-metahuman-eyes-compare.webp)

You should be able to find Metahuman eye's material in this path {{< path "MetaHumans > Common > Face > LookDev > Shared > EyeMaterials" >}} after you added Metahuman to your project.

![Metahuman's folder](../img/metahuman-eyes/metahuman-eyes-location.jpg)

This is the settings for Metahuman eyes material that I use on Lia's Eyes above (for example):

![Lia's Metahuman eye material settings](../img/metahuman-eyes/lia-metahuman-eyes-settings.jpg)

Meryl's Case
--------------------

For Meryl, if you try to use metahuman eye material on her eyes, her ***right eye*** is going to look a bit strange:

![Meryl's right eye is looking strange with metahuman eyes](../img/metahuman-eyes/meryl-metahuman-eyes-no.jpg)

I am guessing it is because her eyes are oval shapes, and the material graphs inside metahuman eyes material doesn't take that into account. For my other characters that has spherical eyes, their left eye and right eye are actually mirrored, which means if I apply a texture on the eye, the right eye will flip the texture on the left (see the gif image below).

![Meryl's metahuman eyes mesh](../img/metahuman-eyes/meryl-metahuman-eye-mesh2.webp)

<div class="image-credit">* Cat Image by <a href="https://www.freepik.com/free-vector/hand-drawn-animals-silhouette-set_29975484.htm#query=cat%20shape&position=0&from_view=keyword&track=ais&uuid=18cedc96-5384-438e-b4e1-3bc8a4484222">Freepik</a> </div>

For Meryl to be able to use metahuman eye material, I created a different eyes mesh for her. You will find those meshes with "_MH" (which stands for Metahuman) in their names.

![Meryl's metahuman head meshes](../img/metahuman-eyes/meryl-metahuman-head-meshes.jpg)

