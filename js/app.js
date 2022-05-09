//UI
const addbtn = document.getElementById('addbtn');
const formel = document.getElementById('form');
const inputel = document.getElementById('input');
const plusicon = document.getElementById('plus');
const todolis = document.getElementById('todolis');
const time = document.getElementById('time');

// Show time on todolist
function startclock(){
    let getdate = new Date();
    // console.log(getdate);

    let gethour = getdate.getHours();
    // console.log(gethour);

    let getminute = getdate.getMinutes();
    // console.log(getminute);

    let getsecond = getdate.getSeconds();
    // console.log(getsecond);

    let getampm;
        switch(gethour >= 12){
            case true:
                getampm = "PM";
                gethour = gethour - 12;
                break;
            case false:
                getampm = "AM";
                break;
            }
    let clock = `${gethour} : ${getminute < 10 ? `0${getminute}` : getminute} : ${getsecond < 10 ? `0${getsecond}` : getsecond} ${getampm}`;
    // console.log(clock);

    time.textContent = clock;
}

startclock();
setInterval(startclock,1000);
// Show time on todolist

const todos = JSON.parse(localStorage.getItem("todos"));

if(todos){
    todos.forEach(todo=>addtodo(todo));
    // console.log(todo.text);
}

addbtn.addEventListener('click',function(e){
    // console.log('hay');
    inputel.classList.toggle('show');

    if(plusicon.classList.contains('fa-plus')){
        plusicon.classList.replace('fa-plus','fa-minus');
    }else{
        plusicon.classList.replace('fa-minus','fa-plus');
    }

   e.preventDefault();
})

formel.addEventListener('submit',(e)=>{
    addtodo();
     e.preventDefault();
})

function addtodo(todo){

    let todotext = inputel.value;
    if(todo){
        todotext = todo.text;
    }
    if(todotext){
        
        const p = document.createElement('p');
        const div = document.createElement('div');
        const i = document.createElement('i');
        const small = document.createElement('small');

        if(todo && todo.complete){
            //add class
            p.classList.add("completed");
        }
        i.innerHTML = `<i class="fas fa-trash-alt"></i>`;
        i.style.position = "absolute";
        i.style.top = "7px";
        i.style.right = "10px";
        i.style.color = "#bf632a";
        i.style.transform = "scale(0.95)";
        i.style.cursor = "pointer";
        p.appendChild(document.createTextNode(todotext));
        p.style.fontSize = "18px";
        p.style.padding ="5px 10px";
        p.style.color = "#707070";
        // console.log(p);
        div.appendChild(p);
        
        div.setAttribute('class','li');
        div.style.background = "#f7f7f7";
        div.style.height = "60px";
        div.style.borderRadius = "10px";
        div.style.margin = "20px";
        div.style.boxShadow = "7px 5px 10px rgba(0,0,0,0.18)";
        div.style.position = "relative";
        div.appendChild(i);

        let hours = new Date().getHours();
        // console.log(hours);
        let minute = new Date().getMinutes();
        // console.log(minute);
        let getampm;
            switch(hours > 12){
                case true:
                    getampm = "PM";
                    hours = hours - 12;
                    break;
                case false:
                    getampm = "AM";
                    break;
            }
        let todotime = `${hours}:${minute} ${getampm}`;
        // console.log(time);
       
        if(todo){
            small.innerText = todo.todotime;
        }
        else{
            small.innerText = todotime;
        }
        
        small.style.fontSize = "14px";
        small.style.position ="absolute";
        small.style.top = "40px";
        small.style.left = "10px";
        div.appendChild(small);
        
        todolis.appendChild(div);
        // todolis.appendChild(todoli);
        inputel.value = "";
        updatelocalstorage();

        div.addEventListener('click',()=>{
            p.classList.toggle('completed');

            updatelocalstorage();
        })

        i.addEventListener('click',()=>{
            // console.log('hay');
            div.remove();

            updatelocalstorage();
        })

    }
   
}

function updatelocalstorage(){
    // console.log('storage is ready');
    let todolists = document.querySelectorAll('.li');
     console.log(todolists);
    // console.log(todolist.firstElementChild.innerText);
    const todos =[];

    todolists.forEach((todolist)=>{
        // console.log(todolist.innerText);
        todos.push({
            text:todolist.firstChild.innerText,
            complete:todolist.firstChild.classList.contains('completed'),
            todotime:todolist.lastChild.innerText
            
        });
    })
    // console.log(todos);
    localStorage.setItem('todos',JSON.stringify(todos));
}