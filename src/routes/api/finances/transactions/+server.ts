import { json } from "@sveltejs/kit"

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
    const res = await fetch("https://bank.hackclub.com/api/v3/organizations/teamillusion/transactions")
    const data = await res.json()

    return json(data);
}
