import type { Speaker as TSpeaker } from '../../pages/content/+onBeforeRender'

import '#components/SpeakerPhoto.css'

export const SpeakerPhoto = ({
	speaker,
	class: className,
}: { class?: string; speaker: TSpeaker }) => {
	if (speaker.photo === undefined) return null
	return (
		<img
			alt={speaker.name}
			src={`${speaker.photo}?${new URLSearchParams({
				fm: 'webp',
				w: '500',
				h: '500',
				q: '80',
				crop: 'center',
				fit: 'crop',
			}).toString()}`}
			class={`speaker ${className ?? ''}`}
			style={{
				transform: `rotate(${Math.random() * 20 - 10}deg)`,
			}}
		/>
	)
}
