import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(kanhanimbus) {
    const blog = await getCollection('blog');
  return rss({
    title: "kanhaNimbus's ramblings",
    description: "esoteric nonsense, brought to you by kanhaNimbus",    
    site: kanhanimbus.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: blog.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      // Compute RSS link from post `id`
      // This example assumes all posts are rendered as `/blog/[id]` routes
      link: `/writings/essays/${post.id}/`,
    })),
  });
}