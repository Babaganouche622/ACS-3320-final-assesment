  // Function to rotate the string for the ticker-tape effect
  function rotateString(str) {
    return str.slice(1) + str[0];
  }

  document.addEventListener('DOMContentLoaded', function () {
    const h1Element = document.querySelector('ticker-tape h1');

    setInterval(function () {
      h1Element.innerHTML = rotateString(h1Element.innerHTML);
    }, 400);
  });



class TickerTape extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        @keyframes ticker {
          to {
            transform: translateX(-100%);
          }
        }

        h1 {
          white-space: nowrap;
          animation: ticker 50s linear infinite;
        }
      </style>
      <div id="ticker-container">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('ticker-tape', TickerTape);



