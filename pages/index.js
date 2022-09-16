import Head from 'next/head'
import Image from 'next/image'

const props1 = { name: "Twitter", url: "https://twitter.com/?lang=ja"}
const props2 = { name: "LINE", url: "https://line.me/ja/" }
const props3 = { name: "Github", url: "https://github.com/"}


export default function Home() {
  return (
    <div>
      <Head>
        <div>Winker</div>
      </Head>
      <main>
        <Button {...props1} />
        <Button {...props2} />
        <Button {...props3} />
      </main>
    </div>
  )
}

function Button({ name, url }){
  return (
    <button>
      <a href={url}>
        <p>{name}</p>
      </a>
    </button>
  )
}