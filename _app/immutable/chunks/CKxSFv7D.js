var e=`
<script>
  import Admonition from "$lib/components/admonitions.svelte"
  import Image from "$lib/components/image.svelte"
  import Heading from "$lib/components/heading.svelte"
<\/script>

### Lia 2.2

\`2025-12-24\`

- Added Aren Cross Character Hairs & Outfits
- Added Substance Painter source file

![Additional Files Lia](/images/lia/changelog/2025-12-24/additional-files-lia.png)

![Aren Unreal Hierarchy](/images/lia/changelog/2025-12-24/Aren_Unreal_hierarchy.webp)

### Lia 2.1

\`2025-11-13\`

- Fix Base Skeleton

![Lia Skeleton Update 1113](/images/lia/changelog/2025-11-13/lia-skeleton-update-1113.webp)


### Lia 2.0

\`2025-08-23\`

- Update from UE4.22 to **UE4.27**
- Added new hair (**Hair4**)
	![Lia new wings headpiece](/images/lia/changelog/2025-08-23/lia_new_hair4.webp)

- Added more pre-combined Lia presets (**Lia2**, **Lia3**, **Lia4**, **Lia5**)
	![Lia new precombined meshes](/images/lia/changelog/2025-08-23/lia_new_precombined_meshes.webp)

- Added small wing-shaped **headpiece**
	![Lia new wings headpiece](/images/lia/changelog/2025-08-23/lia_new_wings_headpiece.webp)

- Reduced breast size (Coverall & Tops). Added "Bigger_Breast" version.
- Converted MRAO to **ORM** (textures and master materials)
- Added 70+ facial morph targets for customizing the base face shape
- Added new Fullbody skin textures (matching Aren's): lighter, pale, tone mask
- Added new Fullbody skin materials: lighter, pale, red, brown
- Tint material now support 3 additional colors (Yellow, Cyan, Magenta) for a total of 7 (RGB + CYM + Black)
	- Updated RGB textures for Belts & Boots_Glove (added Yellow, Cyan, Magenta regions on top of previous Red Green and Bllue)
- Added **Retarget Pose for UEFN** (used in [Game Animation Sample](https://www.fab.com/listings/880e319a-a59e-4ed2-b268-b32dac7fa016))
- Renamed **joint names** for DYN meshes

### Lia 1.1

\`2024-01-30\`

* Fixed naming for skeleton and physics assets. Renamed all skeleton to \`SKM_*\` and all physics assets to \`PA_*\`.
    (Previously named \`*_Skeleton\` and \`*_PhysicsAsset\`)

* Added Retarget Poses

![Retarget Poses Folder](/images/lia/changelog/2024-01-30/retarget-poses-folder.png)

* Update Eye materials. See the [Eyes section from Aren's Asset Video](https://www.youtube.com/watch?v=r53O1MxDDnU&t=438s)

* Update Skin Material (added some textures together with this: \`T_Dot\`, \`T_Star1\`, \`T_Star2\`, \`T_Lia_Eye_Makeup_Mask\` and \`T_Lia_Eye_Makeup_Mask2\`)

![Skin Material Update](/images/lia/changelog/2024-01-30/skin-material-update.png)

* Update Body Skinning weights (around the buttocks area and the wrist area) and Coverall skinning weights.

* Fixed Body's Morph Targets (breast_smaller)

* Fixed Head's Morph Target (swap naming of MouthRollUpper and MouthRollLower)

* Modified the shape of the boots slightly.

* Updated affected source fbx files (also added modular fbx). <kbd>Lia > Source > Fbx</kbd>

<br>

---

### Lia 1.0.1

\`2023-12-23\`

Added Fbx source files

<br>

---

### Lia 1.0

\`2023-06-22\`

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