import { useNavigate } from "react-router";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full bg-gradient-to-br from-gray-900 to-black flex flex-col justify-center items-center gap-2">
      <h1 className="text-9xl text-white font-bold">404</h1>
      <p className="text-3xl text-white font-bold">Página não encontrada</p>
      <button
        className="text-2xl underline text-primary cursor-pointer"
        onClick={() => navigate("/")}
      >
        Voltar
      </button>
    </div>
  );
}
