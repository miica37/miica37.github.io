export const prerender = true;

export async function load({ fetch }) {
	const docs_response = await fetch('../../../api/docs')
	const docs = await docs_response.json()

	return {
		docs: docs
		}
}
