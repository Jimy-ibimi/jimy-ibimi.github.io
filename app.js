const checkbox = document.querySelectorAll('.form-check-input').forEach(e => {
    e.checked = false
});


document.querySelector('.form-control').setAttribute('required','')

const main = document.querySelector('main')
const segond = document.querySelector(".segond")
const thre = document.querySelector(".thre")
const ul = document.querySelector('.alltodos')


document.querySelector('form').addEventListener('submit', (e) =>{
    
    e.preventDefault()
    const pl = e.currentTarget
    const ml = new FormData(pl)
    const text_label = ml.get('title')
    console.log(text_label)
    if (!/[a-zA-Z]/.test(text_label)){
        document.querySelector('.form-control').setAttribute('required','')
        return
    }
    const li = document.createElement('li')
    li.classList.add('todo' ,'list-group-item' ,'d-flex' ,'align-items-center')
    const input = document.createElement('input')
    input.classList.add('form-check-input')
    input.id = 'todo-1'
    input.type = 'checkbox'
    const label = document.createElement('label')
    label.innerText = text_label
    label.classList.add('ms-2' ,'form-check-label')
    label.setAttribute('for','todo-1')
    const label1 = document.createElement('label')
    label1.classList.add("ms-auto" ,"btn" ,"btn-danger" ,"btn-sm")
    const i = document.createElement('i')
    i.classList.add("bi-trash")
    label1.append(i)
    li.append(input ,label ,label1)
    ul.append(li)
    ul.querySelectorAll('.todo').forEach( i => {
        i.querySelector('.bi-trash').addEventListener('click' ,(e) =>{
            ul.removeChild(i)
            
        })
    });
    function btntodo (btn ,check ,ultodo){
        document.querySelector(btn).addEventListener('click', (e) => {
                
                document.querySelectorAll('.btn-outline-primary').forEach(e => {
                    e.classList.remove('active')
                    const todos = document.querySelector(btn)
                    todos.classList.add("active")
                });
            document.querySelectorAll('.todo').forEach(e => {
                if (e.querySelector('.form-check-input').checked === check) {
                    ultodo.append(e)
                }           
            });
            document.querySelectorAll("ul").forEach(element => {
                element.setAttribute("hidden" ,"hidden")
            });
            ultodo.removeAttribute("hidden")
            main.append(ultodo)
        })
        
    }
    btntodo('.done', true ,segond)
    btntodo('.todos', false ,thre)
    btnall()
    function btnall (){
        document.querySelector('.all').addEventListener('click' ,(e) =>{
            document.querySelectorAll('.btn-outline-primary').forEach(e => {
                e.classList.remove('active')
            });
            const todos = document.querySelector('.all')
            todos.classList.add("active")
            document.querySelectorAll('li').forEach(element => {
                ul.append(element)
            });
            document.querySelectorAll('.ul').forEach(element => {
                element.setAttribute("hidden" ,"hidden")
            });
            ul.removeAttribute("hidden")
            
            
        })
    }
    
})
