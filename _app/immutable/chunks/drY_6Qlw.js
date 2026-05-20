var e=`---
character_name: Shenya
tagline: A fully modular, casually styled female character for Unreal Engine, featuring modern everyday wear and designed for easy customization and animation.
short_tagline: Casually styled female character featuring modern everday wear
cover_image: shenya-cover.jpg
gallery:
  - shenya-cover.jpg
  - Shenya_Gallery2_cinematic1.png
  - Shenya_Gallery3_cinematic2.png
  - Shenya_Gallery4_cinematic3.png
  - Shenya_Gallery5_cinematic4.png
  - Shenya_Gallery6_cinematic5.png
  - Shenya_Gallery7_closeup1.png
  - Shenya_Gallery8_closeup2.png
  - Shenya_Gallery8_closeup3.png
  - Shenya_Gallery9_closeup smile teeth.png
  - Shenya_Gallery10_front back.png
  - Shenya_Gallery11_multi_front.png
  - Shenya_Gallery12_multi_back.png
  - Shenya_Gallery14_facial_expressions.png
  - Shenya_Gallery15_hairs.png
  - Shenya_Gallery17_fullbody.png
  - Shenya_Gallery18_baseball_bat.png
  - Shenya_Gallery19_scale_reference.png
  - Shenya_Gallery20_skeleton.png
  - Shenya_Gallery21_physic_assets.png
  - Shenya_Gallery22_fingernails.png
youtube:
  UE Casual Female Character ｜ Shenya Showcase (Update 2025): MM2xeA13xuU
  UE Casual Female - Shenya Showcase: OfM1V1eI1jI
  UE Casual Female - Shenya Asset Overview: nUcbepp6P_k
  Using Kawaii Physics with Rabbit Heart Character Shenya: HkaO96Ox8yg
polycount:
  Shenya 1 (Jacket + Long Jeans Outfit): 71.2k
  Shenya 2 (Hoodie Jacket + Short Jeans Outfit): 65.7k
  Shenya 3: 63.4k
  Shenya 4: 68.5k
  Shenya 5: 67k
  Shenya 6: 71k
  Shenya 7: 76.5k
  Head: 18.6k
  Fullbody: 38.4k
  Hair1: 13.2k
  Hair2: 15.3k
  Hair3: 12.7k
  Hair4: 15.6k
  Tanktop: 2.7k
  Jacket: 13.4k
  Hoodie Jacket: 9k
  Jeans: 7.6k
  Short Jeans: 4k
  Cap: 1.5k
  Belt: 1.7k
  Boots: 7k
  Long Boots: 9.6k
  Sunglasses: 1.7k
  Accessory1 (Includes 3 necklaces, 2 earrings and 1 bracelets; Hide or unhide parts using material): 2.8k
  Baseball Bat: 0.5k
specs:
  - skeleton
  - morph-targets
  - clothing
  - animations
  - textures
  - materials
  - extra-notes
asset_content: /images/shenya/Shenya_Asset_Content.mp4
fab_link: https://www.fab.com/listings/9f51f81e-6310-4f54-9cf6-1c63edec884f
artstation_link: https://www.artstation.com/artwork/6LGqrO
gumroad_link: https://rabbitheart.gumroad.com/l/shenya
---

<script>
  import ShenyaChangeLog from "./shenya-changelog.md"

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
- Includes a smile-and-blink animation (\`Anim_Shenya_Smile_Blink\`) that can be applied additively in the Anim Graph.
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
- Hairs 2k
- Clothes 2k
- Staffs (Weapons) 2k

**Body**

- Diffuse, Normal and Roughness textures.

**Eyes**

- Diffuse, Normal, Specular and Height (for ParallexOcclusion)

**Cloth, Hairs and Staffs**

- 2k Diffuse, Normal, MRAO, RGB (Tint mask)
- 2 Staffs Texture Sets: Staff1, Staff2
- 5 Cloth Texture Sets: Hair1 to Hair5
- 14 Cloth Texture Sets: Bloomers, Boots1, Boots2, Gloves, Hat1, Hat2, Hat3, Shoe1, Skirt1, Skirt2, Skirt3, Tops1, Tops2, Tops3

{/if}

<!-- 
        MATERIALS
 -->

{#if MATERIALS}

- Includes basic master materials (MA_Generic) and specialized variants for masking (\`MA_Generic_Masked\`), color adjustments (\`MA_Generic_Tint\`), or both (\`MA_Generic_Tint_Masked\`).
- Skin material features parameters to modify fingernail and scalp color, add tattoos (using a mask), and adjust skin color, brightness, desaturation, roughness, and specular intensity.
- Meryl and Lia (my other character) share many of the same materials. Check out [Lia Asset Overview](https://youtu.be/1-QuyVHN56Q) for some demos on the materials.

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

![Available Dynamic Meshes](/images/shenya/additional_bones/dyn_meshes.webp)

#### DYN_Hair1

![DYN_Hair1 bones](/images/shenya/additional_bones/DYN_Hair1_bones.jpg)

#### DYN_Hair2

![DYN_Hair2 bones](/images/shenya/additional_bones/DYN_Hair2_bones.jpg)

#### DYN_Hair3

![DYN_Hair3 bones](/images/shenya/additional_bones/DYN_Hair3_bones.jpg)

#### DYN_Hair4

![DYN_Hair4 bones](/images/shenya/additional_bones/DYN_Hair4_bones.jpg)

#### DYN_Jacket

![DYN_Jacket bones](/images/shenya/additional_bones/DYN_Jacket_bones.jpg)

<br>

---


-- Previous Naming Conventions

In the Oct 2023 update of naming convention to the bones, I have switched to use **SC_** (which stands for Skeleton Chain) as the prefix to all bones.

--

#### How to read the list below? Take Hair1 as an example:

<sub>SC_01_01</sub> is the root joint while <sub>SC_01_end</sub> is the end joint. The end joint is not weighted, which means it doesn't affect anything no matter how it transforms.

![Bones naming example](/images/shenya/bones/bones-naming-example.jpg)

The first joint chain (<sub>SC_01</sub>) starts from the left front side of the character and ends at the right front side of the character (<sub>SC_07</sub>) (It goes counter-clockwise, if looking from the top of the character)

![Bones chain direction](/images/shenya/bones/bones-chain-direction2.jpg)

{/if}

<!-- 
        CHANGE LOG
 -->

{#if CHANGE_LOG}

<ShenyaChangeLog />

{/if}

<style>

</style>
`;export{e as default};