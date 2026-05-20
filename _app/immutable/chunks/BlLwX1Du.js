var e=`---
character_name: Aren
tagline: A fully modular fantasy male elf ranger for Unreal Engine, featuring armor, a scimitar, and a versatile setup for customization and animation.
short_tagline: Fantasy male elf ranger with armor, scimitar, and modular customization.
cover_image: aren-cover.jpg
gallery:
  - aren-cover.jpg
  - Aren_Gallery2_cinematic1.jpg
  - Aren_Gallery3_closeup.jpg
  - Aren_Gallery4_closeup smile teeth.jpg
  - Aren_Gallery5_front back.jpg
  - Aren_Gallery6_multi_front.jpg
  - Aren_Gallery7_multi_back.jpg
  - Aren_Gallery8_skin_color.jpg
  - Aren_Gallery9_facial_expressions.jpg
  - Aren_Gallery10_hairs.jpg
  - Aren_Gallery11_ears.jpg
  - Aren_Gallery12_fullbody.jpg
  - Aren_Gallery13_weapon.jpg
  - Aren_Gallery14_scale_reference.jpg
  - Aren_Gallery15_skeleton.jpg
  - Aren_Gallery16_physic_assets.jpg
  - Aren_Gallery17_fingernails.jpg
youtube:
  UE Male Elf Ranger Character - Aren Showcase (Update 2025): _8HY34iR7ys
  UE Male Elf Ranger Character - Aren Showcase: WbG93p-86YI
  UE Male Elf Ranger Character - Aren Asset Overview: r53O1MxDDnU
  Aren X Lia: GmochwcC10o
polycount:
  Aren 1: 92.2k
  Aren 2: 101.6k
  Aren 3: 77.1k
  Aren 4: 90.8k
  Aren 5: 90.8k
  Aren 6: 91.3k
  Fullbody: 38.8k
  Head: 19k
  Hair1 Short: 23.5k
  Hair1 Long: 21.2k
  Hair2: 27.2k
  Hair3: 14.9k
  Hair4: 19.6k
  Arm Guard: 8.8k
  Armor Boots: 10.1k
  Belts1: 4.8k
  Belts2: 7.4k
  Belt3: 1.4k
  Boots2: 4.2k
  Chest Armor: 7.3k
  Coverall: 9.9k
  Coverall No Sleeves: 6.1k
  Crown: 0.9k
  Elf Skirt 1: 2.2k
  Elf Skirt 2: 2.1k
  Elf Skirt 3: 6.8k
  Feather Earrings: 2.1k
  Moon Earrings: 2k
  Gloves: 7.5k
  Hoodie 1: 4.6k
  Hoodie 2: 4.5k
  Jacket Armor: 5k
  Shoulder Guard: 3.6k
  Top1: 3.5k
  Top2: 10.8k
specs:
  - skeleton
  - morph-targets
  - clothing
  - animations
  - textures
  - materials
  - extra-notes
asset_content: /images/aren/asset_content.mp4
fab_link: https://www.fab.com/listings/96bd66d9-017d-4125-a258-02d341a8260b
artstation_link: https://www.artstation.com/artwork/Jrq0m0
gumroad_link: https://rabbitheart.gumroad.com/l/aren
---

<script>
  import ArenChangeLog from "./aren-changelog.md"

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
  export let toggle_specs = () => {};
<\/script>


<!-- 
        SKELETON
 -->

{#if SKELETON}

- Epic UE4 Mannequin Skeleton (No Additional Bones)
- Modular Earrings, Elf Skirts and Hairs has additional bones for enhanced dynamic simulations using KawaiiPhysics or other compatible systems

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

- Clothing is setup for the hairs and elf skirts and they are enabled by default.
- Includes Modular Hair, Elf Skirt, and Earrings with additional bones for enhanced dynamic simulations using KawaiiPhysics or other compatible systems

{/if}


<!-- 
        ANIMATIONS
 -->

{#if ANIMATIONS}

- Includes basic movement animations: Idle, Walk, Run, Jump_Start, Jump_Loop, and Jump Jump_End (retargeted from UE4 Mannequin animations).
- Additional demo idle animations retargeted from Paragon characters (Kallari, Kwang, Wukong) and Echo are provided.
- Includes a smile-and-blink animation (\`Anim_Aren_Smile_Blink\`) that can be applied additively in the Anim Graph.
- Includes a few poses (T-Pose & A-Pose) for animation retargeting.


{/if}

<!-- 
        TEXTURES
 -->

{#if TEXTURES}

- **PBR** (Physically Based Rendering) Metallic/Roughness Textures
- Normal Map Format: OpenGL (all Normals textures are set to Flip Green Channel)
- Basic Texture Set: **Diffuse** (T\\_\\*\\*\\*\\_D,) **AO Roughness Metallic** (T\\_\\*\\*\\*\\_ORM), **Normal** (T\\_\\*\\*\\*\\_N)
- Some mesh has **RGB** Texture (T_\\*\\*\\*\\_RGB) that are used in the material to adjust colors.
- T_\\*\\*\\*\\_ORM textures pack 3 channels: Ambient Occlusion in Red Channel, Roughness in Green Channel, and Metallic in Blue Channel

**Texture Resolutions**

- Body 4k, Head 2k, Teeth Tongue 2k, Eyes Eyeshadow Eyebrow Eyelashes 1k
- Hairs 4k
- Clothes mostly 2k.
- Belts1_ElfSkirt1 (4k), Coverall (4k)
- There are also non square textures: Belts1 (1x2k), Crown Earrings (2x1k), ElfSkirt1 (2x4k), ElfSkirt2 (1x2k), Top1 (4x2k)
- Weapons 2x4k
- Note: 1x2k means 1024x2048, 4x2k means 4096x2048 and so on

**Body**

- Diffuse, Normal, Roughness. (AO Textures are there but they are not being used)

**Eyes**

- Diffuse, Normal and Specular

**Hairs**

- Albedo, Alpha, Depth, Direction, ID and Root

**Cloth**

- 15 Cloth Texture Sets: Armor Boots, Belts1, Belts1_ElfSkirt1, Belts2, Boots Gloves, Chest Armor, Coverall, Crown Earrings, Elf Skirt1, Elf Skirt2, Hair Band, Hoodie, Jacket Armor, Shoulder Arm Guard, Top1

{/if}

<!-- 
        MATERIALS
 -->

{#if MATERIALS}

- Includes basic master materials (MA_Generic) and specialized variants for masking (\`MA_Generic_Masked\`), color adjustments (\`MA_Generic_Tint\`), or both (\`MA_Generic_Tint_Masked\`).
- Skin material features parameters to modify fingernail and scalp color, add tattoos (using a mask), and adjust skin color, brightness, desaturation, roughness, and specular intensity.
- Aren and Lia share many of the same materials; Check out [Lia Asset Overview](https://youtu.be/1-QuyVHN56Q) for some demos on the materials.

**Eyes**

- Eye material includes parameters for adjusting eye color and cornea size.
- A Duo eye material allows each eye to have a different color.
- For cinematic quality, the showcase video uses the Metahuman eye shader. You can migrate the shader, apply it to Aren's eyes, and adjust the iris size for a similar look. More info about using Metahuman Eyes [here](https://miica37.github.io/docs/unreal-characters/metahuman-eyes/).
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
- **The concept for the main cloth outfit is created with the help of AI.**

*Navigate to ...*
- <a href="#polycount">Polycount</a>
- [ChangeLog](#change-log)

{/if}

<!-- 
        ADDITIONAL BONES
 -->

{#if ADDITIONAL_BONES}

### Dynamic Meshes

![Available Dynamic Meshes](/images/aren/additional_bones/dyn_meshes.png)


#### DYN_Belts1_ElfSkirt1

![DYN_Belts1_ElfSkirt1 bones](/images/aren/additional_bones/DYN_Belts1_ElfSkirt1_bones.jpg)

#### DYN_Earrings

![DYN_Earrings bones](/images/aren/additional_bones/DYN_Earrings_bones.jpg)

#### DYN_ElfSkirt1

![DYN_ElfSkirt1 bones](/images/aren/additional_bones/DYN_ElfSkirt1_bones.jpg)

#### DYN_ElfSkirt2

![DYN_ElfSkirt2 bones](/images/aren/additional_bones/DYN_ElfSkirt2_bones.jpg)

#### DYN_ElfSkirt3

![DYN_ElfSkirt3 bones](/images/aren/additional_bones/DYN_ElfSkirt3_bones.jpg)

#### DYN_Hair1_Long

![DYN_Hair1_Long bones](/images/aren/additional_bones/DYN_Hair1_Long_bones.jpg)

#### DYN_Hair1_Short

![DYN_Hair1_Short bones](/images/aren/additional_bones/DYN_Hair1_Short_bones.jpg)

#### DYN_Hair2

![DYN_Hair2 bones](/images/aren/additional_bones/DYN_Hair2_bones.jpg)

#### DYN_Hair3

![DYN_Hair3 bones](/images/aren/additional_bones/DYN_Hair3_bones.jpg)

#### DYN_Hair4

![DYN_Hair4 bones](/images/aren/additional_bones/DYN_Hair4_bones.jpg)

{/if}

<!-- 
        CHANGE LOG
 -->

{#if CHANGE_LOG}

<ArenChangeLog />

{/if}

<style>

</style>
`;export{e as default};