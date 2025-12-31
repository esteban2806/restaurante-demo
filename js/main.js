fetch('data/menu.json')
    .then(response => response.json())
    .then(data => {
        const contenedor = document.getElementById('menu-container');

        data.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('card');

            card.innerHTML = `
                <img src="${item.imagen}">
                <h3>${item.nombre}</h3>
                <p>Precio: S/ ${item.precio}</p>
                <button onclick="pedido('${item.nombre}')">
                    Pedir por WhatsApp
                </button>
            `;

            contenedor.appendChild(card);
        });
    });

function pedido(producto) {
    const numero = '51999999999'; // cambia por el real
    const mensaje = `Hola, quiero pedir: ${producto}`;
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`);
}
function toggleMenu() {
    const menu = document.getElementById('menu-list');
    menu.classList.toggle('show');
}
