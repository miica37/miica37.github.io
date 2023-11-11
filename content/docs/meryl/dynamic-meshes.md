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

{{% admonition note "Bone? Joint?" %}}
I am using the term "bone" and "joint" interchangeably. In Maya, it's "joint", in Unreal Engine it's "bone". I will try use "bone" whenever I can but sometimes it got mixed up with "joint".
{{% /admonition %}}

{{% admonition info "Naming Conventions" false %}}
Meryl is using an older naming convention than Shenya (Oct 2023 Update).
{{% /admonition %}}

<div class="bones">

Additional Bones
--------------------

#### How to read the list below? Take Hair1 as an example:

<sub>hair1_front_01_c</sub> is the root bone while <sub>hair1_front_c_end</sub> is the end bone. The end bone is not weighted, which means it doesn't affect anything no matter how it transforms.

![](../img/dynamic-meshes/bones-naming-example.jpg)

In the naming convention below, I will use this format: <sub>hair1_front_c</sub><sup>(5)</sup>. The superscript <sup>(5)</sup> indicates there are 5 bones in this chain.

For skirts I am using another naming convention:

Skirt Example: <sub>S01</sub><sup>(5)</sup> is a chain of 5 bones: <sub>S01_01</sub>, <sub>S01_02</sub>, <sub>S01_03</sub>, <sub>S01_04</sub>, <sub>S01_end</sub>

The naming for skirt bones is different from the hairs because for hairs I use KawaiiPhysics while for skirts I use SPCR Joint Dynamics. SPCRJointDynamics expect the joint chains to form a loop, so <sub>S01</sub> starts from the front left of the character and it goes counter clockwise to the back then to the front right of the character <sub>S10</sub>.

---

{{% admonition example "DYN_Hair1" false %}}
<sub>hair1_front_c</sub><sup>(5)</sup>, 
<sub>hair1_front_r</sub><sup>(5)</sup>, 
<sub>hair1_front_l</sub><sup>(5)</sup>, 
<sub>hair1_side_r</sub><sup>(5)</sup>, 
<sub>hair1_side_l</sub><sup>(5)</sup>, 
<sub>hair1_back1_r</sub><sup>(5)</sup>, 
<sub>hair1_back2_r</sub><sup>(5)</sup>, 
<sub>hair1_back3_r</sub><sup>(5)</sup>, 
<sub>hair1_back1_l</sub><sup>(5)</sup>, 
<sub>hair1_back2_l</sub><sup>(5)</sup>, 
<sub>hair1_back3_l</sub><sup>(5)</sup>
(55 Additional Bones)
{{% /admonition %}}

{{% admonition example "DYN_Hair2" false %}}
<sub>hair2_front1</sub><sup>(6)</sup>, 
<sub>hair2_front2</sub><sup>(5)</sup>, 
<sub>hair2_back1_l</sub><sup>(5)</sup>, 
<sub>hair2_back2_l</sub><sup>(5)</sup>, 
<sub>hair2_back_c</sub><sup>(5)</sup>, 
<sub>hair2_back2_r</sub><sup>(5)</sup>, 
<sub>hair2_back1_r</sub><sup>(5)</sup>
(36 Additional Bones)
{{% /admonition %}}

{{% admonition example "DYN_Hair2" false %}}
<sub>hair3_front_c</sub><sup>(5)</sup>, 
<sub>hair3_front_l</sub><sup>(5)</sup>, 
<sub>hair3_front_r</sub><sup>(5)</sup>, 
<sub>hair3_side_l</sub><sup>(7)</sup>, 
<sub>hair3_side_r</sub><sup>(7)</sup>, 
<sub>hair3_back_c</sub><sup>(5)</sup>, 
<sub>hair3_back1_l</sub><sup>(5)</sup>, 
<sub>hair3_back2_l</sub><sup>(5)</sup>, 
<sub>hair3_back2_r</sub><sup>(5)</sup>, 
<sub>hair3_back1_r</sub><sup>(5)</sup>
(54 Additional Bones)
{{% /admonition %}}

{{% admonition example "DYN_Hair4" false %}}
<sub>hair4_side1_l</sub><sup>(6)</sup>, 
<sub>hair4_side2_l</sub><sup>(6)</sup>, 
<sub>hair4_side1_r</sub><sup>(6)</sup>, 
<sub>hair4_side2_r</sub><sup>(6)</sup>, 
<sub>hair4_tail</sub><sup>(7)</sup>
(31 Additional Bones)
{{% /admonition %}}

{{% admonition example "DYN_Hair5" false %}}
<sub>hair6_braid</sub><sup>(9)</sup>, 
<sub>hair6_front_r</sub><sup>(6)</sup>, 
<sub>hair6_front_l</sub><sup>(6)</sup>, 
<sub>hair6_side_r</sub><sup>(5)</sup>, 
<sub>hair6_side_l</sub><sup>(5)</sup>
(31 Additional Bones)
{{% /admonition %}}

