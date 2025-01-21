const parametros = new URLSearchParams(window.location.search);
const nombreDeContacto = parametros.get('contacto');

document.getElementById('contacto').innerHTML = obteneDetalleContacto(nombreDeContacto);

function obteneDetalleContacto(contacto) {

    switch (contacto) {
        case 'contacto1':
            `<div onclick="contacto1">
                <h5 class="mb-0">NAME : MARCO JOSE BOLAÑOS MARTINEZ</h5>
                <p class="mb-0">EMAIL : mbolanos-2023060@kinal.edu.gt</p>
                <p class="mb-0">CELLPHONE : +502 37996328</p>
            </div>`
            break;
        case 'contacto2':
            `<div onclick="contacto2">
                <h5 class="mb-0">NAME : PABLO DAVID MORALES LOPEZ</h5>
                <p class="mb-0">EMAIL : mpablo@gmail.com</p>
                <p class="mb-0">CELLPHONE : +502 55885327</p>
            </div>`
            break;
        case 'contacto3':
            `<div onclick="contacto3">
                <h5 class="mb-0">NAME : ANDRES SEBASTIAN CORDOBA VILLATORO</h5>
                <p class="mb-0">EMAIL : andrescordoba18@gmail.com</p>
                <p class="mb-0">CELLPHONE : +502 45891288</p>
            </div>`
            break;
        case 'contacto4':
            `<div onclick="contacto4">
                <h5 class="mb-0">NAME : BRYAN VICTORINO TOYOM GARCIA</h5>
                <p class="mb-0">EMAIL : btoyom-2023014@kinal.edu.gt</p>
                <p class="mb-0">CELLPHONE : +502 54866390</p>
            </div>`
            break;
        case 'contacto5':
            `<div onclick="contacto5">
                <h5 class="mb-0">NAME : DIEGO FERNANDO GARCIA GALVEZ</h5>
                <p class="mb-0">EMAIL : dgarcia-2023532@kinal.edu.gt</p>
                <p class="mb-0">CELLPHONE : +502 36444022</p>
            </div>`
            break;
    }

}