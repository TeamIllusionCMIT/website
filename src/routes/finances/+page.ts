import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
    const transactionRes = await fetch("/api/finances/transactions");
    const transaction = await transactionRes.json();

    return { transaction };
};


