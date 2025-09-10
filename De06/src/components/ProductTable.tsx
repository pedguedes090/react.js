import type { Product } from '../types';

interface Props {
  products: Product[];
  onToggle(id: string): void;
  onDelete(id: string): void;
}

export default function ProductTable({ products, onToggle, onDelete }: Props) {
  return (
    <div style={{ background: 'white', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
      <div style={{ padding: 16, borderBottom: '1px solid #edf2f7', display: 'flex', alignItems: 'center', justifyContent:'center', gap: 8 }}>
        <h3> Danh sách hóa đơn </h3> 
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#f7fafc', textAlign: 'left', color: '#4a5568' }}>
            <th style={{ padding: '12px 16px' }}>Tên chủ hộ</th>
            <th style={{ padding: '12px 16px' }}>Số tiền</th>
            <th style={{ padding: '12px 16px' }}>Trạng thái</th>
            <th style={{ padding: '12px 16px' }}>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id} style={{ borderTop: '1px solid #f1f5f9' }}>
              <td style={{ padding: '12px 16px', color: '#2563eb' }}>{p.name}</td>
              <td style={{ padding: '12px 16px' }}>
                {p.price.toLocaleString('vi-VN')} đ
              </td>
              <td style={{ padding: '12px 16px' }}>
                <span style={{ background: p.status === 'in_stock' ? '#dcfce7' : '#fee2e2', color: p.status === 'in_stock' ? '#16a34a' : '#f0b100', padding: '4px 8px', borderRadius: 999, fontSize: 12 }}>
                  {p.status === 'in_stock' ? 'Đã thanh toán' : 'Chưa thanh toán'}
                </span>
              </td>
              <td style={{ padding: '12px 16px', display: 'flex', gap: 8 }}>
                <button onClick={() => onToggle(p.id)} style={{ background: 'white', border: '1px solid #2563eb', color: '#2563eb', padding: '6px 10px', borderRadius: 8, cursor:'pointer' }}>Sửa</button>
                <button onClick={() => onDelete(p.id)} style={{ background: 'white', border: '1px solid #ef4444', color: '#ef4444', padding: '6px 10px', borderRadius: 8, cursor:'pointer' }}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}