import React from 'react';
import  './Brands.css';

function Brands() {
  return (
    <section className="brands">
      <h2>Top Brands</h2>
      <div className="brand">
        <img src="https://tse2.mm.bing.net/th?id=OIP.QOdlNLAKs9BgIvTJayxQeAHaE8&pid=Api&P=0&h=180" alt="Arterosil" />
        <p>Arterosil HP by Calroy</p>
      </div>
      <div className="brand">
        <img src="https://tse3.mm.bing.net/th?id=OIP.0trAmfOY3NysxWQc-j_BcgAAAA&pid=Api&P=0&h=180" alt="Allergy Research Group" />
        <p>Allergy Research Group</p>
      </div>
      <div className="brand">
        <img src="https://gphb01pdazurefileshare.blob.core.windows.net/sys-master-hybris-media/hc8/h15/16358034735134/Nordic%20Naturals%20Brand%20Logo.jpg" alt="Nordic Naturals" />
        <p>Nordic Naturals</p>
      </div>
    </section>
  );
}

export default Brands;