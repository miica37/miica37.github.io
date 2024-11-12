---
title: RIn.Rename
---
<script>
	export let callbackAfterUpdate;
	import PageTitle from "$lib/components/pageTitle.svelte"
	import Admonition from "$lib/components/admonitions.svelte"
	import Collapsible from "$lib/components/collapsible.svelte"
	import Image from "$lib/components/image.svelte"
	import Youtube from "$lib/components/youtube.svelte"
	import Heading from "$lib/components/heading.svelte"
	import { afterUpdate } from 'svelte';
	
	afterUpdate(() => {
		callbackAfterUpdate()
	});
</script>

# RInRename

![RInRename Cover](/images/tools/rinrename/rinrename-cover.png)
## Intro

Hello, this is a tool I made to help rename things inside Blender. I am looking for beta testers to test the tool and find any bugs before I release it to Blender Marketplace.

You can get the addon at this link for now to play with it: link to google drive.

## Features

- Respect Selection Order
- Rename Hidden Objects
- Command based (just one text field and ok, cancel button)
- Rename multiple objects at the same time using comma (’,’)
- Preview results in viewport as you type
- Common things like search & replace, adding numbers, prefix suffix
- Batch rename collection
- Numbering using A-Z
- Swap two names
- Add Text at Position
- Follow Collection’s name *
- Copy name to data

Feel free to suggest features that you wish to see. Although at this stage the priority is to get it to be production ready with little to no bugs. I will add more features in the future.

## Installation

You can setup your hotkey in the Preferences page

You need to select some objects first, then press hotkey to show the rename dialog. 

start typing and you should see previews of renamed names in the viewport (can be turned off in the preferences).

Press Enter twice to confirm rename or Press Escape twice to Cancel.

Type /? and press enter to show some helps on commands you can use.

