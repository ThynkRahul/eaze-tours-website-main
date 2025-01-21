'use client';

import BlogList from "../../../components/blogs";
import BlogDetail from '../../../components/BlogDetail';
import { notFound } from 'next/navigation';


export default function Blogs({ params }: { params: { slug?: string[] } }) {
  const { slug } = params;
  if (!slug) {
    return (
      <div>
        <div className="mt-16">
          <BlogList />
        </div>
      </div>
    )
  }
  else if (slug.length == 1) {
    const blogId = parseInt(slug[0])
    if (blogId < 7 && blogId > 0 && !isNaN(blogId)) {
      return (
        <div>
          <div className="mt-16">
            <BlogDetail blogId={blogId} />
          </div>
        </div>
      )
    }
  }
  return (
    notFound()
  )
}
