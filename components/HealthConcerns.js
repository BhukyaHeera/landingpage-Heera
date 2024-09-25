import React from 'react';

function HealthConcerns() {
  return (
    <section className="health-concerns">
      <h2>Shop by Health Concerns</h2>
      <div className="health-item">
        <img src="https://thumbs.dreamstime.com/b/multivitamins-6487138.jpg" alt="Multivitamins" />
        <p>Multivitamins</p>
      </div>
      <div className="health-item">
        <img src="https://tse1.mm.bing.net/th?id=OIP.zebRpAIqbDv0MS43zo7ZbQHaE8&pid=Api&P=0&h=180" alt="Diabetes Care" />
        <p>Diabetes Care</p>
      </div>
      <div className="health-item">
        <img src="https://tse3.mm.bing.net/th?id=OIP.aE30dFWhd5B9yvruOHKViAHaFQ&pid=Api&P=0&h=180" alt="Heart Care" />
        <p>Heart Care</p>
      </div>
    </section>
  );
}

export default HealthConcerns;