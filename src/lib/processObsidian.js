function transform_Plusses_to_CollapsibleComponent(line) {
	// Sample string: ++Official Documentations, this-id

	// skip markdown's frontmatter '++++++++++++++++++'
	const match0 = line.match(/^\+\+\++$/);
	if (match0) {
		return line;
	}

	const match1 = line.match(/^\+\+(?!-)([^,]+)(?:,\s*([^,]+))?/);
	const match2 = line.match(/^\+\+$/);

	if (match1) {
		const title = match1[1].trim();
		const id = match1[2] ? match1[2].trim() : null;
		return `\n<Collapsible title="${title}" ${id ? `id="${id}"` : ""}>\n`;
	} else if (match2) {
		return `\n</Collapsible>\n`
	}
	return line;
}

function transform_Hyphens_to_AdmonitionComponent(line) {
	// Sample string: --Official Documentations, Docs

	// skip markdown's frontmatter '--------------'
	const match0 = line.match(/^---+$/);
	if (match0) {
		return line;
	}

	const match1 = line.match(/^--(?!-)([^,]+)(?:,\s*([^,]+))?/);
	const match2 = line.match(/^--$/);

	if (match1) {
		const title = match1[1].trim();
		const type = match1[2] ? match1[2].trim() : null;
		return `\n<Admonition title="${title}" ${type ? `type="${type}"` : ""}>\n`;
	} else if (match2) {
		return `\n</Admonition>\n`
	}
	return line;
}

function transform_MarkdownImage_to_ImageComponent(line) {
	// Sample string: ![IK Retargeter Window|70%](/images/common/retargeting/ik-retargeter-window.jpg)
	const match = line.match(/!\[\s*(.*?)\s*(?:\|(.*?)?)?\]\((.*?)\)/);

	if (match) {
		const alt = match[1].trim();
		const width = match[2] ? match[2].trim() : null;
		const src = match[3] ? match[3].trim() : "";

		return `<Image src="${src}" alt="${alt}" ${width ? `width="${width}"` : ""} />`;
	}
	return line;
}

function transform_MarkdownH1_to_PageTitleComponent(line) {
  const match = line.match(/^#\s+(.*)/);

  if (match) {
    const title = match[1].trim();
    return `<PageTitle title="${title}" />`;
  }
  return line;
}

function transform_MarkdownHeadings_to_HeadingComponent(line) {
  const match = line.match(/^#(#+)\s+(.*)/);

  if (match) {
		const level = match[1].trim().length + 1;
		const title = match[2].trim();
    return `<Heading title="${title}" level=${level} />`;
  }
  return line;
}

function processObsidian_(content) {
	const lines = content.split('\n');
	let output_content = "";
	lines.forEach((line, index) => {
		let output_line = transform_MarkdownH1_to_PageTitleComponent(line);
		output_line = transform_MarkdownHeadings_to_HeadingComponent(output_line);
		output_line = transform_Hyphens_to_AdmonitionComponent(output_line);
		output_line = transform_Plusses_to_CollapsibleComponent(output_line);
		output_line = transform_MarkdownImage_to_ImageComponent(output_line);
		output_content += output_line + '\n';
	})
	return output_content;
}

/*
	SPECIFIC TO CHANGE LOG
*/

function transform_ChangeLog_MarkdownHeadings_to_HeadingComponent(line) {
  const match = line.match(/^#(#+)\s+(.*)/);

  if (match) {
		const level = match[1].trim().length + 1;
		const title = match[2].trim();
    return `<Heading title="${title}" level=${level} bold={1} />`;
  }
  return line;
}

function processObsidian_changeLogMd(content) {
	const lines = content.split('\n');
	let output_content = "";
	lines.forEach((line, index) => {
		let output_line = transform_ChangeLog_MarkdownHeadings_to_HeadingComponent(line);
		output_line = transform_MarkdownImage_to_ImageComponent(output_line);
		output_content += output_line + '\n';
	})
	return output_content;
}

export function processObsidian() {
	return {
		name: 'processObsidian',
		markup({ content, filename }) {
			if ( filename.includes('src/pages/characters') && filename.endsWith('changelog.md') ) {
				// console.log("222222222222222")
				// console.log(filename)
				return {
					code: processObsidian_changeLogMd(content)
				}
			} else if ( ( filename.includes('src/pages/docs') || filename.includes('src/pages/characters') || filename.includes('src/pages/tools') ) && filename.endsWith('.md') ) {
				// console.log("333333333333333")
				// console.log(filename)
				return {
					code: processObsidian_(content)
				}
			}
		},
	}
}
