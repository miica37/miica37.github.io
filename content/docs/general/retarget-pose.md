---
title: "└ Retarget Pose"
weight: 21
bookToc: true
draft: false
---

{{% admonition warning "WARNING: WORK IN PROGRESS" %}}
I am still working on this page, please check back later. It should be ready by 31th December 2023.
{{% /admonition %}}

Retarget Pose
=======================================

<hr style="border: 1px solid #44c0c9;">

{{% admonition tip "Related Official Documentation" %}}
Unreal Engine Documentation on [Retarget Pose](https://docs.unrealengine.com/5.3/en-US/ik-rig-animation-retargeting-in-unreal-engine/#retargetpose) (contains references on creating and editing pose, importing and exporting poses, etc)
{{% /admonition %}}

#### Why you should care about retarget pose?

The **retarget pose** of the two characters should match closely, the more aligned the two poses, the more accurate the retargeting results is going to be.

### A-Pose vs T-Pose

![A-Pose VS T-Pose](../img/retargeting/apose-vs-tpose.jpg)

{{% admonition info "Advantages of T-Pose" %}}
* You can make use of Mixamo's auto-rig to create T-Pose (save time ✔)
* If you have to create the pose manually, it will be easier to align the limbs and fingers horizontally and vertically (using the front, side and top view and the grids to help you) (save time ✔)
{{% /admonition %}}

#### For Rabbit Heart Characters
My current preferred way is this, if you have animations pack that use UE4 Mannequin, you can use A-Pose from my character to retarget. Any other animations including Mixamo animations, animation packs that use UE5 animations, or any other non-UE4 mannequin characters, ***I think*** it is better to use T-Pose, Not because of it will produce the best result but because of the time that you can save. The result between A-Pose and T-Pose depends on case by case basis and depends on how you construct the poses, the good thing is once you have those poses, you can switch the any of those poses with a dropdown and see the result instantly. UE5 makes it very easy to switch Pose.

Both A-Pose and T-Pose is provided for all Rabbit Heart characters. You can find them in the folder {{< path "Demo > Background_Assets > Animations > Poses" >}}.

{{% admonition note "When to use A-Pose or T-Pose? In Short:" %}}
* UE4 animations: use A-Pose
* Mixamo/UE5/other animations: use T-Pose
{{% /admonition %}}

#### How to create T-Pose with Mixamo's Auto-Rigger

![Mixamo Auto-Rigger Steps](../img/retargeting/mixamo-auto-rig-steps.webp)

.......................

#### Select Retarget Pose in Retargeter

.......................