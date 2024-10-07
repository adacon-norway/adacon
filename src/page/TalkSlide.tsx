import type { Talk as TTalk } from '../../pages/talk/+onBeforeRender'
import type { Speaker } from '../../pages/content/+onBeforeRender'
import { EmbedYouTubeVideo } from '#components/EmbedYouTubeVideo'
import { SpeakerInfo } from './Speaker'

import './TalkSlide.css'

export const TalkSlide = ({
	talk,
	speaker,
}: { talk: TTalk; speaker: Speaker }) => (
	<div class="talk-slide">
		<main class="py-4 bg-off-white">
			<div class="container py-4">
				<div class="row pb-4">
					<header class="col-12 col-lg-10 offset-lg-1">
						<h1 class="text-center pt-4">{talk.title}</h1>
					</header>
				</div>
				<div class="row">
					<div class="col-12 col-lg-8 offset-lg-2">
						{talk.video !== undefined && (
							<EmbedYouTubeVideo video={talk.video} title={talk.title} />
						)}
					</div>
				</div>
				<div class="row mb-4">
					<div class="col-12 col-lg-8 my-4 offset-lg-2">
						<div
							class="markdown"
							// biome-ignore lint/security/noDangerouslySetInnerHtml: needed here
							dangerouslySetInnerHTML={{
								__html: talk.html,
							}}
						/>
					</div>
				</div>
			</div>
		</main>
		<aside class="bg-highlight text-white">
			<SpeakerInfo speaker={speaker} talks={[]} />
		</aside>
	</div>
)
