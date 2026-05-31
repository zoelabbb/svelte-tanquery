<script lang="ts">
	import type { Place } from '$lib/types/places';

	let { place } = $props<{ place: Place }>();
</script>

<a href="/place/{place._id}">
	<div
		class="group cursor-pointer rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
	>
		{#if place.photo}
			<img src={place.photo} alt={place.name} class="mb-3 h-40 w-full rounded-lg object-cover" />
		{:else}
			<img
				src="https://placehold.co/600x400"
				alt="Placeholder"
				class="mb-3 h-40 w-full rounded-lg object-cover"
			/>
		{/if}
		<div class="flex flex-col gap-1">
			<h2 class="text-lg font-semibold text-gray-900 transition group-hover:text-blue-600">
				{place.name}
			</h2>

			<p class="text-sm text-gray-500">{place.area}</p>
			<p class="text-sm text-gray-600">{place.address}</p>

			<div class="mt-3 flex flex-wrap gap-2 text-xs">
				<span class="rounded-full bg-gray-100 px-2 py-1 text-gray-600">
					{place.vibe}
				</span>

				<span class="rounded-full bg-green-100 px-2 py-1 font-medium text-green-700">
					{place.priceRange}
				</span>
			</div>
		</div>
	</div>
</a>
