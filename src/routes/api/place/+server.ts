import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ url }) => {
	try {
		const page = url.searchParams.get('page') || '1';
		const limit = url.searchParams.get('limit') || '10';
		
		const apiUrl = `http://localhost:6080/v1/api/place?page=${page}&limit=${limit}`;

		const res = await fetch(apiUrl);
		if (!res.ok) {
			return new Response(
				JSON.stringify({ error: `Failed to fetch places: ${res.status}` }),
				{ status: res.status }
			);
		}

		const data = await res.json();
		return new Response(JSON.stringify(data), {
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} catch (error) {
		return new Response(
			JSON.stringify({ error: 'Failed to fetch places' }),
			{ status: 500 }
		);
	}
};
