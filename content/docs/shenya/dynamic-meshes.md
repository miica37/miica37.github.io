---
title: "└ Dynamic Meshes & their Additional Bones"
weight: 20
bookToc: true
draft: false
---

<div class="bones">

Dynamic Meshes
--------------------
Dynamic Meshes are meshes that are added with additional bones for the purpose of using the bones for dynamic simulations (either with physics assets, Anim Dynamics node, or by plugins like [KawaiiPhysics](https://github.com/pafuhana1213/KawaiiPhysics/)). They do not share the main Shenya skeleton that is in the root of Meshes folder.

A Dynamic Mesh is put into its own folder because it has its own skeleton ({{< object "SK_Shenya_DYN_{something}_Skeleton" >}}) and its own animation blueprint ( {{< object "ABP_Shenya_DYN_{something}" >}} ). The folder is named {{< object "DNY_{something}" >}}.

![Bones naming example](../img/dynamic-meshes/dymanic-meshes-content-folder.jpg)

<div class="bones">

<br/>

### Additional Bones for Dynamic Meshes

{{% admonition info "Naming Conventions" false %}}
In the Oct 2023 update of naming convention to the bones, I have switched to use **SC_** (which stands for Skeleton Chain) as the prefix to all bones.

I might change this again in the future if I found a better way to name them.
{{% /admonition %}}

#### How to read the list below? Take Hair1 as an example:

<sub>SC_01_01</sub> is the root joint while <sub>SC_01_end</sub> is the end joint. The end joint is not weighted, which means it doesn't affect anything no matter how it transforms.

![Bones naming example](../img/bones/bones-naming-example.jpg)

The first joint chain (<sub>SC_01</sub>) starts from the left front side of the character and ends at the right front side of the character (<sub>SC_07</sub>) (It goes counter-clockwise, if looking from the top of the character)

![Bones chain direction](../img/bones/bones-chain-direction2.jpg)

In the naming convention below, I will use this format: <sub>SC_01</sub><sup>(5)</sup> which indicates a joint chain of 5 (<sup>(5)</sup>) joints.

{{% admonition example "DYN_Hair1" false %}}
<sub>SC01</sub><sup>(5)</sup>, 
<sub>SC02</sub><sup>(5)</sup>, 
<sub>SC03</sub><sup>(5)</sup>, 
<sub>SC04</sub><sup>(5)</sup>, 
<sub>SC05</sub><sup>(5)</sup>, 
<sub>SC06</sub><sup>(5)</sup>, 
<sub>SC07</sub><sup>(6)</sup>, 
(36 Additional Bones)
{{% /admonition %}}

{{% admonition example "DYN_Hair2" false %}}
<sub>SC01</sub><sup>(6)</sup>, 
<sub>SC02</sub><sup>(5)</sup>, 
<sub>SC03</sub><sup>(5)</sup>, 
<sub>SC04</sub><sup>(6)</sup>, 
<sub>SC_Ponytail</sub><sup>(9)</sup>, 
(31 Additional Bones)
{{% /admonition %}}

{{% admonition example "DYN_Hair3" false %}}
<sub>SC01</sub><sup>(5)</sup>, 
<sub>SC02</sub><sup>(5)</sup>, 
<sub>SC03</sub><sup>(5)</sup>, 
<sub>SC04</sub><sup>(5)</sup>, 
<sub>SC05</sub><sup>(5)</sup>, 
<sub>SC06</sub><sup>(5)</sup>, 
<sub>SC07</sub><sup>(5)</sup>, 
<sub>SC08</sub><sup>(5)</sup>, 
<sub>SC09</sub><sup>(5)</sup>, 
<sub>SC_Fringe</sub><sup>(5)</sup>, 
(50 Additional Bones)
{{% /admonition %}}

{{% admonition example "DYN_Hair4" false %}}
<sub>SC_LeftSide</sub><sup>(5)</sup>, 
<sub>SC_Back_01</sub><sup>(6)</sup>, 
<sub>SC_Back_02</sub><sup>(6)</sup>, 
<sub>SC_Back_03</sub><sup>(6)</sup>, 
<sub>SC_Front</sub><sup>(7)</sup>, 
(30 Additional Bones)
{{% /admonition %}}

![Bones naming example](../img/bones/jacket-bones.jpg)

{{% admonition example "DYN_Jacket" false %}}
<sub>SC01</sub><sup>(4)</sup>, 
<sub>SC02</sub><sup>(4)</sup>, 
<sub>SC03</sub><sup>(4)</sup>, 
<sub>SC04</sub><sup>(4)</sup>, 
<sub>SC05</sub><sup>(4)</sup>, 
<sub>SC06</sub><sup>(4)</sup>, 
<sub>SC07</sub><sup>(4)</sup>, 
<sub>SC08</sub><sup>(4)</sup>, 
<sub>SC09</sub><sup>(4)</sup>, 
<sub>SC10</sub><sup>(4)</sup>, 
(40 Additional Bones)
{{% /admonition %}}

<br/>

### KawaiiPhysics

{{% admonition info "Youtube Video" false %}}
<!-- {{< youtube w7Ft2ymGmfc >}} -->
{{% /admonition %}}

{{% admonition info "Anim Blueprint Node Paste" false %}}
Shenya KawaiiPhysics Anim Blueprint Node Paste: <https://gist.github.com/miica37/1346661ab0e1d3ec942a19e687462c0e>
{{% /admonition %}}

To use Dynamic meshes with KawaiiPhysics:
1. Add Plugin to project
2. Add **DYN_Mesh** (eg. {{< object "SK_Shenya_DYN_Hair1" >}}) to a blueprint. Parent it under a mesh with the main skeleton.
3. Open Animation blueprint for **DYN_Mesh** (eg. {{< object "ABP_Shenya_DYN_Hair1" >}}), add KawaiiPhysics nodes
4. Compile and check if it works

#### 1. Add Plugin to Project

Go to [KawaiiPhysics Github Releases](https://github.com/pafuhana1213/KawaiiPhysics/releases) and download the version for your Unreal Engine Project. The latest release as of 17th October 2023 only have versions for UE5 and above. If you use UE4, you can scroll down for older version or you can try to recompile the code.

![KawaiiPhysics Releases](../img/dynamic-meshes/kawaiiphysics-release.jpg)

After download, open the zip file, drag the Plugins folder into your project root folder, and restart Unreal Engine.

![Add KawaiiPhysics Plugin to project](../img/dynamic-meshes/add-kawaiiphysics-plugin-to-project.jpg)

#### 2. Add DYN_Mesh to a Blueprint

Example:

![KawaiiPhysics Blueprint Example](../img/dynamic-meshes/kawaiiphysics-blueprint-example.jpg)

#### 3. Add KawaiiPhysics Nodes to Animation Blueprint

Open the Animation Blueprint

![ABP DYN](../img/dynamic-meshes/dyn-abp.jpg)

Example of the node graph:

![ABP KawaiiPhysics Nodes](../img/dynamic-meshes/abp-kawaiiphysics-nodes.jpg)

