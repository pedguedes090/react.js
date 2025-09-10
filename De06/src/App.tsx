import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header.tsx';
import ProductForm from './components/ProductForm.tsx';
import ProductTable from './components/ProductTable.tsx';
import Pagination from './components/Pagination.tsx';
import type { Product } from './types';
import { loadProducts, saveProducts } from './storage';

function App() {
  const [products, setProducts] = useState<Product[]>(() => {
    const initial = loadProducts();
    if (initial.length) return initial;
    return [
      { id: crypto.randomUUID(), name: 'Trần Văn Hùng', price: 550000, status: 'in_stock' },
      { id: crypto.randomUUID(), name: 'Lê Thị Mai', price: 780000, status: 'out_of_stock' },
      { id: crypto.randomUUID(), name: 'Phạm Minh Đức', price: 420000, status: 'in_stock' },
    ];
  });

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  useEffect(() => {
    saveProducts(products);
  }, [products]);

  const paged = useMemo(() => {
    const start = (page - 1) * pageSize;
    return products.slice(start, start + pageSize);
  }, [products, page, pageSize]);

  const handleAdd = (p: Product) => {
    setProducts((prev) => [p, ...prev]);
  };
  const handleToggle = (id: string) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status: p.status === 'in_stock' ? 'out_of_stock' : 'in_stock' } : p)),
    );
  };
  const handleDelete = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  useEffect(() => {
    const totalPages = Math.max(1, Math.ceil(products.length / pageSize));
    if (page > totalPages) setPage(totalPages);
  }, [products, page, pageSize]);

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: 16 }}>
      <Header />
      <ProductForm onAdd={handleAdd} />
      <ProductTable products={paged} onToggle={handleToggle} onDelete={handleDelete} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Pagination total={products.length} pageSize={pageSize} currentPage={page} onChange={setPage} />
          <select value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))} style={{ padding: '6px 10px', borderRadius: 6, border: '1px solid #e5e7eb' }}>
            <option value={3}>3 / page</option>
            <option value={5}>5 / page</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default App;