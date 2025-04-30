export interface FormOrder {
    entityId: string,
    entityType: string,
    fullName: string,
    phone: string,
    comment: string,
    additionalData: {attribute: string; value: any}[]
}
