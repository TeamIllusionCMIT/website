import { json } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export async function GET({ setHeaders }) {
	const res = await fetch(
		"https://bank.hackclub.com/api/v3/organizations/teamillusion/transactions",
	);
	const data = await res.json();
	setHeaders({
        'Cache-Control': 'max-age=43200'
    });

	return json(data);
}