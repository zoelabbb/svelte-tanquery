import type { RequestHandler } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export const GET: RequestHandler = async ({ params }) => {
	try {
		const { id } = params;
		const apiUrl = `${env.API_URL}/place/${id}`;

		const res = await fetch(apiUrl);
		if (!res.ok) {
			return new Response(
				JSON.stringify({ error: `Failed to fetch place: ${res.status}` }),
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
			JSON.stringify({ error: 'Failed to fetch place' }),
			{ status: 500 }
		);
	}
};
