import { Outlet, useNavigate } from "react-router-dom";

export default function Teams() {
  const teamList = [
    { id: 1, name: "Frontend Team" },
    { id: 2, name: "Backend Team" },
    { id: 3, name: "UI/UX Team" },
  ];

  const navigate = useNavigate();
  const handleSubmit = (id: number) => {
    navigate(`/teams/${id}`);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl mb-4">Teams</h1>
      <ul className="list-disc pl-5">
        {teamList.map((team) => (
          <li key={team.id}>
            <button
              onClick={() => handleSubmit(team.id)}
              className="text-blue-600 hover:underline"
            >
              {team.name}
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-6 border-t pt-4">
        <Outlet />
      </div>
    </div>
  );
}