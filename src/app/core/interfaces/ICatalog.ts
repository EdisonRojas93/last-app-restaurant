export interface ICatalog{
    name: string;
    products: IProduct[]

}

export interface IProduct{
    name: string;
    image: string;
    price: number
}