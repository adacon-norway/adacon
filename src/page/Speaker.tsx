import { Footer } from '#components/Footer.js'
import { Header } from '#components/Header.js'
import { HeaderNav } from '#components/HeaderNav.js'
import { AtSign, Blocks, Github, Home, Linkedin, Twitter } from 'lucide-preact'
import type { Speaker as TSpeaker } from '../../pages/content/+onBeforeRender.js'
import { Mastodon } from '#components/Mastodon.js'
import type { Talk } from '../../pages/talk/+onBeforeRender.js'
import { SpeakerPhoto } from '../components/SpeakerPhoto.js'

export const Speaker = ({
	speaker,
	talks,
}: { speaker: TSpeaker; talks: Talk[] }) => (
	<>
		<HeaderNav transparent={true} />
		<Header small />
		<main class="bg-off-white">
			<SpeakerInfo speaker={speaker} talks={talks} />
		</main>
		<Footer />
	</>
)

export const SpeakerInfo = ({
	speaker,
	talks,
}: { speaker: TSpeaker; talks: Talk[] }) => (
	<div class="container py-4">
		<div class="row pb-4">
			<header class="col-12 col-lg-10 offset-lg-1">
				<h1 class="text-center pt-4">{speaker.name}</h1>
				{speaker.pronouns !== undefined && (
					<p class="text-center ">
						<small>{speaker.pronouns}</small>
					</p>
				)}
			</header>
		</div>
		<div class="row mb-4">
			<div class="col-lg-5 mb-4 mb-lg-0 offset-lg-1">
				<div
					class="markdown"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: needed here
					dangerouslySetInnerHTML={{
						__html: speaker.html,
					}}
				/>
				{talks.length > 0 && (
					<div class="mt-4">
						<h2>Talks</h2>
						<ul>
							{talks.map((talk) => (
								<li key={talk.slug}>
									<a href={`./talk/${talk.slug}`}>{talk.title}</a>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
			<div class="col-lg-3 mt-4 mt-lg-0 offset-lg-1">
				<SpeakerPhoto speaker={speaker} class="mb-4" />
				<SpeakerLinks speaker={speaker} />
			</div>
		</div>
	</div>
)

const httpsPrefix = /^https?:\/\//
const slashEnd = /\/$/

export const SpeakerLinks = ({
	speaker,
	class: className,
}: { class?: string; speaker: TSpeaker }) => (
	<div class={`${className ?? ''} speaker-links`}>
		{speaker.homepage !== undefined && (
			<p class="mb-1">
				<Home />{' '}
				<a
					href={speaker.homepage}
					target="_blank"
					rel="noreferrer noopener friend"
					title={`${speaker.name}'s Homepage`}
				>
					{speaker.homepage
						.toString()
						.replace(httpsPrefix, '')
						.replace(slashEnd, '')}
				</a>
			</p>
		)}
		{speaker.linkedIn !== undefined && (
			<p class="mb-1">
				<Linkedin />{' '}
				<a
					href={`https://linkedin.com/in/${speaker.linkedIn}`}
					target="_blank"
					rel="noreferrer noopener friend"
					title={`${speaker.name} on LinkedIn`}
				>
					{speaker.linkedIn}
				</a>
			</p>
		)}
		{speaker.gitHub !== undefined && (
			<p class="mb-1">
				<Github />{' '}
				<a
					href={`https://github.com/${speaker.gitHub}`}
					target="_blank"
					rel="noreferrer noopener friend"
					title={`${speaker.name} on GitHub`}
				>
					{speaker.gitHub}
				</a>
			</p>
		)}
		{speaker.email !== undefined && (
			<p class="mb-1">
				<AtSign />{' '}
				<a
					href={`mailto:${speaker.email}`}
					target="_blank"
					rel="noreferrer noopener friend"
					title={`${speaker.name}'s email`}
				>
					{speaker.email}
				</a>
			</p>
		)}
		{speaker.mastodon !== undefined && (
			<p class="mb-1">
				<Mastodon style={{ width: '24px', height: '24px' }} />{' '}
				<abbr title={`${speaker.name}'s Mastodon profile`}>
					<a
						href={speaker.mastodon}
						target="_blank"
						rel="noreferrer noopener friend"
						title={`${speaker.name}'s Mastodon profile`}
					>
						{speaker.mastodon.toString().replace(httpsPrefix, '')}
					</a>
				</abbr>
			</p>
		)}
		{speaker.twitter !== undefined && (
			<p class="mb-1">
				<Twitter />{' '}
				<abbr title={`${speaker.name}'s Twitter handle`}>
					@{speaker.twitter}
				</abbr>
			</p>
		)}
		{speaker.bluesky !== undefined && (
			<p class="mb-1">
				<Blocks />{' '}
				<abbr title={`${speaker.name}'s Bluesky handle`}>
					@{speaker.bluesky}
				</abbr>
			</p>
		)}
	</div>
)
