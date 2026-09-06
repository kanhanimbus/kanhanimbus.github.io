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
    const blog = await getCollection('blog');
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