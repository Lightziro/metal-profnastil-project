import {FormOrder} from "../../types/form";

interface Category {
    name: string,
    pathPhoto?: string,
    link?: string,
    price?: string
}

export const defaultFormOrder: FormOrder = {
    entityId: '',
    entityType: '',
    fullName: '',
    phone: '',
    comment: '',
    additionalData: [],
}
