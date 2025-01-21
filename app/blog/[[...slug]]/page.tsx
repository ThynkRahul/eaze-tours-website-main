'use client';

import BlogDetail from "../../../components/BlogDetail";
import { notFound } from 'next/navigation';

interface BlogSlugProps {
  params: { slug: string };
}

export default function BlogDetailPage({ params }: BlogSlugProps) {
  const blogId = parseInt(params.slug);

  if (blogId < 7 && blogId > 0 && !isNaN(blogId)) {
    return (
      <div className="mt-16">
        <BlogDetail blogId={blogId} />
      </div>
    );
  }

  return notFound();
}
