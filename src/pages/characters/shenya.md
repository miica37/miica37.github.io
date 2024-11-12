---
character_name: Shenya
cover_image: 'shenya-cover.jpg'
gallery:
  - shenya-cover.jpg
  - featured-image.jpg
  - gallery-preview1.png
  - gallery-preview1b.png
  - gallery-preview2.png
  - gallery-preview3-customize-looks.png
  - gallery-preview3-customize-looks-back.png
  - gallery-preview4-facial.png
  - gallery-preview6-gameplay-test.png
  - gallery-preview7-hairs.png
  - gallery-preview8-body.png
  - gallery-preview9-weapons.png
  - gallery-preview12-scale.png
  - gallery-preview13-skeleton.png
  - gallery-preview14-physic-assets.png
  - gallery-preview15-preview-map.png
youtube:
  "UE Casual Female - Shenya Showcase": OfM1V1eI1jI
  "UE Casual Female - Sehnya Asset Overview": nUcbepp6P_k
  "Using Kawaii Physics with Rabbit Heart Character Shenya": HkaO96Ox8yg
polycount:
  Shenya 1 (Jacket + Long Jeans Outfit): 71.2k
  Shenya 2 (Hoodie Jacket + Short Jeans Outfit): 65.5k
  Fullbody: 38.4k
  Hair1: 13.2k
  Hair2: 15.3k
  Hair3: 12.7k
  Hair4: 15.6k
  Tanktop: 2.7k
  Jacket: 13.4k
  Hoodie: Jacket(9k
  Jeans: 7.6k
  Short: Jeans(4k
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
</script>


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
- Includes a smile-and-blink animation (`Anim_Shenya_Smile_Blink`) that can be applied additively in the Anim Graph.
- Includes a few poses (T-Pose & A-Pose) for animation retargeting.

{/if}

<!-- 
        TEXTURES
 -->

{#if TEXTURES}

- **PBR** (Physically Based Rendering) Metallic/Roughness Textures
- Normal Map Format: OpenGL (all Normals textures have Flip Green Channel)
- Basic Texture Set: **Diffuse** (T\_*\*\*\_D,) **Metallic Roughness AO** (T\_\*\*\*\_MRAO), **Normal** (T\_\*\*\*\_N)
- T\_\*\*\*\_MRAO textures pack 3 channels: Metallic in Red Channel, Roughness in Green Channel, and AO in Blue Channel
- Some mesh has **RGB** Texture (T\_\*\*\*\_RGB) that are used in the material to adjust colors.

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

- Includes basic master materials (MA_Generic) and specialized variants for masking (`MA_Generic_Masked`), color adjustments (`MA_Generic_Tint`), or both (`MA_Generic_Tint_Masked`).
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

### ⚠️ Notes

- **No LOD** (the LOD in previous version has been removed)
- **No Blueprints**
- **No Animations** (only some retargeted for demo purposes)

**Updates**

- 2024-08-26: Fix broken blendshapes specific to UE5.4
- 2023-10-17: [Shenya 3.0](https://miica37.github.io/docs/shenya/changelog/#shenya-30) (Adjust face, body, skinning, materials, preview level, etc. Rework 2 existing hairs and added two new hairs. Added Accessory and a baseball bat. Added Tpose and some other poses.)

{/if}

<!-- 
        ADDITIONAL BONES
 -->

{#if ADDITIONAL_BONES}

<!-- For informations on dynamic meshes, please check out [its section in the Characters Common Sections](/docs/unreal-characters/dynamic-meshes) -->


### Additional Bones for Dynamic Meshes

-- Naming Conventions

In the Oct 2023 update of naming convention to the bones, I have switched to use **SC_** (which stands for Skeleton Chain) as the prefix to all bones.

I might change this again in the future if I found a better way to name them.

--

#### How to read the list below? Take Hair1 as an example:

<sub>SC_01_01</sub> is the root joint while <sub>SC_01_end</sub> is the end joint. The end joint is not weighted, which means it doesn't affect anything no matter how it transforms.

![Bones naming example](/images/shenya/bones/bones-naming-example.jpg)

The first joint chain (<sub>SC_01</sub>) starts from the left front side of the character and ends at the right front side of the character (<sub>SC_07</sub>) (It goes counter-clockwise, if looking from the top of the character)

![Bones chain direction](/images/shenya/bones/bones-chain-direction2.jpg)

In the naming convention below, I will use this format: <sub>SC_01</sub><sup>(5)</sup> which indicates a joint chain of 5 (<sup>(5)</sup>) joints.


<DoubleColumns title="DYN_Hair1">
	{#snippet column1()}

`hair1_front_c`<sup>(5)</sup>, 
`hair1_front_r`<sup>(5)</sup>, 
`hair1_front_l`<sup>(5)</sup>, 
`hair1_side_r`<sup>(5)</sup>, 
`hair1_side_l`<sup>(5)</sup>, 
`hair1_back1_r`<sup>(5)</sup>, 
`hair1_back2_r`<sup>(5)</sup>, 
`hair1_back3_r`<sup>(5)</sup>, 
`hair1_back1_l`<sup>(5)</sup>, 
`hair1_back2_l`<sup>(5)</sup>, 
`hair1_back3_l`<sup>(5)</sup><br/>(55 Additional Bones)

	{/snippet}
	{#snippet column2()}



	{/snippet}
</DoubleColumns>

{/if}

<!-- 
        CHANGE LOG
 -->

{#if CHANGE_LOG}

<ShenyaChangeLog />

{/if}

<style>

</style>