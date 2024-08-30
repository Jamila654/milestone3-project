"use client"
import { use } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const fetchProduct = async (id: string) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!response.ok) throw new Error('Failed to fetch product');
  return response.json();
};

const ProductDetailPage = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const product = use(fetchProduct(params.id));

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={500}
            className="object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 md:ml-4">
          <h2 className="text-2xl font-semibold mb-2">${product.price.toFixed(2)}</h2>
          <p className="text-lg mb-4">{product.description}</p>
          <button
            onClick={() => alert('Product added to cart successfully!')}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;