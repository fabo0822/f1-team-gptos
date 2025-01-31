class frmPilotos extends HTMLElement {
    constructor(){
        super();
        this.render()
    }
    render(){
        this.innerHTML= /*html*/ `
        <div class="card">
        <div class="card-header">
        Pilotos
        </div>
        <div class="card-body">
            <form id="frmData">
                <div class="row g-3">
                    <div class="col-7">
                        <label for="nombre" class="form-label">nombre piloto</label>
                        <input type="text" class="form-control" id="nombre"> 
                    </div>
                    <div class="col-5">
                        <label for="fecha" class="form-label">Fecha fundacion</label>
                        <input type="date" class="form-control" id="fecha">
                    </div>
                </div>
            </form>
        </div>
        `
    }
}

customElements.define('frm-pilotos',frmPilotos)