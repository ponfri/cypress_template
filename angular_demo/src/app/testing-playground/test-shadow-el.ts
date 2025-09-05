export class TestShadowEl extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const wrapper = document.createElement('div');
    wrapper.textContent = 'Shadow DOM Element';
    wrapper.setAttribute('style', 'padding:1rem;background:#e3f2fd;border-radius:8px;color:#1976d2;');
    shadow.appendChild(wrapper);
  }
}
customElements.define('test-shadow-el', TestShadowEl);
