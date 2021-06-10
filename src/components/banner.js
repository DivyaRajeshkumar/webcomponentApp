import { html, css, LitElement } from 'lit-element';
import './banner.js';

class Banner extends LitElement {

    static get styles() {
        return css`
          .banner-wrap {
            background: #03a9f436;
            width: 100%;
            height: 200px;
          }
          h2 {
            position: relative;
            top: 80px;
            text-align: center;
            margin: 0;
          }
        `
      }
    
      static get properties() {
        return {
          title: { type: String }
        };
      }
    
      constructor() {
        super();
        this.title = "Welcome to Covid Vaccine Registration!!";
      }
    
      render() {
        return html`
        <div class="banner-wrap">
         <h2 @pageName=${this.getPageName}>${this.title}</h2>
        </div>
        `
      }

      getPageName(event) {
        console.log(event);
      }
    
}
  customElements.define('banner-component', Banner);