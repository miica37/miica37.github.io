_______________ ❤ **Youtube Showcase** ❤ _______________

  

- ❝ [UE Female Elf Ranger Character - Lia Showcase](https://youtu.be/rvZucOsefK0) ❞
- ❝ [UE Female Elf Ranger Character - Lia Asset Overview](https://youtu.be/1-QuyVHN56Q) ❞

  

  

_______________ 🛈 Polycount _______________

  

- Lia (73.8k Tris)
- Fullbody (38.4k Tris)
- Hair1 (14.4k Tris)
- Hair2 (15.7k Tris)
- Hair3 (10.5k Tris)
- Bow (4.2k Tris)
- Dagger (1.8k Tris)
- Hoodie1 (4.6k Tris)
- Hoodie2 (4.5k Tris)
- Coverall (7.3k Tris)

  

  

_______________ ⚠️ Notes _______________

  

- **No LOD**
- **No Blueprints**
- **No Animations**

**Updates**

- 2024-08-26: Fix broken blendshapes specific to UE5.4

  

  

_______________ ˚₊‧꒰ა ⭐ Skeleton ⭐ ໒꒱ ‧₊˚ _______________

  

- Epic UE4 Mannequin Skeleton (No Additional Bones)
- Modular Elf Skirt, Loin Cloth, Hair1, Hair2, Hair3 and Belt has additional bones. They can be used for physics simulation and works well with KawaiiPhysics.
- Added Sockets: ik_hand_rSocket and ik_hand_gunSocket (for demoing bow animation)

  

  

_______________ ˚₊‧꒰ა ⭐ Morph Targets (Blendshapes) ⭐ ໒꒱ ‧₊˚ _______________

  

- Head has all Apple Blendshapes ([refer to Apple's ARKit](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/)) and can be used with the LiveLink plugin.
- Body has breast morph (to make it smaller) and fingernails morph (to make it longer)
- Coverall also has a breast morph.

  

  

_______________ ˚₊‧꒰ა ⭐ Clothing ⭐ ໒꒱ ‧₊˚ _______________

  

- Clothing is setup for the hairs, loin cloth and elf skirt (but they are not activated by default).
- Modular Hairs, Elf Skirt and Loin Cloth with additional bones for you to create a much better looking simulation with KawaiiPhysics.

  

  

_______________ ˚₊‧꒰ა ⭐ Animations ⭐ ໒꒱ ‧₊˚ _______________

  

- Only Basic Idle, Walk, Run, Jump_Start, Jump_Loop, Jump_End (Retargeted from UE4's Mannequin's Animation)
- There are also a few Idle animations retargeted from Paragon characters (Sparrow, Yin, Shinbi, Aurora) and Echo, but they are just for demo purposes.
- There is a Smile Blink Animation that you can use to add on top of other animations (using Additive in Anim Graph)
- T-Pose provided for use in animation retargeting.

  

  

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

  

  

_______________ ˚₊‧꒰ა ⭐ Materials ⭐ ໒꒱ ‧₊˚ _______________

  

- There are Basic Materials (MA_Generic) and materials with additional features to do masking (MA_Generic_Masked), color adjustments (MA_Generic_Tint) or both (MA_Generic_Tint_Masked). (MA = Master Material)
- Skin material has parameters to change fingernail color, scalp color and add tattoo (need to provide it a mask). Can also change skin color, color brightness, desaturate, roughness or specular intensity.
- Check out ❝ [Lia Asset Overview](https://youtu.be/1-QuyVHN56Q) ❞ to see some examples.

**Eyes**

- Eye material has parameters to change eye color.
- There is also a Duo eyes material to give each eye a different color.
- For cinematic, Metahuman eyes shader looks much better and it is used in the showcase video. You can migrate the metahuman shader and apply it to Lia's eye, and then adjust the iris size a little bit, they will look like in the showcase video.
- Eyes shadow opacity can be adjusted.

  

  

_______________ ˚₊‧꒰ა ⭐ Additional Bones⭐ ໒꒱ ‧₊˚_______________

  

- **Hair1**: hair1_fringe_01-05_r, hair1_fringe_r_end, hair1_fringe_01-05_l, hair1_fringe_l_end, hair1_tail_01-06, hair1_tail_end (19 additional bones)
- **Hair2**: hair2_front_01-06_l, hair2_front_l_end, hair2_front_01-06_r, hair2_front_r_end, hair2_back_01-06_c, hair2_back_c_end, hair2_back_01-06_l, hair2_back_l_end, hair2_back_01-06_r, hair2_back_r_end (35 additional bones)
- **Hair3**: hair3_fringe_01-06, hair3_fringe_end (7 additional bones)
- **Elf Skirt**: wings_front_01-04, wings_front_end, wings_side_01-04_l, wings_side_l_end, wings_side_01-04_r, wings_side_r_end, wings_back_01-04_c, wings_back_c_end, wings_back_01-06_l, wings_back_l_end, wings_back_01-06_r, wings_back_r_end (34 additional bones)
- **Loin Cloth**: loincloth_front_01-05_r, loincloth_front_end_r, loincloth_back_01-05_r, loincloth_back_end_r, loincloth_front_01-05_l, loincloth_front_end_l, loincloth_back_01-05_l, loincloth_back_end_l (24 additional bones)
- **Belt**: belt_bag_01-02_r, belt_bag_end_r (3 additional bones)

  

  

_______________ ˗ˏˋ ꒰ 💌 ꒱ ˎˊ˗_______________

  

❤ Feel free to email miicaneo@gmail.com for any issues and inquiries. ❤

* Fbx source files will be provided on request *

  

### Technical Details

Features: (Please include a full, comprehensive list of the features of the product)

-  LiveLink Morph Targets
-  Full body under clothes
-  RGB Mask for customizing colors on materials
- Skeletal mesh with additional bones for Hairs, Elf Skirt and Loin Cloth, they can utilize physics simulation

Rigged: Yes

Rigged to Epic skeleton: Yes

If rigged to the Epic skeleton, IK bones are included: No

Animated: No

Number of Animations: Basic animation from Unreal Engine 4's 3rd person template

Number of characters: 1

Vertex counts of characters: 73.8k

Number of Materials and Material Instances: 24 Master Materials, 79 Material Instances

Number of Textures: 165

Texture Resolutions: Body 4k, Head 2k, Hairs 4k, Teeth Tongue 2k, Eyes Eyeshadow Eyebrow Eyelashes 1k, Clothes 2k, Weapons 2k

Supported Development Platforms:

Windows: (Yes)

Mac: (No)

Documentation: Link (or a description of where users can find) the documentation

Important/Additional Notes:

Tags

[DAGGER](https://www.unrealengine.com/marketplace/en-US/product/e4e639fe57bb4955b4dc14b7dc01942b#)[MODULAR CHARACTER](https://www.unrealengine.com/marketplace/en-US/product/e4e639fe57bb4955b4dc14b7dc01942b#)[BOW](https://www.unrealengine.com/marketplace/en-US/product/e4e639fe57bb4955b4dc14b7dc01942b#)[FEMALE CHARACTER](https://www.unrealengine.com/marketplace/en-US/product/e4e639fe57bb4955b4dc14b7dc01942b#)[MODULAR](https://www.unrealengine.com/marketplace/en-US/product/e4e639fe57bb4955b4dc14b7dc01942b#)[WEAPONS](https://www.unrealengine.com/marketplace/en-US/product/e4e639fe57bb4955b4dc14b7dc01942b#)[GIRL](https://www.unrealengine.com/marketplace/en-US/product/e4e639fe57bb4955b4dc14b7dc01942b#)[CHARACTER](https://www.unrealengine.com/marketplace/en-US/product/e4e639fe57bb4955b4dc14b7dc01942b#)[RANGER](https://www.unrealengine.com/marketplace/en-US/product/e4e639fe57bb4955b4dc14b7dc01942b#)[ARCHER](https://www.unrealengine.com/marketplace/en-US/product/e4e639fe57bb4955b4dc14b7dc01942b#)[FANTASY](https://www.unrealengine.com/marketplace/en-US/product/e4e639fe57bb4955b4dc14b7dc01942b#)[LIVE LINK FACE](https://www.unrealengine.com/marketplace/en-US/product/e4e639fe57bb4955b4dc14b7dc01942b#)[BLENDSHAPES](https://www.unrealengine.com/marketplace/en-US/product/e4e639fe57bb4955b4dc14b7dc01942b#)[ELF](https://www.unrealengine.com/marketplace/en-US/product/e4e639fe57bb4955b4dc14b7dc01942b#)