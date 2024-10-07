import { SpeakersGallery } from '#components/SpeakersGallery'
import type { IndexPageProps } from '../+onBeforeRender.js'

export const Page = ({ speakers }: IndexPageProps) => (
	<SpeakersGallery speakers={speakers} />
)
