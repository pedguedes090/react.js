import { useDispatch, useSelector } from "react-redux";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import type { RootState } from "../../store/store";
import { toggleFavorite } from "./accSlide";

export default function Acc() {
  const accounts = useSelector((state: RootState) => state.accounts.accounts);
  const dispatch = useDispatch();

  return (
    <div style={{ border: "1px solid #e5e7eb", padding: 12, borderRadius: 4 }}>
      <h3 style={{ marginTop: 0 }}>List Favorites User</h3>
      {accounts.map((acc) => (
        <div key={acc.id} style={{ padding: "10px 0", borderTop: "1px solid #f0f0f0" }}>
          <div style={{ marginBottom: 6 }}>UserName: {acc.userName}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span>Favorites:</span>
            <span
              onClick={() => dispatch(toggleFavorite(acc.id))}
              style={{ cursor: "pointer", color: acc.isFavorite ? "#ef4444" : "#666" }}
              aria-label={acc.isFavorite ? "unfavorite" : "favorite"}
            >
              {acc.isFavorite ? <HeartFilled /> : <HeartOutlined />}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}


