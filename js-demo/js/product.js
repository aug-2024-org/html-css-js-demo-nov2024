// let allProducts = [
//   {
//     id: "1001",
//     productName: "Laptop",
//     productCost: 50000,
//     productImageUrl:
//       "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wfGVufDB8fDB8fHww",
//   },
//   {
//     id: "1002",
//     productName: "Mobile",
//     productCost: 20000,
//     productImageUrl:
//       "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlfGVufDB8fDB8fHww",
//   },
//   {
//     id: "1003",
//     productName: "Tablet",
//     productCost: 40000,
//     productImageUrl:
//       "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGFibGV0fGVufDB8fDB8fHww",
//   },
// ];

function loadData() {
  let allProductsString = localStorage.getItem("allProducts");
  if (allProductsString != null) {
    allProducts = JSON.parse(allProductsString);

    console.log("before push :", allProducts);
    let content = "";
    for (let eachProduct of allProducts) {
      content += `<tr>
                      <td>${eachProduct.id}</td>
                      <td><img src="${eachProduct.productImageUrl}" width="80" height="50"></td>
                      <td>${eachProduct.productName}</td>
                      <td>${eachProduct.productCost}</td>
                      <td><button type="button" class="btn btn-warning">View</button></td>
                      <td><button type="button" class="btn btn-primary">Edit</button></td>
                      <td><button type="button" class="btn btn-danger" onclick="deleteProduct(${eachProduct.id})">Delete</button></td>
                  </tr>`;
    }
    document.getElementById("data").innerHTML = content;
  } else {
    document.getElementById("message").innerHTML = "No Products to display!";
  }
}

function deleteProduct(id) {
  let index = allProducts.findIndex((eachProduct) => eachProduct.id == id);
  allProducts.splice(index, 1);
  loadData();
}

function addProduct() {
  let allProductsString = localStorage.getItem("allProducts");
  if (allProductsString != null) {
    allProducts = JSON.parse(allProductsString);
    newId = allProducts[allProducts.length - 1].id + 1;
  } else {
    newId = 101;
    allProducts = [];
  }

  let newProduct = {
    id: newId,
    productName: document.getElementById("pName").value,
    productCost: document.getElementById("pCost").value,
    productImageUrl: document.getElementById("pImage").value,
  };

  allProducts.push(newProduct);
  localStorage.setItem("allProducts", JSON.stringify(allProducts));
  window.location.href = "product-list-array-demo.html";
}
