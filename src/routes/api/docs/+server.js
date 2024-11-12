export const prerender = true;

import { json } from "@sveltejs/kit"

function getDocs() {
	let docs = [];
	const docs_paths = import.meta.glob('/src/pages/docs/unreal-characters/*.md', {eager:true});
	for (const path in docs_paths) {
		const doc_file = docs_paths[path]
		const doc_slug = path.split('/').at(-1)?.replace('.md', '')
		const doc_metadata = doc_file.metadata
		const doc_data = { ...doc_metadata, doc_slug, path }
		// post.published && docs.push(post)
		docs.push(doc_data)
	}

	// docs = docs.sort((a, b) => 
	// 	new Date(b.date).getTime() - new Date(a.date).getTime()
	// )

	return docs;
}

/** @type {import('./$types').RequestHandler} */
export function GET({ url }) {
	const docs = getDocs();
	return json(docs);
}
