import { ICatalog, IProduct } from "./ICatalog";

export interface IOrder extends IProduct{
    cant: number;
}