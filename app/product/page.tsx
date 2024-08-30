"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const addToCart = (product: Product) => {
    setCart(prevCart => [...prevCart, product]);
    setMessage('Product added to cart successfully!');
    setTimeout(() => setMessage(null), 3000);
  };

  return (
    <div className="products-page p-4">
      <h1 className="text-3xl font-bold my-4 text-center">Products</h1>
      {message && <div className="bg-green-500 text-white p-2 rounded mb-4">{message}</div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="card border-2 border-black rounded-lg overflow-hidden ">
            <Link href={`/product/${product.id}`}>
              <Image src={product.image} alt={product.title} width={300} height={300} className="w-full h-56" />
              <div className="p-4">
                <h5 className="text-xl font-semibold cursor-pointer hover:opacity-55">{product.title}</h5>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
              </div>
            </Link>
            <div className="p-4">
              <button
                onClick={() => addToCart(product)}
                className="mt-2 bg-black text-white py-2 px-4 rounded hover:bg-slate-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;









