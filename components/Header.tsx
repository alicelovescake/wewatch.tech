import Link from 'next/link'

import Logo from './Logo'
import ListenOn from './ListenOn'

const Header = () => {
  return (
    <div className="mt-5 mb-10 flex justify-between items-center">
      <Link href="/">
        <a>
          <Logo small />
        </a>
      </Link>

      <ListenOn />
    </div>
  )
}

export default Header
