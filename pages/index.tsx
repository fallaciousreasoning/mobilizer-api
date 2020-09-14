import Head from 'next/head'

export default function Home() {
  return <div>
    <Head>
      Mobilizer Demo
    </Head>

    <div>
      <section>
        <header>
          <input placeholder="Enter url to mobilize"></input>
        </header>
      </section>
    </div>
  </div>
}
