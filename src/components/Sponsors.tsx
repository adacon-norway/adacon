import { styled } from 'styled-components'

const Section = styled.section`
  img {
    max-width: 250px;
  }
`

export const Sponsors = () => (
	<Section id="sponsors" class="py-4">
		<div class="container mt-4">
			<div class="row text-center py-4">
				<div class="col">
					<h2 class="py-4">Sponsors</h2>
					<p>
						<a
							href="https://www.turtlesec.no/"
							rel="friend met noopener noreferrer"
							target="_blank"
						>
							<img
								src="./static/turtlesec.svg"
								alt="TurtleSec"
								class="img-fluid mt-4 mb-2"
								style={{ maxWidth: '300px' }}
							/>
						</a>
						<br />
						Gold Sponsor
					</p>
					<p>
						<a
							href="https://www.rebel.no/"
							rel="friend met noopener noreferrer"
							target="_blank"
						>
							<img
								src="./static/rebel.png"
								alt="Rebel"
								class="img-fluid mt-4 mb-2"
								style={{ maxWidth: '300px' }}
							/>
						</a>
						<br />
						Location Sponsor
					</p>
					<p>
						<a
							href="https://ndcconferences.com/"
							rel="friend met noopener noreferrer"
							target="_blank"
						>
							<img
								src="./static/ndc.png"
								alt="NDC Conferences"
								class="img-fluid mt-4 mb-2"
								style={{ maxWidth: '300px' }}
							/>
						</a>
						<br />
						Video Sponsor
					</p>
				</div>
			</div>
			<div class="row text-center py-4">
				<div class="col">
					<hr />
					<h3 class="my-4">Food sponsors</h3>
					<p>
						<a
							href="https://www.finn.no/"
							rel="friend met noopener noreferrer"
							target="_blank"
						>
							<img
								src="./static/finn.svg"
								alt="Finn"
								class="img-fluid mt-4 mb-2"
								style={{ maxWidth: '175px', width: '175px' }}
							/>
						</a>
					</p>
					<p>
						<a
							href="https://www.soprasteria.no/"
							rel="friend met noopener noreferrer"
							target="_blank"
						>
							<img
								src="./static/sopra-steria.svg"
								alt="Sopra Steria"
								class="img-fluid mt-4 mb-2"
								style={{ maxWidth: '200px' }}
							/>
						</a>
					</p>
					<p>
						<a
							href="https://www.folio.no/"
							rel="friend met noopener noreferrer"
							target="_blank"
						>
							<img
								src="./static/folio.svg"
								alt="Folio"
								class="img-fluid mt-4 mb-2"
								style={{ maxWidth: '200px' }}
							/>
						</a>
					</p>
					<p>
						<a
							href="https://www.webstep.com/"
							rel="friend met noopener noreferrer"
							target="_blank"
						>
							<img
								src="./static/webstep.svg"
								alt="Webstep"
								class="img-fluid mt-4 mb-2"
								style={{ maxWidth: '150px' }}
							/>
						</a>
					</p>
					<p>
						<a
							href="https://www.redpill-linpro.com/"
							rel="friend met noopener noreferrer"
							target="_blank"
						>
							<img
								src="./static/redpill-linpro.svg"
								alt="Redpill Linpro"
								class="img-fluid mt-4 mb-2"
								style={{ maxWidth: '150px' }}
							/>
						</a>
					</p>
				</div>
			</div>
			<div class="row text-center py-4">
				<div class="col">
					<hr />
					<h3 class="my-4">Speaker sponsors</h3>
					<p>
						<a
							href="https://variant.no/"
							rel="friend met noopener noreferrer"
							target="_blank"
						>
							<img
								src="./static/variant.svg"
								alt="variant"
								class="img-fluid mt-4 mb-2"
								style={{ maxWidth: '150px' }}
							/>
						</a>
					</p>
					<p>
						<a
							href="https://skatteetaten.no/"
							rel="friend met noopener noreferrer"
							target="_blank"
						>
							<img
								src="./static/skatteetaten.svg"
								alt="Skatteetaten"
								class="img-fluid mt-4 mb-2"
								style={{ maxWidth: '225px' }}
							/>
						</a>
					</p>
				</div>
			</div>
			<div class="row py-md-5">
				<div class="col-12 col-lg-6 offset-lg-3">
					<p>
						If you, too, would like to support this event, which is entirely
						organized by volunteers, please reach out to us using our{' '}
						<a href="./contact">contact form</a>.
					</p>
				</div>
			</div>
		</div>
	</Section>
)
