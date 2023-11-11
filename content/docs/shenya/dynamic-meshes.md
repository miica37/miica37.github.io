---
title: "└ 🦴 Dynamic Meshes & their Additional Bones"
weight: 20
bookToc: true
draft: false
---

Dynamic Meshes & their Additional Bones
=======================================

<hr style="border: 1px solid #44c0c9;">

For informations on dynamic meshes, please check out [its section in the Characters Common Sections](../general/dynamic-meshes.md)

<br/>

<div class="bones">

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
