import React, { Component } from 'react'
import { Input, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Table, Button } from 'reactstrap';
import List from './components/List'
import Add from './components/Add'
import Login from './components/Login'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'


class App extends Component {
  constructor() {
        super();
        this.state = {
          products: [
            {
              id: 1,
              name: "product1",
              rate: 500,
              quality: 1,
           },
            {
              id: 2,
              name: "product2",
              rate: 300,
              quality: 2,
            },
            {
              id: 3,
              name: "product3",
              rate: 100,
              quality: 3,
            },
            {
              id: 4,
              name: "product4",
              rate: 300,
              quality: 2,
            },
            {
              id: 5,
              name: "product5",
              rate: 500,
              quality: 1,
            }
          ],
           newProductData: {
            name: '',
            rate: '',
            quality: '1',
          },
          editProductData: {
            id: '',
            name: '',
            rate: '',
            quality: '1',
          },
          newProductModal: false,
          editProductModal: false,
        }
  }

  //handle add modal
  toggleNewProductModal() {
    this.setState({
      newProductModal: ! this.state.newProductModal
    });
  }

  //used for eidt modal
  toggleEditProductModal() {
    this.setState({
      editProductModal: ! this.state.editProductModal
    });
  }

  //used for  delete modal
  handleProductDelete(deletedId) {
    this.setState(prevState => ({
      products: prevState.products.filter(row => (
        row.id !== deletedId
      ))
    }))
  }

  //used for add product
  addProduct(e) {
    let { products, newProductData } = this.state
    products.push(newProductData)
    this.setState({ products, newProductModal: false, newProductData: {
        name: '',
        rate: '',
        quality: 1
      }});
    }

  //used for edit product
  editProduct(id, name, rate, quality) {
    this.setState({
      editProductData: { id, name, rate, quality }, editProductModal: ! this.state.editProductModal
    });
  }
  //this method is used for update product
  updateProdct(e) {
      let { products, editProductData } = this.state
        this.setState({ editProductModal: false, editProductData: { id: '', name: '', rate: '', quality:1 } })


    console.log(editProductData,"editProductData")
  }
  //this method is used for name onchange
  onChangeName(e){
    let { newProductData } = this.state;
    newProductData.name = e.target.value;
    this.setState({ newProductData })
  }
  //this method is used for rate onchange
  onChangeRate(e){
    let { newProductData } = this.state;
    newProductData.rate = e.target.value;
    this.setState({ newProductData })
  }
  //this method is used for quality onchange
  onChangeQuality(e) {
    console.log(e,"targetvalie")
    let { newProductData } = this.state;
    newProductData.quality = e.target.value;
    this.setState({ newProductData });
  }
  render() {
    const { products } = this.state
    return(
      <div className="App">

      <Modal isOpen={this.state.editProductModal} toggle={this.toggleEditProductModal.bind(this)}>
        <ModalHeader toggle={this.toggleEditProductModal.bind(this)}>Edit a book</ModalHeader>
        <ModalBody>

           <FormGroup>
            <Label for="name">Name</Label>
            <Input id="name" value={this.state.editProductData.name} onChange={(e) => {
              let { editProductData } = this.state;

              editProductData.name = e.target.value;

              this.setState({ editProductData });
            }} />
          </FormGroup>
          <FormGroup>
            <Label for="rating">Rate</Label>
            <Input id="rating" value={this.state.editProductData.rate} onChange={(e) => {
              let { editProductData } = this.state;

              editProductData.rate = e.target.value;

              this.setState({ editProductData });
            }} />
          </FormGroup>
          <FormGroup>
          <Label for="backdrop">Quality</Label>{' '}
          <Input type="select" name="qulity" id="qulity" onChange={(e) => {
              let { editProductData } = this.state;
              editProductData.quality = e.target.value;
              this.setState({ editProductData });
            }} >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </Input>
        </FormGroup>

        </ModalBody>
          <ModalFooter>
          <Button color="primary" onClick={this.updateProdct.bind(this)}>Update a Product</Button>
        <Button color="secondary" onClick={this.toggleEditProductModal.bind(this)}>Cancel</Button>
        </ModalFooter>
      </Modal>


      <Login/>
      <Add newProductData = { this.state.newProductData }
      productsList = { this.state.products } 
      newProductModal = {this.state.newProductModal} 
      onChangeName = {this.onChangeName.bind(this)}
      onChangeRate = {this.onChangeRate.bind(this)}
      onChangeQuality = {this.onChangeQuality.bind(this)} 
      addProduct = {this.addProduct.bind(this)}
      toggleNewProductModal = {this.toggleNewProductModal.bind(this)} />
      <List productsList = { products } editProduct = {this.editProduct.bind(this)} handleProductDelete = {this.handleProductDelete.bind(this)} />
       </div>
  );

  }

}

export default App;
