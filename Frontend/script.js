const url="http://localhost:8080/api/products";

//Target the element
document.addEventListener("DOMContentLoaded",fetchproduct);
document.getElementById("form").addEventListener("submit",saveProduct);



async function fetchproduct(){

    try {
         
     const response= await fetch(url);
     const products= await response.json();
    //  console.log(users);
     displayproducts(products);
        
    } catch (error) {
        console.log("Error in Fetching user details",error);
    }
}


//create a function to display the data in table format
function displayproducts(products){
    //map the data to table format
    const producttable=document.getElementById("producttable");
    producttable.innerHTML="";//empty

    //iterate every data and print the element table 
    products.forEach(product=>{
        const row=document.createElement("tr");//create for 100 rows

        row.innerHTML=`
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.catogory}</td>
        `;

        //append row to table
        producttable.appendChild(row);
    })
}


//create asynchronous function
 async function  saveProduct(event) {
    event.preventDefault();

     // Get input values
        let name = document.getElementById("name").value;
        let price = document.getElementById("price").value;
        let catogory = document.getElementById("catogory").value;

        // Create JSON object
        let productData = {
            name: name,
            price: price,
            catogory: catogory
        };

        console.log("Sending Data:", productData); 

        try {
            let response = await fetch("http://localhost:8080/api/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(productData)
            });

            if (!response.ok) {
                throw new Error("HTTP error! Status: " + response.status);
            }

            let product = await response.json();
            console.log("Success:", product);
           

        } catch (error) {
            console.error("Error:", error);
        }

    
 }


 




 