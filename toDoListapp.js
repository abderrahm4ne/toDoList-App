
let lists = document.getElementById("lists");
let orderInput = document.getElementById("order-input")

function SubmitOrder(){
    let order = orderInput.value;
    
    if(order !== ""){

        const p = document.createElement("p");
        p.textContent = order;
    
        const deletBtn = document.createElement("button");
        deletBtn.textContent = "Delete";
        p.appendChild(deletBtn);
    
        lists.appendChild(p);
        orderInput.value = "";
    
        deletBtn.addEventListener('click', deletee =>{
            lists.removeChild(p)
        })
    
        p.classList.add("orders-lists")
    }
}
