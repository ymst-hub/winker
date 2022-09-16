
import Image from 'next/image'
import styles from '../styles/index.module.css'

const props1 = { name: "Twitter", url: "https://twitter.com/?lang=ja" }
const props2 = { name: "LINE", url: "https://line.me/ja/" }
const props3 = { name: "Github", url: "https://github.com/" }


export default function Home() {
  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.logo}>Winker</h1>
      </header>
    
      <main>
        <ul>
          <Button {...props1} />
          <Button {...props2} />
          <Button {...props3} />
        </ul>
      </main>
    </div>
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