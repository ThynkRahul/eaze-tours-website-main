interface IItineraryLineDataType {
    name: { [key: string]: string }
    description: { [key: string]: string }
    Id: { [key: string]: string }
    day: { [key: string]: string }
}

interface IItineraryDetailDataType {
    M: IItineraryLineDataType
}

interface IPackageDetailDataType {
    Id: number;
    Days: number;
    DurationDisplay: string;
    Itinerary: Array<IItineraryDetailDataType>;
    Name: string;
    LocationDescription: string;
    Tags: Array<string>;
    Title: string;
    Uri: string;
    Description: string;
    NoOfRatings: number;
    Ratings: number;
    Additional_Information: string;
    Whats_Included: string;
    Whats_excluded: string;
    Overview: string;
    Summary: string;
}

interface ITestimonialDataType {
    Id: number;
    User: string;
    Content: string;
    Location: string;
    Img: string;
}

interface IBlogDataType {
    Urlb: string;
    Title: string;
    Page_heading: string;
    Description: string;
    Content: string;
    Img: string;
}

export type { IPackageDetailDataType, IItineraryDetailDataType, IItineraryLineDataType, ITestimonialDataType, IBlogDataType }
