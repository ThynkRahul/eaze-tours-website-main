import React from "react";
import Link from 'next/link'
import { PackageImage } from "./Images";
import { IPackageDetailDataType } from "../types/Common"

interface IPackageSummaryCardProp {
    tourPackage: IPackageDetailDataType
}


function PackageSummaryCard({ tourPackage }: IPackageSummaryCardProp) {
    const getPackageHref = (Id: number) => {
        return "/packages/" + Id
    }

    return (
        <>
            {/* <div className="card w-80 xl:w-96 bg-base-100 shadow-xl m-1">
                <figure>
                    <PackageImage source={tourPackage.Id}></PackageImage>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{tourPackage.Name}</h2>
                    <p>{tourPackage.LocationDescription}</p>
                    <div className="card-actions justify-end">
                    <Link href={getPackageHref(tourPackage.Id)} passHref>
                        <button className="btn btn-primary">More Details</button>
                    </Link>
                    </div>
                </div>
            </div> */}

            <div className="card bg-base-100 shadow-xl m-1 h-full shadow-[0px_0px_2px_1px_#00000040]">
                <div className="h-[200px] rounded-tl-[23px] rounded-tr-[23px] overflow-hidden">
                    <figure className="h-[200px] transform scale-100 transition-transform duration-300 ease-in-out hover:scale-110">
                        <PackageImage source={tourPackage.Id}></PackageImage>
                    </figure>
                </div>
                <div className="card-body flex flex-col items-start p-[16px]">
                    <p className="text-sm text-[#4F5E71] flex grow-0 items-start space-x-2">
                        <i className="fa fa-map-marker-alt text-lg text-[#4F5E71] -mt-1" />
                        <span>{tourPackage.Name}</span>
                    </p>
                    <h2 className="text-black-700 font-urbanist text-[16px] line-clamp-2">{tourPackage.LocationDescription}</h2>
                    <div className="flex space-x-2">
                        <i className="fa fa-star text-lg text-yellow-400 -mt-1" />
                        <p className="text-[16px] grow-0">5.00</p>
                        <p className="text-[16px] text-[#4F5E71] grow-0">(15 Reviews)</p>
                    </div>
                    <div className="flex gap-2 pt-2 mb-3">
                        <span className="bg-[#025C7A] text-white px-3 py-1 rounded-sm text-sm">{tourPackage.Tags}</span>
                        <span className="bg-[#6E9753] text-white px-3 py-1 rounded-sm text-sm">{tourPackage.Tags}</span>
                    </div>
                    <hr className="w-full" />
                    <div className="card-actions justify-start mt-2">
                        <Link href={getPackageHref(tourPackage.Id)} passHref>
                            <button className="mt-3 w-32 py-2 border-2 border-[#025C7A] bg-white text-[#025C7A] rounded-full hover:bg-[#025C7A] hover:text-white transition-all duration-300">More Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )

}

export default PackageSummaryCard;
