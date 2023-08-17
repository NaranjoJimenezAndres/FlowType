<script>
  import { generateAnEmail } from "../../services/ia.js";
  import CustomSelect from "../CustomSelect.tsx";
  import { SelectValue } from "../bridgeReactSvelte.js";
  import Loading from "../icons/Loading.svelte";

  let promise = null;

  const handleClick = async () => {
    if (document.getElementById("short-email-button").disabled === true) {
      var length = 64;
    } else {
      var length = 120;
    }

    const language = SelectValue.selectedValue; //ajsutar a la variable que se usa en el select
    const text = document.getElementById("my-textarea-tasks").value;
    const sender = document.getElementById("remitente-input").value;
    const receiver = document.getElementById("destinatario-input").value;
    promise = generateAnEmail(text, length, language, sender, receiver);
    const value = await promise;

    document.getElementById("my-textarea-email-generated").value = value;
    promise = null;
    console.log("click");
  };
</script>

{#if promise === null}
  <button
    type="button"
    on:click={handleClick}
    class="py-2 px-4 bg-red-700 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
  >
    Generar
  </button>
{:else}
  {#await promise}
    <button
      type="button"
      class="py-2 px-4 bg-indigo-700 flex justify-center items-center hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
    >
      <Loading />
      Loading ...
    </button>
  {/await}
{/if}
