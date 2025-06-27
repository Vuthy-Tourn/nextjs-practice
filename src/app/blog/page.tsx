import BlogCard from '@/components/blog/BlogCard';
import React from 'react'
async function getBlog(){
    const blog = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}posts`);
    const data = await blog.json();
    return data.posts;
}
export default function page() {
    const blogs = getBlog();
  return (
    <div>
      <div className="">
        <BlogCard blogs={blogs} />
      </div>
    </div>
  );
}
