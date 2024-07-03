<script lang="ts">
export let data: {pathname: string, transactions: {date: string, memo: string, amount_cents: number}[]};

function formatDate(date: Date) {
	return date.toLocaleDateString("en", {
		month: "short",
		day: "numeric",
		year: "numeric",
	});
}
</script>

<div class="h-screen w-screen bg-black">
    <header class="mx-auto flex flex-col items-center justify-center text-white lg:max-w-screen-xl w-screen h-screen m-auto">
        <div class="text-left w-2/3">
            <p class="text-neutral-400 hover:text-white duration-500 text-2xl my-0 font-800 -spacing-1 ease-out">TEAM ILLUSION</p>
            <p class="text-5xl md:text-7xl my-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 font-800 -spacing-3">Finances</p>
        </div>
        <div class="max-w-3/4 w-4xl overflow-x-auto my-2 max-h-50%">
            <table class="border-collapse border border-slate-500 w-full">
            <thead>
                <tr>
                  <th class="text-left text-xl md:text-3xl -spacing-1 p-3 border-1 b-t-none b-l-none border-solid border-black border-neutral-600">Date</th>
                  <th class="text-left text-xl md:text-3xl -spacing-1 p-3 border-1 b-t-none border-solid border-black border-neutral-600">Memo</th>
                  <th class="text-left text-xl md:text-3xl -spacing-1 p-3 border-1 b-t-none b-r-none border-solid border-black border-neutral-600">Amount</th>
                </tr>
              </thead>
              {#await data.transactions}
              <tbody>
                <tr class="w-full bg-black">
                  <td class="border-1 -spacing-1 text-4 md:text-md font-semibold border-solid border-black border-neutral-600 p-4">Please wait!</td>
                  <td class="border-1 -spacing-1 text-4 md:text-md font-semibold border-solid border-black border-neutral-600 p-4">Loading data...</td>
                  <td class="border-1 -spacing-1 text-4 md:text-md font-semibold border-solid border-black border-neutral-600 p-4">$0.00</td>
                </tr>
            </tbody>
              {:then transactions}
              <tbody>
                {#each transactions as transaction}
                  <tr class={`w-full ${transaction.amount_cents < 0 ? 'bg-[#110000]' : 'bg-[#001100]'}`}>
                    <td class="border-1 -spacing-1 text-4 md:text-md font-semibold border-solid border-black border-neutral-600 p-3">{ formatDate(new Date(transaction.date))}</td>
                    <td class="border-1 -spacing-1 text-4 md:text-md font-semibold border-solid border-black border-neutral-600 p-3">{transaction.memo}</td>
                    <td class="border-1 -spacing-1 text-4 md:text-md font-semibold border-solid border-black border-neutral-600 p-3">{transaction.amount_cents < 0 ? "-": ""}${Math.abs(transaction.amount_cents/100).toFixed(2)}</td>
                  </tr>
                {/each}
              </tbody>
              {/await}
            </table>
          </div>
          <p class="text-neutral-400 hover:text-white transition duration-500 ease-out">Data from <a href="https://bank.hackclub.com/teamillusion" class="text-inherit">Hack Club Bank</a></p>
    </header>
</div>