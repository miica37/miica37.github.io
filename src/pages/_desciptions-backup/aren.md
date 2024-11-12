_______________ ❤ **Youtube Showcase** ❤ _______________

  

- ❝ [UE Male Elf Ranger Character - Aren Showca](https://youtu.be/WbG93p-86YI)[se](https://youtu.be/OfM1V1eI1jI) ❞
- ❝ [UE Male Elf Ranger Character - Aren Asset Overview](https://youtu.be/r53O1MxDDnU) ❞

  
_______________ 🛈 Polycount _______________

  

- Aren 1 (75.2k Tris)
- Aren 2 (85.6k Tris)
- Aren 3 (67.7k Tris)
- Fullbody (38.8k Tris)
- Hair1 Short (23.5k Tris)
- Hair1 Long (21.2k Tris)
- Hair2 (23.8k Tris)
- Hair3 (13.7k Tris)
- Arm Guard (8.8k Tris)
- Armor Boots (10.1k Tris)
- Belts1 (4.8k Tris)
- Belts2 (7.4k Tris)
- Boots2 (4.2k Tris)
- Chest Armor (7.3k Tris)
- Coverall (9.9k Tris)
- Coverall No Sleeves (6.1k Tris)
- Crown (0.9k Tris)
- Elf Skirt 1 (2.2k Tris)
- Elf Skirt 2(2k Tris)
- Feather Earrings (2.1k Tris)
- Moon Earrings (2k Tris)
- Gloves (7.5k Tris)
- Hoodie 1 (4.6k Tris)
- Hoodie 2 (4.5k Tris)
- Jacket Armor (5k Tris)
- Shoulder Guard (3.6k Tris)
- Top1 (3.5k Tris)

  
_______________ ⚠️ Notes _______________

  

- **No LOD**
- **No Blueprints**
- **No Animations**
- **The concept for the main cloth outfit is created with the help of AI.**

**Updates**

- 2024-08-26: Fix broken blendshapes specific to UE5.4

  

  

_______________ ˚₊‧꒰ა ⭐ Skeleton ⭐ ໒꒱ ‧₊˚ _______________

  

- Epic UE4 Mannequin Skeleton (No Additional Bones)
- Modular Earrings, Elf Skirts and Hairs has additional bones. They can be used for physics simulation and works with [KawaiiPhysics](https://github.com/pafuhana1213/KawaiiPhysics).

  

  

_______________ ˚₊‧꒰ა ⭐ Morph Targets (Blendshapes) ⭐ ໒꒱ ‧₊˚ _______________

  

- Head has all Apple Blendshapes ([refer to Apple's ARKit](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/)) and can be used with the LiveLink plugin.
- Note that as for now, there are no blueprint setup for LiveLink and the blendshapes are not tested due to no access to a Apple device.

  
_______________ ˚₊‧꒰ა ⭐ Clothing ⭐ ໒꒱ ‧₊˚ _______________

  

- Clothing is setup for the hairs and elf skirts and enabled by default.
- Modular Hairs, Elf Skirts and Earrings with additional bones are provided as alternatives (for use with KawaiiPhysics or other dynamic solutions). More info [here](https://miica37.github.io/docs/shenya/dynamic-meshes/).

  

  

_______________ ˚₊‧꒰ა ⭐ Animations ⭐ ໒꒱ ‧₊˚ _______________

  

- Only Basic Idle, Walk, Run, Jump_Start, Jump_Loop, Jump_End (Retargeted from UE4's Mannequin's Animation)
- There are also a few animations retargeted from Paragon Kallari, Kwang, Wukong and Windwalker Echo, but they are just for demo purposes.
- There is a Smile Blink Animation that you can use to add on top of other animations (using Additive in Anim Graph)
- T-Pose and Retarget Poses for UE4 & UE5 Mannequins is provided for animation retargeting. More info [here](https://miica37.github.io/docs/general/retarget-pose/).

  

  

_______________ ˚₊‧꒰ა ⭐ Textures ⭐ ໒꒱ ‧₊˚ _______________

  

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

  

  

_______________ ˚₊‧꒰ა ⭐ Materials ⭐ ໒꒱ ‧₊˚ _______________

  

- There are Basic Materials (MA_Generic) and materials with additional features to do color adjustments (MA_Generic_Tint). (MA = Master Material)
- Skin material has parameters to change fingernail color, scalp color. Can also change skin color, color brightness, desaturate, roughness or specular intensity.
- Aren and Lia share some common materials, you can check out ❝ [Lia Asset Overview](https://youtu.be/1-QuyVHN56Q) ❞ to see some examples.
- ❝ [Aren Asset Overview](https://www.youtube.com/watch?v=r53O1MxDDnU&t=438s) ❞ has a section on Eyes and Hairs Materials.

**Eyes**

- Eye material has parameters to change eye color.
- There is also a Duo eyes material to give each eye a different color.
- For cinematics, you can use Metahuman eyes shader on Aren for more visual fidelity. More info about using Metahuman Eyes [here](https://miica37.github.io/docs/general/metahuman-eyes/).
- Eyes shadow opacity can be adjusted.

  

  

_______________ ˚₊‧꒰ა ⭐ Additional Bones⭐ ໒꒱ ‧₊˚_______________

  

- Note that the there is no additional bones on the main skeleton, the additional bones are for [dynamic meshes](https://miica37.github.io/docs/shenya/dynamic-meshes/).
- The list for additional bones for dynamic meshes is [here](https://miica37.github.io/docs/aren/dynamic-meshes/#bone-list).

  

  

_______________ ˗ˏˋ ꒰ 💌 ꒱ ˎˊ˗_______________

  

❤ Feel free to email miicaneo@gmail.com for any issues and inquiries. ❤

### Technical Details

Features:

-  LiveLink Morph Targets
-  Full body under clothes
-  RGB Mask for customizing colors on materials
- Skeletal mesh with additional bones for Hairs and Jacket, for user to setup their own physics simulation

  

Rigged: (Yes)

Rigged to Epic skeleton: (Yes)

If rigged to the Epic skeleton, IK bones are included: (No)

Animated: (No)

Number of Animations: -

Animation types (Root Motion/In-place): -

Number of characters: 1

Vertex counts of characters: 63,294 (Aren1)

Number of Materials and Material Instances: 20+ Master Materials, 100+ Material Instances

Number of Textures: 128 Textures + 9 Hair Textures

Texture Resolutions: 1k to 4k

Supported Development Platforms:

Windows: (Yes)

Mac: (No)

Documentation: [https://miica37.github.io/docs/aren/](https://miica37.github.io/docs/aren/) and [https://miica37.github.io/docs/general/](https://miica37.github.io/docs/general/)

**Animation Retargeting:**

[Unreal Engine 5 Retarget Animations Demo - with Rabbit Heart Character Shenya](https://youtu.be/SrzN_egLZYk) and [Part 2](https://youtu.be/X6ur4suLaAo)

[https://miica37.github.io/docs/general/retargeting/](https://miica37.github.io/docs/general/retargeting/) and [https://miica37.github.io/docs/general/retarget-pose/](https://miica37.github.io/docs/general/retarget-pose/)

Important/Additional Notes:

Tags

[MALE](https://www.unrealengine.com/marketplace/en-US/product/203ec068763f4441a54c02e47e6ea51d#)[CHARACTER](https://www.unrealengine.com/marketplace/en-US/product/203ec068763f4441a54c02e47e6ea51d#)[MODULAR CHARACTER](https://www.unrealengine.com/marketplace/en-US/product/203ec068763f4441a54c02e47e6ea51d#)[RANGER](https://www.unrealengine.com/marketplace/en-US/product/203ec068763f4441a54c02e47e6ea51d#)[SCIMITAR](https://www.unrealengine.com/marketplace/en-US/product/203ec068763f4441a54c02e47e6ea51d#)[FANTASY](https://www.unrealengine.com/marketplace/en-US/product/203ec068763f4441a54c02e47e6ea51d#)[LIVE LINK FACE](https://www.unrealengine.com/marketplace/en-US/product/203ec068763f4441a54c02e47e6ea51d#)[WEAPONS](https://www.unrealengine.com/marketplace/en-US/product/203ec068763f4441a54c02e47e6ea51d#)[CreatedWithAI](https://www.unrealengine.com/marketplace/en-US/product/203ec068763f4441a54c02e47e6ea51d#)[BLENDSHAPES](https://www.unrealengine.com/marketplace/en-US/product/203ec068763f4441a54c02e47e6ea51d#)[ELF](https://www.unrealengine.com/marketplace/en-US/product/203ec068763f4441a54c02e47e6ea51d#)[MALE CHARACTER](https://www.unrealengine.com/marketplace/en-US/product/203ec068763f4441a54c02e47e6ea51d#)