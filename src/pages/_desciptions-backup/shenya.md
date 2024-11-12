_______________ ❤ **Youtube Showcase** ❤ _______________

  

- ❝ [UE Casual Female Character - Shenya Showcase](https://youtu.be/OfM1V1eI1jI) ❞
- ❝ [UE Casual Female Character - Shenya Asset Overview](https://youtu.be/nUcbepp6P_k) ❞
- ❝ [Using Kawaii Physics with Rabbit Heart Character Shenya](https://youtu.be/HkaO96Ox8yg) ❞

  
_______________ 🛈 Polycount _______________

  

- Shenya 1 (71.2k Tris) (Jacket + Long Jeans Outfit)
- Shenya 2 (65.5k Tris) (Hoodie Jacket + Short Jeans Outfit)
- Fullbody (38.4k Tris)
- Hair1 (13.2k Tris)
- Hair2 (15.3k Tris)
- Hair3 (12.7k Tris)
- Hair4 (15.6k Tris)
- Tanktop (2.7k Tris)
- Jacket (13.4k Tris)
- Hoodie Jacket (9k Tris)
- Jeans (7.6k Tris)
- Short Jeans (4k Tris)
- Cap (1.5k Tris)
- Belt (1.7k Tris)
- Boots (7k Tris)
- Long Boots (9.6k Tris)
- Sunglasses (1.7k Tris)
- Accessory1 (2.8k Tris) (Includes 3 necklaces, 2 earrings and 1 bracelets; Hide or unhide parts using material)
- Baseball Bat (0.5k Tris)

  

  

  

_______________ ⚠️ Notes _______________

  

- **No LOD**
- **No Blueprints**
- **No Animations**

  

This new update (October 2023) is incompatible with older 2022 version. **Please backup your project** before you replace or update old Meryl in already working project because there are too many changes (in names, paths, etc), you probably need to delete the old Shenya and resetup everything. Sorry for the inconvenience 🙏

  

**Updates**

- 2024-08-26: Fix broken blendshapes specific to UE5.4
- 2023-10-17: [Shenya 3.0](https://miica37.github.io/docs/shenya/changelog/#shenya-30) (Adjust face, body, skinning, materials, preview level, etc. Rework 2 existing hairs and added two new hairs. Added Accessory and a baseball bat. Added Tpose and some other poses.)

  

  

  

_______________ ˚₊‧꒰ა ⭐ Skeleton ⭐ ໒꒱ ‧₊˚ _______________

  

- Epic UE4 Mannequin Skeleton (No Additional Bones)
- Modular Jacket, Hair1, Hair2, Hair3 and Hair4 has additional bones. They can be used for physics simulation and works with [KawaiiPhysics](https://github.com/pafuhana1213/KawaiiPhysics).

  

  

  

_______________ ˚₊‧꒰ა ⭐ Morph Targets (Blendshapes) ⭐ ໒꒱ ‧₊˚ _______________

  

- Head has all Apple Blendshapes ([refer to Apple's ARKit](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/)) and can be used with the LiveLink plugin.
- Note that as for now, there are no blueprint setup for LiveLink and the blendshapes are not tested due to no access to a Apple device.

  
_______________ ˚₊‧꒰ა ⭐ Clothing ⭐ ໒꒱ ‧₊˚ _______________

  

- Clothing is setup for the hairs and enabled by default.
- Modular Hairs with additional bones are provided as alternatives (for use with KawaiiPhysics or other dynamic solutions). More info [here](https://miica37.github.io/docs/shenya/dynamic-meshes/).

  

  

  

_______________ ˚₊‧꒰ა ⭐ Animations ⭐ ໒꒱ ‧₊˚ _______________

  

- Only Basic Idle, Walk, Run, Jump_Start, Jump_Loop, Jump_End (Retargeted from UE4's Mannequin's Animation)
- There are also a few animations retargeted from Paragon Aurora and Echo, but they are just for demo purposes.
- There is a Smile Blink Animation that you can use to add on top of other animations (using Additive in Anim Graph)
- T-Pose is provided for animation retargeting.

  

  

  

_______________ ˚₊‧꒰ა ⭐ Textures ⭐ ໒꒱ ‧₊˚ _______________

  

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

**Eyes**

- Diffuse, Normal and Specular

**Hairs**

- Albedo, Alpha, Depth, Direction, ID and Root

**Cloth**

- 10 Cloth Texture Sets: Accessory1, Belt, Boots, Cap, Hoodie Jacket, Jacket, Jeans, Long Boots, Sunglasses, Tanktop (All 2k Textures)

  

  

  

_______________ ˚₊‧꒰ა ⭐ Materials ⭐ ໒꒱ ‧₊˚ _______________

  

- There are Basic Materials (MA_Generic) and materials with additional features to do color adjustments (MA_Generic_Tint). (MA = Master Material)
- Skin material has parameters to change fingernail color, scalp color. Can also change skin color, color brightness, desaturate, roughness or specular intensity.
- Lia and Shenya share some common materials, you can check out ❝ [Lia Asset Overview](https://youtu.be/1-QuyVHN56Q) ❞ to see some examples.

**Eyes**

- Eye material has parameters to change eye color.
- There is also a Duo eyes material to give each eye a different color.
- For cinematic, Metahuman eyes shader looks much better and it is used in the showcase video. You can migrate the metahuman shader and apply it to Lia's eye, and then adjust the iris size a little bit, they will look like in the showcase video.
- Eyes shadow opacity can be adjusted.

  

  

  

_______________ ˚₊‧꒰ა ⭐ Additional Bones⭐ ໒꒱ ‧₊˚_______________

  

- Note that the there is no additional bones on the main skeleton, the additional bones are for [dynamic meshes](https://miica37.github.io/docs/shenya/dynamic-meshes/).
- The list for additional bones for dynamic meshes is [here](https://miica37.github.io/docs/shenya/dynamic-meshes/#additional-bones-for-dynamic-meshes).

  

  

  

_______________ ˗ˏˋ ꒰ 💌 ꒱ ˎˊ˗_______________

  

❤ Feel free to email miicaneo@gmail.com for any issues and inquiries. ❤

* Fbx source files will be provided on request *

  

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

Vertex counts of characters: 46,611

Number of Materials and Material Instances: 20+ Master Materials, 100+ Material Instances

Number of Textures: 77 Textures + 11 Hair Textures

Texture Resolutions: 2048x2048, Eyes, Eyes Shadow, Eyebrow Eyelashes: 1024x1024

Supported Development Platforms:

Windows: (Yes)

Mac: (No)

Documentation: [https://miica37.github.io/docs/shenya/](https://miica37.github.io/docs/shenya/)

Important/Additional Notes:

Tags

[CAP](https://www.unrealengine.com/marketplace/en-US/product/dd0822fc2ca84cbfb4c5eb72bb21d3b2#)[JACKET](https://www.unrealengine.com/marketplace/en-US/product/dd0822fc2ca84cbfb4c5eb72bb21d3b2#)[MODULAR CHARACTER](https://www.unrealengine.com/marketplace/en-US/product/dd0822fc2ca84cbfb4c5eb72bb21d3b2#)[FEMALE CHARACTER](https://www.unrealengine.com/marketplace/en-US/product/dd0822fc2ca84cbfb4c5eb72bb21d3b2#)[BASEBALL BAT](https://www.unrealengine.com/marketplace/en-US/product/dd0822fc2ca84cbfb4c5eb72bb21d3b2#)[MODERN CHARACTER](https://www.unrealengine.com/marketplace/en-US/product/dd0822fc2ca84cbfb4c5eb72bb21d3b2#)[CASUAL OUTFIT](https://www.unrealengine.com/marketplace/en-US/product/dd0822fc2ca84cbfb4c5eb72bb21d3b2#)[FEMALE](https://www.unrealengine.com/marketplace/en-US/product/dd0822fc2ca84cbfb4c5eb72bb21d3b2#)[CHARACTER](https://www.unrealengine.com/marketplace/en-US/product/dd0822fc2ca84cbfb4c5eb72bb21d3b2#)[LIVE LINK FACE](https://www.unrealengine.com/marketplace/en-US/product/dd0822fc2ca84cbfb4c5eb72bb21d3b2#)[JEANS](https://www.unrealengine.com/marketplace/en-US/product/dd0822fc2ca84cbfb4c5eb72bb21d3b2#)[SURVIVAL CHARACTER](https://www.unrealengine.com/marketplace/en-US/product/dd0822fc2ca84cbfb4c5eb72bb21d3b2#)[BLENDSHAPES](https://www.unrealengine.com/marketplace/en-US/product/dd0822fc2ca84cbfb4c5eb72bb21d3b2#)