export interface IRestaurant{

    id?:number;
    name?: string;
    image?: string;
    logo?: string;
    ratings?: IRatings;
    coordinates?: ICoordinates;

}

export interface IRatings{
    total: string;
    average: string;
}

export interface ICoordinates{
    latitude: number;
    longitude: number;
    distance: number
}