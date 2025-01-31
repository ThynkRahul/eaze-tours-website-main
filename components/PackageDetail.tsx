import React from "react";
import packageData from '../data/packages.json';
import VerticalTimeline from './VerticalTimeline';

interface IPackageDetailProp {
    packageId?: number;
}


export default function PackageDetail({ packageId }: IPackageDetailProp) {
    const tourPackage = packageData.filter(function (tourPackage) { return tourPackage.Id == packageId; })[0];

    return (
        <>
            <div className="mt-16 sm:mx-4">
                <VerticalTimeline tourPackage={tourPackage}>
                </VerticalTimeline>
            </div>
        </>
    )

}
