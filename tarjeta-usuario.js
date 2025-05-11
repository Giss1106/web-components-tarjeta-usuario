class TarjetaUsuario extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          .card {
            border: 1px solid #ccc;
            border-radius: 12px;
            padding: 16px;
            background: #fff;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            max-width: 300px;
            font-family: Arial, sans-serif;
            text-align: center;
          }
  
          .imagen {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 12px;
          }
  
          .titulo {
            font-size: 1.5em;
            margin-bottom: 8px;
            font-weight: bold;
          }
  
          .contenido {
            font-size: 1em;
            color: #333;
          }
  
          ::slotted([slot="imagen"]) {
            display: block;
            margin: 0 auto 12px auto;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
          }
        </style>
        <div class="card">
          <slot name="imagen"></slot>
          <div class="titulo"><slot name="titulo">Sin título</slot></div>
          <div class="contenido"><slot name="contenido">Sin contenido</slot></div>
        </div>
      `;
    }
  
    static get observedAttributes() {
      return ['tema']; }
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'tema') {
        this.shadowRoot.querySelector('.card').style.background = newValue;
      }} }
  customElements.define('tarjeta-usuario', TarjetaUsuario);
  