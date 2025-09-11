import { useParams } from "react-router-dom";

export default function Team() {
  const { teamId } = useParams();

  return (
    <div>
      <h2 className="text-xl">Chi tiết Team</h2>
      <p>Bạn đang xem thông tin của Team có ID: {teamId}</p>
    </div>
  );
}