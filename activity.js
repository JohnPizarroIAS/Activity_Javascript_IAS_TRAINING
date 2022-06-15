const products = [
    {
      productId: 1,
      name: "headphones",
      category: 1,
      price: 100,
    },
    {
      productId: 2,
      name: "Shoes Nike",
      category: 2,
      price: 300,
    },
    {
      productId: 3,
      name: "hamburger",
      category: 3,
      price: 10,
    },
    {
      productId: 4,
      name: "Fries",
      category: 3,
      price: 5,
    },
    {
      productId: 5,
      name: "Sandwich",
      category: 3,
      price: 10,
    },
    {
      productId: 6,
      name: "laptop",
      category: 1,
      price: 100,
    },
    {
      productId: 7,
      name: "keyboard",
      category: 1,
      price: 50,
    },
    {
      productId: 8,
      name: "t-shirt",
      category: 2,
      price: 16,
    },
  ];
  
  const categories = [
    { id: 1, name: "Electronic" },
    { id: 2, name: "Clothes" },
    { id: 3, name: "Food" }
  ];
  
  export const discountsHolyDays = [
    { category: 1, discountApply: true, value: 10 },
    { category: 2, discountApply: false, value: 0 },
    { category: 3, discountApply: true, value: 30 },
  ];
  
  //// Activity
  
  // cada solución debe de crearse con metodo que retorne el resultado esperado de cada punto
  // y su llamda del metodo con un console.log donde muestre la información



  /* 1 - ¿Cuál es el promedio de valor de cada tipo de producto? */
  function promedioValorTipoProducto(){
    let result = categories.map(item => { 
      return { 
          categoria: item.name, 
          promedio: products.filter(c => c.category === item.id).reduce((prev, act) => prev + act.price, 0) / 
          products.filter(product => item.id === product.category).length
        } 
    });

    return result;
    
  }
  console.log("1. ¿Cuál es el promedio de valor de cada tipo de producto?")
  console.log(promedioValorTipoProducto())





  /// 2 - ¿Cuál es el producto más costoso de cada categoria?
  function productoMasCostoso(){
    let result = categories.map(item => { 
      return {
        categorie :item.name,
        prodFilter:products.filter( product => product.category == item.id).reduce((prev,act) => prev.price > act.price ? prev:act )  
        } 
    });
    return result;   
  }
   console.log("2. ¿Cuál es el producto más costoso de cada categoria?")
   console.log(productoMasCostoso())





  /// 3 - ¿Exite algún producto de tipo Electronico que cueste $100?
  function productoElectronico100(){
      return products.filter(product => product.price === 100 && product.category === 1)
  }
  console.log("3. ¿Exite algún producto de tipo Electronico que cueste $100?")
  console.log(productoElectronico100())





  /// 4 - Obtener todos los productos que en nombre tengan las letra S. 
  function productoContenerS(){
    return products.filter(product => product.name.toLowerCase().includes("s"))
  }
  console.log("4. Obtener todos los productos que en nombre tengan las letra S.")
  console.log(productoContenerS())




  /// 5 - Crear un arreglo de objetos con la siguiente información: { productId: 7 ,nameProduct: 'keyboard', category: 'Electronic', discount: '10', applyDiscount: true}
  function arregloObjetos(){
    const nuevoArreglo = []
    categories.map(item => { 
      products.filter(c =>{
          if(c.category === item.id){
            discountsHolyDays.map(i =>{
              if(i.category === c.category){
                nuevoArreglo.push({
                  productId:c.productId,
                  nameProduct:c.name,
                  category:item.name,
                  discount:i.value,
                  applyDiscount:i.discountApply
                })
              }
            })
          } 
      })  
    })
    return nuevoArreglo;
  }
  console.log("5. Crear un arreglo de objetos con la siguiente información: { productId: 7 ,nameProduct: 'keyboard', category: 'Electronic', discount: '10', applyDiscount: true}")
  console.log(arregloObjetos())





  /// 6. Crear un arreglo de objetos con la siguiente información: { productId: 7, priceWithDiscount: 45}

  function calcularDescuento(price,discount){
    let descu =(discount/100)*price
      return  price-descu
  }

  function productosConDescuentoArray(){
    const nuevoArreglo = []
    categories.map(item => { 
      products.filter(c =>{
          if(c.category === item.id){
            discountsHolyDays.map(i =>{
              if(i.category === c.category){
                nuevoArreglo.push({
                  productId:c.productId,
                  priceWithDiscount:calcularDescuento(c.price,i.value)
                })
              }
            })
          } 
      })  
    })
    return nuevoArreglo;
  }
console.log("6. Crear un arreglo de objetos con la siguiente información: { productId: 7, priceWithDiscount: 45}")
 console.log(productosConDescuentoArray())





  // 7. Agregar los siguientes productos, y crear un arreglo con el resultado, ejemplo: [{id: 9, status: 'succes', id:10: status: 'error': message: 'error message'}];
   // errors: duplicated key
  
   const newProducts = [
    {
        id: 9,
        name: 'Tucson',
        typeOfProcuct: 'Car',
        discount: 10,
    },     {
        id: 10,
        name: 'Jeep',
        typeOfProcuct: 'Car',
        discount: 10,
    },  {
        id: 10,
        name: 'Screen',
        typeOfProcuct: 'Electronic'
    },{
        id: 1,
        name: 'Mouse',
        typeOfProcuct: 'Electronic'
    }

  ]


  function verificarExistente(nuevoArreglo, productId){
    return nuevoArreglo.some(b => b.id === productId)
  }
  function agregarProductosStatus(){
    const nuevoArreglo = [];

    newProducts.forEach(element => {
        if(!verificarExistente(nuevoArreglo, element.id))
        nuevoArreglo.push({id: element.id, status: 'sucess'})
        else
        nuevoArreglo.push({id: element.id, status: 'error',message:'key duplicated'})
    });

    return nuevoArreglo;
  }
  console.log("7. Agregar los siguientes productos, y crear un arreglo con el resultado, ejemplo: [{id: 9, status: 'succes', id:10: status: 'error': message: 'error message'}];errors: duplicated key")
  console.log(agregarProductosStatus())
