---
title: Characters Common Sections
weight: 2
bookToc: true
bookCollapseSection: false
draft: false
---

# Characters Common Sections

<hr style="border: 1px solid #44c0c9;">

## Character's Skeleton

My current characters (Meryl, Shenya, Charles, Lia and Aren) follows the same skeleton as UE4's Mannequin (in naming and bones hierarchy structure, however not in the proportion):

![ue4-mannequin](img/skeleton/ue4-mannequin.png)

For example, Meryl's skeleton has all the same bones but the joints position are different. For joint orientation, I try my best to match the original bone orientation of the UE4 mannequin above but there can still be a little bit of difference.

![meryl skeleton](img/skeleton/meryl-skeleton.jpg)

Current characters have all these bones (and no additional bones added):

{{% admonition type="info" title="UE4 Mannequin Bones List" details="true" %}}
![ue4-mannequin-bones](img/skeleton/ue4-mannequin-bones.jpg)
{{% /admonition %}}


The character's skeleton also has a different scale than UE4's Mannequin, for example, Meryl has a smaller size:

![meryl scale reference](img/skeleton/meryl-scale-reference.jpg)

{{% admonition warning "Before Buying" %}}
Please consider the points above before buying and using it in your project. Due to the skeleton size difference and different joints position, you will not get a perfect result in retargeting. There will be problems with holding the weapons, you can check out the ALS and Lyra sections for the character in their respective youtube video.

Although I think it's possible to solve those issue in Unreal Engine using IK bones or something, it's a lot more work and I just don't have enough knowledge to do that at my current level.
{{% /admonition %}}
