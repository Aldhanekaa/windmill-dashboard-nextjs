import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{' '}
          <a href='https://nextjs.org'>Windmill Dashboard Nextjs Template!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages folder</code>
        </p>

        <div className={styles.grid}>
          <Link href='/login'>
            <a className={styles.card}>
              <h3>Login Page &rarr;</h3>
              <p>Login auth page</p>
            </a>
          </Link>
          <Link href='/create-account'>
            <a className={styles.card}>
              <h3>Create Account Page &rarr;</h3>
              <p>Create Account Auth Page</p>
            </a>
          </Link>

          <a
            href='https://github.com/vercel/next.js/tree/master/examples'
            className={styles.card}
          >
            <h3>App Page &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href='https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2FAldhanekaa%2Fwindmill-dashboard-nextjs'
            className={styles.card}
          >
            <h3>Deploy to vercel&rarr;</h3>
            <p>
              Instantly deploy your Windmill Dashboard Next.js site to Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
