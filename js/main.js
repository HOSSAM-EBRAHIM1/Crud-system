
var productNameInput =document.getElementById("productName");
var productPriceInput =document.getElementById("productPrice");
var productFloatingSelect =document.getElementById("floatingSelect");
var productfloatingTextarea =document.getElementById("floatingTextarea");
var productImage =document.getElementById("productImage");


    productList =[];
function addItem() {
    var product ={
        name:productNameInput.value,
        price:productPriceInput.value,
        category:productFloatingSelect.value,
        description:productfloatingTextarea.value,
        img:"../images/Apple iPhone 14.jpg",
        
    }
    productList.push(product);
    console.log(productList);



    // dispaly data card 
    displayData();
    resetAllProductInputs();
}


//  reset all product value when i clivk addProduct

function resetAllProductInputs(){
    productNameInput.value='',
    productPriceInput.value='',
    productFloatingSelect.value='',
    productfloatingTextarea.value='',
    productImage.value=''
};


function displayData(){
    var product='';
    for (let i = 0; i < productList.length; i++) {
        product +=`          <div class="product gap-4 col-md-6 col-xl-3 col-lg-4">
          <div class="card" >
            <div>
              <img src="${productList[i].productImage}" class="card-img-top" alt="...">
            </div>
              <div class="card-body">
              <h5 class="card-title  h6"><span class="fw-bold ">name :</span>${productList[i].name}</h5>
              <h5 class="card-title  h6"><span class="fw-bold ">price :</span>${productList[i].price}</h5>
              <h5 class="card-title  h6"><span class="fw-bold ">category:</span>${productList[i].category}</h5>
              <h4 class="card-text  h6"><span class="fw-bold">descreption:</span>${productList[i].description}</h4>
        <div class=" gap-4  d-flex">
          <a href="#" class="btn btn-warning">update</a>
          <a  href="#" class="btn btn-danger" onclick=" DeleteCard(${i}) ">delete</a>
        </div>
          </div>
        </div>
        </div>`
        
    }


    document.getElementById("rowData").innerHTML=product;
};



function DeleteCard() {
  
}