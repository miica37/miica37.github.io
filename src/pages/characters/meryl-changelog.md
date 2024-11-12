
<script>
  import Admonition from "$lib/components/admonitions.svelte"
  import Image from "$lib/components/image.svelte"
  import Heading from "$lib/components/heading.svelte"
</script>

### Meryl 3.3

`2024-01-30`

* Added Retarget Poses

![Retarget Poses Folder|70%](/images/meryl/changelog/2024-01-30/retarget-poses-folder.png)

---

<br>

### Meryl 3.2.1

`2023-11-22`

 * Added source fbx files. `"Meryl > Source"`

---

<br>

### Meryl 3.2

`2023-11-09`

* Fixed some skinning issues to some of the meshes (body, tops and boots1)
* Update Freckles

  ![Face Freckles Update|50%](/images/meryl/changelog/2023-11-08/freckles-update.webp)

* Added Eye Makeup Tint to Fullbody Material (color of the tint can be changed)

  ![Eye Makeup Tint|50%](/images/meryl/changelog/2023-11-08/eye-makeup.webp)

* Update Tint and Masked materials. More details here.
  * Masked materials (MA_Generic_Masked & MA_Generic_Tint_Masked) has option to turn off shadow (specifically for the hats)
  * Tint materials have 2 more colors for color tint (previously only works with RGB, now it can read RGB+A+Black)
* Fix Hair1 Texture
* Added RGB Map for Tops3 (that are missing previously)
* Added SK_Meryl_Tops3_for_skirt1 and SK_Meryl_Skirt1_for_tops3
  
  ![New Skin|50%](/images/meryl/changelog/2023-11-08/new-skin.png)

* Added SK_Meryl_BP_Arms_for_glove and SK_Meryl_BP_ChestFront_for_tops1

---

<br>

### Meryl 3.1

`2023-09-06`

 * Added back the old version of the face model based on feedback. There are two new face model which are named '**1b**' and '**1c**'. **1c** is the previous face, while **1b** is a half way blend between the previous face (from 2022) and the new face (2023).
  
  ![Three faces side by side for comparison|70%](/images/meryl/changelog/2023-09-06/three-faces.jpg)
  
  ![New mesh in the content folder|70%](/images/meryl/changelog/2023-09-06/new-mesh-in-content.jpg)

 * Added Freckles Texture (T_Meryl_Head2_Freckles_D)
 * Update Body material (MA_Fullbody) to add beauty spots and also color tint the lips.

  ![Freckles and beauty spot|50%](/images/meryl/changelog/2023-09-06/freckles-and-beauty-spot.jpg)

 * Added static mesh for Hat3 (SM_Hat3) (that are missing previously)
 * Added vertex color to the feathers of the Hat3, so now you can hide the feathers on Hat3

  ![Hat3 hide feathers|50%](/images/meryl/changelog/2023-09-06/hat3-hide-feathers.jpg)

---

<br/>

### Meryl 3.0

`2023-08-14`

  * Price Changed from $39.99 to $89.99
  * Changed the scale of model (she's now a little bit smaller, scaled 95% from previous).
  * Changed the face model.
  * Added a new outfit, a new hairstyle and a shorter magic staff.

    ![New Outfit|50%](/images/meryl/changelog/2023-08-14/new-outfit.jpg)

  * New Preview level

    ![New Preview Level|50%](/images/meryl/changelog/2023-08-14/new-preview-level.jpg)

  * Removed Handcrafted LODs (very time consuming; I think Unreal is able to generate LOD which might be option and I need to check how to do this)
  * Removed Master Cloth Material (doesn't work well with the modular setup that I am having now)
  * plus many others little update (to materials, etc) and changes (including namings)...

---

<br/>

### Meryl 2.0

`2022-07-11`

[Old Updates Log](https://unreal-meryl.readthedocs.io/en/latest/updates-log.html)


<style>
  .header-container {
    margin-top: 0;
    margin-bottom: 0;
  }

  .changelog-section {
    border-radius: .5rem;
    /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
    /* box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px; */
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    padding: 1rem;
    margin-bottom: 1rem;
  }
</style>