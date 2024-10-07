import { TalkSlide } from '#page/TalkSlide.js'
import type { TalkSlidePageProps } from './+onBeforeRender.js'

export const Page = ({ talk, speaker }: TalkSlidePageProps) => (
	<TalkSlide talk={talk} speaker={speaker} />
)
