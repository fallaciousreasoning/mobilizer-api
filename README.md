# Mobilizer API
This is an API for getting a readable version of an article. It is powered by [Mozilla Readability](https://github.com/mozilla/readability), which does all the heavy lifting.

A live version is available at https://mobilize.now.sh/

## API Docs

Requests should be to `/api/mobilize/{url}`. The url should be url encoded.

For example, requesting [this article](https://www.theguardian.com/world/2020/sep/14/yoshihide-suga-to-be-japan-prime-minister-after-winning-party-vote) on The Guardian at this url [/api/mobilize/https%3A%2F%2Fwww.theguardian.com%2Fworld%2F2020%2Fsep%2F14%2Fyoshihide-suga-to-be-japan-prime-minister-after-winning-party-vote](https://mobilize.now.sh/api/mobilize/https%3A%2F%2Fwww.theguardian.com%2Fworld%2F2020%2Fsep%2F14%2Fyoshihide-suga-to-be-japan-prime-minister-after-winning-party-vote) should result in a response like this:

```json
{
    "title": "fallaciousreasoning/mobilizer-api",
    "byline": "fallaciousreasoning",
    "dir": null,
    "content": "<div id=\"readability-page-1\" class=\"page\"><div id=\"readme\">\n    <article itemprop=\"text\"><p>This is a <a href=\"https://nextjs.org/\" rel=\"nofollow\">Next.js</a> project bootstrapped with <a href=\"https://github.com/vercel/next.js/tree/canary/packages/create-next-app\"><code>create-next-app</code></a>.</p>\n<h2>Getting Started</h2>\n<p>First, run the development server:</p>\n<div><pre>npm run dev\n<span><span>#</span> or</span>\nyarn dev</pre></div>\n<p>Open <a href=\"http://localhost:3000/\" rel=\"nofollow\">http://localhost:3000</a> with your browser to see the result.</p>\n<p>You can start editing the page by modifying <code>pages/index.js</code>. The page auto-updates as you edit the file.</p>\n<h2>Learn More</h2>\n<p>To learn more about Next.js, take a look at the following resources:</p>\n<ul>\n<li><a href=\"https://nextjs.org/docs\" rel=\"nofollow\">Next.js Documentation</a> - learn about Next.js features and API.</li>\n<li><a href=\"https://nextjs.org/learn\" rel=\"nofollow\">Learn Next.js</a> - an interactive Next.js tutorial.</li>\n</ul>\n<p>You can check out <a href=\"https://github.com/vercel/next.js/\">the Next.js GitHub repository</a> - your feedback and contributions are welcome!</p>\n<h2>Deploy on Vercel</h2>\n<p>The easiest way to deploy your Next.js app is to use the <a href=\"https://vercel.com/import?utm_medium=default-template&amp;filter=next.js&amp;utm_source=create-next-app&amp;utm_campaign=create-next-app-readme\" rel=\"nofollow\">Vercel Platform</a> from the creators of Next.js.</p>\n<p>Check out our <a href=\"https://nextjs.org/docs/deployment\" rel=\"nofollow\">Next.js deployment documentation</a> for more details.</p>\n</article>\n  </div></div>",
    "textContent": "\n    This is a Next.js project bootstrapped with create-next-app.\nGetting Started\nFirst, run the development server:\nnpm run dev\n# or\nyarn dev\nOpen http://localhost:3000 with your browser to see the result.\nYou can start editing the page by modifying pages/index.js. The page auto-updates as you edit the file.\nLearn More\nTo learn more about Next.js, take a look at the following resources:\n\nNext.js Documentation - learn about Next.js features and API.\nLearn Next.js - an interactive Next.js tutorial.\n\nYou can check out the Next.js GitHub repository - your feedback and contributions are welcome!\nDeploy on Vercel\nThe easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.\nCheck out our Next.js deployment documentation for more details.\n\n  ",
    "length": 787,
    "excerpt": "An API for mobilizing articles. Contribute to fallaciousreasoning/mobilizer-api development by creating an account on GitHub.",
    "siteName": "GitHub"
}
```

That's it!

## Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.
