---
title: Characters Common Sections
weight: 2
bookToc: true
bookCollapseSection: false
draft: false
---

# Characters Common Sections

<hr style="border: 1px solid #44c0c9;">

<div class="common-features">

## Common Features

</div>

<div class="div-table">
   <!-- <div class="trow">
      <div class="tcolumn tcolumn1">FEATURES</div>
      <div class="tcolumn tcolumn2"></div>
      <div class="tcolumn tcolumn3"></div>
   </div> -->
   <div class="trow">
      <div class="tcolumn key">Morph Targets</div>
      <div class="tcolumn value1">Yes</div>
      <div class="tcolumn value2">~55 <a href="https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/">Apple Blendshapes</a></div>
   </div>
   <div class="trow">
      <div class="tcolumn key">Full Body Under Clothes</div>
      <div class="tcolumn value1">Yes</div>
      <div class="tcolumn value2"></div>
   </div>
   <div class="trow">
      <div class="tcolumn key">Source Fbx</div>
      <div class="tcolumn value1">Included</div>
      <div class="tcolumn value2">You can find the source fbx files in the <br/> {{< path "Source > Fbx" >}} folder</div>
   </div>
   <div class="trow">
      <div class="tcolumn key">Change Material Color</div>
      <div class="tcolumn value1">Yes</div>
      <div class="tcolumn value2">RGB Mask Textures provided for making color changes</div>
   </div>
   <div class="trow">
      <div class="tcolumn key">Skeleton</div>
      <div class="tcolumn value1">Based on UE4 Mannequin</div>
      <div class="tcolumn value2">* No Additional Bones Added</div>
   </div>
   <div class="trow">
      <div class="tcolumn key">Textures</div>
      <div class="tcolumn value1">PBR (Physically Based Rendering)</div>
      <div class="tcolumn value2">* Metallic Roughness Workflow</div>
   </div>

   <div class="trow">
      <div class="tcolumn tcolumn1b">Animations</div>
      <div class="tcolumn tcolumn2"></div>
      <div class="tcolumn tcolumn3"></div>
   </div>
   <div class="trow">
      <div class="tcolumn key">Animations</div>
      <div class="tcolumn value1">Demo Animations</div>
      <div class="tcolumn value2" style="text-align:left">
      Retargeted UE4 Mannequin Default Animations, a few of Paragon Animations and a few of Echo's Animation
      </div>
   </div>
</div>

<br/>

## Character's Skeleton

My current characters (Meryl, Shenya, Charles, Lia and Aren) follows the same skeleton as UE4's Mannequin. They have the same bone names and skeleton structure, however the skeleton **proportion** of my characters are different from the UE Mannequins:

![ue4-mannequin](img/skeleton/ue4-mannequin.jpg)

For example, Meryl's skeleton has all the same bones but the joints position are different. As for joint orientation (ie. rotations), I try my best to match the original bone orientation of the UE4 mannequin above but because they are hand aligned (I use my eyeball to judge), the alignments are not machine-accurate.

![meryl skeleton](img/skeleton/meryl-skeleton.jpg)

My current characters are having all these bones below (and no additional bones added):

{{% admonition type="info" title="UE4 Mannequin Bones List (for reference)" details="true" %}}
![ue4-mannequin-bones](img/skeleton/ue4-mannequin-bones.jpg)
{{% /admonition %}}


The character's skeleton also has a different scale than UE4's Mannequin, for example, Meryl has a smaller size:

![meryl scale reference](img/skeleton/meryl-scale-reference.jpg)

{{% admonition warning "Before Buying" %}}
Please consider the points above before buying and using it in your project. Due to the size differences, and my characters having different bones position and rotations from the UE mannequins, you might face some challenges when trying to retarget animations. Most often during retargeting, you will face problems for animations that are holding weapons, or where in the animations, the hands or feet need to stay locked to the the ground or some other objects.

You can also check out my characters' ALS and Lyra sections of their videos to see how the retargeting might looks. I am using the "Assign Skeleton" method for ALS while using the "Retarget Pose from Mesh" (using IKRetargeter asset) method for Lyra.

By the way, I created some videos that might be helpful to you when you need to some retargeting.
{{% /admonition %}}


{{% admonition type="info" title="Videos on Retargeting" details="true" %}}

{{< youtube SrzN_egLZYk >}}

{{< youtube X6ur4suLaAo >}}

{{% /admonition %}}

<br/>

## Character's Updates

![update icon](img/update-icon.jpg)

If you see this " ***i*** " icon over my characters, it means I have updated something to the character asset. You can always check out each character's **Change Log** first to see what has changed, before you click on the update button. Because sometimes, it might just be some updates that wouldn't benefit your project (so you can skip this update) or sometimes it's a very big change that you might want to consider backing up your existing character asset first.