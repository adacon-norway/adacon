import { ViewportObserver } from 'preact-intersection-observer'

export const EmbedYouTubeVideo = (
	args: { title: string } & ({ video: string } | { playlist: string }),
) => (
	<ViewportObserver
		render={({ inView, entry }) => {
			if (!inView) return null
			const width = entry?.boundingClientRect.width ?? 560
			const height = (width / 560) * 315
			return (
				<iframe
					width={width}
					height={height}
					src={
						'video' in args
							? `https://www.youtube-nocookie.com/embed/${args.video}`
							: `https://www.youtube-nocookie.com/embed/videoseries?list=${args.playlist}`
					}
					title={args.title}
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				/>
			)
		}}
		options={{ triggerOnce: true }}
	/>
)
