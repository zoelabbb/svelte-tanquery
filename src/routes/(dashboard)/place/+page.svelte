<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	import { placesQuery } from '$lib/queries/places';
	import PlaceCard from '$lib/components/PlaceCard.svelte';
	import Pagination from '$lib/components/Pagination.svelte';

	let currentPage = $state(1);
	const limit = 10;

	const q = createQuery(() => placesQuery(currentPage, limit));

	const handlePageChange = (page: number) => {
		currentPage = page;
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
</script>

<div class="min-h-screen bg-gray-50 p-6">
	{#if q.isLoading}
		<div class="flex min-h-[60vh] items-center justify-center">
			<div class="flex flex-col items-center gap-3">
				<div
					class="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-blue-500"
				></div>
				<p class="text-sm text-gray-500">Loading places...</p>
			</div>
		</div>
	{:else if q.error}
		<div class="flex min-h-[60vh] items-center justify-center">
			<div class="text-center">
				<p class="font-semibold text-red-500">Gagal memuat data places</p>
				<p class="mt-1 text-sm text-gray-500">Coba refresh halaman</p>
			</div>
		</div>
	{:else if q.data}
		<div class="mx-auto max-w-6xl">
			<h1 class="mb-6 text-2xl font-bold text-gray-800">Places</h1>

			<div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
				{#each q.data.spot_place as place}
					<PlaceCard {place} />
				{/each}
			</div>

			<Pagination
				currentPage={q.data.pagination.page}
				totalPages={q.data.pagination.pages}
				onPageChange={handlePageChange}
			/>
		</div>
	{/if}
</div>
