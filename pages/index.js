import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey! I'm Sigil. A 17 y/o video wizard, programmer, and entrepreneur from Toronto.<br />
        Founder of <a href="https://sigil.digital" target="_blank">Sigil Digital</a>, a creative agency, have a <a href="https://www.youtube.com/channel/UC68dN9l5fEaefElL728K6bA" target="_blank">personal youtube channel</a>, and write at <a href="https://oneskillaweek.com" target="_blank">oneskillaweek.com</a> <br/>
        Currently working with Justin Kan to grow <a href="https://justin.quest"target="_blank">The Quest</a>{' '}
        </p>

      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>What I'm up to:</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>

    </Layout>
  )
}
