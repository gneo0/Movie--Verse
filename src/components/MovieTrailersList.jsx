import LiteYouTubeEmbed from 'react-lite-youtube-embed';

export default function MovieTrailersList({ trailers }) {
	return trailers.slice(0, 7).map((trailer) => (
		<LiteYouTubeEmbed id={trailer.key} key={trailer.id} allowFullScreen>
			<span>{trailer.key}</span>
		</LiteYouTubeEmbed>
	));
}
