<script>
import Swift from "../icons/Swift.svelte";





//intercambiamos los titulos
function changeTitleButton() {

}

//metemos una animacion de rotacion de 360 grados en el boton changeButton
function rotateButton() {
    var changeButton = document.getElementById("changeButton");
    changeButton.animate(
        [
            // keyframes
            { transform: "rotate(0deg)" },
            { transform: "rotate(360deg)" },
        ],
        {
            // timing options
            duration: 900,
            iterations: 0.5,
        }
    );
        //cogemos el titulo del span con id= first-badge
        var title_izq = document.getElementById("first-badge").innerText;
var title_der = document.getElementById("second-badge").innerText;
    document.getElementById("first-badge").innerText = title_der;
    document.getElementById("second-badge").innerText = title_izq;
}


  </script>

<button
id="changeButton"
on:click={rotateButton}
class=" text-gray-700 swift">
<Swift/>
</button>


<style>
.swift:hover {
  cursor: pointer;
  border-color: none;
}
</style>