import * as updateSelectOptions from "./UpdateSelectOptions.js"
export default function(){
      function updateView() {
            root.innerHTML = '';
            for (let i = 0; i < todoItems.length; i++) {
              let itemElement = document.createElement('p');
              itemElement.textContent = `${todoItems[i]}`;
              root.appendChild(itemElement);
            }
            updateSelectOptions();
          }
}