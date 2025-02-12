import React from "react";
import Link from 'next/link';
import { IBlogDataType } from "../types/Common";

interface IBlogProp {
    blog: IBlogDataType;
}

function Blog({ blog }: IBlogProp) {
    const getPackageHref = (Urlb: string) => {
        return "/blog/" + Urlb
    }

    return (
        <>
            <div className="bg-white rounded-[23px] shadow-[0px_0px_2px_1px_#00000040] flex flex-col ml-1">
                <div
                    className="w-full h-[262px] aspect-w-3 aspect-h-2 bg-cover bg-center rounded-t-[23px] border-b border-gray-300"
                    style={{ backgroundImage: `url(${blog.Img})` }}
                ></div>
                <div className="w-full px-4 py-10 flex flex-col justify-center gap-5">
                    <div className="flex items-start space-x-2">
                        <p className="text-[16px] text-[#666666BF]">Admin</p>
                        <ul className="list-disc pl-5 space-y-2 text-[16px] text-[#666666BF] marker:text-[#025C7A]">
                            <li>India</li>
                        </ul>
                    </div>

                    <p className="text-[22px] text-[#04000B] line-clamp-2 font-semibold hover:text-[#6E9753]"><Link href={getPackageHref(blog.Urlb)} passHref>
                        {blog.Page_heading}</Link></p>
                    <div>
                        <div className="flex items-start space-x-2">
                            <p className="text-md text-[#04000B]"><Link href={getPackageHref(blog.Urlb)} passHref>
                                Continue Reading
                            </Link></p>
                            <i className="fa fa-arrow-right text-lg text-[#025C7A] -mt-1" />
                        </div>
                    </div>
                </div>
            </div>



        </>
    )

}

export default Blog;
