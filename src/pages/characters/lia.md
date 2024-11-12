---
character_name: Lia
cover_image: 'lia-cover.jpg'
gallery:
  - lia-cover.jpg
  - featured-image.png
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
  "UE Female Elf Ranger Character - Lia Showcase": rvZucOsefK0
  "UE Female Elf Ranger Character - Lia Asset Overview": 1-QuyVHN56Q
polycount:
  Lia: 73.8k
  Fullbody: 38.4k
  Hair1: 14.4k
  Hair2: 15.7k
  Hair3: 10.5k
  Bow: 4.2k
  Dagger: 1.8k
  Hoodie1: 4.6k
  Hoodie2: 4.5k
  Coverall: 7.3k
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
  import LiaChangeLog from "./lia-changelog.md"

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
- Modular Elf Skirt, Loin Cloth, Hair1, Hair2, Hair3 and Belt has additional bones for enhanced dynamic simulations using KawaiiPhysics or other compatible systems
- Added Sockets: ik_hand_rSocket and ik_hand_gunSocket (for demoing bow animation)

{/if}


<!-- 
        MORPH TARGETS
 -->

{#if MORPH_TARGETS}

- Head has all Apple Blendshapes ([refer to Apple's ARKit](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/)) and can be used with the LiveLink plugin
- Body has breast morph (to make it smaller) and fingernails morph (to make it longer)
- Coverall also has a breast morph
- Please note that currently, there is no blueprint setup for LiveLink, and the blendshapes have not been tested due to the lack of access to Apple device

{/if}

<!-- 
        CLOTHING
 -->

{#if CLOTHING}

- Clothing is setup for the hairs, loin cloth and elf skirt (but they are not activated by default).
- Includes Modular Hair, Elf Skirt, and Loincloth with additional bones for enhanced dynamic simulations using KawaiiPhysics or other compatible systems

{/if}


<!-- 
        ANIMATIONS
 -->

{#if ANIMATIONS}

- Includes basic movement animations: Idle, Walk, Run, Jump_Start, Jump_Loop, and Jump Jump_End (retargeted from UE4 Mannequin animations).
- Additional demo idle animations retargeted from Paragon characters (Sparrow, Yin, Shinbi, Aurora) and Echo are provided.
- Includes a smile-and-blink animation (`Anim_Lia_Smile_Blink`) that can be applied additively in the Anim Graph.
- Includes a few poses (T-Pose & A-Pose) for animation retargeting.

{/if}

<!-- 
        TEXTURES
 -->

{#if TEXTURES}

- **PBR** (Physically Based Rendering) Metallic/Roughness Textures
- Normal Map Format: OpenGL (all Normals textures have Flip Green Channel)
- Basic Texture Set: **Diffuse** (T_***_D,) **Metallic Roughness AO** (T_***_MRAO), **Normal** (T_***_N)
- T_***_MRAO textures pack 3 channels: Metallic in Red Channel, Roughness in Green Channel, and AO in Blue Channel
- Some mesh has **RGB** Texture (T_***_RGB) that are used in the material to adjust colors.

**Texture Resolutions**

- Body 4k, Head 2k, Teeth Tongue 2k, Eyes Eyeshadow Eyebrow Eyelashes 1k
- Hairs 4k
- Clothes 2k
- Weapons 2k

**Body**

- Diffuse, Normal, Roughness and AO textures.
- There are 4 extra skin color variations: Darker, Light Blue, Blue and Purple
- and two levels of Dirt.

**Eyes**

- Diffuse, Normal and Specular

**Hairs**

- Albedo, Alpha, Depth, Direction, ID and Root

**Cloth**

- 12 Cloth Texture Sets: Belts, Boots Gloves, Gloves2, Coverall, Crown1, Crown2, Elf Skirt, Hoodie, Hoodie Canvas1, Hoodie Canvas2, Loin Cloth, Tops (All are 2k Textures, except: Crown2: 1k, Gloves2: 1k)
- 7 Cloth Textures with two level of Dirt (Belts, Boots Gloves, Coverall, Elf Skirt, Hoodie, Loin Cloth, Tops).
- Note that Crowns, Gloves2 and Hoodie Canvas don't have dirt texture.

**Weapon**

- also has two levels of Dirt.

{/if}

<!-- 
        MATERIALS
 -->

{#if MATERIALS}

- Includes basic master materials (MA_Generic) and specialized variants for masking (`MA_Generic_Masked`), color adjustments (`MA_Generic_Tint`), or both (`MA_Generic_Tint_Masked`).
- Skin material features parameters to modify fingernail and scalp color, add tattoos (using a mask), and adjust skin color, brightness, desaturation, roughness, and specular intensity.
- Check out [Lia Asset Overview](https://youtu.be/1-QuyVHN56Q) for some demos on the materials.

**Eyes**

- Eye material includes parameters for adjusting eye color and cornea size.
- A Duo eye material allows each eye to have a different color.
- For cinematic quality, the showcase video uses the Metahuman eye shader. You can migrate the shader, apply it to Lia's eyes, and adjust the iris size for a similar look. More info about using Metahuman Eyes [here](https://miica37.github.io/docs/unreal-characters/metahuman-eyes/).
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

<LiaChangeLog />

{/if}

<style>

</style>