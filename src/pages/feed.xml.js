import rss from '@astrojs/rss';
import { getCollection, render } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt({
  html: true,
  breaks: true,
  linkify: true,
});


export async function GET(context) {
    let blog = await getCollection('blog');
    blog = blog.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
  return rss({
    title: "kanhaNimbus's ramblings",
    description: "esoteric nonsense, brought to you by kanhaNimbus",    
    site: context.site,
        items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/writings/${post.id}/`,
    }))
  });
}