<script>
  import Clipboard from "../icons/Clipboard.svelte";

  let contentToCopy = "Texto que quieres copiar";

  function copyToClipboard(event) {
    // Get the text field
    if (event.currentTarget.baseURI.includes("email-generator")) {
      var copyText = document.getElementById("my-textarea-email-generated");
    } else {
      var copyText = document.getElementById("my-textarea-result");
    }

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  }
</script>

<!-- svelte-ignore missing-declaration -->
<button
  id="copy-to-clipboard"
  class="absolute bottom-0 right-0 mb-3 mr-4 px-2 py-1 text-gray-700 ml-2 clipboard"
  on:click={(e) => copyToClipboard(e)}
>
  <Clipboard target={contentToCopy} />
</button>

<style>
  .clipboard:hover {
    color: #000000;
    background-color: #b8b8b880;
    border-color: none;
  }
</style>
