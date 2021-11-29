// const todo = ['Front-End','Back-End','Maths-3','Electronics'];

const addTodo = ()=>{
    var text = document.getElementById('todo-text')
    var ul = document.getElementById("todo-ul");
    var li = document.createElement('LI');
    var text_node = document.createTextNode(text.value);
    var close = document.createElement('SPAN');
    close.className='close'
    var close_text = document.createTextNode('\u00D7');
    close.appendChild(close_text);
    if(text.value === ""){
        alert("Insert Text...");
    }
    else{
        li.appendChild(text_node);
        li.appendChild(close);
        ul.appendChild(li);
        text.value = "";
    }
    let close_btn = document.getElementsByClassName('close')
    for(let i=0;i<close_btn.length;i++){
        close_btn[i].onclick = function(){
            var parent_element = this.parentElement
            parent_element.style.display = "none";
        }
    }
}

let todo_list = document.querySelector('ul')
todo_list.addEventListener('click',(event)=>{
    if(event.target.tagName === "LI"){
        event.target.classList.toggle('completed')
    }
})


// for(let i=0;i<close_btn.length;i++){
    // console.log(close_btn.parent());
    
    // close_btn[i].onclick = ()=>{
    // console.log(close_btn.parentNode)
    // }
// }

// https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
// https://developer.mozilla.org/en-US/docs/Web/API/Element/classList