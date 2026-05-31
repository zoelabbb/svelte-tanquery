import { getPlaces, getPlace } from "$lib/services/places";

export const placesQuery = (page: number = 1, limit: number = 10) => ({
    queryKey: ['places', page, limit],
    queryFn: () => getPlaces(page, limit),
    staleTime: 30_000
})

export const placeQuery = (id: string) => ({
  queryKey: ['place', id],
  queryFn: () => getPlace(id),
  enabled: !!id,
})