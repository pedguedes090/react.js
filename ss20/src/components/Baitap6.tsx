import { useState, useRef, useEffect } from "react";

function Baitap6() {
  const [check, setCheck] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (check && inputRef.current) {
      inputRef.current.focus();
    }
  }, [check]);

  return (
    <div style={{ position: "relative", minHeight: "200px" }}>
      {check && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.3)",
            zIndex: 1,
          }}
        ></div>
      )}

      <div
        style={{
          padding: "20px",
          zIndex: 0,
          position: "relative",
        }}
      >
        <h2>Ung dung React voi Modal va Focus Input</h2>
        <button
          onClick={() => {
            setCheck(true);
          }}
        >
          Mo Modal
        </button>
      </div>

      {check && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
            zIndex: 2,
          }}
        >
          <h2>Dang nhap</h2>
          <input
            ref={inputRef}
            type="text"
            placeholder="Nhap ten nguoi dung"
            style={{ marginBottom: "10px", padding: "5px", width: "100%" }}
          />
          <button
            onClick={() => {
              setCheck(false);
            }}
          >
            Dong
          </button>
        </div>
      )}
    </div>
  );
}

export default Baitap6
