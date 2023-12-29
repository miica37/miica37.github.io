---
title: "└ Retarget Pose"
weight: 21
bookToc: true
draft: false
---

Retarget Pose
=======================================

<hr style="border: 1px solid #44c0c9;">

{{% admonition tip "Related Official Documentation" %}}
Unreal Engine Documentation on [Retarget Pose](https://docs.unrealengine.com/5.3/en-US/ik-rig-animation-retargeting-in-unreal-engine/#retargetpose) (include useful references on creating and editing pose, importing and exporting poses, etc)
{{% /admonition %}}

#### Why you should care about retarget pose?

The **retarget pose** of the two characters should match closely, the more aligned the two poses, the more accurate the retargeting results is going to be.

### A-Pose vs T-Pose

![A-Pose VS T-Pose](../img/retargeting/apose-vs-tpose.jpg)

{{% admonition info "Advantages of T-Pose" %}}
* You can make use of [Mixamo](https://www.mixamo.com/)'s Auto Rigger to create T-Pose (save time ✔)
* If you have to create the pose manually, it will be easier to align the limbs and fingers horizontally and vertically (using the front, side and top view and the grids to help you) (save time ✔)
{{% /admonition %}}

#### For Rabbit Heart Characters
Both A-Pose and T-Pose will be provided for all Rabbit Heart characters (currently finish updating Shenya's, will be working on Meryl's and Lia's). You can find the retarget poses in the folder {{< path "CharacterName > RetargetPoses" >}}.

Example:

![Retarget Poses Folder](../../shenya/img/changelog/2023-12-28/retarget-poses-folder.jpg)

T-Pose Variations:

![T-Pose Variations](../img/retargeting/tpose-variation.jpg)

{{% admonition info "(Summary) When to use A-Pose or T-Pose?" %}}
* UE4 animations: Use provided UE4 A-Pose
* UE5 animations: Use provided UE5 A-Pose
* Mixamo & Mixamo Rigged Characters: Use provided T-Pose (Straight version)
* Other Animations: Use provided T-Pose, pick the T-Pose variation that looks the best
{{% /admonition %}}

#### Import Retarget Pose in Retargeter

You can import those pose asset in the IK Retargeter.

![Import Pose Asset](../img/retargeting/import-pose-asset.jpg)

#### How to create T-Pose with Mixamo's Auto-Rigger

{{% admonition type="note" title="Video Walkthrough" details="false" %}}
In this section of the retargeting demo video ([jump to 16:47](https://www.youtube.com/watch?v=3EMOAtsn8aI&t=1007s)), you can see the process of uploading a character* to Mixamo website to rig and set it to TPose.

*Paragon's Belica in this case
{{< youtube 3EMOAtsn8aI >}}
{{% /admonition %}}

![Mixamo Auto-Rigger Steps](../img/retargeting/mixamo-auto-rig-steps.webp)
