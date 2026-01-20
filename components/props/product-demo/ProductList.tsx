interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

interface ProductListProps {
  products: Product[];
  onSelect: (id: number) => void;
}

export default function ProductList({ products, onSelect }: ProductListProps) {
  return (
    <div className="border p-4">
      <h2 className="font-bold mb-2">Products ({products.length})</h2>
      {products.map(product => (
        <div key={product.id} className="border-b py-2 flex justify-between">
          <div>
            <span className="font-semibold">{product.name}</span> - ${product.price}
            {!product.inStock && <span className="text-red-500 ml-2">(Out of stock)</span>}
          </div>
          <button 
            onClick={() => onSelect(product.id)}
            className="border px-2 py-1"
          >
            Select
          </button>
        </div>
      ))}
    </div>
  );
}
