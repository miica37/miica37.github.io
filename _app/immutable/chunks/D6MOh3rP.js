var e=`---
character_name: ShaoLei
tagline: A modular techwear female character pack for Unreal Engine featuring ShaoLei and Llynx, dual face types, tactical styling, and flexible customization.
short_tagline: Techwear female pack with ShaoLei, Llynx (dual face types)
cover_image: shaolei-cover.jpg
gallery:
  - shaolei-cover.jpg
  - ShaoLei_Gallery2_cinematic1.png
  - ShaoLei_Gallery3_cinematic2.png
  - ShaoLei_Gallery3_cinematic2b.png
  - ShaoLei_Gallery4_cinematic3.png
  - ShaoLei_Gallery5_cinematic4.png
  - ShaoLei_Gallery6_cinematic5.png
  - ShaoLei_Gallery7_closeup1.png
  - ShaoLei_Gallery8_closeup2.png
  - ShaoLei_Gallery9_closeup3.png
  - ShaoLei_Gallery10_closeup4.png
  - ShaoLei_Gallery_modular_mesh_parts.png
  - ShaoLei_Gallery11_front back.png
  - ShaoLei_Gallery12_multi_front1.png
  - ShaoLei_Gallery13_multi_front2.png
  - ShaoLei_Gallery14_multi_back1.png
  - ShaoLei_Gallery15_multi_back2.png
  - ShaoLei_Gallery17_facial_expressions.png
  - ShaoLei_Gallery18_hairs.png
  - ShaoLei_Gallery19_hair_colors.png
  - ShaoLei_Gallery20_fullbody.png
  - ShaoLei_Gallery21_weapons.png
  - ShaoLei_Gallery22_weapons2.png
  - ShaoLei_Gallery23_scale_reference-01.png
  - ShaoLei_Gallery24_skeleton.png
  - ShaoLei_Gallery25_physic_assets.png
  - ShaoLei_Gallery26_fingernails.png
youtube:
  UE Techwear Military Female Character ｜ Llynx Showcase: 93vb8sHumgU
  UE Techwear Military Female Character ｜ Shao Lei Showcase: S1HNygndl9Q
polycount:
  ShaoLei 1: 108.3k
  ShaoLei 2: 90k
  ShaoLei 3: 88.9k
  ShaoLei 4: 86.5k
  ShaoLei 5: 117.8k
  ShaoLei 5b: 128.6k
  ShaoLei 5c: 102.9k
  ShaoLei 6: 98k
  ShaoLei 7: 100.7k
  ShaoLei 8: 82.2k
  ShaoLei 9: 70.6k
  ShaoLei 10: 78.5k
  Hair1: 19.8k
  Hair2: 21.5k
  Hair3: 22.8k
  Hair4: 16.4k
  Beret: 2.1K
  Facemask: 1.1K
  Onimask: 3.1K
  Gasmask_Square: 7.8K
  Gasmask_Round: 9.2K
  Balaclava: 2.6K
  Cowl: 12.7K
  Sports_Bra: 2K
  Sleeveless_Shirt: 4.2K
  Tech_Jacket: 9.9K
  Raglan: 10.3K
  Tactical_Top: 6.9K
  Tactical_Vest: 9.1K
  Big_Jacket: 17.5K
  Gloves: 5.9K
  Long_Gloves: 6.7K
  Elbow_Sleeves: 2.3K
  Belt_B: 5.9K
  Belt_A: 2.5K
  Tight_Pants: 3.5K
  Short_Pants: 6K
  Tactical_Pants: 11.1K
  Jacket_Skirt: 2.5K
  Holster: 6.8K
  Pouches_A: 2.6K
  Shin_Guard: 1.6K
  Boots: 10.4K
  Tall_Boots: 31.2K
  Rifle: 41.6K
  Pistol: 3.8K
specs:
  - skeleton
  - morph-targets
  - clothing
  - animations
  - textures
  - materials
  - extra-notes
asset_content: /images/shaolei/ShaoLei_Asset_Content.mp4
fab_link: https://www.fab.com/listings/16b6fd63-2d35-4abc-a01d-be224909cad8
artstation_link: https://www.artstation.com/artwork/QK54m3
gumroad_link: https://rabbitheart.gumroad.com/l/shaolei
---

<script>
  import ShaoLeiChangeLog from "./shaolei-changelog.md"

  import Admonition from "$lib/components/admonitions.svelte"
  import Image from "$lib/components/image.svelte"
  import Heading from "$lib/components/heading.svelte"
  import DoubleColumns from "$lib/components/doubleColumns.svelte"

  export let SKELETON = false;
  export let MORPH_TARGETS = false;
  export let CLOTHING = false;
  export let ANIMATIONS = false;
  export let TEXTURES = false;
  export let MATERIALS = false;
  export let EXTRA_NOTES = false;
  export let ADDITIONAL_BONES = false;
  export let CHANGE_LOG = false;
<\/script>


<!-- 
        SKELETON
 -->

{#if SKELETON}

- Epic UE4 Mannequin Skeleton (No Additional Bones)
- Modular Jacket, Hair1, Hair2, Hair3 and Hair4 has additional bones for enhanced dynamic simulations using KawaiiPhysics or other compatible systems

{/if}

<!-- 
        MORPH TARGETS
 -->

{#if MORPH_TARGETS}

- Head has all Apple Blendshapes ([refer to Apple's ARKit](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/)) and can be used with the LiveLink plugin.
- Please note that currently, there is no blueprint setup for LiveLink, and the blendshapes have not been tested due to the lack of access to Apple device

{/if}

<!-- 
        CLOTHING
 -->

{#if CLOTHING}

- Clothing is setup for the hairs and enabled by default.
- Includes Modular Hairs with additional bones for enhanced dynamic simulations using KawaiiPhysics or other compatible systems

{/if}


<!-- 
        ANIMATIONS
 -->

{#if ANIMATIONS}

- Includes basic movement animations: Idle, Walk, Run, Jump_Start, Jump_Loop, and Jump Jump_End (retargeted from UE4 Mannequin animations).
- Additional demo idle animations retargeted from Paragon character Aurora and Echo are provided.
- Includes a smile-and-blink animation (\`Anim_ShaoLei_Smile_Blink_Anim\`) that can be applied additively in the Anim Graph.
- Includes a few poses (T-Pose & A-Pose) for animation retargeting.

{/if}

<!-- 
        TEXTURES
 -->

{#if TEXTURES}

- **PBR** (Physically Based Rendering) Metallic/Roughness Textures
- Normal Map Format: OpenGL (all Normals textures have Flip Green Channel)
- Basic Texture Set: **Diffuse** (T\\_\\*\\*\\*\\_D,) **AO Roughness Metallic** (T\\_\\*\\*\\*\\_ORM), **Normal** (T\\_\\*\\*\\*\\_N)
- Some mesh has **RGB** Texture (T_\\*\\*\\*\\_RGB) that are used in the material to adjust colors.
- T_\\*\\*\\*\\_ORM textures pack 3 channels: Ambient Occlusion in Red Channel, Roughness in Green Channel, and Metallic in Blue Channel

**Texture Resolutions**

- Body 4k, Head 2k, Eyes Eyeshadow 1k
- Hairs 4k
- Clothes Mostly 2k
- Rifle 4k
- Pistol 2k

**Body**

- Diffuse, Normal and Roughness textures.

**Eyes**

- Diffuse, Normal, Specular

{/if}

<!-- 
        MATERIALS
 -->

{#if MATERIALS}

- Includes basic master materials (MA_Generic) and specialized variants for masking (\`MA_Generic_Masked\`), color adjustments (\`MA_Generic_Tint\`), or both (\`MA_Generic_Tint_Masked\`).
- Skin material features parameters to modify fingernail and scalp color, add tattoos (using a mask), and adjust skin color, brightness, desaturation, roughness, and specular intensity.
- ShaoLei (this character) and Lia (my other character) share many of the same materials. Check out [Lia Asset Overview](https://youtu.be/1-QuyVHN56Q) for some demos on the materials.

**Eyes**

- Eye material includes parameters for adjusting eye color and cornea size.
- A Duo eye material allows each eye to have a different color.
- Eye shadow's opacity can be adjusted.

{/if}

<!-- 
        EXTRA NOTES
 -->

{#if EXTRA_NOTES}

### ⚠️\xA0Notes

- **No LOD**
- **No Blueprints** (demo only)
- **No gameplay-ready Animations** (demo only)

*Navigate to ...*
- <a href="#polycount">Polycount</a>
- [ChangeLog](#change-log)

{/if}

<!-- 
        ADDITIONAL BONES
 -->

{#if ADDITIONAL_BONES}

For informations on dynamic meshes, please check out [its section in the Characters Common Sections](/docs/unreal-characters/dynamic-meshes)

### Dynamic Meshes

![Available Dynamic Meshes](/images/shaolei/additional_bones/dyn_meshes.png)

#### DYN_Hair1

![DYN_Hair1 bones](/images/shaolei/additional_bones/DYN_Hair1_bones.jpg)

#### DYN_Hair2

![DYN_Hair2 bones](/images/shaolei/additional_bones/DYN_Hair2_bones.jpg)

#### DYN_Hair3

![DYN_Hair3 bones](/images/shaolei/additional_bones/DYN_Hair3_bones.jpg)

#### DYN_Hair4

![DYN_Hair4 bones](/images/shaolei/additional_bones/DYN_Hair4_bones.jpg)

#### DYN_Big_Jacket

![DYN_Hair1 bones](/images/shaolei/additional_bones/DYN_Big_Jacket_bones.jpg)

#### DYN_Jacket_Skirt

![DYN_Jacket bones](/images/shaolei/additional_bones/DYN_Jacket_Skirt_bones.jpg)

#### DYN_Jacket_Skirt

![DYN_Jacket bones](/images/shaolei/additional_bones/DYN_Short_Pants_bones.jpg)

<br>

{/if}

<!-- 
        CHANGE LOG
 -->

{#if CHANGE_LOG}

<ShaoLeiChangeLog />

{/if}

<style>

</style>
`;export{e as default};