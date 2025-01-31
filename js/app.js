import { pilotos } from "./data.js";
import '../components/navBarMenu.js';
import '../components/frmPilotos.js';

document.querySelectorAll(".nav.link").forEach((val, id) => {
    val.addEventListener("click", (e)=>{
        let data =JSON.parse(e.target.dataset.verOcultar);
        let cardVer = document.querySelector(data[0]);
        cardVer.style.display = 'block';
        data[1].forEach(card => {
            let cardActual = document.querySelector(card);
            cardActual.style.display = 'none';
        });
        e.stopImmediatePropagation();
    // se utuliza para prevenir que a momento de hacer click se recargue la pagina
        e.preventDefault();  
    })
});