---
title: "└ 📋 Change Log"
weight: 200
bookToc: true
draft: false
---

Change Log
===========

<hr style="border: 1px solid #44c0c9;">

### Meryl 3.2

`2023-11-09`

* Fixed some skinning issues to some of the meshes (body, tops and boots1)
* Update Freckles

  ![Face Freckles Update](../img/changelog/2023-11-08/freckles-update.webp)

* Added Eye Makeup Tint to Fullbody Material (color of the tint can be changed)

  ![Eye Makeup Tint](../img/changelog/2023-11-08/eye-makeup.webp)

* Update Tint and Masked materials. More details here.
  * Masked materials (MA_Generic_Masked & MA_Generic_Tint_Masked) has option to turn off shadow (specifically for the hats)
  * Tint materials have 2 more colors for color tint (previously only works with RGB, now it can read RGB+A+Black)
* Fix Hair1 Texture
* Added RGB Map for Tops3 (that are missing previously)
* Added SK_Meryl_Tops3_for_skirt1 and SK_Meryl_Skirt1_for_tops3
  
  ![New Skin](../img/changelog/2023-11-08/new-skin.png)

* Added SK_Meryl_BP_Arms_for_glove and SK_Meryl_BP_ChestFront_for_tops1

<br/>

### Meryl 3.1

`2023-09-06`

 * Added back the old version of the face model based on feedback. There are two new face model which are named '**1b**' and '**1c**'. **1c** is the previous face, while **1b** is a half way blend between the previous face (from 2022) and the new face (2023).
  
  ![Three faces side by side for comparison](../img/changelog/2023-09-06/three-faces.jpg)
  
  ![New mesh in the content folder](../img/changelog/2023-09-06/new-mesh-in-content.jpg)

 * Added Freckles Texture (T_Meryl_Head2_Freckles_D)
 * Update Body material (MA_Fullbody) to add beauty spots and also color tint the lips.

  ![Freckles and beauty spot](../img/changelog/2023-09-06/freckles-and-beauty-spot.jpg)

 * Added static mesh for Hat3 (SM_Hat3) (that are missing previously)
 * Added vertex color to the feathers of the Hat3, so now you can hide the feathers on Hat3

  ![Hat3 hide feathers](../img/changelog/2023-09-06/hat3-hide-feathers.jpg)

---

<br/>

### Meryl 3.0

`2023-08-14`

  * Price Changed from $39.99 to $89.99
  * Changed the scale of model (she's now a little bit smaller, scaled 95% from previous).
  * Changed the face model.
  * Added a new outfit, a new hairstyle and a shorter magic staff.

    ![New Outfit](../img/changelog/2023-08-14/new-outfit.jpg)

  * New Preview level

    ![New Outfit](../img/changelog/2023-08-14/new-preview-level.jpg)

  * Removed Handcrafted LODs (very time consuming; I think Unreal is able to generate LOD which might be option and I need to check how to do this)
  * Removed Master Cloth Material (doesn't work well with the modular setup that I am having now)
  * plus many others little update (to materials, etc) and changes (including namings)...

---

<br/>

### Meryl 2.0

`2022-07-11`

[Old Updates Log](https://unreal-meryl.readthedocs.io/en/latest/updates-log.html)
