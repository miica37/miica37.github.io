<script>
    import Heading from "$lib/components/heading.svelte"
    import Image from "$lib/components/image.svelte"
</script>

## Character's Skeleton

<div class="uk-section uk-section-muted">
	<div class="uk-container">
		<div class="uk-grid-match uk-child-width-1-2@m" uk-grid>
			<div>
				<p>My current characters (Meryl, Shenya, Charles, Lia and Aren) follows the same skeleton as UE4’s Mannequin. They have the same bone names and skeleton structure, however the skeleton proportion of my characters are different from the UE Mannequins:</p>

				![ue4-mannequin|600](/images/common/skeleton/ue4-mannequin.jpg)

			</div>
			<div>
				<p>For example, Meryl’s skeleton has all the same bones but the joints position are different. As for joint orientation (ie. rotations), I try my best to match the original bone orientation of the UE4 mannequin above but because they are hand aligned (I use my eyeball to judge), the alignments are not machine-accurate.</p>

				![meryl skeleton|500](/images/common/skeleton/meryl-skeleton.jpg)

			</div>
		</div>
	</div>
</div>

My current characters are having all these bones below (and no additional bones added):

![ue4-mannequin-bones](/images/common/skeleton/ue4-mannequin-bones.jpg)


The character's skeleton also has a different scale than UE4's Mannequin, for example, Meryl has a smaller size:

![meryl scale reference](/images/common/skeleton/meryl-scale-reference.jpg)

