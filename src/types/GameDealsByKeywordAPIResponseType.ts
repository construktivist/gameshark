export interface GameDealsByKeywordAPIResponse {
    data: Game[]
}

export interface Game {
    gameID: string,
    steamAppID: string,
    cheapest: string,
    cheapestDealID: string,
    external: string,
    thumb: string
}