{{% admonition example "DYN_Hat1" false %}}
<sub>hat3_tail</sub><sup>(7)</sup>, 
<sub>hat3_brim1</sub><sup>(2)</sup>, 
<sub>hat3_brim2</sub><sup>(2)</sup>, 
<sub>hat3_brim3</sub><sup>(2)</sup>, 
<sub>hat3_brim4</sub><sup>(2)</sup>, 
<sub>hat3_brim5</sub><sup>(2)</sup>
(17 Additional Bones)
{{% /admonition %}}

{{% admonition example "DYN_Hat3" false %}}
<sub>hat3_tail</sub><sup>(7)</sup>, 
<sub>hat3_brim1</sub><sup>(2)</sup>, 
<sub>hat3_brim2</sub><sup>(2)</sup>, 
<sub>hat3_brim3</sub><sup>(2)</sup>, 
<sub>hat3_brim4</sub><sup>(2)</sup>, 
<sub>hat3_brim5</sub><sup>(2)</sup>
(17 Additional Bones)
{{% /admonition %}}

{{% admonition example "DYN_Skirt1" false %}}
<sub>S01</sub><sup>(5)</sup>, 
<sub>S02</sub><sup>(5)</sup>, 
<sub>S03</sub><sup>(5)</sup>, 
<sub>S04</sub><sup>(5)</sup>, 
<sub>S05</sub><sup>(5)</sup>, 
<sub>S06</sub><sup>(5)</sup>, 
<sub>S07</sub><sup>(5)</sup>, 
<sub>S08</sub><sup>(5)</sup>, 
<sub>S09</sub><sup>(5)</sup>, 
<sub>S10</sub><sup>(5)</sup>
(50 Additional Bones)
{{% /admonition %}}

{{% admonition example "DYN_Skirt2" false %}}
<sub>S01</sub><sup>(5)</sup>, 
<sub>S02</sub><sup>(5)</sup>, 
<sub>S03</sub><sup>(5)</sup>, 
<sub>S04</sub><sup>(5)</sup>, 
<sub>S05</sub><sup>(5)</sup>, 
<sub>S06</sub><sup>(5)</sup>, 
<sub>S07</sub><sup>(5)</sup>, 
<sub>S08</sub><sup>(5)</sup>, 
<sub>S09</sub><sup>(5)</sup>, 
<sub>S10</sub><sup>(5)</sup>
(50 Additional Bones)
{{% /admonition %}}

{{% admonition example "DYN_Skirt3" false %}}
<sub>S01</sub><sup>(6)</sup>, 
<sub>S02</sub><sup>(6)</sup>, 
<sub>S03</sub><sup>(6)</sup>, 
<sub>S04</sub><sup>(6)</sup>, 
<sub>S05</sub><sup>(6)</sup>, 
<sub>S06</sub><sup>(6)</sup>, 
<sub>S07</sub><sup>(6)</sup>, 
<sub>S08</sub><sup>(6)</sup>
(48 Additional Bones)
{{% /admonition %}}

</div>

<br/>

Pastebin for KawaiiPhysics Setup
--------------------------------

I created a list of pastebin for Meryl's Hairs below so you can copy paste it to the dynamic hair's Animation Blueprint. Remember to add the KawaiiPhysics plugin to your project. For some of the graphs, I added a float variable to control all the alpha at the same time, make sure to create the "Alpha" variable, compile and set its default value.


{{% admonition type="abstract" title="DYN Hair1" details="true" %}}
<iframe src="https://blueprintue.com/render/b8eh2hn8/" scrolling="no" allowfullscreen width=100% height=500></iframe>
{{% /admonition %}}

{{% admonition type="abstract" title="DYN Hair2" details="true" %}}
<iframe src="https://blueprintue.com/render/ivyy_kw8/" scrolling="no" allowfullscreen width=100% height=500></iframe>
{{% /admonition %}}

{{% admonition type="abstract" title="DYN Hair3" details="true" %}}
<iframe src="https://blueprintue.com/render/kx2irw_q/" scrolling="no" allowfullscreen width=100% height=500></iframe>
{{% /admonition %}}

{{% admonition type="abstract" title="DYN Hair4" details="true" %}}
<iframe src="https://blueprintue.com/render/ti23yftk/" scrolling="no" allowfullscreen width=100% height=500></iframe>
{{% /admonition %}}

{{% admonition type="abstract" title="DYN Hair5" details="true" %}}
<iframe src="https://blueprintue.com/render/e7n10bs9/" scrolling="no" allowfullscreen width=100% height=500></iframe>
{{% /admonition %}}
