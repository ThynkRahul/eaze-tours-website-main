'use client';

import BlogList from "../../../components/blogs";
import BlogDetail from "../../../components/BlogDetail";
import { notFound } from "next/navigation";
import blogData from "../../../data/blog.json";

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
    const blogId = slug[0]; // Handle string Id directly
    const blog = blogData.find((item) => item.Id === blogId);

    if (blog) {
      return (
        <div>
          <div className="mt-16">
            <BlogDetail blogId={blog.Id} />
          </div>
        </div>
      );
    }
  }

  return notFound();
}
