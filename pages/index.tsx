import Head from 'next/head'
import { useEffect, useMemo, useState } from 'react'
import styles from '../styles/Index.module.css'
import JSONTree from 'react-json-tree';
import Spinner from '../components/Spinner';

export default function Home() {
  const [url, setUrl] = useState('https://www.economist.com/asia/2020/09/13/the-taliban-and-the-afghan-government-talk-peace-at-last');
  const mobilizeUrl = useMemo(() => `/api/mobilize/${encodeURIComponent(url)}`, [url]);
  const [loading, setLoading] = useState(false);
  const [json, setJson] = useState(undefined);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    setJson(undefined);

    fetch(mobilizeUrl, { signal: controller.signal })
      .then(async response => {
        const json = await response.json();
        setJson(json);
      })
      .catch(e => {})
      .finally(() => setLoading(false));

    return () => {
      controller.abort();
    }
  }, [mobilizeUrl]);

  return <div>
    <Head>
      Mobilizer Demo
    </Head>

    <div>
      <section>
        <header>
          Url to mobilize:
          <input
            className={styles.url}
            placeholder="Enter url to mobilize" value={url} onChange={e => setUrl(e.target.value)}/>
        </header>
        {loading || !json 
          ? <Spinner/>
          : <JSONTree data={json}/>}
      </section>
    </div>
  </div>
}
