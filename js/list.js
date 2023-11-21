let txt = document.querySelector("[type='text']")

let btn = document.querySelector('[type="button"]')

let lists = document.querySelector(".lists")

btn.addEventListener("click" , () => {

    if(txt.value !== "") {
        let list = document.createElement("li")
        list.innerHTML = txt.value
        list.classList.add("list")

        list.addEventListener("click" , (e) => {
            e.target.classList.toggle("achieved")
            storeData
        })

        let span =  document.createElement("span")
        span.innerHTML = "&#x2715;"
        span.className = "del"
        list.appendChild(span)

        span.addEventListener("click" , () => {
            span.parentElement.remove()
            storeData();
        })
        
        lists.appendChild(list)

        storeData()
    }
    
    txt.value = "";
})

function storeData() {
    localStorage.setItem("data" , lists.innerHTML)
}

function addStoredToPage() {
    lists.innerHTML = localStorage.getItem("data");

    [...lists.children].forEach(list =>{
        list.addEventListener("click" , (e) => {
                if(e.target.classList.contains("list")) {
                    e.target.classList.toggle("achieved")
                } else if(e.target.classList.contains("del")) {
                    e.target.parentElement.remove()
                    storeData()
                }
            })
        })
        
}

addStoredToPage();

let removeAll = document.querySelector(".remove-all")

let allLists = document.querySelectorAll("ul li") 
removeAll.onclick = () => {
    allLists.forEach(list => {
        list.remove();
    })
    
    storeData()
}

let darkLight = document.querySelector(".dark-light")

let darkChange = document.querySelector(".dark-light .bullet")

let dark_span = document.querySelector(".dark-span")

darkLight.addEventListener("click" , () => {
    darkLight.classList.toggle("active")
    
    if(darkLight.classList.contains("active")) {
        dark_span.style.cssText = "width:100%;"
        
        darkChange.style.cssText = "left:calc(100% / 1.77); background-color: white;"
        
        document.body.style.background = "black"
        
        localStorage.setItem("store-active" , "active")
        
    } else {
        darkChange.style.cssText = "left:-5px;"
        dark_span.style.cssText = "width:0;"
        document.body.style.background = "#03a9f4"
        localStorage.removeItem("store-active")
        }
    
})


darkLight.classList.add(localStorage.getItem("store-active"))

if(darkLight.classList.contains(localStorage.getItem("store-active"))) {
    dark_span.style.cssText = "width:100%;"
    
    darkChange.style.cssText = "left:calc(100% / 1.77); background-color: white;"
    
    document.body.style.background = "black"
    darkLight.classList.remove("null")
} else {
        darkChange.style.cssText = "left:-5px;"
        dark_span.style.cssText = "width:0;"
        document.body.style.background = "#03a9f4"
        localStorage.removeItem("store-active")
        darkLight.classList.remove("null")
}

//Gooood Jooob