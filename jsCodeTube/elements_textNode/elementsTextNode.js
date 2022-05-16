var courses =[
    {
        Name:"node js",
        price: 7
    },
    {
        Name:" js",
        price: 3
    },
    {
        Name:".net",
        price: 8
    },
    {
        Name:"rest api",
        price: 5
    },
]

function  GenarateList() {
    //i need here unorder list  querySelector
    const ul =document.querySelector(".list-group")
        courses.forEach((course)=>{
            //here i need to create the list li   createElement
            const li =document.createElement("li")
            li.classList.add("list-group-item")
            //inside the list i need a text node like course name   createTextNode
            const name = document.createTextNode(course.Name)

            //now i want to add the name inside the list
                li.appendChild(name)
                const span =document.createElement("span")
                span.classList.add("float-right")
                const price =document.createTextNode(course.price)
                span.appendChild(price)
                li.appendChild(span)
                ul.appendChild(li)
        
    });
    
}
GenarateList();

console.log(courses);
