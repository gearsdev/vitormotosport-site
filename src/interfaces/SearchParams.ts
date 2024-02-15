export interface Search {
    query?: string,
    limit?: number,
    page?: number,
    orderBy?: string,
}

export interface VehicleSearch extends Search {
    status?: string,
    brandId?: string,
    modelId?: string,
}
