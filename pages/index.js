
import Image from 'next/image'
import Header from '../conponents/header'
import Hero from '../conponents/hero'

const props1 = { name: "Twitter", url: "https://twitter.com/?lang=ja" }
const props2 = { name: "LINE", url: "https://line.me/ja/" }
const props3 = { name: "Github", url: "https://github.com/" }


export default function Home() {
  return (
    <html>
      <Header />
      <main>
        <Hero />
        <ul>
          <Button {...props1} />
          <Button {...props2} />
          <Button {...props3} />
        </ul>
      </main>
    </html>
  )
}

function Button({ name, url }) {
  return (
    <li>
      <a href={url}>
      <button>
          {name}
      </button>
      </a>
    </li>
  )
}