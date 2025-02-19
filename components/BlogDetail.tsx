import React from "react";
import blogData from '../data/blog.json';

interface BlogDetailProps {
    blogId?: string;
}

export default function BlogDetail({ blogId }: BlogDetailProps) {
    // Ensure the blog ID is valid and fetch the correct blog
    const blog = blogData.find((item) => item.Urlb === blogId);

    if (!blog) {
        return <p>Blog not found</p>;
    }

    return (


        <div className="mt-[78px] sm:mt-[165px] mx-auto mb-12 max-w-[1200px] w-full px-4">
            <div className="py-6">
                <h1 className="text-[30px] text-left font-semibold mb-8 sm:text-[45px]">{blog.Page_heading}</h1>
                <div
                    className="w-full h-[250px] sm:h-[600px] aspect-w-2 aspect-h-1 bg-cover rounded-[40px] bg-center shadow-[0px_0px_2px_1px_#00000040] mb-4 border border-gray-300"
                    style={{ backgroundImage: `url(${blog.Img})` }}
                ></div>
                <div dangerouslySetInnerHTML={{ __html: blog.Content }}
                />
            </div>

        </div>
    );
}
