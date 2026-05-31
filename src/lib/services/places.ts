import type { Place } from "$lib/types/places";

export interface PlacesResponse {
    spot_place: Place[]
    pagination: {
        page: number
        limit: number
        pages: number
        total: number
    }
}

// Get all data place with pagination
export async function getPlaces(page: number = 1, limit: number = 10): Promise<PlacesResponse> {
    const res = await fetch(`/api/place?page=${page}&limit=${limit}`)
    if (!res.ok) {
        throw new Error(`Failed to fetch places: ${res.status} ${res.statusText}`)
    }

    const data = await res.json() as { spot_place?: Place[]; pagination?: PlacesResponse['pagination'] }
    return {
        spot_place: data.spot_place || [],
        pagination: data.pagination || { page, limit, pages: 1, total: 0 }
    }
}

// Get place by ID
export async function getPlace(id: string): Promise<Place> {
    const res = await fetch(`/api/place/${id}`)
    if (!res.ok) throw new Error('Failed to fetch place')

    const data = await res.json() as { spot_place?: Place; message?: string }
    return data.spot_place as Place
}