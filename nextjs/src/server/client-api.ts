import instance from "./axios";
import {FormOrder} from "../types/form";

export const createOrder = async (dataOrder: FormOrder) => await instance.post('/api/order', dataOrder);
