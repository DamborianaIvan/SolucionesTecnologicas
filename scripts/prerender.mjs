import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { render, routes } from '../.ssr/entry-server.js';
const template = await readFile('dist/index.html', 'utf8');
const escape = s => s.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
for (const route of routes) {
 const result = render(route);
 let html = template.replace(/<title>.*?<\/title>/s, `<title>${escape(result.title)}</title>`)
 .replace(/(<meta\s+name="description"\s+content=")[^"]*/, `$1${escape(result.description)}`)
 .replace(/(<meta\s+property="og:title"\s+content=")[^"]*/, `$1${escape(result.title)}`)
 .replace(/(<meta\s+property="og:description"\s+content=")[^"]*/, `$1${escape(result.description)}`)
 .replace(/(<link rel="canonical" href=")[^"]*/, `$1https://wuidevs-stecnologicas.vercel.app${route}`)
 .replace('<div id="root"></div>', `<div id="root" data-prerender>${result.html}</div>`)
 .replace('</head>', '<style>#root[data-prerender] [style*="opacity"]{opacity:1!important}#root[data-prerender] [style*="transform"]{transform:none!important}</style></head>');
 const directory = route === '/' ? 'dist' : `dist${route}`;
 await mkdir(directory, { recursive: true });
 await writeFile(`${directory}/index.html`, html);
}
await writeFile('dist/sitemap.xml', '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + routes.map(r => `<url><loc>https://wuidevs-stecnologicas.vercel.app${r}</loc></url>`).join('\n') + '\n</urlset>\n');
console.log(`Prerendered ${routes.length} routes`);
