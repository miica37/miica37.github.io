import { error } from '@sveltejs/kit'

export async function load({ params }) {
	try {
		const page = await import(`$pages/characters/${params.slug}.md`)

		const gallery_image_urls = []
		for (const image_filename of page.metadata.gallery) {
			const character_name_lower = page.metadata.character_name.toLowerCase()
			gallery_image_urls.push(`/images/${character_name_lower}/${image_filename}`)
		}

		return {
			content: page.default,
			meta: page.metadata,
			gallery_image_urls: gallery_image_urls
		}
	} catch (e) {
		error(404, `Could not find ${params.slug}`)
	}
}
