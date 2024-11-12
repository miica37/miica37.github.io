import { error } from '@sveltejs/kit'

export async function load() {
	try {
		const updates_page = await import(`$pages/updates.md`)

		return {
			content: updates_page.default,
		}
	} catch (e) {
		error(404, `Could not find ${"$pages/updates.md"}`)
	}
}
