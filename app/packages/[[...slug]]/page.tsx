'use client';

import PackagesList from "../../../components/Packages";
import PackageDetail from '../../../components/PackageDetail';
import { notFound } from 'next/navigation';

export default function Packages({ params }: { params: { slug?: string[] } }) {
  const { slug } = params;

  // Handle the `/packages` route
  if (!slug) {
    return (
      <div>
        <div className="mt-[78px] sm:mt-[135px]">
          <PackagesList />
        </div>
      </div>
    );
  }

  // Handle `/packages/[id]`
  if (slug.length === 1) {
    const packageId = parseInt(slug[0], 10);
    if (packageId > 0 && packageId < 36 && !isNaN(packageId)) {
      return (
        <div>
          <div className="mt-[78px] sm:mt-[135px]">
            <PackageDetail packageId={packageId} />
          </div>
        </div>
      );
    }
  }

  // For all other cases, show a 404 page
  return notFound();
}
