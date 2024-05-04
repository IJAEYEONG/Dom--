import * as createElement from "./modules/createElement.js"
import * as setElement from "./modules/setElement.js"
import * as appendElemnet from "./modules/appendElement.js"
import * as QuerySelect from "./modules/QuerySelect.js"
import * as InnerHtml from "./modules/InnerHtml.js"
import * as object from "./modules/object.js"
import * as placeholder from "./modules/placeHolder.js"
import * as TitleElement from "./modules/TitleElement.js"
import * as ElementById from "./modules/ElementById.js"
import * as UpdateSelectOptions from "./modules/UpdateSelectOptions.js"
import* as UpdateView from "./modules/UpdateaView.js"
// import * as jongSu from "./modules/jongSu.js"

// var element = document.createElement("div");
// element.id = "testqq";
// document.body.appendChild(element); // 요소를 문서에 추가
// var el = document.getElementById("testqq"); 


// jongSu.default(root)
//id가 root인 것 선택
const a = ElementById.default("root")

const body = QuerySelect.default("body")
console.log(body)
//input 태그 만들어서 placeholder 속성에서 
const bodyInput =createElement.default('input')
setElement.default(bodyInput,'todo-input')
appendElemnet.default(body,bodyInput)
let cdd=ElementById.default('todo-input')
console.dir(cdd)
const PlaceHolderKey = Object.values(object.names.input.placeholder);
placeholder.default(bodyInput,PlaceHolderKey)

// 부모가 body인 select 생성
const bodySelect = createElement.default("select")
const cd=setElement.default(bodySelect,"order-select")
TitleElement.default(bodySelect,"order Select")
appendElemnet.default(body,bodySelect)
const orderSelect = ElementById.default('order-select')

//부모가 body인 추가button을 생성
const AddButton = createElement.default("button")
setElement.default(AddButton,"add-button")
appendElemnet.default(body,AddButton)
let addButton = ElementById.default("add-button")
//부모가 body인 삭제button생성
const DeleteButton = createElement.default("button")
setElement.default(DeleteButton,"remove-button" )
let removeButton = ElementById.default("remove-button")
appendElemnet.default(body,DeleteButton)
const keys =object.names.button.Addbutton

InnerHtml.default(AddButton,keys)
const values = Object.values(object.names.button.DeleteButton);
InnerHtml.default(DeleteButton,values)
console.dir(root)

UpdateSelectOptions.default();
UpdateView.default();