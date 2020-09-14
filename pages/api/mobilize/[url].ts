import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const url = req.query.url as string;

    console.log(req.query);
    console.log(fetch)
    const response = await fetch(url);
    const html = await response.text();

    res.statusCode = 200

    const result = {
        url,
    };

    if ('includeHtml' in req.query)
        result['html'] = html;

    res.json(result);
}