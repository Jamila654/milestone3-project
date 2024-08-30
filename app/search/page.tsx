"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

const SearchPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError('Failed to load products');
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (query) {
      const results = products.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  }, [query, products]);

  return (
    <div className="search-page p-4">
      <h1 className="text-3xl font-bold my-4 text-center">Search Results</h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredProducts.map(product => (
            <div key={product.id} className="card border-2 border-black rounded-lg overflow-hidden ">
              <Link href={`/product/${product.id}`}>
                <Image src={product.image} alt={product.title} width={300} height={300} className="w-full h-56" />
                <div className="p-4">
                  <h5 className="text-xl font-semibold cursor-pointer hover:opacity-55">{product.title}</h5>
                  <p className="text-gray-600">${product.price.toFixed(2)}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

export default SearchPage;
