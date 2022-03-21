import React from 'react'
import ItemCount from "./ItemCount"


function ItemListContainer({itemListContainerProps}) {

  const onAdd = (count) => {
    alert(`Agregaste ${count} productos`);
  };
    
  return (
    <div>
        <h1>{itemListContainerProps}</h1>
        <ItemCount onAdd={onAdd} />
        
    </div>
  )
}

export default ItemListContainer