var e=`---
character_name: Meryl
tagline: A fully modular fantasy apprentice witch for Unreal Engine, featuring stylized magic-inspired fashion, expressive customization, and Apple Blendshapes.
short_tagline: Fantasy apprentice witch girl
cover_image: meryl-cover.jpg
gallery:
  - meryl-cover.jpg
  - featured-image.jpg
  - gallery-preview1.png
  - gallery-preview1b.png
  - gallery-preview2.png
  - gallery-preview2b.png
  - gallery-preview3-customize-looks.png
  - gallery-preview3-customize-looks-back.png
  - gallery-preview4-facial.png
  - gallery-preview5-skin-colors.png
  - gallery-preview6-gameplay-test.png
  - gallery-preview7-hairs.png
  - gallery-preview7-hairs.png
  - gallery-preview8-body.png
  - gallery-preview9-weapons.png
  - gallery-preview10-ears.png
  - gallery-preview11-fingernails.png
  - gallery-preview12-scale.png
  - gallery-preview13-skeleton.png
  - gallery-preview14-physic-assets.png
  - gallery-preview15-preview-map.png
youtube:
  UE Apprentice Witch Girl - Meryl Showcase: 54WlGsCpfjo
  UE Apprentice Witch Girl - Meryl Asset Overview: w5Ii1Vk1nZI
polycount:
  Meryl1: 48.6k
  Meryl2: 52k
  Meryl3: 53.9k
  Fullbody: 32.6k
  Hair1: 4.8k
  Hair2: 6k
  Hair3: 7.2k
  Hair4: 6.6k
  Hair5: 7.2k
  Hat1: 2.2k
  Hat2: 2.1k
  Hat3: 3.8k
  Staff1: 6.8k
  Staff2: 1.2k
  Top1: 8.6k
  Top2: 8k
  Top3: 10.6k
  Skirt1: 8.3k
  Skirt2: 3.2k
  Skirt3: 10.4k
  Bloomers: 1.2k
  Stockings: 3.7k
  Boots1: 4.2k
  Boots2: 4.3k
  Shoe1: 3k
specs:
  - skeleton
  - morph-targets
  - clothing
  - animations
  - textures
  - materials
  - extra-notes
fab_link: https://www.fab.com/listings/20cb6e52-ae0b-4560-a31e-242b2b857871
artstation_link: https://www.artstation.com/artwork/b5gODk
gumroad_link: https://rabbitheart.gumroad.com/l/meryl
---

<script>
  import MerylChangeLog from "./meryl-changelog.md"

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
- Modular Hair1 to Hair 5, Hat1, Hat3, Skirt1, Skirt2 and Skirt3 has additional bones for enhanced dynamic simulations using KawaiiPhysics or other compatible systems
- Added Sockets: hand_rSocket (for holding a weapon) and headSocket (for wearing a hat)

{/if}

<!-- 
        MORPH TARGETS
 -->

{#if MORPH_TARGETS}

- Head has all Apple Blendshapes ([refer to Apple's ARKit](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/)) and can be used with the LiveLink plugin.
- Body has fingernails morph (to make it longer)
- Please note that currently, there is no blueprint setup for LiveLink, and the blendshapes have not been tested due to the lack of access to Apple device

{/if}

<!-- 
        CLOTHING
 -->

{#if CLOTHING}

- Clothing is setup for the hairs and skirt
- Includes Modular Hairs, Hats (only Hat1 and Hat3) and Skirts with additional bones for enhanced dynamic simulations using KawaiiPhysics or other compatible systems

{/if}


<!-- 
        ANIMATIONS
 -->

{#if ANIMATIONS}

- Includes basic movement animations: Idle, Walk, Run, Jump_Start, Jump_Loop, and Jump Jump_End (retargeted from UE4 Mannequin animations).
- Additional demo idle animations retargeted from Paragon characters (Yin, Shinbi, Aurora) and Echo are provided.
- Includes a smile-and-blink animation (\`Anim_Meryl_Smile_Blink\`) that can be applied additively in the Anim Graph.
- Includes a few poses (T-Pose & A-Pose) for animation retargeting.

{/if}

<!-- 
        TEXTURES
 -->

{#if TEXTURES}

- **PBR** (Physically Based Rendering) Metallic/Roughness Textures
- Normal Map Format: OpenGL (all Normals textures have Flip Green Channel)
- Basic Texture Set: **Diffuse** (T\\_*\\*\\*\\_D,) **Metallic Roughness AO** (T\\_\\*\\*\\*\\_MRAO), **Normal** (T\\_\\*\\*\\*\\_N)
- T\\_\\*\\*\\*\\_MRAO textures pack 3 channels: Metallic in Red Channel, Roughness in Green Channel, and AO in Blue Channel
- Some mesh has **RGB** Texture (T\\_\\*\\*\\*\\_RGB) that are used in the material to adjust colors.

**Texture Resolutions**

- Body 4k, Head 2k, Teeth Tongue 2k, Eyes Eyeshadow Eyebrow Eyelashes 1k
- Hairs 4k
- Clothes 2k
- Weapons 2k

**Body**

- Diffuse, Normal, Roughness and AO textures.

**Eyes**

- Diffuse, Normal and Specular

**Hairs**

- Albedo, Alpha, Depth, Direction, ID and Root

**Cloth**

- 10 Cloth Texture Sets: Accessory1, Belt, Boots, Cap, Hoodie Jacket, Jacket, Jeans, Long Boots, Sunglasses, Tanktop (All 2k Textures)

{/if}

<!-- 
        MATERIALS
 -->

{#if MATERIALS}

- Includes basic master materials (MA_Generic) and specialized variants for masking (\`MA_Generic_Masked\`), color adjustments (\`MA_Generic_Tint\`), or both (\`MA_Generic_Tint_Masked\`).
- Skin material features parameters to modify fingernail and scalp color, add tattoos (using a mask), and adjust skin color, brightness, desaturation, roughness, and specular intensity.
- Meryl and Lia share many of the same materials; Check out [Lia Asset Overview](https://youtu.be/1-QuyVHN56Q) for some demos on the materials.

**Eyes**

- Eye material includes parameters for adjusting eye color and cornea size.
- A Duo eye material allows each eye to have a different color.
- For cinematic quality, the showcase video uses the Metahuman eye shader. You can migrate the shader, apply it to Meryl's eyes, and adjust the iris size for a similar look. More info about using Metahuman Eyes [here](https://miica37.github.io/docs/unreal-characters/metahuman-eyes/).
- Eye shadow opacity can be customized.

{/if}

<!-- 
        EXTRA NOTES
 -->

{#if EXTRA_NOTES}

<Admonition title="Ignore this if your Meryl is last updated during 2024">

Meryl 3.0 (August 2023 update) is incompatible with older 2022 version. Please backup your project before you replace or update old Meryl in already working project because there are too many changes (in names, paths, etc), you probably need to delete the old Meryl and resetup everything.

Sorry for the inconvenience 🙏

</Admonition>

### ⚠️\xA0Notes

- **No LOD** (the LOD in previous version has been removed)
- **No Blueprints**
- **No Animations** (only some retargeted for demo purposes)

**Updates**

- 2026-01-26: [Meryl 3.6](https://miica37.github.io/docs/meryl/changelog/#meryl-35) Added Substance Painter Source files for outfits and hairs (Meryl_Substance_Painter_Source.zip)
- 2025-08-24: [Meryl 3.5](https://miica37.github.io/docs/meryl/changelog/#meryl-35) Update from UE4.22 to UE4.27
- 2024-08-26: [Meryl 3.4](https://miica37.github.io/docs/meryl/changelog/#meryl-34) Fix broken blendshapes specific to UE5.4
- 2024-01-30: [Meryl 3.3](https://miica37.github.io/docs/meryl/changelog/#meryl-33) Added Retarget Poses
- 2023-11-11: [Meryl 3.2](https://miica37.github.io/docs/meryl/changelog/#meryl-32) (Fixed some skinning issues; Update freckles; Add Eye makeup; etc...)
- 2023-09-06: [Meryl 3.1](https://miica37.github.io/docs/meryl/changelog/#meryl-31) (Added back previous face; freckles; beauty spot; lips tint; etc...)
- 2023-08-14: [Mery 3.0](https://miica37.github.io/docs/meryl/changelog/) (1 new outfit; 1 new hairstyle; update preview level; etc...)

{/if}

<!-- 
        ADDITIONAL BONES
 -->

{#if ADDITIONAL_BONES}

<!-- For informations on dynamic meshes, please check out [its section in the Characters Common Sections](/docs/unreal-characters/dynamic-meshes) -->

<Admonition title="Bones naming">

Meryl is using an older naming convention than Shenya (Oct 2023 Update).

</Admonition>

#### How to read the list below? Take Hair1 as an example:

\`hair1_front_01_c\` is the root bone while \`hair1_front_c_end\` is the end bone. The end bone is not weighted, which means it doesn't affect anything no matter how it transforms.

![Bones Naming Example](/images/meryl/dynamic-meshes/bones-naming-example.jpg)

For informations on dynamic meshes, please check out [its section in the Characters Common Sections](/docs/unreal-characters/dynamic-meshes)

### Dynamic Meshes

![Available Dynamic Meshes](/images/meryl/additional_bones/dyn_meshes.png)

#### DYN_Hair1

![DYN_Hair1 bones](/images/meryl/additional_bones/DYN_Hair1_bones.png)

#### DYN_Hair2

![DYN_Hair2 bones](/images/meryl/additional_bones/DYN_Hair2_bones.png)

#### DYN_Hair3

![DYN_Hair3 bones](/images/meryl/additional_bones/DYN_Hair3_bones.png)

#### DYN_Hair4

![DYN_Hair4 bones](/images/meryl/additional_bones/DYN_Hair4_bones.png)

#### DYN_Hair5

![DYN_Hair5 bones](/images/meryl/additional_bones/DYN_Hair5_bones.png)

#### DYN_Hat1

![DYN_Hat1 bones](/images/meryl/additional_bones/DYN_Hat1_bones.png)

#### DYN_Hat3

![DYN_Hat3 bones](/images/meryl/additional_bones/DYN_Hat3_bones.png)

#### DYN_Skirt1

![DYN_Skirt1 bones](/images/meryl/additional_bones/DYN_Skirt1_bones.png)

#### DYN_Skirt2

![DYN_Skirt2 bones](/images/meryl/additional_bones/DYN_Skirt2_bones.png)

#### DYN_Skirt3

![DYN_Skirt3 bones](/images/meryl/additional_bones/DYN_Skirt3_bones.png)

<br>


{/if}

<!-- 
        CHANGE LOG
 -->

{#if CHANGE_LOG}

<MerylChangeLog />

{/if}

<style>

</style>
`;export{e as default};