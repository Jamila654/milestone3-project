import Image from "next/image";
import Link from "next/link";
import { use } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
const fetchProducts = async(): Promise<Product[]> => {
  const response = await fetch('https://fakestoreapi.com/products');
  if (!response.ok) throw new Error('Failed to fetch products');
  return response.json();
};


export default function Home() {

  const products = use(fetchProducts());

  const topProducts = products.slice(0, 3);
  const featuredProducts = products.slice(3, 6);

  return (
    <main className="min-h-screen">
      <section id="hero" className="relative w-full">
        <img src="/banner.avif" alt="banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50 p-4">
          <h1 className="sm:text-4xl md:text-6xl font-bold sm:mb-4">Welcome to Jam's Closet</h1>
          <p className="sm:text-xl md:text-2xl sm:mb-8">Explore Trendy Styles: Shop the Latest Collections</p>
          <Link href="/product">
            <button className="bg-black hover:bg-slate-300 text-white font-bold py-3 px-6 rounded-lg">
              Shop Now
            </button>
          </Link>
        </div>
      </section>
      <section className=" p-2  sm:p-4 sm:ml-16">
        <h2 className="text-2xl font-bold mb-4 text-center">Top Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {topProducts.map(product => (
            <div key={product.id} className="card w-72 bg-white shadow-lg rounded-lg flex flex-col gap-2 border-2 border-black">
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={300}
                className="sm:w-full sm:h-56"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{product.title}</h3>
                <p className="text-lg mb-2">${product.price.toFixed(2)}</p>
                <Link href={`/product/${product.id}`}>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className=" p-2 sm:p-4 sm:ml-16">
        <h2 className="text-2xl font-bold mb-4 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {featuredProducts.map(product => (
            <div key={product.id} className="card w-72 bg-white shadow-lg rounded-lg flex flex-col gap-2 border-2 border-black">
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={300}
                className="sm:w-full sm:h-56 mt-5"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{product.title}</h3>
                <p className="text-lg mb-2">${product.price.toFixed(2)}</p>
                <Link href={`/product/${product.id}`}>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

