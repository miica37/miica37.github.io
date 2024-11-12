---
character_name: Aren
cover_image: 'aren-cover.jpg'
gallery:
  - aren-cover.png
  - gallery-preview0.png
  - gallery-preview1.png
  - gallery-preview1b.png
  - gallery-preview2.png
  - gallery-preview3-customize-looks.png
  - gallery-preview3-customize-looks-back.png
  - gallery-preview4-facial.png
  - gallery-preview5-skin-colors.png
  - gallery-preview6-gameplay-test.png
  - gallery-preview7-hairs.png
  - gallery-preview8-body.png
  - gallery-preview9-weapons.png
  - gallery-preview10-ears.png
  - gallery-preview11-fingernails.png
  - gallery-preview12-scale.png
  - gallery-preview13-skeleton.png
  - gallery-preview14-physic-assets.png
youtube:
  "UE Male Elf Ranger Character - Aren Showcase": WbG93p-86YI
  "UE Male Elf Ranger Character - Aren Asset Overview": r53O1MxDDnU
polycount:
  Aren 1: 75.2k
  Aren 2: 85.6k
  Aren 3: 67.7k
  Fullbody: 38.8k
  Hair1 Short: 23.5k
  Hair1 Long: 21.2k
  Hair2: 23.8k
  Hair3: 13.7k
  Arm Guard: 8.8k
  Armor Boots: 10.1k
  Belts1: 4.8k
  Belts2: 7.4k
  Boots2: 4.2k
  Chest Armor: 7.3k
  Coverall: 9.9k
  Coverall No Sleeves: 6.1k
  Crown: 0.9k
  Elf Skirt 1: 2.2k
  Elf Skirt 2: 2k
  Feather Earrings: 2.1k
  Moon Earrings: 2k
  Gloves: 7.5k
  Hoodie 1: 4.6k
  Hoodie 2: 4.5k
  Jacket Armor: 5k
  Shoulder Guard: 3.6k
  Top1: 3.5k
specs:
  - skeleton
  - morph-targets
  - clothing
  - animations
  - textures
  - materials
  - extra-notes
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
</script>


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
- Includes a smile-and-blink animation (`Anim_Aren_Smile_Blink`) that can be applied additively in the Anim Graph.
- Includes a few poses (T-Pose & A-Pose) for animation retargeting.


{/if}

<!-- 
        TEXTURES
 -->

{#if TEXTURES}

- **PBR** (Physically Based Rendering) Metallic/Roughness Textures
- Normal Map Format: OpenGL (all Normals textures are set to Flip Green Channel)
- Basic Texture Set: **Diffuse** (T_***_D,) **Metallic Roughness AO** (T_***_MRAO), **Normal** (T_***_N)
- T_***_MRAO textures pack 3 channels: Metallic in Red Channel, Roughness in Green Channel, and AO in Blue Channel
- Some mesh has **RGB** Texture (T_***_RGB) that are used in the material to adjust colors.

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

- Includes basic master materials (MA_Generic) and specialized variants for masking (`MA_Generic_Masked`), color adjustments (`MA_Generic_Tint`), or both (`MA_Generic_Tint_Masked`).
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

### ⚠️ Notes

- **No LOD**
- **No Blueprints**
- **No Animations** (except for a few retargeted animations provided for demo purposes)
- **The concept for the main cloth outfit is created with the help of AI.**

**Updates**

- 2024-08-26: Fix broken blendshapes specific to UE5.4

{/if}

<!-- 
        ADDITIONAL BONES
 -->

{#if ADDITIONAL_BONES}

wip

{/if}

<!-- 
        CHANGE LOG
 -->

{#if CHANGE_LOG}

<ArenChangeLog />

{/if}

<style>

</style>