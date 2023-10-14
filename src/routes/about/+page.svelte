<script>
    const date = 'April 2, 2023'
    const title = "About Us"
</script>

<div class="min-h-screen max-w-99.1vw px-0 m-0 overflow-x-clip overscroll-x-none" style="font-family: Inter">
    <header class="mx-auto flex items-center text-white lg:max-w-screen-xl md:w-2/5 w-4/5 overscroll-x-none">
        <div class="text-left mt-20 w-full">
            <h1 class="text-xl my-0 text-neutral-500 brightness-50 hover:brightness-100 duration-1000 transition-ease-out">{date}</h1>
            <div class="rise-wrapper whitespace-pre w-full font-800 -spacing-1 text-white">
                {#each title.split(" ") as word, index}
                    <p class="rise-anim inline-flex text-5xl lg:text-7xl my-0 font-800 -spacing-3 mt-6" style={`--delay: ${index * 200 + 100}ms`}
                        >{`${word}`}{index !== title.length-1 ? " " : ""}</p>
				{/each}
            </div>
            <hr class="my-10 border-[#332255]"/>
        </div>
    </header>
    <div class="prose text-lg text-white w-3/4 md:w-2/5 mx-auto font-500 pb-10 overflow-x-clip overscroll-x-none">
        At Team Illusion, we believe in the power of innovation, collaboration, transparency, and creativity to create change. Our team is more than just a robotics club-- it is a diverse community of like-minded individuals who share a passion for science, technology, engineering, and mathematics.

        We're committed to diversity and inclusivity and it's reflected in our demographic statistics. ~50% of our team is male, and we are all people of color. By embracing a range of perspectives and experiences, Team Illusion approaches problems in new and innovative ways. We wish to set an example for other groups in STEM.

        <img src="about.webp" class="object-center h-auto max-w-full rounded-xl mt-7" alt="team illusion photo">
        <p class="mb-4 mt-0 text-neutral-100 brightness-25 hover:brightness-100 duration-1000 transition-ease-out">The full team!</p>

        As a team, we value teamwork, communication, and leadership. We believe that every member of our team has a unique set of skills and talents that can contribute to our success. We encourage our members to think creatively, to take risks, and to learn from their failures.

        We believe in the power of competition to drive innovation and excellence. We participate in competitions and events to test our skills and to learn from other teams. We also believe in giving back to our community by sharing our knowledge and expertise with others.

        We believe that robotics can be used to make a positive impact on the world. Whether it is through developing robots that can assist with disaster relief, improving the quality of life for people with disabilities, or exploring new frontiers in space, we are committed to using our skills and expertise to make a difference.
    </div>

</div>
