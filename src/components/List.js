import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';


function List({ productsList, editProduct, handleProductDelete}) {
	return(
		<div>
  		<Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rate</th>
            <th>Quality</th>
            <th>Actions</th>
          </tr>
        </thead>
  			<tbody>
          { productsList.map((product) => (
            <tr>
             <td>{product.name}</td>
              <td>{product.rate}</td>
              <td>{product.quality}</td>
              <td>       
                 <Button color="success" size="sm" className="mr-2" onClick={() => editProduct(product.id,product.name,product.rate,product.quality)}>Edit</Button>
                  <Button color="danger" size="sm" onClick={() => handleProductDelete(product.id)}>Delete</Button>
              </td>
            </tr>
            )
          )}
        </tbody>          
      </Table>
		</div>
	)
}

export default List