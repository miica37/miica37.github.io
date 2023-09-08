---
title: "👸 Meryl"
weight: 20
bookToc: true
draft: false
---

Meryl Documentation
====================

<hr style="border: 1px solid #44c0c9;">

> Documentation is still working in progress but currently is having a very low priority...

You may refer to some of the [old documentation at readthedocs.org](https://unreal-meryl.readthedocs.io/en/latest/updates-log.html) but many of it are changed in the 2023 update.

---

<br/>

Removed Features
-----------------

* Handcrafted LODs (very time consuming; I think Unreal is able to generate LOD which might be option and I need to check how to do this)
* Master Cloth Material (I will see if it's possible to bring this back)

---

<br/>

<div class="bones">

Additional Bones
--------------------
For Example: <sub>hair1_front_c</sub><sup>(5)</sup> is a chain of 5 bones: <sub>hair1_front_01_c</sub>, <sub>hair1_front_02_c</sub>, <sub>hair1_front_03_c</sub>, <sub>hair1_front_04_c</sub>, <sub>hair1_front_c_end</sub>

There is an end bone to each chain (eg. <sub>hair1_front_c_end</sub>), but the end bone is not weighted (has no effect).

Skirt Example: <sub>S01</sub><sup>(5)</sup> is a chain of 5 bones: <sub>S01_01</sub>, <sub>S01_02</sub>, <sub>S01_03</sub>, <sub>S01_04</sub>, <sub>S01_end</sub>

S = Skirt

The naming for skirt bones is different from the hairs because for hairs I use KawaiiPhysics while for skirts I use SPCR Joint Dynamics. SPCRJointDynamics expect the joint chains to form a loop, so <sub>S01</sub> starts from the front left of the character and it goes counter clockwise to the back then to the front right of the character <sub>S10</sub>.

I find that SPCR Joint Dynamics sometimes flip the skirt upside down, so be aware this might not work if you want something really stable.

---

Hair1: <sub>hair1_front_c</sub><sup>(5)</sup>, 
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

Hair2: <sub>hair2_front1</sub><sup>(6)</sup>, 
<sub>hair2_front2</sub><sup>(5)</sup>, 
<sub>hair2_back1_l</sub><sup>(5)</sup>, 
<sub>hair2_back2_l</sub><sup>(5)</sup>, 
<sub>hair2_back_c</sub><sup>(5)</sup>, 
<sub>hair2_back2_r</sub><sup>(5)</sup>, 
<sub>hair2_back1_r</sub><sup>(5)</sup>
(36 Additional Bones)

Hair3: <sub>hair3_front_c</sub><sup>(5)</sup>, 
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

Hair4: <sub>hair4_side1_l</sub><sup>(6)</sup>, 
<sub>hair4_side2_l</sub><sup>(6)</sup>, 
<sub>hair4_side1_r</sub><sup>(6)</sup>, 
<sub>hair4_side2_r</sub><sup>(6)</sup>, 
<sub>hair4_tail</sub><sup>(7)</sup>
(31 Additional Bones)

Hair 5: <sub>hair6_braid</sub><sup>(9)</sup>, 
<sub>hair6_front_r</sub><sup>(6)</sup>, 
<sub>hair6_front_l</sub><sup>(6)</sup>, 
<sub>hair6_side_r</sub><sup>(5)</sup>, 
<sub>hair6_side_l</sub><sup>(5)</sup>
(31 Additional Bones)

Hat1: <sub>hat3_tail</sub><sup>(7)</sup>, 
<sub>hat3_brim1</sub><sup>(2)</sup>, 
<sub>hat3_brim2</sub><sup>(2)</sup>, 
<sub>hat3_brim3</sub><sup>(2)</sup>, 
<sub>hat3_brim4</sub><sup>(2)</sup>, 
<sub>hat3_brim5</sub><sup>(2)</sup>
(17 Additional Bones)

Hat3: <sub>hat3_tail</sub><sup>(7)</sup>, 
<sub>hat3_brim1</sub><sup>(2)</sup>, 
<sub>hat3_brim2</sub><sup>(2)</sup>, 
<sub>hat3_brim3</sub><sup>(2)</sup>, 
<sub>hat3_brim4</sub><sup>(2)</sup>, 
<sub>hat3_brim5</sub><sup>(2)</sup>
(17 Additional Bones)

Skirt1: <sub>S01</sub><sup>(5)</sup>, 
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

Skirt2: <sub>S01</sub><sup>(5)</sup>, 
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

Skirt3: <sub>S01</sub><sup>(6)</sup>, 
<sub>S02</sub><sup>(6)</sup>, 
<sub>S03</sub><sup>(6)</sup>, 
<sub>S04</sub><sup>(6)</sup>, 
<sub>S05</sub><sup>(6)</sup>, 
<sub>S06</sub><sup>(6)</sup>, 
<sub>S07</sub><sup>(6)</sup>, 
<sub>S08</sub><sup>(6)</sup>
(48 Additional Bones)
</div>