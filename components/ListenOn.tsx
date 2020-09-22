import { FaSpotify } from 'react-icons/fa'
import { SiPocketcasts, SiAnchor, SiApplepodcasts} from 'react-icons/si'

type Props = {
  Icon: any,
  place: string,
  url: string,
}

function ListenOnLink({ Icon, place, url }: Props) {
  return (
    <a href={url} target="_blank" className="hover:text-brand-blue flex justify-center items-center border border-black hover:border-brand-blue rounded-b-lg px-2 py-1">
      <Icon className="mr-1" /> {place}
    </a>
  )
}


function ListenOn() {
  return (
    <div>
      <div className="text-xs mb-1 font-bold">Listen On:</div>

      <div className="flex space-x-4">
        <ListenOnLink Icon={FaSpotify} place="Spotify" url="https://open.spotify.com/show/1EofHBCAjBrn9BMykQklPM" />
        <ListenOnLink Icon={SiPocketcasts} place="Pocket Casts" url="https://pca.st/ex6fxdsk" />
        <ListenOnLink Icon={SiAnchor} place="Anchor" url="https://anchor.fm/weubc" />
        <ListenOnLink Icon={SiApplepodcasts} place="Apple" url="https://podcasts.apple.com/ca/podcast/we-ubc/id1531947035" />
      </div>
    </div>
  )
}

export default ListenOn;