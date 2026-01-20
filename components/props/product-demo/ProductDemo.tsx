'use client';
import ProductList from '@/components/props/product-demo/ProductList';

export default function ProductDemo() {
  const products = [
    { id: 1, name: 'Laptop', price: 999, inStock: true },
    { id: 2, name: 'Mouse', price: 29, inStock: false },
    { id: 3, name: 'Keyboard', price: 79, inStock: true },
  ];

  const handleSelect = (id: number) => {
    alert(`Selected product: ${id}`);
  };

  return (
    <div className="p-8">
      <ProductList products={products} onSelect={handleSelect} />
    </div>
  );
}
