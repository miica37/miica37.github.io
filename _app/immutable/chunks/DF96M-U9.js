var e=`---
character_name: Lia
tagline: A fully modular fantasy female elf ranger for Unreal Engine, equipped with a bow, expressive customization, and a graceful adventure-ready design.
short_tagline: Fantasy female elf ranger with bow and modular customization.
cover_image: lia-cover.jpg
gallery:
  - lia-cover.jpg
  - Lia_Gallery2_cinematic1.jpg
  - Lia_Gallery2_cinematic2.jpg
  - Lia_Gallery2_cinematic3.jpg
  - Lia_Gallery2_cinematic4.jpg
  - Lia_Gallery3_closeup.jpg
  - Lia_Gallery4_closeup smile teeth.jpg
  - Lia_Gallery6_front back.jpg
  - Lia_Gallery7_multi_front.jpg
  - Lia_Gallery8_multi_back.jpg
  - Lia_Gallery9_skin_color.jpg
  - Lia_Gallery10_facial_expressions.jpg
  - Lia_Gallery11_hairs.jpg
  - Lia_Gallery12_ears.jpg
  - Lia_Gallery13_fullbody.jpg
  - Lia_Gallery14_weapon.jpg
  - Lia_Gallery15_weapon2.jpg
  - Lia_Gallery16_scale_reference.jpg
  - Lia_Gallery17_skeleton.jpg
  - Lia_Gallery18_physic_assets.jpg
  - Lia_Gallery19_fingernails.jpg
youtube:
  UE Female Elf Ranger Character - Lia Showcase (Update 2025): dD-umMPZeNY
  UE Female Elf Ranger Character - Lia Showcase: rvZucOsefK0
  UE Female Elf Ranger Character - Lia Asset Overview: 1-QuyVHN56Q
  Aren X Lia: GmochwcC10o
polycount:
  Lia1: 72.7k
  Lia2: 74.3k
  Lia3: 76.2k
  Lia4: 68k
  Fullbody: 38.4k
  Hair1: 14.4k
  Hair2: 15.7k
  Hair3: 10.5k
  Hair4: 17.2k
  Crown: 0.7k
  Crown2: 1.7k
  Wings Headpiece: 1k
  Hoodie1: 4.6k
  Hoodie2: 4.5k
  Tops: 6.7k
  Coverall: 7.4k
  Coverall2: 8.7k
  Glove: 1.7k
  Glove2: 5.4k
  Bracers: 2.9k
  Belts (no_bag): 2.6k
  Belts_With_Bag: 5.5k
  Elfskirt: 2.8k
  Loincloth: 0.7k
  Boots: 4.8k
  Boots BracersGlove: 9.4k
  Bow: 4.2k
  Quiver: 2.5k
  Dagger: 1.8k
  Dagger Sheath: 3k
specs:
  - skeleton
  - morph-targets
  - clothing
  - animations
  - textures
  - materials
  - extra-notes
fab_link: https://www.fab.com/listings/ccd9bc6e-1fba-4d7b-83ef-4ebda8106f59
artstation_link: https://www.artstation.com/artwork/XJwR6y
gumroad_link: https://rabbitheart.gumroad.com/l/lankzg
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
<\/script>


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
- Includes a smile-and-blink animation (\`Anim_Lia_Smile_Blink\`) that can be applied additively in the Anim Graph.
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

- Includes basic master materials (MA_Generic) and specialized variants for masking (\`MA_Generic_Masked\`), color adjustments (\`MA_Generic_Tint\`), or both (\`MA_Generic_Tint_Masked\`).
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

### Dynamic Meshes

![Available Dynamic Meshes](/images/lia/additional_bones/dyn_meshes.jpg)


#### DYN_Belt

![DYN_Belt bones](/images/lia/additional_bones/DYN_Belt_bones.jpg)

#### DYN_ElfSkirt

![DYN_ElfSkirt bones](/images/lia/additional_bones/DYN_ElfSkirt_bones.jpg)

#### DYN_LoinCloth

![DYN_ElfSkirt bones](/images/lia/additional_bones/DYN_LoinCloth_bones.jpg)

#### DYN_Hair1

![DYN_Hair1 bones](/images/lia/additional_bones/DYN_Hair1_bones.jpg)

#### DYN_Hair2

![DYN_Hair2 bones](/images/lia/additional_bones/DYN_Hair2_bones.jpg)

#### DYN_Hair3

![DYN_Hair3 bones](/images/lia/additional_bones/DYN_Hair3_bones.jpg)

#### DYN_Hair4

![DYN_Hair4 bones](/images/lia/additional_bones/DYN_Hair4_bones.jpg)


{/if}

<!-- 
        CHANGE LOG
 -->

{#if CHANGE_LOG}

<LiaChangeLog />

{/if}

<style>

</style>
`;export{e as default};