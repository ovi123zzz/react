
import { useState, useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([{name: 'Apples', price: 50}])
  const [item, setItem] = useState('')
  const [price, setPrice] = useState()
  const [showEdit, setShowEdit] = useState(false)
  const [valueName, setValue] = useState('')

  const productNameChange = (event) => {
    setItem(event.target.value)
  }

  const priceChange = (event) => {
    setPrice(event.target.value)
  }

 

  const saveItem = () => {
    setProducts([...products, {name: item, price: price}])
    console.log('product changed')
    setValue('')
    
  }

  const deleteItem = (prod) => {
    setProducts([...products.filter(el => el.name !== prod.name)])
  }
  const editItem = () => {
    // logic to edit items
    setShowEdit(false)
  }

  return (
    <div>
      <div>
        <input name="item" placeholder="Add Item" value={valueName}  onChange={(event) => productNameChange(event)}></input>
        <input name="price" placeholder="Add Price" onChange={(event) => priceChange(event)}></input>
        <button onClick={saveItem}>Save item</button>
      </div>
      <div>
        <ul>
          {products.map((prod, idx) => (
            <li key={idx}>
              {prod.name} - {prod.price} 
              <button onClick={() => deleteItem(prod)}>Delete item</button>
              <button onClick={() => setShowEdit(true)}>Edit item</button>


              {
                showEdit ? (<div>
                <input name="item" placeholder="Add Item" onChange={(event) => productNameChange(event)}></input>
                <input name="price" placeholder="Add Price" onChange={(event) => priceChange(event)}></input>
                <button onClick={editItem}>edit item</button>
              </div>) : ''
              }
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProductList