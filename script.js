let productNames = [
  'Xioami 11',
];
let inputName = document.querySelector('.input-name')
let addBtn = document.querySelector('.add')
let updateIndex = -1;
function renderProductNames(products)
{
  let productEl = document.querySelector('.products');
  let productHtml = '';
  for(let index in products)
  {
      let item = products[index];
      productHtml += `  <div class="product-${index}">
      <p>${item}</p>
      <p>2000$</p>
      <img src="./" alt="">
      <button data-index="${index}" class="edit">Edit</button>
      <button data-index="${index}" class="delete">Delete</button>
      <p>-------------------</p>
  </div>`
  }
  productEl.innerHTML = productHtml

  initEditBtnHandle()

  initDeleteBtnHandle();
}

function initDeleteBtnHandle() {
  let deleteBtns = document.querySelectorAll('.delete');
  // .length 
  deleteBtns.forEach(function (item) {
      item.addEventListener('click', function () {
          let deleteIndex = item.getAttribute('data-index');
          let status = confirm('ban co muon xoa khong');
          console.log(status);
          console.log(productNames);
          if (status) {
              productNames.splice(deleteIndex, 1);
              console.log(productNames);
              renderProductNames(productNames);
              console.log('delete');
          }
      });
  });
}

function initEditBtnHandle()
{

  let editBtns = document.querySelectorAll('.edit')
  // .length 
  editBtns.forEach(function(item){
      item.addEventListener('click', function(){
          updateIndex = item.getAttribute('data-index')
          let editName = productNames[updateIndex]
          console.log(updateIndex)
          inputName.value = editName;
          addBtn.innerHTML = 'update'
      })
  })
}



renderProductNames(productNames)

addBtn.addEventListener('click', function(){
  let inputNameValue = inputName.value
  if(updateIndex >= 0)
  {
      console.log('update')
      productNames[updateIndex] = inputNameValue
      updateIndex = -1;
      addBtn.innerHTML = 'Add'
  }else{
      console.log('create')
      productNames.push(inputNameValue)
      console.log(productNames)
  }
  renderProductNames(productNames)
  inputName.value = ''

});



// them sua xoa mang 1 chieu => 2 chieu