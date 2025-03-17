import React, {useState} from 'react'

const App = () => {
    const [productName, setProductName]= useState("")
    const [productBrand, setProductBrand]= useState("")
    const [productPrice, setProductPrice]= useState("")
    const [productCategories, setProductCategories]= useState("")
    const [productImage, setProductImage]= useState("")
    const [allProducts, setallProducts]= useState([])

    const addProducts=()=>{
      let productDetails ={productName,productBrand,productPrice,productCategories,productImage}
      setallProducts([...allProducts, productDetails]); 
    }

        const deleteProduct =(index)=>{
          let newallProducts = [...allProducts]
          newallProducts.splice(index,1)
          setallProducts(newallProducts)

        }
  return (

    <div>
      <h1>Product Details</h1>
      <input type="text" placeholder='Product Name' onChange={(e)=>{setProductName(e.target.value)}} />
      <input type="text" placeholder='Product Brand' onChange={(e)=>{setProductBrand(e.target.value)}}/>
      <input type="text" placeholder='Product Price' onChange={(e)=>{setProductPrice(e.target.value)}}/>
      <input type="text" placeholder='Product Categories' onChange={(e)=>{setProductCategories(e.target.value)}} />
      <input type="text" placeholder='Product Image' onChange={(e)=>{setProductImage(e.target.value)}} />
      <div>
        <button onClick={addProducts}>Add Products</button>
      </div>
      {/* to display the prducts on the webpage from an array, call on the map function */}
      <hr />

     {allProducts.length===0 ? <h1>No Products yet</h1> : allProducts.map((product, index)=>{
        return(
          <div key={index} style={{display:"flex", justifyContent:"space-between"}}>
            <div>
              <h3>{product.productName}</h3>
              <p>{product.productBrand}</p>
              <p>{product.productPrice}</p>
              <p>{product.productCategories}</p>
              <img src={product.productImage} alt="" />
              
            </div>
            <button style={{margin:'5px'}} onClick={(index)=>{deleteProduct(index)}}>Delete</button>
            <button style={{margin:'5px'}}>Edit</button>
          </div>
        )
      }
      )}
    </div>

  
  )  
}

export default App
