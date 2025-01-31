class navBarMenu extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML= /* html */ ` 
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img  width="80px" src="images/f1.png" alt=""></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"  data-verOcultar="('#Pilotos',['#Vehiculo', '#Equipo','#Circuito'])">Pilotos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"  data-verOcultar="('#Vehiculo',['#Piloto', '#Equipo','#Circuito'])">Equipos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" d data-verOcultar="('#Equipo',['#Piloto', '#Vehiculo','#Circuito'])">Vehiculos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"  data-verOcultar="('#Circuito',['#Piloto', '#Equipo','#Vehiculo'])">Circuitos</a>
              </li>
      
            </ul>
          </div>
        </div>
      </nav>
    
     `
    }  
}

customElements.define('nav-bar-menu', navBarMenu)