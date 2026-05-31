<!-- src/routes/(dashboard)/place/[id]/+page.svelte -->

<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	import { placeQuery } from '$lib/queries/places';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const q = createQuery(() => placeQuery(data.id));
</script>

<div class="mx-auto max-w-2xl p-6">
	{#if q.isLoading}
		<p class="text-center">Loading...</p>
	{:else if q.error}
		<p class="text-center text-red-600">Error loading place</p>
	{:else if q.data}
		<div class="overflow-hidden rounded-lg bg-white shadow-lg">
			{#if q.data.photo}
				<img src={q.data.photo} alt={q.data.name} class="h-96 w-full object-cover" />
			{:else}
				<img
					src="https://placehold.co/600x400"
					alt="Placeholder"
					class="h-96 w-full object-cover"
				/>
			{/if}

			<div class="p-6">
				<h1 class="mb-2 text-3xl font-bold">{q.data.name}</h1>
				<p class="mb-4 text-gray-600">{q.data.area}</p>

				<div class="mb-6 grid grid-cols-2 gap-4">
					<div>
						<h3 class="font-semibold text-gray-700">Address</h3>
						<p class="text-gray-600">{q.data.address}</p>
					</div>
					<div>
						<h3 class="font-semibold text-gray-700">Vibe</h3>
						<p class="text-gray-600">{q.data.vibe}</p>
					</div>
					<div>
						<h3 class="font-semibold text-gray-700">Price Range</h3>
						<p class="font-semibold text-green-600">{q.data.priceRange}</p>
					</div>
					<div>
						<h3 class="font-semibold text-gray-700">Uploaded by</h3>
						<p class="text-gray-600">{q.data.uploaderName}</p>
					</div>
				</div>

				<div class="mb-6">
					<h3 class="mb-2 font-semibold text-gray-700">Description</h3>
					<p class="text-gray-600">{q.data.description}</p>
				</div>

				<div class="mb-6">
					<h3 class="mb-2 font-semibold text-gray-700">Facilities</h3>
					<div class="flex flex-wrap gap-2">
						{#each q.data.facilities as facility}
							<span class="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
								{facility}
							</span>
						{/each}
					</div>
				</div>

				<div class="border-t pt-6">
					<h3 class="mb-3 font-semibold text-gray-700">Follow</h3>
					<div class="flex gap-4">
						{#if q.data.instagram}
							<a
								href="https://instagram.com/{q.data.instagram}"
								target="_blank"
								class="text-pink-600 hover:underline"
							>
								Instagram
							</a>
						{/if}
						{#if q.data.tiktok}
							<a
								href="https://tiktok.com/@{q.data.tiktok}"
								target="_blank"
								class="text-black hover:underline"
							>
								TikTok
							</a>
						{/if}
						{#if q.data.twitter}
							<a
								href="https://twitter.com/{q.data.twitter}"
								target="_blank"
								class="text-blue-400 hover:underline"
							>
								Twitter
							</a>
						{/if}
						{#if q.data.threads}
							<a
								href="https://threads.net/@{q.data.threads}"
								target="_blank"
								class="text-gray-800 hover:underline"
							>
								Threads
							</a>
						{/if}
					</div>
				</div>
			</div>
		</div>

		<div class="mt-6">
			<a href="/place" class="text-blue-600 hover:underline">← Back to Places</a>
		</div>
	{/if}
</div>
