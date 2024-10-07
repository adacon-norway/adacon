import { loadMarkdownContent } from '../loadMarkdownContent.js'
import type { Speaker } from '../content/+onBeforeRender.js'
import type { PageMeta } from '../../renderer/+onRenderHtml.js'
import type { Talk } from '../talk/+onBeforeRender.js'

export type TalkSlidePageProps = {
	talk: Talk
	speaker: Speaker
}

export const onBeforeRender = async (args: {
	routeParams: { talk: string }
}): Promise<{
	pageContext: { pageProps: TalkSlidePageProps; pageMeta: PageMeta }
}> => {
	const talks = await loadMarkdownContent<Talk>('talks')
	const talk = talks.find(({ slug }) => slug === args.routeParams.talk)
	if (talk === undefined)
		throw new Error(`Could not find talk: ${args.routeParams.talk}!`)

	const speakers = await loadMarkdownContent<Speaker>('speakers')
	const speaker = speakers.find(({ slug }) => slug === talk.speaker)
	if (speaker === undefined)
		throw new Error(`Could not find speaker: ${talk.speaker}!`)

	return {
		pageContext: {
			pageProps: {
				talk,
				speaker,
			},
			pageMeta: {
				title: talk.title,
			},
		},
	}
}
