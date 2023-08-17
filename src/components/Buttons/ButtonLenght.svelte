<script>
  let trigger = false;
  const handleClick = () => {
    //change the disable or enable of the button depends on the click on it
    const shortEmailButton = document.getElementById("short-email-button");
    const longEmailButton = document.getElementById("long-email-button");

    if (trigger === false) {
      trigger = true;
      shortEmailButton.disabled = true;
      longEmailButton.disabled = false;
    } else {
      trigger = false;
      shortEmailButton.disabled = false;
      longEmailButton.disabled = true;
    }
  };
</script>

{#if trigger === false}
  <header class="flex flex-col-2 justify-evenly gap-8 pb-10">
    <button
      id="short-email-button"
      type="button"
      disabled
      class="py-4 px-4 text-gray-800 bg-white focus:ring-indigo-500 focus:ring-offset-indigo-200 w-48 transition ease-in duration-200 text-center text-base font-bold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
    >
      Short Email
    </button>
    <button
      id="long-email-button"
      on:click={handleClick}
      type="button"
      class="py-2 px-4 bg-white focus:ring-indigo-500 focus:ring-offset-indigo-200 text-gray-800 w-48 transition ease-in duration-200 text-center text-base font-bold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
    >
      Long Email
    </button>
  </header>
{:else}
  <header class="flex flex-col-2 justify-evenly gap-8 pb-10">
    <button
      id="short-email-button"
      type="button"
      on:click={handleClick}
      class="py-4 px-4 text-gray-800 bg-white focus:ring-indigo-500 focus:ring-offset-indigo-200 w-48 transition ease-in duration-200 text-center text-base font-bold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
    >
      Short Email
    </button>
    <button
      id="long-email-button"
      type="button"
      disabled
      class="py-2 px-4 bg-white focus:ring-indigo-500 focus:ring-offset-indigo-200 text-gray-800 w-48 transition ease-in duration-200 text-center text-base font-bold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
    >
      Long Email
    </button>
  </header>
{/if}

<style>
  header button[disabled] {
    opacity: 0.7;
    cursor: not-allowed;
  }
  header button[disabled]:hover {
    background-color: azure;
  }
</style>
