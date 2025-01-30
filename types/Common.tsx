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
    Overview: string;
    Whats_Included: string;
    Additional_Information: string;
}

interface ITestimonialDataType {
    Id: number;
    User: string;
    Content: string;
    Location: string;
    Img: string;
}

interface IBlogDataType {
    Id: string;
    Title: string;
    Content: string;
    Img: string;
}

export type { IPackageDetailDataType, IItineraryDetailDataType, IItineraryLineDataType, ITestimonialDataType, IBlogDataType }
