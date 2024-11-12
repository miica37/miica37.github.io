import { error } from '@sveltejs/kit'

export async function load({ fetch, params }) {
	const page = await import(`$pages/docs/unreal-characters/${params.slug}.md`)
	const docs_response = await fetch('../../../api/docs')
	const docs = await docs_response.json()

	return {
		slug: 'docs/unreal-characters/' + params.slug,
		content: page.default,
		meta: page.metadata,
		docs: docs
		}
}
