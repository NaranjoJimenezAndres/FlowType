<script>
    import { fixMyEnglish } from "../services/ia.js";
    import Loading from "./icons/Loading.svelte";
    import Translate from "./icons/Translate.svelte";
  
    let promise = null;
  
    const handleClick = async () => {
      const text = document.getElementById("my-textarea-request").value;
      promise = fixMyEnglish(text);
      const value =  await promise;
      
      document.getElementById("my-textarea-result").value = value;
      promise = null;
      console.log("click");
    };
</script>
  
  {#if promise === null}
     
  <button on:click={handleClick} type="button" class="py-4 px-12  flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white transition ease-in duration-200 text-center text-lg font-bold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
    <Translate />
    Traducir
  </button>
  
  {:else}
    {#await promise }
      
  
  <button
  
    type="button"
    class="py-4 px-12 flex justify-center items-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-lg font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
  >
    <Loading />
    Loading ...
  </button>    
    {/await}
  
  
  {/if}
  