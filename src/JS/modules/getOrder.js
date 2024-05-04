export default function(){
  let orderValue = orderSelect.value;
      if (orderValue === '마지막') {
        return todoItems.length - 1;
      } else {
        return parseInt(orderValue);
      }
    
}