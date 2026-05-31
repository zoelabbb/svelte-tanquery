<script lang="ts">
	import './layout.css';
	import { QueryClientProvider } from '@tanstack/svelte-query';
	import { queryClient } from '$lib';

	let { children } = $props();
</script>

<QueryClientProvider client={queryClient}>
	<div class="min-h-screen bg-gray-50 text-gray-900">
		<!-- Optional: Topbar / Navbar -->
		<header class="border-b bg-white">
			<div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
				<h1 class="text-lg font-bold text-gray-800">Dashboard</h1>

				<nav class="text-sm text-gray-500">Places</nav>
			</div>
		</header>

		<!-- Main content -->
		<main class="mx-auto max-w-6xl px-6 py-6">
			{@render children?.()}
		</main>
	</div>
</QueryClientProvider>
