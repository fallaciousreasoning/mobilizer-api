import { NextApiRequest, NextApiResponse } from "next"
import { Readability } from "@mozilla/readability";
import { JSDOM } from 'jsdom';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const url = req.query.url as string;

    console.log(req.query);
    console.log(fetch)
    const response = await fetch(url);
    const html = await response.text();
    const dom = new JSDOM(html, { url });
    const reader = new Readability(dom.window.document);
    const article = reader.parse();

    res.statusCode = 200;

    if ('includeHtml' in req.query)
        article['html'] = html;

    if ('includeUrl' in req.query)
        article['url'] = url;

    res.json(article);
}