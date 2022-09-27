export interface GameDealsByKeywordAPIResponse {
    data: Games[]
}

export interface Games {
    gameID: string,
    steamAppID: string,
    cheapest: string,
    cheapestDealID: string,
    external: string,
    thumb: string
}