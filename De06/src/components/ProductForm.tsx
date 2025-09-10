import { useState } from 'react';
import type { ProductStatus, Product } from '../types';

interface Props {
  onAdd(product: Product): void;
}

export default function ProductForm({ onAdd }: Props) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [status, setStatus] = useState<ProductStatus>('in_stock');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const priceNum = Number(price.replace(/[^0-9.-]+/g, ''));
    if (!name.trim() || Number.isNaN(priceNum) || priceNum < 0) return;
    const newProduct: Product = {
      id: crypto.randomUUID(),
      name: name.trim(),
      price: priceNum,
      status,
    };
    onAdd(newProduct);
    setName('');
    setPrice('');
    setStatus('in_stock');
  };

  return (
    <form onSubmit={handleSubmit} style={{ gap: 12, alignItems: 'center', background: 'white', padding: 16, borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', marginBottom: 12 }}>
      <h2 style={{ color: '#4a5568', display:'flex', justifyContent:'center' }}>Thêm hóa đơn mới</h2>
      <label style={{ display: 'flex', gap: 8, justifyContent:'center', alignItems:'center' }}>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Tên chủ hộ" style={{ padding: '10px 12px', borderRadius: 8, border: '1px solid #e2e8f0' }} />
          <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Số tiền (đ)" style={{ width: 140, padding: '10px 12px', borderRadius: 8, border: '1px solid #e2e8f0' }} />
          <select value={status} onChange={e => setStatus(e.target.value as ProductStatus)} style={{ padding: '10px 12px', borderRadius: 8, border: '1px solid #e2e8f0' }}>
            <option value="out_of_stock">Chưa thanh toán</option>
            <option value="in_stock">Đã thanh toán</option>
          </select>
      <button type="submit" style={{ background: '#2563eb', color: 'white', border: 'none', padding: '10px 16px', borderRadius: 8, cursor:'pointer' }}>Thêm</button>
      </label>
    </form>
  );
}