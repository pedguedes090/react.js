interface Props {
  total: number;
  pageSize: number;
  currentPage: number;
  onChange(page: number): void;
}

export default function Pagination({ total, pageSize, currentPage, onChange }: Props) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center', justifyContent: 'center', padding: 12 }}>
      {pages.map((p) => (
        <button key={p} onClick={() => onChange(p)} style={{ border: '1px solid #e5e7eb', background: currentPage === p ? '#2563eb' : 'white', color: currentPage === p ? 'white' : '#111827', padding: '6px 10px', borderRadius: 6 }}>
          {p}
        </button>
      ))}
    </div>
  );
}