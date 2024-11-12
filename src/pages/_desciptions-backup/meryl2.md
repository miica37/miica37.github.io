_______________ ❤ **Youtube Showcase** ❤ _______________  

- ❝ [UE Apprentice Witch Girl - Meryl Showcase](https://youtu.be/54WlGsCpfjo) ❞
- ❝ [UE Apprentice Witch Girl - Meryl Asset Overview](https://youtu.be/w5Ii1Vk1nZI) ❞

  
_______________ 🛈 Polycount _______________  

- Meryl1 (48.6k Tris)
- Meryl2 (52k Tris)
- Meryl3 (53.9k Tris)
- Fullbody (32.6k Tris)
- Hair1 (4.8k Tris)
- Hair2 (6k Tris)
- Hair3 (7.2k Tris)
- Hair4 (6.6k Tris)
- Hair5 (7.2k Tris)
- Hat1 (2.2k Tris)
- Hat2 (2.1k Tris)
- Hat3 (3.8k Tris)
- Staff1 (6.8k Tris)
- Staff2 (1.2k Tris)
- Top1 (8.6k Tris)
- Top2 (8k Tris)
- Top3 (10.6k Tris)
- Skirt1 (8.3k Tris)
- Skirt2 (3.2k Tris)
- Skirt3 (10.4k Tris)
- Bloomers (1.2k Tris)
- Stockings (3.7k Tris)
- Boots1 (4.2k Tris)
- Boots2 (4.3k Tris)
- Shoe1 (3k Tris)

  
_______________ ⚠️ Notes _______________

  

This new update (August 2023) is incompatible with older 2022 version. Please backup your project before you replace or update old Meryl in already working project because there are too many changes (in names, paths, etc), you probably need to delete the old Meryl and resetup everything. Sorry for the inconvenience 🙏

  

- **No LOD** (the LOD in previous version has been removed)
- **No Blueprints**
- **No Animations** (only some retargeted for demo purposes)

  

**Updates**

- 2024-08-26: Fix broken blendshapes specific to UE5.4
- 2023-11-11: [Meryl 3.2](https://miica37.github.io/docs/meryl/changelog/#meryl-32) (Fixed some skinning issues; Update freckles; Add Eye makeup; etc...)
- 2023-09-06: [Meryl 3.1](https://miica37.github.io/docs/meryl/changelog/#meryl-31) (Added back previous face; freckles; beauty spot; lips tint; etc...)
- 2023-08-14: [Mery 3.0](https://miica37.github.io/docs/meryl/changelog/) (1 new outfit; 1 new hairstyle; update preview level; etc...)

  

  

  

_______________ ˚₊‧꒰ა ⭐ Skeleton ⭐ ໒꒱ ‧₊˚ _______________  

- [Epic UE4 Mannequin Skeleton (No Additional Bones)](https://miica37.github.io/docs/general/#characters-skeleton)
- Modular Hair1 to Hair 5, Hat1, Hat3, Skirt1, Skirt2 and Skirt3 has additional bones. They can be used for physics simulation and works well with [KawaiiPhysics](https://github.com/pafuhana1213/KawaiiPhysics) and [SPCR Joint Dynamics](https://github.com/SPARK-inc/SPCRJointDynamicsUE4)
- Added Sockets: hand_rSocket (for holding a weapon) and headSocket (for wearing a hat)

  
_______________ ˚₊‧꒰ა ⭐ Morph Targets (Blendshapes) ⭐ ໒꒱ ‧₊˚ _______________

  

- Head has all Apple Blendshapes ([refer to Apple's ARKit](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/)) and can be used with the LiveLink plugin.
- Body has fingernails morph (to make it longer)

  
_______________ ˚₊‧꒰ა ⭐ Clothing ⭐ ໒꒱ ‧₊˚ _______________  

- Clothing is setup for the hairs and skirt
- Modular Hairs, Hats (only Hat1 and Hat3) and Skirts with additional bones for you to create a much better looking simulation with [KawaiiPhysics](https://github.com/pafuhana1213/KawaiiPhysics) and [SPCR Joint Dynamics](https://github.com/SPARK-inc/SPCRJointDynamicsUE4)

  
_______________ ˚₊‧꒰ა ⭐ Animations ⭐ ໒꒱ ‧₊˚ _______________  

- Only Basic Idle, Walk, Run, Jump_Start, Jump_Loop, Jump_End (Retargeted from UE4's Mannequin's Animation)
- There are also a few Idle animations retargeted from Paragon characters (Yin, Shinbi, Aurora) and Echo, but they are just for demo purposes
- There is a Smile Blink Animation that you can use to add on top of other animations (using Additive in Anim Graph)
- T-Pose provided for use in animation retargeting

  
_______________ ˚₊‧꒰ა ⭐ Textures ⭐ ໒꒱ ‧₊˚ _______________  

- **PBR** (Physically Based Rendering) Metallic/Roughness Textures
- Normal Map Format: OpenGL (all Normals textures have Flip Green Channel)
- Basic Texture Set: **Diffuse** (T_***_D,) **Metallic Roughness AO** (T_***_MRAO), **Normal** (T_***_N)
- T_***_MRAO textures pack 3 channels: Metallic in Red Channel, Roughness in Green Channel, and AO in Blue Channel
- Some mesh has **RGB** Texture (T_***_RGB) that are used in the material to adjust colors.

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

  
_______________ ˚₊‧꒰ა ⭐ Materials ⭐ ໒꒱ ‧₊˚ _______________  

- There are Basic Materials (MA_Generic) and materials with additional features to do masking (MA_Generic_Masked), color adjustments (MA_Generic_Tint) or both (MA_Generic_Tint_Masked). (MA = Master Material)
- Skin material has parameters to change fingernail color, scalp color and add tattoo (need to provide it a mask). Can also change skin color, color brightness, desaturate, roughness or specular intensity.
- Meryl and Lia (my other character) share many of the same master materials. Check out ❝ [Lia Asset Overview](https://youtu.be/1-QuyVHN56Q) ❞ to see some examples.

**Eyes**

- Eye material has parameters to change eye color and the size of cornea
- There is also a Duo eyes material to give each eye a different color.
- For cinematic, Metahuman eyes shader looks much better and it is used in the showcase video. You can migrate the metahuman shader and apply it to Lia's eye, and then adjust the iris size a little bit, they will look like in the showcase video.
- Eyes shadow opacity can be adjusted

  
_______________ ˚₊‧꒰ა ⭐ Additional Bones⭐ ໒꒱ ‧₊˚_______________  

The list is too long so I put it in the documentation: [https://miica37.github.io/docs/meryl/dynamic-meshes/#additional-bones](https://miica37.github.io/docs/meryl/dynamic-meshes/#additional-bones)

  

  
_______________ ˗ˏˋ ꒰ 💌 ꒱ ˎˊ˗_______________  

❤ Feel free to email miicaneo@gmail.com for any issues and inquiries. ❤

* Fbx source files will be provided on request *

### Technical Details

Features:

-  LiveLink Morph Targets
-  Full body under clothes
-  RGB Mask for customizing colors on materials
- Skeletal mesh with additional bones for Hairs, Hats and Skirts, for user to setup their own physics simulation

  

Rigged: Yes

Rigged to Epic skeleton: Yes

If rigged to the Epic skeleton, IK bones are included: No

Animated: No

Number of Animations: Basic animation from Unreal Engine 4's 3rd person template

Number of characters: 1

Vertex counts of characters: Character: ~33k to 37k Verts, Weapon: 791 and 4716 Verts

Number of Materials and Material Instances: 24 Master Materials, 76 Material Instances

Number of Textures: 120

Texture Resolutions: 2048x2048, Eyes and Eyes Shadow: 1024x1024

Supported Development Platforms:

Windows: Yes

Mac: Yes

Documentation: [https://miica37.github.io/docs/meryl/](https://miica37.github.io/docs/meryl/)

Important/Additional Notes: