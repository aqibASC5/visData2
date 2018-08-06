let data="";
function retrieveData(numberOfUsers){
    const baseUrl = "https://randomuser.me/api/?results="
    const url = encodeURI(baseUrl + numberOfUsers)
    fetch(url)
        .then(function(response){
            return response.json()
        })
        .then(function(json){
            //const body=document.querySelector("body")
            data = json.results
            console.log(data);
            // console.log(people)
            // for(const person of people){
            //     body.innerText+= person.email+"\n"
            // }
        })
}
retrieveData(12);

// asyncronous vs syncronous JS. The data below (lines 23 to 33) executes before the function retrieveData(12) at line 19

console.log(data);
for(i=0;i<data.length;i++){
    let p = document.createElement("div")
    p.innerText=" Hi, My name is "+ data[i].name.first +"  "+ data[i].name.last +" I'm a " + data[i].gender + ", My email is " + data[i].email +" and my contact info is " + data[i].phone 
    let body = document.querySelector("body")
    body.appendChild(p)
    // make img
    let img = document.createElement("img")
    img.src = data[i].picture.large
    body.appendChild(img)
}
