// Add your code here
function submitData(name, email){
        return fetch("http://localhost:3000/users",{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            name:"Steve",
            email:"steve@steve.com",
        }), 
    })
    .then(response => response.json())
    .then(object => {
        document.body.innerHTML += `<p>${object.id}</p>`
    })
    .catch(function(error){
        document.body.innerHTML += `<p>${error.message}</p>`;
    })

}
submitData()
