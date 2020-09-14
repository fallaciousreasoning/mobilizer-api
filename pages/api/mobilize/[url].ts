import { NextApiRequest, NextApiResponse } from "next"
import { Readability } from "@mozilla/readability";
import { JSDOM } from 'jsdom';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');

    const url = req.query.url as string;
    const response = await fetch(url);
    const html = await response.text();
    const dom = new JSDOM(html, { url });
    const reader = new Readability(dom.window.document);
    const article = reader.parse();

    if ('includeHtml' in req.query)
        article['html'] = html;

    if ('includeUrl' in req.query)
        article['url'] = url;

    res.json(article);
}