import Head from 'next/head'
import { useEffect, useMemo, useState } from 'react'
import styles from '../styles/Index.module.css'
import JSONTree from 'react-json-tree';
import Spinner from '../components/Spinner';
import Url from './api/mobilize/[url]';

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
      .catch(e => { })
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
          <b>Url to mobilize:</b>
          <input
            className={styles.url}
            placeholder="Enter url to mobilize" value={url} onChange={e => setUrl(e.target.value)} />
          <b>Request url:</b> {'location' in globalThis ? globalThis.location.origin : ''}{mobilizeUrl}
        </header>
        <div>
          <b>Response:</b>
          {loading || !json
            ? <div>Loading....</div>
            : <JSONTree data={json} hideRoot />}
        </div>
        {json && json.content && <div>
          <b>HTML Output:</b>
          <div className={styles.html} dangerouslySetInnerHTML={{ __html: json.content }} />
        </div>}
      </section>
    </div>
  </div>
}
