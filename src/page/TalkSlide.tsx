import type { Talk as TTalk } from '../../pages/talk/+onBeforeRender'
import type { Speaker } from '../../pages/content/+onBeforeRender'
import { SpeakerLinks } from './Speaker'
import QRCode from 'qrcode'
import { useEffect, useState } from 'preact/hooks'
import { SpeakerPhoto } from '#components/SpeakerPhoto.js'

import './TalkSlide.css'

export const TalkSlide = ({
	talk,
	speaker,
}: { talk: TTalk; speaker: Speaker }) => (
	<div class="talk-slide">
		<main>
			<header>
				<h1>{speaker.name}</h1>
				{speaker.pronouns !== undefined && (
					<p class="pronouns">
						<small>{speaker.pronouns}</small>
					</p>
				)}
				<SpeakerPhoto speaker={speaker} />
			</header>
			<section>
				<div
					class="markdown"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: needed here
					dangerouslySetInnerHTML={{
						__html: speaker.html,
					}}
				/>
			</section>
			<SpeakerLinks speaker={speaker} />
		</main>
		<aside>
			<h2>{talk.title}</h2>
			<QrCode url={new URL(`/talk/${talk.slug}`, 'https://adacon.no/')} />
		</aside>
	</div>
)

const QrCode = ({ url }: { url: URL }) => {
	const [imageData, setImageData] = useState<string>()
	useEffect(() => {
		QRCode.toString(url.toString(), {
			type: 'svg',
			errorCorrectionLevel: 'L',
			margin: 0,
			scale: 10,
			color: {
				dark: '#781e7c',
				light: '#f0f6fa',
			},
		})
			.then((dataUrl) => {
				setImageData(dataUrl)
			})
			.catch((err) => console.error('[QRCode]', err))
	}, [url])

	if (imageData === undefined) return null
	return (
		<div
			class="qr-code"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: needed here
			dangerouslySetInnerHTML={{
				__html: imageData,
			}}
			title={`QR Code for ${url.toString()}`}
		/>
	)
}
