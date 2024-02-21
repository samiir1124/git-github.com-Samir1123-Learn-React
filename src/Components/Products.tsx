import React, { Component } from 'react';

// Define props interface
interface ProductProps {
  product_name: string;
}

// Define Product component as a class
class Product extends Component<ProductProps> {
  constructor(props: ProductProps) {
    super(props);
  }

  // Lifecycle method: componentDidMount
  componentDidMount() {
    console.log('Product component mounted');
  }

  // Lifecycle method: componentDidUpdate
  componentDidUpdate(prevProps: ProductProps) {
    if (prevProps.product_name !== this.props.product_name) {
      console.log('Product component updated');
    }
  }

  render() {
    const { product_name } = this.props;

    return (
      <div>
        <h1>Product Name: {product_name}</h1>
      </div>
    );
  }
}

export default Product;
