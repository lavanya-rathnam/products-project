import React from 'react'
import { Input, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Table, Button } from 'reactstrap';


function Add({newProductData, productsList, newProductModal, onChangeName, onChangeRate, onChangeQuality, addProduct, toggleNewProductModal}){
	return(
		<div>
			<Button className="my-3" color="primary" onClick={() => toggleNewProductModal()}>Add Book</Button>
	      	<Modal isOpen={newProductModal} toggle={() => toggleNewProductModal()}>
	        <ModalHeader toggle={() => toggleNewProductModal}>Add a new book</ModalHeader>
	        <ModalBody>
	        	<FormGroup>
		            <Label for="name">Name</Label>
		            <Input id="name"  name='name' value={newProductData.name} onChange={onChangeName}/>
		        </FormGroup>
		        <FormGroup>
		            <Label for="rating">Rate</Label>	       
		            <Input id="rate" name='rate' value={newProductData.rate} onChange={onChangeRate} />
		        </FormGroup>
		        <FormGroup>
		          	<Label for="backdrop">Quality</Label>
		          	<Input type="select" name="qulity" id="qulity" onChange={onChangeQuality} >
			            <option value="1">1</option>
			            <option value="2">2</option>
			            <option value="3">3</option>
		          	</Input>
	        	</FormGroup>
	        </ModalBody>
	        <ModalFooter>
	          <Button color="primary" onClick={(e) => addProduct()}>Add Book</Button>
	          <Button color="secondary" onClick={() =>toggleNewProductModal()}>Cancel</Button>
	        </ModalFooter>
	      </Modal>		
      </div>
	)
}

export default Add