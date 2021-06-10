import { html, css, LitElement } from 'lit-element';

class Header extends LitElement {

    static get styles() {
        return css`
          :host {
            display: block;
            text-align: center;
            font-size: 0.9em;
            padding: 20px;
            background: #000; 
          }
          :host a {
            color: #fff;
            padding: 15px;
            text-decoration: none;     
          }
        `
      }
    
      static get properties() {
        return {
          menuList: { type: Array }
        };
      }
    
      constructor() {
        super();
        this.menuList = [{path: "/demo", name: "Home"},
        {path: "/demo/faq.html", name: "FAQ"},
        {path: "/demo/registration.html", name: "Registration"},
        {path: "/demo/contactus.html", name: "Contact Us"}];
      }
    
      render() {
        return html`
          ${this.menuList.map(list => 
            html`<a href="${list.path}" class="list-item">${list.name}</a>`
          )}
        `;
      }
    
}
  customElements.define('header-component', Header);