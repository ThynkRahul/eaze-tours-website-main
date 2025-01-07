'use client';

import PackagesList from "../../components/Packages";
import PackageDetail from '../../components/PackageDetail';
import { notFound } from 'next/navigation';


export default function Packages({ params }: { params: { slug?: string[] } }) {
  const { slug } = params;
  if (!slug) {
    return (
      <div>
        <div className="mt-[78px] sm:mt-[135px]">
          <PackagesList />
        </div>
      </div>
    )
  }
  else if (slug.length == 1) {
    const packageId = parseInt(slug[0])
    if (packageId < 36 && packageId > 0 && !isNaN(packageId)) {
      return (
        <div>
          <div className="mt-[78px] sm:mt-[135px]">
            <PackageDetail packageId={packageId} />
          </div>
        </div>
      )
    }
  }
  return (
    notFound()
  )
}
