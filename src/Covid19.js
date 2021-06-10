import { html, css, LitElement } from 'lit-element';

export class Covid19 extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--covid-19-text-color, #000);
        background: #81d4fa;
        text-align: center;
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String }
    };
  }

  constructor() {
    super();
    this.title = 'Welcome to Covid-19 Registration!';
  }

  render() {
    return html`
      <h1>${this.title}</h1>
      
    `;
  }
}


class NavigationBar extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
        text-align: center;
        font-size: 1.3em;
        padding: 20px;
      }
      :host a {
        color: rgb(103, 58, 183);
        padding: 15px;
        text-decoration: non     
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
    {path: "/src/review.js", name: "Review"},
    {path: "/demo/registration.html", name: "Registration"},
    {path: "/src/contact.js", name: "Contact Us"}];
  }

  render() {
    return html`
      ${this.menuList.map(list => 
        html`<a href="${list.path}" class="list-item">${list.name}</a>`
      )}
    `;
  }

}

customElements.define('navigation-bar', NavigationBar);