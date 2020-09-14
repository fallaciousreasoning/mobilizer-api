import { NextApiRequest, NextApiResponse } from "next"
import { Readability } from "@mozilla/readability";
import { JSDOM } from 'jsdom';
import createDOMPurify from 'dompurify';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');

    const url = req.query.url as string;
    const response = await fetch(url);
    const html = await response.text();
    const dom = new JSDOM(html, { url });
    const DOMPurify = createDOMPurify(dom.window as any);

    const reader = new Readability(dom.window.document);
    const article = reader.parse();
    // Sanitize content for display.
    article.content = DOMPurify.sanitize(article.content);

    if ('includeHtml' in req.query)
        article['html'] = html;

    if ('includeUrl' in req.query)
        article['url'] = url;

    res.json(article);
}