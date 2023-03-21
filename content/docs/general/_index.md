---
title: Characters General Infos
weight: 2
bookToc: true
bookCollapseSection: true
---

# General Informations



## Skeleton

All the my characters so far (Meryl, Shenya, Charles, Aren, Lia) are following the same skeleton naming and structure as UE4's Mannequin. The skeleton is then posed to match the UE4 Mannequin's default pose for retargeting.

## Proxy Meshes

In Mesh Section of the character, you will see there are some mesh section with "proxy" in its name. This proxy is usually a lower resolution mesh for cloths simulation. This proxy is going to be used just for the simulation and will be hidden (Disabled from render). The simulated result is going to then drive the higher resolution mesh.

## Morph Targets

## Textures

A mesh part usually comes with 4 basic textures: Diffuse ( T_\*\*\*_D ), Normal ( T_\*\*\*_N ), MRAO ( T_\*\*\*_MRAO ) and RGB ( T_\*\*\*_RGB ).

### MRAO Textures

MRAO stands for Metallic, Roughness and AO (Ambient Occlusion).

Instead of having 3 different textures (Metallic, Roughness and AO), this texture packs them into Red, Green and Blue Channel of a single texture.

### RGB Textures

RGB stands for Red, Green, Blue.

This texture contains 3 masks, each packed into the Red, Green and Blue channel. The different masks are used to tint different areas of the color texture.

### Hairs RGB Textures

### T_Uniform_RGB

T_Uniform_RGB can be used in place of a certain mesh that doesn’t come with a RGB texture.

It can also be used if you want to change the color of the whole mesh.

## Materials

## Animations

In order to differentiate between original animations and retargeted animations, animations are located in two different folders. Original Animations are inside Animations folder while Retargeted Animations are inside Demo folder.

In fact, since there are almost no original animations (besides a facial morph target animation Anim_smile_blink), you will find most of the animation in the Demo folder. This folder contains a few animations retargeted from UE4 Mannequin, Paragon’s Yin and Windwalker Echo.

Among the retargeted animations: Anim_Echo_Idle_Long, Anim_Echo_Walk_Fwd and Anim_Yin_Idle_Combat2 have some slight modifications in Maya.

## Dynamic Meshes



## Using the FBX files

You can find the source fbx in xxx folder.

## Retargeting Animations

## ALS (Advanced Locomotion System)

