export default interface StoreAPIResponseType {
    data: Stores[]
}

interface Stores {
    storeID: number,
    storeName: string,
    isActive: number,
    images: {
        banner: string,
        logo: string,
        icon: string,
    }
}