import { readdir } from 'node:fs/promises'
import path from 'node:path'
import { loadMarkdownContent } from './loadMarkdownContent.js'
import type { Speaker } from './content.page.server.js'
import type { Page } from '#context/Pages.js'
import type { PageMeta } from '../renderer/_default.page.server.js'
import type { Talk } from './talk.page.server.js'

export type SpeakerPageProps = {
	speaker: Speaker
	pages: Page[]
	talks: Talk[]
}

export const prerender = async (): Promise<string[]> =>
	(await readdir(path.join(process.cwd(), 'speakers')))
		.filter((s) => s.endsWith('.md'))
		.map((s) => s.replace(/\.md$/, ''))
		.map((slug) => `/speaker/${slug}`)

export const onBeforeRender = async (args: {
	routeParams: { speaker: string }
}): Promise<{
	pageContext: { pageProps: SpeakerPageProps; pageMeta: PageMeta }
}> => {
	const pages = await loadMarkdownContent<Page>('content')
	const talks = await loadMarkdownContent<Talk>('talks')
	const speakers = await loadMarkdownContent<Speaker>('speakers')
	const speaker = speakers.find(({ slug }) => slug === args.routeParams.speaker)
	if (speaker === undefined)
		throw new Error(`Could not find speaker: ${args.routeParams.speaker}!`)

	return {
		pageContext: {
			pageProps: {
				speaker,
				pages,
				talks: talks.filter(
					({ speaker }) => speaker === args.routeParams.speaker,
				),
			},
			pageMeta: {
				title: speaker.name,
			},
		},
	}
}
