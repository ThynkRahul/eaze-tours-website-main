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
    );
  } else if (slug.length === 1) {
    const blogId = slug[0]; // Keep blogId as a string
    const blogIdNum = parseInt(blogId); // Convert to number for validation

    if (blogIdNum < 7 && blogIdNum > 0 && !isNaN(blogIdNum)) {
      return (
        <div>
          <div className="mt-16">
            <BlogDetail blogId={blogId} /> {/* Pass blogId as a string */}
          </div>
        </div>
      );
    }
  }

  return notFound();
}
