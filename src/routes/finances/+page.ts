export const prerender = true;

/** @type {import('./$types').PageServerLoad} */
export function load({ fetch, setHeaders }) {
	function get_data() {
		return fetch("/api/finances/transactions").then((res) => res.json());
	}

	return {
		transactions: get_data(),
	};
}
