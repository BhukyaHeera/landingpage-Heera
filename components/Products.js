import React from 'react';

function Products() {
  return (
    <section className="products">
      <h2>Featured Products</h2>
      <div className="product">
        <img src="https://hebronnutrition.com/cdn/shop/files/curalin_Frame1597877380_695x673.webp?v=1721076310" alt="Product 1" />
        <p>Arterosil HP by Calroy - Rs. 99.00</p>
        <a href="#">Add to Cart</a>
      </div>
      <div className="product">
        <img src="https://hebronnutrition.com/cdn/shop/files/71HmRYl96KL._AC_SX425_425x397.jpg?v=1690301332" alt="Product 2" />
        <p>Allergy Research Group - Rs. 115.99</p>
        <a href="#">Add to Cart</a>
      </div>
      <div className="product">
        <img src="https://hebronnutrition.com/cdn/shop/products/419RIWL0apL_500x500.jpg?v=1631744083" alt="Product 3" />
        <p>Nordic Naturals ProOmega - Rs. 84.00</p>
        <a href="#">Add to Cart</a>
      </div>
    </section>
  );
}

export default Products;