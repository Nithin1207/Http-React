import { useEffect, useState } from 'react';
import ProductCard from "./product.jsx";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function handleData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const resData = await response.json();
        setData(resData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    handleData();
  }, []);

  return (
    <div className="product-list">
      {data.length > 0 ? (
        data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
}

export default App;
