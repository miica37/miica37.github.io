---
title: Animations Retargeting
---
<script>
	export let callbackAfterUpdate;
	import PageTitle from "$lib/components/pageTitle.svelte"
	import Admonition from "$lib/components/admonitions.svelte"
	import Collapsible from "$lib/components/collapsible.svelte"
	import Image from "$lib/components/image.svelte"
	import Youtube from "$lib/components/youtube.svelte"
	import Heading from "$lib/components/heading.svelte"
	import { afterUpdate } from 'svelte';
	
	afterUpdate(() => {
		callbackAfterUpdate()
	});
</script>

# Animations Retargeting

--Official Documentations, Docs
The [Unreal Engine Documentation on Animation Retargeting](https://docs.unrealengine.com/5.3/en-US/animation-retargeting-in-unreal-engine/) can be a useful introduction for beginners.

--


> Animation Retargeting is a feature that allows animations to be reused between characters that use the <u>same Skeleton</u> asset but <u>may have vastly different proportions</u>.

![Character Lineup.>>Showing the different proportions among Rabbit Heart characters](/images/common/retargeting/character-lineup.jpg)

Before retargeting is applied, you can already use animations between any Skeletal Meshes that share the **same Skeleton** asset (check out UE5's [Compatible Skeletons feature](https://docs.unrealengine.com/5.3/en-US/skeletons-in-unreal-engine/#compatibleskeletons)).

That means you don't have to do any retargeting to characters that have the **exact same skeleton and same skeleton proportion** (you can use [Compatible Skeletons](https://docs.unrealengine.com/5.3/en-US/skeletons-in-unreal-engine/#compatibleskeletons)).

But for Rabbit Heart characters, they all have a different proportion from the UE4 and UE5 Mannequin, so retargeting is needed to convert the animation from one proportion to another proportion.


![Retarget Before After|70%](/images/common/retargeting/retarget-before-after.webp)

<br>

<br>
## Retargeting in Unreal Engine 5

--Official Documentations, Docs
Unreal Engine Documentation on [Retargeting Bipeds with IK Rig](https://docs.unrealengine.com/5.3/en-US/retargeting-bipeds-with-ik-rig-in-unreal-engine/) (Basic Overview)

Unreal Engine Documentation on [IK Rig Retargeting](https://docs.unrealengine.com/5.3/en-US/retargeting-bipeds-with-ik-rig-in-unreal-engine/) (Detailed description of all the settings)

--

In UE5, you need to use [IK Rig + IK Retargeter](https://docs.unrealengine.com/5.3/en-US/ik-rig-animation-retargeting-in-unreal-engine/), the setup is a bit more involved, but it offers more robust retarget capabilities than UE4.

### Process Summary

The process looks like this:

<Image src="/images/common/retargeting/ue5-retarget-process.jpg" alt="UE5 Retarget Process" />

1. [Create/Prepare IK Rig for both source and target characters](#create-ik-rig).
2. [Create an IK Retargeter](#create-ik-retargeter), select the two IK Rigs when prompted (UE5.2, for UE5.3 manually select them in the Details panels). Tweak settings and export animation from inside the **IK Retargeter window** (see the picture below).

![IK Retargeter Window](/images/common/retargeting/ik-retargeter-window.jpg)


Check out this video to see the retargeting process for Shenya in UE5 (this video should also applies to other Rabbit Heart characters).

<Youtube code="SrzN_egLZYk" scale=1/>

Part 2 (An update to video above):

<Youtube code="X6ur4suLaAo" scale=1/>

<br/>

### Create IK Rig

#### Option 1: Duplicate Existing IK Rig

--Tips, tip

Creating an IK Rig can be daunting because of many steps it involved, I find that I can just duplicate an existing IK Rig and change the **Preview Skeletal Mesh** inside and it \* *should* \* works the same (WARNING: I haven't do test to confirm they are exactly the same, but things looks fine and also works fine when I just duplicate)

--

##### Get Stock IK Rig from Third Person Content Pack

![Add Feature or Content Pack](/images/common/retargeting/add-content-pack.jpg)

The Third Person Content Pack contains the stock IK Rig for UE4 and UE5 Mannequins that we can duplicate and use. The IK Rigs for the UE4 and UE5 mannequins are located in their own `Rigs` folder.

![Stock IK Rig Location](/images/common/retargeting/stock-ik-rig-location.webp)

Since Rabbit Heart characters are using the same skeleton as UE4's Mannequin, you can duplicate the UE4 IK Rig `IK_UE4_Mannequin` and just change the **Preview Skeletal Mesh** to one of my character.

![Duplicate UE4 IK Rig](/images/common/retargeting/duplicate-ue4-ik-rig.webp)

<br/>

#### Option 2: Create IK Rig from Scratch

++Tips: Create Keyboard Shortcuts

--Tips: Create Keyboard Shortcuts, tip

You can create keyboard shortcuts in **Editor Preferences** to speed up the process. For example, we can use hotkey <kbd>C</kbd> to create New Retarget Chain.

![Create Keyboard Shortcuts for IK Rig](/images/common/retargeting/create-keyboard-shortcuts-for-ik-rig.jpg)

--

++

##### 0. Right click in the Content Browser, select `Animation > IK Rig > IK Rig`

![Create IK Rig with Menu](/images/common/retargeting/create-ik-rig-menu.jpg)

Give it a meaningful name and double click the asset to open up the IK Rig Window

![IK Rig Asset Thumbnail](/images/common/retargeting/ik-rig-asset-thumbnail.jpg)

The Window is empty when first created, **select your skeletal mesh** in the details panel to load it.

![Set Skeletal Mesh](/images/common/retargeting/set-skeletal-mesh.jpg)

##### 1. Set Retarget Root on **pelvis** (first thing first!).

![Set Retarget Root](/images/common/retargeting/set-retarget-root.jpg)

##### 2. Create Retarget Chains

These are a list of chains we need to create.

![Joint Chain List](/images/common/retargeting/joint-chain-list.jpg)

--Double Check Naming, warning

Make sure the name is the <u>same across all your different IK Rigs</u> so later on when we do chain-mapping (in the retargeter), the program will have no problem matching the same name.

--

<u>Select the <b>Left</b> joint chains</u> and <u><b>Mirror</b> them</u> to create the Right side.

![Mirror Chain](/images/common/retargeting/mirror-chain.jpg)


--Double Check Start Bone & End Bone, warning

Make sure the **Start Bone** and **End Bone** is set to the correct joint, as it can be hard to debug this later. Also check the "IK Rig Output Log" for any errors.

When mirroring the finger chains, UE5.2 didn't mirror them correctly and I have to fix it.

![IK Rig Output Log shows an error when we mirror the chains (UE5.2)](/images/common/retargeting/mirror-chain-error.jpg)

--

Create chains for the IK bones. There are 7 of them. These are ***optional*** since [UE is not able to retarget IK bones properly](https://forums.unrealengine.com/t/ik-retargeter-is-not-retargeting-ik-bone-information/). I haven't have success with retargeting IK bones, please let me know if you have any solutions.

There's a [**Free** plugin that can retarget IK bones: Free Bone Snapper](https://www.unrealengine.com/marketplace/en-US/product/free-bone-snapper). ([Video](https://www.youtube.com/watch?v=G398nh4XnCM))


![IK Chains to create](/images/common/retargeting/ik-chains.jpg)

--IK Naming Tips, tip

* Look for the name while ignoring "ik\_" (eg. ik\_**foot_root** -> FootRoot)
* "Left" and "Right" is at the start of the name (eg. ik_foot\_l -> **Left**Foot )
* Replace "\_l" with "Left" (eg. ik\_foot\_l -> **Left**Foot )
* All the names ended in "IK" (eg. ik\_foot\_l -> LeftFoot**IK** )

--

##### 3. Setup IK Solver

--Note

The setup below is a mimic of the setup from the stock UE4 Mannuquin IK Rig, so follow along if your character uses the same UE4 Mannequin skeleton.

--

<br>

--Why create the IK Solver?

The solver that we are going to create is called the "Full Body IK" solver. Without it, we won't be able to use IK when we are inside the IK Retargeter.

\*This only applies to your <u>***Target***</u> IK Rig. For your ***Source*** IK Rig, I don't think you need to create any solver for it though.

![IK On VS OK Off](/images/common/retargeting/ik-vs-no-ik.webp)

--

<br>

++Setup IK Solver

Create <u>Full Body IK</u> solver and <u>Set Root Bone on Selected Solver</u>.

![Create Full Body IK Solver](/images/common/retargeting/create-full-body-ik-solver.jpg)

![Set Root Bone on Solver](/images/common/retargeting/set-root-bone-on-solver.jpg)

Create 4 IK Goals (on the hand_l, hand_r, foot_l, foot_r).

Tips: Hotkey <kbd>Ctrl + N</kbd>

![Create IK Goals](/images/common/retargeting/create-ik-goals.jpg)

Drag the foot goals to go under ball joints.

![Drag foot_l goal to under ball_l](/images/common/retargeting/drag-foot-l-goal.webp)

The foots got broken. Reset the foots goal Transforms to fix it.

![Broken Foot](/images/common/retargeting/broken-foot.jpg)

![Reset Foot Goal's Transforms in the Details panel](/images/common/retargeting/reset-foot-goal-transforms.jpg)

Create **Bone Settings** for the <u>pelvis</u>, <u>spines</u>, <u>clavicles</u>, <u>thighs</u> and <u>calves</u>.

![Create Fullbody IK Bone Settings](/images/common/retargeting/create-fullbodyik-bone-settings.webp)

Set **Rotation Stiffness** on <u>Pelvis</u>, all the <u>Spines</u> and <u>Clavicles</u>, with the following values:

<table class="uk-table">
<thead><tr><th>Bone Name</th><th>Bone Rotation Stiffness</th></tr></thead>
<tbody>
<tr><td>pelvis</td><td>1</td></tr>
<tr><td>spine_01</td><td>0.784</td></tr>
<tr><td>spine_02</td><td>0.928</td></tr>
<tr><td>spine_03</td><td>0.936</td></tr>
<tr><td>clavicle_l</td><td>1</td></tr>
<tr><td>clavicle_r</td><td>1</td></tr>
</table>

![Set Rotation Stiffness](/images/common/retargeting/set-rotation-stiffness.jpg)

Set **Preferred Angles** on <u>thighs</u> and <u>calfs</u>, with the following values

<table class="uk-table">
<thead><tr><th>Bone Name</th><th>Bone Preferrred Angles</th></tr></thead>
<tbody>
<tr><td>thigh_l, thigh_r</td><td>(0, 0, -90)</td></tr>
<tr><td>calf_l, calf_r</td><td>(0, 0, 90)</td></tr>
</table>

![Set Preferred Angles](/images/common/retargeting/set-preferred-angles.jpg)

++

<br>

##### 4. Done

--Final Check, warning

Finally, last check on the chain's naming and see if the chain point to the correct bones (eg. LeftRing: `ring_01_l` -> `ring_03_l` (correct), LeftRing: `ring_01_l` -> `ring_*02*_l` (incorrect)).

![Check chain names and bones](/images/common/retargeting/check-naming-and-bones-hierarchy.jpg)

--

<br/>

### Create IK Retargeter

After we got both IK Rigs for the source and target character, create an **IK Retargeter**. Right click in the Content Browser, select `Animation > IK Rig > IK Retargeter`

![Set Preferred Angles](/images/common/retargeting/create-ik-retargeter-menu.jpg)


--Naming Convention

I use the format of "RTG\_`{source}`\_to\_`{target}`", eg. `RTG_UE4Mannequin_to_Shenya`.

`{source}` is the character that we want to copy animations from, `{target}` is the character that wants to have the new animations.

--

Double click the IK Retargeter asset to open the IK Retargeter Window.

#### 1. Select the source and target IK Rig in the Details panel.

![IK Retargeter Window](/images/common/retargeting/ik-retargeter-window2.jpg)

#### 2. Switch to Retarget Pose

--Difference between UE5.2 VS UE5.3

Note that the interface is a bit different between UE5.2 and UE5.3. In UE 5.2, you want to press on the "Show Retarget Pose" green button ; In UE5.3, you click on the 3 vertical dots and select "Showing Retarget Pose".

![IK Retargeter Interface difference between UE5.2 & UE5.3](/images/common/retargeting/retargeter-versions.jpg)

--

#### 3. Import Pose Asset

![Import Pose Asset](/images/common/retargeting/import-pose-asset.jpg)

![Select Pose Asset](/images/common/retargeting/select-pose-asset.jpg)
