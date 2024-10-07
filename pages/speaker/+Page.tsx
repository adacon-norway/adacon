import { Provider as CountdownProvider } from '#context/ConfCountdown'
import { Provider as PagesProvider } from '#context/Pages'
import { Speaker } from '#page/Speaker'
import type { SpeakerPageProps } from './+onBeforeRender.js'

export const Page = ({ speaker, pages, talks }: SpeakerPageProps) => (
	<PagesProvider pages={pages}>
		<CountdownProvider>
			<Speaker speaker={speaker} talks={talks} />
		</CountdownProvider>
	</PagesProvider>
)
