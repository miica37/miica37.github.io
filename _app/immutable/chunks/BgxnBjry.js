var e=`---
character_name: Sapphire
tagline: A modular fantasy commoner girl character built for Unreal Engine and Unity, designed for flexible customization and cross-engine use.
short_tagline: Fantasy commoner girl for Unreal Engine and Unity.
cover_image: sapphire-cover.jpg
gallery:
  - sapphire-cover.jpg
  - sapphire_gallery1.png
  - sapphire_gallery2.png
  - Sapphire_physics_asset.png
  - Sapphire_scale_reference.png
  - Sapphire_skeleton.png
  - Sapphire-facial-expressions.png
  - Sapphire-fullbody.png
  - Sapphire-wireframe.webp
youtube:
  Unreal & Unity ｜ Commoner Girl Sapphire ｜ Showcase: v9CuH06SHN0
polycount:
  Sapphire1: 36.3k
specs:
  - skeleton
  - morph-targets
  - clothing
  - animations
  - textures
  - materials
  - extra-notes
fab_link: https://www.fab.com/listings/435cb305-891c-4039-8946-f49196093e1a
gumroad_link: https://rabbitheart.gumroad.com/l/sapphire
---

<script>
  import SapphireChangeLog from "./sapphire-changelog.md"

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
- Modular Hair has additional bones for enhanced dynamic simulations using KawaiiPhysics or other compatible systems

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

- Clothing is setup for the hair and skirt and enabled by default.
- Includes Modular Hairs with additional bones for enhanced dynamic simulations using KawaiiPhysics or other compatible systems

{/if}


<!-- 
        ANIMATIONS
 -->

{#if ANIMATIONS}

- Includes basic movement animations: Idle, Walk, Run, Jump_Start, Jump_Loop, and Jump Jump_End (retargeted from UE4 Mannequin animations).
- Additional demo idle animations retargeted from Paragon character Aurora and Echo are provided.
- Includes a smile-and-blink animation (\`Anim_Sapphire_Smile_Blink\`) that can be applied additively in the Anim Graph.
- Includes a few poses (T-Pose & A-Pose) for animation retargeting.

{/if}

<!-- 
        TEXTURES
 -->

{#if TEXTURES}

- **PBR** (Physically Based Rendering) Metallic/Roughness Textures
- Normal Map Format: OpenGL (all Normals textures have Flip Green Channel)
- Basic Texture Set: **Diffuse** (T\\_\\*\\*\\*\\_D,) **AO Roughness Metallic** (T\\_\\*\\*\\*\\_ORM), **Normal** (T\\_\\*\\*\\*\\_N)
- Outfit has **RGB** Texture (T_\\*\\*\\*\\_RGB) that are used in the material to adjust colors.
- T_\\*\\*\\*\\_ORM textures pack 3 channels: Ambient Occlusion in Red Channel, Roughness in Green Channel, and Metallic in Blue Channel

**Texture Resolutions**

- Body 2k, Head 2k
- Hair 4k
- Outfit 4k

**Body**

- Diffuse, Normal and Roughness textures.

**Eyes**

- Diffuse, Normal and Specular

{/if}

<!-- 
        MATERIALS
 -->

{#if MATERIALS}

- Includes basic master materials (MA_Generic) and specialized variants for masking (\`MA_Generic_Masked\`), color adjustments (\`MA_Generic_Tint\`), or both (\`MA_Generic_Tint_Masked\`).
- Skin material features parameters to modify fingernail and scalp color, add tattoos (using a mask), and adjust skin color, brightness, desaturation, roughness, and specular intensity.
- Sapphire (this character) and Lia (my other character) share many of the same materials. Check out [Lia Asset Overview](https://youtu.be/1-QuyVHN56Q) for some demos on the materials.

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

- **Only 2 LODs**
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

![Available Dynamic Meshes](/images/sapphire/additional_bones/dyn_meshes.png)

#### DYN_Hair

![DYN_Hair bones](/images/sapphire/additional_bones/DYN_Hair_bones.png)

#### DYN_Skirt

![DYN_Skirt bones](/images/sapphire/additional_bones/DYN_Skirt_bones.png)

#### DYN_Skirt_with_Arms_Skel

![DYN_Skirt_with_Arms_Skel bones](/images/sapphire/additional_bones/DYN_Skirt_with_Arms_Skel_bones.png)

<br>

{/if}

<!-- 
        CHANGE LOG
 -->

{#if CHANGE_LOG}

<SapphireChangeLog />

{/if}

<style>

</style>
`;export{e as default};