var e=`---
character_name: Shenya2
tagline: A fully modular, casually styled female character for Unreal Engine, featuring modern everyday wear and designed for easy customization and animation.
short_tagline: Casually styled female character featuring modern everday wear
cover_image: shenya2-cover.jpg
gallery:
  - shenya2-cover.jpg
  - Shenya2_Gallery2_cinematic1.png
  - Shenya2_Gallery3_cinematic2.png
  - Shenya2_Gallery4_cinematic3.png
  - Shenya2_Gallery5_cinematic4.png
  - Shenya2_Gallery6_cinematic5.png
  - Shenya2_Gallery7_cinematic6.png
  - Shenya2_Gallery10_front back.png
  - Shenya2_Gallery14_facial_expressions.png
  - Shenya2_Gallery17_hairs.png
  - Shenya2_Gallery19_fullbody.png
  - Shenya2_Gallery19_scale_reference.png
  - Shenya2_Gallery20_skeleton.png
  - Shenya2_Gallery21_physic_assets.png
  - Shenya2_Gallery22_FPS_Hand.png
  - Shenya2_Gallery23_fingernails.png
  - Shenya2_Gallery25_baseball_bat.png
  - Shenya2_wireframe.jpg
youtube:
  UE Casual Female Character ｜ Shenya2 Showcase (2026): CbxgqYqBBzw
youtube_others:
  UE Casual Female Character ｜ Shenya Showcase (Update 2025): MM2xeA13xuU
  UE Casual Female - Shenya Showcase: OfM1V1eI1jI
  UE Casual Female - Shenya Asset Overview: nUcbepp6P_k
  Using Kawaii Physics with Rabbit Heart Character Shenya: HkaO96Ox8yg
polycount:
  Shenya: 71.7k
  Shenya2: 65.7k
  Shenya3: 63.4k
  Shenya4: 68.5k
  Shenya5: 66.9k
  Shenya6: 70.9k
  Shenya7: 76.5k
  Shenya8: 66.8k
  Shenya9: 80.2k
  Shenya10: 77k
  Shenya11: 72.3k
  Shenya12: 66.2k
  Shenya13: 66.4k
  Shenya14: 76.9k
  Shenya15: 74.9k
  Shenya16: 100.3k
  Shenya17: 87k
  Accessory1: 2.8k
  Accessory_Bracelet: 480
  Accessory_Earrings_Hoop: 800
  Accessory_Pendant1: 912
  Accessory_Pendant2: 1.1k
  Accessory_Pendant3: 976
  Bag: 4.8k
  Belt: 1.7k
  Blouse: 9.6k
  Blouse_Skirt: 1.7k
  Body_Heels_Lift: 19.9k
  Boots: 7.1k
  Buttonup: 8.8k
  Cap: 1.5k
  Cap2: 1.8k
  Claw_Clip: 3.1k
  Croptop: 1.4k
  Croptop1: 1.8k
  Croptop2: 3.5k
  Croptop3: 8.3k
  Denim_Mini_Skirt: 4k
  Earring_Cluster: 2k
  Earring_Huggie: 1.4k
  Earring_Stud: 512
  FaceMask: 775
  Fullbody: 38.4k
  Fullbody2: 38.4k
  Glasses1: 1.5k
  Glasses2: 1.7k
  Glasses3: 2.7k
  Hair1: 13.2k
  Hair2: 15.5k
  Hair3: 12.7k
  Hair4: 15.6k
  Hair5: 24k
  Hair6: 23.3k
  Heels: 7.3k
  Hoodie_Jacket: 9k
  Jacket: 13.4k
  Jeans: 7.6k
  Knitshirt: 5.4k
  Long_Boots: 9.6k
  Necklace_Beads: 3k
  Necklace_Beads_Round: 2.7k
  Sandals: 7k
  Scarf1: 6.2k
  Scarf2: 6.2k
  Shoe: 7.7k
  Short_Jeans: 4k
  Shortpants: 2.3k
  Skirt1: 3.6k
  Skirt2: 2.4k
  Socks_Long: 2.4k
  Socks_Long_Heels_Lift: 2.4k
  Socks_Short: 2k
  Socks_Short_Heels_Lift: 2k
  Sunglasses: 1.7k
  Tanktop: 2.7k
  Tshirt: 3.5k
  Baseball_Bat: 480
  Blouse_Skirt_Proxy: 704
  Denim_Mini_Skirt_Proxy: 660
  Hair1_Proxy: 354
  Hair2_Proxy: 736
  Hair3_Proxy: 354
  Hair4_Proxy: 423
  Hair5_Proxy: 526
  Hair6_Proxy: 516
  Skirt1_Proxy: 750
  Skirt2_Proxy: 750
specs:
  - skeleton
  - morph-targets
  - clothing
  - animations
  - textures
  - materials
  - extra-notes
asset_content_browser:
  manifest: /web-export/characters/shenya2/manifest.json
  thumbnailBase: /web-export/characters/shenya2
  rootPath: /Game/Shenya2
fab_link: https://www.fab.com/listings/16c84022-3b99-45c7-a304-d71c25076e65
gumroad_link: https://rabbitheart.gumroad.com/l/shenya2
---

<script>
  import Shenya2ChangeLog from "./shenya2-changelog.md"

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
- Modular Jacket, Hair1, Hair2, Hair3, Hair4, Hair5 and Hair6 has additional bones for enhanced dynamic simulations using KawaiiPhysics or other compatible systems

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
<!-- - Includes a smile-and-blink animation (\`Anim_Shenya_Smile_Blink\`) that can be applied additively in the Anim Graph. -->
- Includes a few poses (T-Pose & A-Pose) for animation retargeting.

{/if}

<!-- 
        TEXTURES
 -->

{#if TEXTURES}

**Cloth, Hairs and Staffs**

 - **PBR** (Physically Based Rendering) Metallic/Roughness workflow.
 - **Normal Map Format**: OpenGL (all Normal textures use a flipped Green Channel).
 - **Core Texture Set**: **Diffuse** (\`T_***_D\`), **ORM** (\`T_***_ORM\`), **Normal** (\`T_***_N\`).
 - **Channel Packing (ORM)**: Ambient Occlusion (Red), Roughness (Green), Metallic (Blue).
 - **RGB Tint Masks**: Additional \`T_***_RGB\` textures are used on select meshes for material color adjustments.

**Texture Resolutions**

 - **Body**: Primary Diffuse at **4K**; Normal and ORM at **2K** (additional utility masks at mixed resolutions).
 - **Head**: **2K** (Diffuse, Normal, ORM).
 - **Eyes & Makeup**: **1K** (Diffuse, Specular, Height / Parallax Occlusion, Masks).
 - **Hair**: **4K** (Albedo, Albedo White, Alpha, Depth, Direction, ID, Root).
 - **Clothes**: Predominantly **2K**; non-square exceptions include **DenimMiniSkirt** at **4K × 2K** and **BlouseSkirt / EarringsNecklace** at **1K × 2K**.
 - **Weapons (Baseball Bat)**: **2K**.

**Material Breakdown**

 - **Body**: Diffuse, Normal, and ORM as the base set. Additional dedicated masks and overrides include separate AO, Roughness, SSS, Tone, Scalp, Fingernail, and Lips masks.
 - **Eyes**: Diffuse, Specular, Height (Parallax Occlusion), and makeup/opacity masks.
 - **Clothes, Hair & Accessories**: Diffuse, Normal, ORM, and optional RGB tint mask.
 - **Weapons**: Diffuse, Normal, ORM, and RGB tint mask (Painted and Wood variants).

**Texture Set Inventory**

 - **Hair**: 1 global set (7 core maps) plus eyebrow/lash alpha variants.
 - **Weapons**: 2 primary sets — Baseball Bat (Painted) and Baseball Bat (Wood).
 - **Clothes & Accessories**: 54+ sets, including Bag, Belt, Blouse, Boots, Cap, Croptops, Denim Mini-Skirt, Earrings/Necklace, Face Mask, Glasses, Heels, Hoodie/Jacket, Jeans, Long Boots, Sandals, Scarves, Shoe, Shorts, Skirts,
Socks, Sunglasses, Tanktop, T-shirt, and more.

{/if}

<!-- 
        MATERIALS
 -->

{#if MATERIALS}

- Includes basic master materials (MA_Generic) and specialized variants for masking (\`MA_Generic_Masked\`), color adjustments (\`MA_Generic_Tint\`), or both (\`MA_Generic_Tint_Masked\`).
- Skin material features parameters to modify fingernail and scalp color, add tattoos (using a mask), and adjust skin color, brightness, desaturation, roughness, and specular intensity.
- Shenya2 and Lia (my other character) share many of the same materials. Check out [Lia Asset Overview](https://youtu.be/1-QuyVHN56Q) for some demos on the materials.

**Eyes**

- Eye material includes parameters for adjusting eye color and cornea size.
- A Duo eye material allows each eye to have a different color.
- For cinematic quality, the showcase video uses the Metahuman eye shader. You can migrate the shader, apply it to Shenya's eyes, and adjust the iris size for a similar look. More info about using Metahuman Eyes [here](https://miica37.github.io/docs/unreal-characters/metahuman-eyes/).
- Eye shadow opacity can be customized.

{/if}

<!-- 
        EXTRA NOTES
 -->

{#if EXTRA_NOTES}

### ⚠️ Notes

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


![Available Dynamic Meshes](/images/shenya2/additional_bones/dyn_meshes.png)



#### DYN_Hair1

![DYN_Hair1 bones](/images/shenya/additional_bones/DYN_Hair1_bones.jpg)

#### DYN_Hair2

![DYN_Hair2 bones](/images/shenya/additional_bones/DYN_Hair2_bones.jpg)

#### DYN_Hair3

![DYN_Hair3 bones](/images/shenya/additional_bones/DYN_Hair3_bones.jpg)

#### DYN_Hair5

![DYN_Hair5 bones](/images/shenya2/additional_bones/DYN_Hair5_bones.jpg)

#### DYN_Hair6

![DYN_Hair6 bones](/images/shenya2/additional_bones/DYN_Hair6_bones.jpg)


#### DYN_Jacket

![DYN_Jacket bones](/images/shenya/additional_bones/DYN_Jacket_bones.jpg)


#### DYN_Earring_Cluster

![DYN_Earring_Cluster](/images/shenya2/additional_bones/DYN_Earring_Cluster_bones.jpg)


{/if}

<!-- 
        CHANGE LOG
 -->

{#if CHANGE_LOG}

<Shenya2ChangeLog />

{/if}

<style>

</style>
`;export{e as default};