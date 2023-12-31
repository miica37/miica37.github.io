---
title: "└ Animations Retargeting"
weight: 20
bookToc: true
draft: false
---

Animations Retargeting
=======================================

<hr style="border: 1px solid #44c0c9;">

{{% admonition tip "Related Official Documentation" %}}
If you haven't seen it, check out the Unreal Engine Documentation on [Animation Retargeting](https://docs.unrealengine.com/5.3/en-US/animation-retargeting-in-unreal-engine/), it can be a useful introduction for beginners.
{{% /admonition %}}

{{% admonition %}}
"**Animation Retargeting** is a feature that allows <mark>animations to be reused between characters</mark> that use the same Skeleton asset but <u>may have vastly different proportions</u>."
{{% /admonition %}}

![Character Lineup, showing the different proportions in Rabbit Heart characters](../img/retargeting/character-lineup.jpg)

### Why Use Retargeting?

Before retargeting is applied, <mark>you can already use animations between any Skeletal Meshes that share the same Skeleton asset</mark> (check out UE5's [Compatible Skeletons feature](https://docs.unrealengine.com/5.3/en-US/skeletons-in-unreal-engine/#compatibleskeletons)). That means you don't have to do any retargeting to characters that have the \****exact***\* **same skeleton and same skeleton proportion** (you can use [Compatible Skeletons](https://docs.unrealengine.com/5.3/en-US/skeletons-in-unreal-engine/#compatibleskeletons)). But for Rabbit Heart characters, they all have a different proportion from the UE4 and UE5 Mannequin, so retargeting is needed to convert the animation from one proportion to another proportion.

![Retarget Before After](../img/retargeting/retarget-before-after.webp)

<br/>

### Unreal Engine 4 (UE4)

{{% admonition type="info" title="Retargeting in the old UE4" details="true" %}}
In UE4, you can select a bunch of animations that you want to retarget, right click on them and select "Retarget Anim Assets -> Duplicate Anim Assets and Retarget"

![UE4 Retarget](../img/retargeting/UE4-retarget.jpg)

A window will pop up for you to select the target character and output destination.

![UE4 Retarget Window](../img/retargeting/UE4-retarget-window.jpg)

{{% /admonition %}}

<br/>

### Unreal Engine 5 (UE5)

{{% admonition type="note" title="Video Walkthrough" details="false" %}}
Check out this video to see the retargeting process for Shenya in UE5 (this video should also applies to other Rabbit Heart characters).
{{< youtube SrzN_egLZYk >}}
{{% /admonition %}}

<br/>

{{% admonition tip "Related Official Documentation" %}}
Unreal Engine Documentation on [Retargeting Bipeds with IK Rig](https://docs.unrealengine.com/5.3/en-US/retargeting-bipeds-with-ik-rig-in-unreal-engine/) (Basic Overview)

Unreal Engine Documentation on [IK Rig Retargeting](https://docs.unrealengine.com/5.3/en-US/retargeting-bipeds-with-ik-rig-in-unreal-engine/) (Detailed description of all the settings)
{{% /admonition %}}

<br/>

In UE5, you need to use [IK Rig + IK Retargeter](https://docs.unrealengine.com/5.3/en-US/ik-rig-animation-retargeting-in-unreal-engine/), the setup is a bit more involved, but it offers more robust retarget capabilities than UE4.

The process looks like this:

![UE5 Retarget Process](../img/retargeting/ue5-retarget-process.jpg)

1. [Create/Prepare IK Rig for both source and target characters](retargeting.md#create-ik-rig).
2. [Create an IK Retargeter](retargeting.md#create-ik-retargeter), select the two IK Rigs when prompted (UE5.2, for UE5.3 manually select them in the Details panels). Tweak settings and export animation from inside the **IK Retargeter window** (see the picture below).

![IK Retargeter Window](../img/retargeting/ik-retargeter-window.jpg)

<br/>

### Create IK Rig

#### Option 1: Duplicate Existing IK Rig

{{% admonition tip "Tips" %}}
Creating an IK Rig can be daunting because of many steps it involved, I find that I can just duplicate an existing IK Rig and change the **Preview Skeletal Mesh** inside and it \****should***\* works the same (WARNING: I haven't do test to confirm they are exactly the same, but things looks fine and also works fine when I just duplicate)
{{% /admonition %}}

##### Get Stock IK Rig from Third Person Content Pack

![Add Feature or Content Pack](../img/retargeting/add-content-pack.jpg)

The Third Person Content Pack contains the stock IK Rig for UE4 and UE5 Mannequins that we can duplicate and use. The IK Rigs for the UE4 and UE5 mannequins are located in their own {{< path "Rigs" >}} folder.

![Stock IK Rig Location](../img/retargeting/stock-ik-rig-location.webp)

Since Rabbit Heart characters are using the same skeleton as UE4's Mannequin, you can duplicate the UE4 IK Rig ({{< object "IK_UE4_Mannequin" >}}) and just change the **Preview Skeletal Mesh** to one of my character.

![Duplicate UE4 IK Rig](../img/retargeting/duplicate-ue4-ik-rig.webp)

<br/>

#### Option 2: Create IK Rig from Scratch

{{% admonition type="tip" title="Tips: Create Keyboard Shortcuts" details="true" %}}

You can create keyboard shortcuts in **Editor Preferences** to speed up the process. For example, we can use hotkey "C" to create New Retarget Chain.

![Create Keyboard Shortcuts for IK Rig](../img/retargeting/create-keyboard-shortcuts-for-ik-rig.jpg)

{{% /admonition %}}

##### 0. Right click in the Content Browser, select {{< menupath "Animation > IK Rig > IK Rig" >}}

![Create IK Rig with Menu](../img/retargeting/create-ik-rig-menu.jpg)

Give it a meaningful name and double click the asset to open up the IK Rig Window

![IK Rig Asset Thumbnail](../img/retargeting/ik-rig-asset-thumbnail.jpg)

The Window is empty when first created, **select your skeletal mesh** in the details panel to load it.

![Set Skeletal Mesh](../img/retargeting/set-skeletal-mesh.jpg)

##### 1. Set Retarget Root on **pelvis** (first thing first!).

![Set Retarget Root](../img/retargeting/set-retarget-root.jpg)

##### 2. Create Retarget Chains

These are a list of chains we need to create.

![Joint Chain List](../img/retargeting/joint-chain-list.jpg)

{{% admonition warning "Double Check Naming" %}}
Make sure the name is **exact** across all your different IK Rigs so later on when we do chain-mapping (in the retargeter), the program will have no problem matching the same name.
{{% /admonition %}}

<u>Select the **Left** joint chains</u> and <u>**Mirror** them</u> to create the Right side.

![Mirror Chain](../img/retargeting/mirror-chain.jpg)

{{% admonition warning "Double Check Start Bone & End Bone" %}}
Make sure the **Start Bone** and **End Bone** is set to the correct joint, as it can be hard to debug this later. Also check the "IK Rig Output Log" for any errors.

When mirroring the finger chains, UE5.2 didn't mirror them correctly and I have to fix it.

![IK Rig Output Log shows an error when we mirror the chains (UE5.2)](../img/retargeting/mirror-chain-error.jpg)

{{% /admonition %}}

Create chains for the IK bones. There are 7 of them. These are ***optional*** since [UE is not able to retarget IK bones properly](https://forums.unrealengine.com/t/ik-retargeter-is-not-retargeting-ik-bone-information/). I haven't have success with retargeting IK bones, please let me know if you have any solutions.

There's a [**Free** plugin that can retarget IK bones: Free Bone Snapper](https://www.unrealengine.com/marketplace/en-US/product/free-bone-snapper). ([Video](https://www.youtube.com/watch?v=G398nh4XnCM))

![IK Chains to create](../img/retargeting/ik-chains.jpg)

{{% admonition tip "IK Naming Tips" %}}
* Look for the name while ignoring "ik_" (eg. ik_**foot_root** -> FootRoot)
* "Left" and "Right" is at the start of the name (eg. ik_foot_l -> **Left**Foot )
* Replace "_l" with "Left" (eg. ik_foot_l -> **Left**Foot )
* All the names ended in "IK" (eg. ik_foot_l -> LeftFoot**IK** )
{{% /admonition %}}

##### 3. Setup IK Solver

{{% admonition note "Note" %}}
The setup below is a mimic of the setup from the stock UE4 Mannuquin IK Rig, so follow along if your character uses the same UE4 Mannequin skeleton.
{{% /admonition %}}

{{% admonition note "Why create the IK Solver?" %}}
The solver that we are going to create is called the "Full Body IK" solver. Without it, we won't be able to use IK when we are inside the IK Retargeter.

\*This only applies to your <u>***Target***</u> IK Rig. For your ***Source*** IK Rig, I don't think you need to create any solver for it though.

![IK On VS OK Off](../img/retargeting/ik-vs-no-ik.webp)
{{% /admonition %}}

{{% admonition type="success" title="Setup IK Solver" details="true" %}}

Create <u>Full Body IK</u> solver and <u>Set Root Bone on Selected Solver</u>.

![Create Full Body IK Solver](../img/retargeting/create-full-body-ik-solver.jpg)

![Set Root Bone on Solver](../img/retargeting/set-root-bone-on-solver.jpg)

Create 4 IK Goals (on the hand_l, hand_r, foot_l, foot_r).

Tips: Hotkey {{< menupath "Ctrl + N" >}}

![Create IK Goals](../img/retargeting/create-ik-goals.jpg)

Drag the foot goals to go under ball joints.

![Drag foot_l goal to under ball_l](../img/retargeting/drag-foot-l-goal.webp)

The foots got broken. Reset the foots goal Transforms to fix it.

![Broken Foot](../img/retargeting/broken-foot.jpg)

![Reset Foot Goal's Transforms in the Details panel](../img/retargeting/reset-foot-goal-transforms.jpg)

Create **Bone Settings** for the <u>pelvis</u>, <u>spines</u>, <u>clavicles</u>, <u>thighs</u> and <u>calves</u>.

![Create Fullbody IK Bone Settings](../img/retargeting/create-fullbodyik-bone-settings.webp)

Set **Rotation Stiffness** on <u>Pelvis</u>, all the <u>Spines</u> and <u>Clavicles</u>, with the following values:

| Bone Name  | Bone Rotation Stiffness |
|------------|-------------------------|
| pelvis     | 1                       |
| spine_01   | 0.784                   |
| spine_02   | 0.928                   |
| spine_03   | 0.936                   |
| clavicle_l | 1                       |
| clavicle_r | 1                       |

![Set Rotation Stiffness](../img/retargeting/set-rotation-stiffness.jpg)

Set **Preferred Angles** on <u>thighs</u> and <u>calfs</u>, with the following values

| Bone Name        | Bone Preferrred Angles |
|------------------|------------------------|
| thigh_l, thigh_r | (0, 0, -90)            |
| calf_l, calf_r   | (0, 0, 90)             |

![Set Preferred Angles](../img/retargeting/set-preferred-angles.jpg)

{{% /admonition %}}

##### 4. Done

{{% admonition warning "Final Check" %}}
Finally, last check on the chain's naming and see if the chain point to the correct bones (eg. LeftRing: ring_01_l -> ring_03_l (correct), LeftRing: ring_01_l -> ring_***02***_l (incorrect)).

![Check chain names and bones](../img/retargeting/check-naming-and-bones-hierarchy.jpg)
{{% /admonition %}}

<br/>

### Create IK Retargeter

After we got both IK Rigs for the source and target character, create an **IK Retargeter**. Right click in the Content Browser, select {{< menupath "Animation > IK Rig > IK Retargeter" >}}

![Set Preferred Angles](../img/retargeting/create-ik-retargeter-menu.jpg)

{{% admonition note "Naming Convention" %}}
I use the format of "RTG_{source}\_to\_{target}", eg. {{< object "RTG_UE4Mannequin_to_Shenya" >}}.

{source} is the character that we want to copy animations from, {target} is the character that wants to have the new animations.
{{% /admonition %}}

Double click the IK Retargeter asset to open the IK Retargeter Window.

#### 1. Select the source and target IK Rig in the Details panel.

![IK Retargeter Window](../img/retargeting/ik-retargeter-window2.jpg)

#### 2. Switch to Retarget Pose

{{% admonition note "Difference between UE5.2 VS UE5.3" %}}
Note that the interface is a bit different between UE5.2 and UE5.3. In UE 5.2, you want to press on the "Show Retarget Pose" green button ; In UE5.3, you click on the 3 vertical dots and select "Showing Retarget Pose".

![IK Retargeter Interface difference between UE5.2 & UE5.3](../img/retargeting/retargeter-versions.jpg)
{{% /admonition %}}

#### 3. Import Pose Asset

![Import Pose Asset](../img/retargeting/import-pose-asset.jpg)

![Select Pose Asset](../img/retargeting/select-pose-asset.jpg)

[Continue at this page](retarget-pose.md)
