import { html, css, LitElement } from 'lit-element';

class Footer extends LitElement {

    static get styles() {
        return css`
          :host {
            width: 100%; 
            position: absolute;
            bottom: 0px;
            text-align: center;
            font-size: 0.5em;
            background: #000;              
          }
          p {
              color: #fff;
          }
        `
      }
    
      static get properties() {
        return {
          footer: { type: String }
        };
      }
    
      constructor() {
        super();
        this.footer = "All rights Reserved @2021"
       
      }
    
      render() {
        return html`
          <p>${this.footer}</p>
        `
      }
    
}
  customElements.define('footer-component', Footer);