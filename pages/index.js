import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fazer History</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="ad.size" content="width=1080" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          <div className={styles.img1}>
            <div className={styles.laguageSelection}>
                <Link className={styles.btn} href="/history-FI"><a>
                <img src="/images/main_Fi.png" alt="Vercel Logo" width={280} height={638} />
                <h1>TARINAMME</h1>
                </a></Link>
                <Link className={styles.btn} href="/history-SE"><a>
                <img src="/images/main_Se.png" alt="Vercel Logo" width={280} height={638} />
                <h1>Vår historia</h1>
                </a></Link>
                <Link className={styles.btn} href="/history-EN"><a>
                <img src="/images/main_En.png" alt="Vercel Logo" width={280} height={638} />
                <h1>OUR STORY</h1>
                </a></Link>

            </div>
          </div>
          <div className={styles.img2}>
            <div className={styles.joinNow}>                
                <Link href="/signin"><a>
                  <h1>Lataa myFazer sovellus</h1>
                  <img src="/images/mobile_join.png" alt="Vercel Logo" width={920} height={638} />
                </a></Link>
            </div>
               
          </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
