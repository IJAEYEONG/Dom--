export default function (){
  let todoItems = [];
  function updateSelectOptions() {
    let length = todoItems.length;
    orderSelect.innerHTML = '';
    for (let i = 0; i < length; i++) {
      let option = document.createElement('option');
      option.value = i;
      option.text = `항목 ${i + 1}`;
      orderSelect.appendChild(option);
    }
    let lastOption = document.createElement('option');
    lastOption.value = "마지막";
    lastOption.text = "마지막";
    orderSelect.appendChild(lastOption); // Adding 'Last' option at the end of the list
  }
}
