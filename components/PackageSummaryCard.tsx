import React from "react";
import Link from 'next/link'
import {PackageImage} from "./Images";
import {IPackageDetailDataType} from "../types/Common"

interface IPackageSummaryCardProp {
    tourPackage: IPackageDetailDataType
}


function PackageSummaryCard({tourPackage}: IPackageSummaryCardProp) {
    const getPackageHref = (Id: number) => {
        return "/packages/" + Id
    }

    return (
        <>
            <div className="card w-80 xl:w-96 bg-base-100 shadow-xl m-1">
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
            </div>
        </>
    )

}

export default PackageSummaryCard;