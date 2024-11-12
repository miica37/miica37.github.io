export async function load({ fetch, params }) {
	const page = await import(`$pages/tools/blender/rinrename.md`)

	return {
		content: page.default,
		meta: page.metadata,
		}
}
