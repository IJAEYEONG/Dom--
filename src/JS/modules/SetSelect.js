export default function(element,test,TitleContent){
  if(element.id != ""){
    element.id = test 
    return element
  }
  return element.id=test, element.title=TitleContent
}