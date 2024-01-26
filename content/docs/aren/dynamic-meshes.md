---
title: "└ 🦴 Dynamic Meshes & their Additional Bones"
weight: 20
bookToc: true
draft: false
---

Dynamic Meshes & their Additional Bones
=======================================

<hr style="border: 1px solid #44c0c9;">

There are 8 dynamic meshes with additional bones for Aren.

* DYN_Earrings (has Physics Asset Setup)
* DYN_ElfSkirt1
* DYN_ElfSkirt2
* DYN_Belts1_ElfSkirt1
* DYN_Hair1_Long
* DYN_Hair1_Short
* DYN_Hair2
* DYN_Hair3

[See the list of additional bones below.](dynamic-meshes.md#bone-list)



For informations on dynamic meshes, please check out [its section in the Characters Common Sections](../general/dynamic-meshes.md)

{{% admonition note "Bone? Joint? They are the same" %}}
I am using the term "bone" and "joint" interchangeably. In Maya, these things are called "joints", but in Unreal Engine they are called "bones". I will try use the term "bone" whenever I can for consistency but sometimes I spelled 'joint' out of old habit.
{{% /admonition %}}

<br/>

<div class="bones">

### Additional Bones for Dynamic Meshes

{{% admonition info "Bones Naming Conventions" false %}}
In Oct 2023 when I updated Shenya's DYN meshes, I have switched to use **<mark>SC_</mark>** (which stands for <mark>Skeleton Chain</mark>) to prefix all bone names.
{{% /admonition %}}

#### How to read the list below? Take Shenya's Hair1 for example:

The **first** bone chain (<sub>SC_01</sub>) starts from the <mark>***Front Left***</mark> side of the character and **last** bone chain (<sub>SC_07</sub>) ends up at the <mark>***Front Right***</mark> side of the character (<sub>SC_07</sub>). (It goes counter-clockwise, if viewing them from the top of the character)

![Bones chain direction](../../shenya/img/bones/bones-chain-direction2.jpg)

In the naming convention below, I will use this format: <sub>SC_01</sub><mark><sup>(5)</sup></mark> which indicates a bone chain of <mark>5</mark> (<sup>(5)</sup>) bones.

{{% admonition warning "No End Bones" %}}
In my other ***older*** characters, there are "_end" bones that are not weighted at the end of bone chain. It's a mistake to include them and they will be removed in future updates. Aren and future characters will not have end bones.
{{% /admonition %}}

#### Bone List

{{% admonition example "DYN_Earrings" false %}}
<sub>SC_01</sub><sup>(3)</sup>, 
<sub>SC_02</sub><sup>(3)</sup>
(6 Additional Bones)
{{% /admonition %}}

{{% admonition example "DYN_ElfSkirt1" false %}}
<sub>SC_01</sub><sup>(3)</sup>, 
<sub>SC_02</sub><sup>(4)</sup>, 
<sub>SC_03</sub><sup>(5)</sup>, 
<sub>SC_04</sub><sup>(4)</sup>, 
<sub>SC_05</sub><sup>(5)</sup>, 
<sub>SC_06</sub><sup>(4)</sup>, 
<sub>SC_07</sub><sup>(4)</sup>
(29 Additional Bones)
{{% /admonition %}}

{{% admonition example "DYN_ElfSkirt2" false %}}
<sub>SC_01</sub><sup>(3)</sup>, 
<sub>SC_02</sub><sup>(4)</sup>, 
<sub>SC_03</sub><sup>(4)</sup>, 
<sub>SC_04</sub><sup>(4)</sup>, 
<sub>SC_05</sub><sup>(4)</sup>, 
<sub>SC_06</sub><sup>(3)</sup>
(22 Additional Bones)
{{% /admonition %}}

{{% admonition example "DYN_Belts1_ElfSkirt1 (same joint chains as ElfSkirt1)" false %}}
<sub>SC_01</sub><sup>(3)</sup>, 
<sub>SC_02</sub><sup>(4)</sup>, 
<sub>SC_03</sub><sup>(5)</sup>, 
<sub>SC_04</sub><sup>(4)</sup>, 
<sub>SC_05</sub><sup>(5)</sup>, 
<sub>SC_06</sub><sup>(4)</sup>, 
<sub>SC_07</sub><sup>(4)</sup>
(29 Additional Bones)
{{% /admonition %}}

{{% admonition example "DYN_Hair1_Long" false %}}
<sub>SC_01</sub><sup>(3)</sup>, 
<sub>SC_02</sub><sup>(3)</sup>, 
<sub>SC_03</sub><sup>(4)</sup>, 
<sub>SC_04</sub><sup>(4)</sup>, 
<sub>SC_05</sub><sup>(3)</sup>, 
<sub>SC_06</sub><sup>(3)</sup>, 
<sub>SC_07</sub><sup>(6)</sup>
(26 Additional Bones)
{{% /admonition %}}

{{% admonition example "DYN_Hair1_Short (no ponytail bones)" false %}}
<sub>SC_01</sub><sup>(3)</sup>, 
<sub>SC_02</sub><sup>(3)</sup>, 
<sub>SC_03</sub><sup>(4)</sup>, 
<sub>SC_04</sub><sup>(4)</sup>, 
<sub>SC_05</sub><sup>(3)</sup>, 
<sub>SC_06</sub><sup>(3)</sup>
(20 Additional Bones)
{{% /admonition %}}

{{% admonition example "DYN_Hair2" false %}}
<sub>SC_01</sub><sup>(5)</sup>, 
<sub>SC_02</sub><sup>(6)</sup>, 
<sub>SC_03</sub><sup>(6)</sup>, 
<sub>SC_04</sub><sup>(6)</sup>
(23 Additional Bones)
{{% /admonition %}}

{{% admonition example "DYN_Hair3" false %}}
<sub>SC_01</sub><sup>(4)</sup>, 
<sub>SC_02</sub><sup>(3)</sup>, 
<sub>SC_03</sub><sup>(4)</sup>
(11 Additional Bones)
{{% /admonition %}}

<br/>
