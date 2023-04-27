/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
    const orgRes = await fetch("/api/finances/organization");
    const org = await orgRes.json();

    const transactionRes = await fetch("/api/finances/transactions");
    const transaction = await transactionRes.json();

    return { org, transaction };
}