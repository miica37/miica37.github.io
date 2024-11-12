---
title: Dynamic Meshes
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

# Dynamic Meshes


Dynamic Meshes are meshes that are added with additional bones for the purpose of using the bones for dynamic simulations (either with physics assets, Anim Dynamics node, or by plugins like [KawaiiPhysics](https://github.com/pafuhana1213/KawaiiPhysics/)). They do not share the main Shenya skeleton that is in the root of Meshes folder.

A Dynamic Mesh is put into its own folder because it has its own skeleton (`SK_Shenya_DYN_{Hair1}_Skeleton`) and its own animation blueprint ( `ABP_Shenya_DYN_{Hair1}` ).

The folder is named `DYN_{Hair1}`.

For example this one is for Shenya:

![shenya-dynamic-meshes-content-folder](/images/common/dynamic-meshes/shenya-dynamic-meshes-content-folder.jpg)

and this one is for Meryl:

![meryl-dynamic-meshes-content-folder](/images/common/dynamic-meshes/meryl-dynamic-meshes-content-folder.jpg)

A typical skeleton for hair looks like the following, which is Shenya's Hair1's skeleton:

![shenya-hair1-skeleton](/images/common/dynamic-meshes/shenya-hair1-skeleton.jpg)

--Shenya Hair1 Skeleton List

![shenya-hair1-skeleton-list](/images/common/dynamic-meshes/shenya-hair1-skeleton-list.jpg)

--

The skeleton has the bone chain from the **root** up until the head, then the additional bones for the hairs are attached to the head. Notice that the arms and legs bones are deleted because whatever they do they don't affect the hairs skeleton.

The spine chain need to be there because it's linked to the hairs skeleton and I am using `Copy Pose from Mesh` in the animation blueprint.

--There are no Physics Assets

All* the dynamic meshes doesn't comes with physics asset because they don't look good most of the time with physics asset. They are intened to work with KawaiiPhysics but you can also setup physics asset on these skeletal meshes on your own if needed.

<small>* with some exceptions, for example Aren's Earring comes with Physics Assets setup.</small>

--

You can use Dynamic meshes with KawaiiPhysics or SPCRJointDynamics.

<br/>

### KawaiiPhysics

[KawaiiPhysics on Github](https://github.com/pafuhana1213/KawaiiPhysics/)

<div class="github-section">

![KawaiiPhysics gif from github](https://github.com/pafuhana1213/Screenshot/raw/master/KawaiiPhysics1.gif)

<div class="quote-container">
    <p class="quote">
        Kawaii Physics is a pseudo-physical plug-in created for Unreal Engine 4 & 5.<br/>
        You can sway your hair, skirt, chest, etc easily and in a <span class="quote-highlight">Kawaii</span> way.
    </p>
    <p class="quote-author">&ndash; from its Github description</p>
</div>

</div>

#### How to use

To use Dynamic meshes with KawaiiPhysics:
1. Add Plugin to project
2. Add **DYN_Mesh** (eg. `SK_Shenya_DYN_Hair1`) to a blueprint. Parent it under a mesh with the main skeleton.
3. Open Animation blueprint for **DYN_Mesh** (eg. `ABP_Shenya_DYN_Hair1`), add KawaiiPhysics nodes
4. Compile and check if it works

#### Video Example

--Youtube Video: Using KawaiiPhysics with Rabbit Heart Character Shenya

<Youtube code="HkaO96Ox8yg" />

--

#### 1. Add Plugin to Project

Go to [KawaiiPhysics Github Releases](https://github.com/pafuhana1213/KawaiiPhysics/releases) and download the version for your Unreal Engine Project. The latest release as of 17th October 2023 only have versions for UE5 and above. If you use UE4, you can scroll down for older version or you can attempt to recompile the code.

![KawaiiPhysics Releases](/images/common/dynamic-meshes/kawaiiphysics-release.jpg)

After download, open the zip file, drag the Plugins folder into your project root folder, and restart Unreal Engine.

![Add KawaiiPhysics Plugin to project](/images/common/dynamic-meshes/add-kawaiiphysics-plugin-to-project.jpg)

#### 2. Add DYN_Mesh to a Blueprint

Example:

![KawaiiPhysics Blueprint Example](/images/common/dynamic-meshes/kawaiiphysics-blueprint-example.jpg)

--Leader Pose Component in Modular Blueprint Setup, Warning

If you setup your modular blueprint with **Leader Pose Component** (like in the picture below), remember to *NOT* include DYN meshes because we want the additional bones to be driven by <mark>animation blueprint</mark> instead. If you use leader pose component on the mesh, those bones will not move because the leader (the head or the main skeleton in this case) doesn't has those additional joints.

![Don't plug or unplug DYN meshes to leader pose component](/images/common/dynamic-meshes/leader-pose-component-no.jpg)

If you use the DYN meshes inside a child blueprint, unset the leader pose component like so:

![Unset Leader Pose Component](/images/common/dynamic-meshes/unset-leader-pose-component.jpg)

--

#### 3. Add KawaiiPhysics Nodes to Animation Blueprint

Open the Animation Blueprint

![ABP DYN](/images/common/dynamic-meshes/dyn-abp.jpg)

Example of the node graph:

![ABP KawaiiPhysics Nodes](/images/common/dynamic-meshes/abp-kawaiiphysics-nodes.jpg)


<br/>

### SPCRJointDynamics

[SPCRJointDynamics on Github](https://github.com/SPARK-inc/SPCRJointDynamicsUE4/)

<div class="github-section">

<div class="quote-container">
    <p class="quote">
    Are you searching for a real cloth dynamics solution, so that character's cloth in your game will behave like a real cloth.<br/>
    Then this is the plugin for you. SPCRJointDynamics offers you the exact behaviour, which requires a basic bone setup, and you are ready to go.
    </p>
    <p class="quote-author">&ndash; from its Github description</p>
</div>

</div>

![SPCRJointDynamics gif from github](https://github.com/SPARK-inc/SPCRJointDynamicsUE4/raw/master/image/ue4_physics.gif)

I haven't tried using SPCRJointDynamics on Shenya but this plugin is specifically for cloths, where each joint chain can be linked to the one beside it so they constraint each other (compared to KawaiiPhysics where each joint chain are independent from each other and move independently), so you can try this on the Dynamic Jacket or the hairs.

I have tried SPCRJointDynamics on Meryl's skirt but find it sometimes flip the skirt upside down.
