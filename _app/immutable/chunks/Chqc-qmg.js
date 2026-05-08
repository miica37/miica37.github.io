var e=`
<script>
  import Admonition from "$lib/components/admonitions.svelte"
  import Image from "$lib/components/image.svelte"
  import Heading from "$lib/components/heading.svelte"
<\/script>

<!-- <br>

--- -->

### Aren 2.2

\`2025-12-24\`

- Added Lia Cross Character Hairs & Outfits
- Added Substance Painter source file
- Added Retarget Pose for UEFN and ActorCore
- Small Tweak to Eyes, hands and feet
- Updated Hair4
- Added missing clothing to ElfSkirt3

![Additional Files Aren](/images/news/character-updates/2026-10-10/additional-files-aren.png)


### Aren 2.1

\`2025-11-13\`

- Fix Base Skeleton

![Aren Skeleton Update 1113](/images/aren/changelog/2025-11-13/aren-skeleton-update-1113.webp)


### Aren 2.0

\`2025-08-19\`

- Update from UE4.22 to **UE4.27**
- Remade Face
	
	![Aren face remake](/images/aren/changelog/2025-08-19/aren_face_remake.webp)
- Added new hair (**Hair4**)
	- Includes vertex colors and supports the hair material's dye feature
	- ![Aren new Hair4](/images/aren/changelog/2025-08-19/aren_new_hair4.webp)
- Added new costume (**Top2, Belt3, ElfSkirt3**)
	![Aren new Hair4](/images/aren/changelog/2025-08-19/aren_new_outfit.jpg)

- Added more pre-combined Aren presets (**Aren4**, **Aren5**, **Aren6**)
	![Aren new precombined meshes](/images/aren/changelog/2025-08-19/aren_new_precombined_meshes.webp)
- Fixed **hand shape** and hand texture
	- Adjusted thumb pose (reoriented thumb bones)
- Converted MRAO to **ORM** (textures and master materials)
- Added 70+ facial morph targets for customizing the base face shape
- Updated hair material (MA_Hair)
	- Removed SecondUVChannel
	- Added vertex color tint feature
- Tint material now support 3 additional colors (Yellow, Cyan, Magenta) for a total of 7 (RGB + CYM + Black)
	- Updated RGB textures for clothes (added Yellow, Cyan, Magenta regions on top of previous Red Green and Bllue)
- Added Eye Makeup to skin material
- Fix skinning on arm_guard
- Removed Wukong's Demo Retargeted Animations
- Renamed **joint names** for DYN meshes

### Aren 1.0.1

\`2024-08-26\`

- Blendshapes are broken when imported into UE5.4.
	- The old project version is still usable from UE4.22 up to UE5.3.
	- Fixed by creating another project version for UE5.4+
	- Note: Starting from Version 4.0 (2025 update), after upgrading to UE4.27, this issue no longer occurs. The same project version now works from UE4.27 to UE5.6+.

### Aren 1.0

\`2024-01-30\`

First Release

<style>
  .header-container {
    margin-top: 0;
    margin-bottom: 0;
  }

  .changelog-section {
    border-radius: .5rem;
    /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
    /* box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px; */
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    padding: 1rem;
    margin-bottom: 1rem;
  }
</style>`;export{e as default};