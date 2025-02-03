import PackagesList from "../../../components/Packages";
import PackageDetail from "../../../components/PackageDetail";
import packageData from '../../../data/packages.json';
import { notFound } from 'next/navigation';

import { Metadata } from 'next';

type Params = {
  params: Promise<{
    slug: string[];
  }>;
};

export async function generateMetadata(
  props: Params,
): Promise<Metadata> {
  const param = await props.params;
  const slug = param.slug;

  if (slug !== undefined && slug.length == 1) {
    const packageUri = slug[0]
    const tourPackage = packageData.filter(function (tourPackage) { return tourPackage.Uri == packageUri; })[0];
    if (packageUri) {

      return {
        title: tourPackage.Title,
        description: tourPackage.Description,
      }
    }
  }

  return {
    title: "Luxury Holiday Tour Packages in India - Eaze Tours",
    description: "Explore luxury holiday packages in India with Eaze Tours. From India tour packages from Delhi to the best tours to India from the USA, plan your trip today!",
  }
}


export default async function Packages(props: Params) {
  const param = await props.params;
  const slug = param.slug;
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
    const packageUri = slug[0]
    if (packageUri) {
      return (
        <div>
          <div className="mt-[78px] sm:mt-[135px]">
            <PackageDetail packageUri={packageUri} />
          </div>
        </div>
      )
    }
  }
  return (
    notFound()
  )
}
