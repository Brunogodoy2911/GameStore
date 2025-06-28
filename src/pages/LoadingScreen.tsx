import { Oval } from "react-loader-spinner";

export function LoadingScreen() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-2">
        <Oval
          visible={true}
          height="80"
          width="80"
          color="#121212"
          secondaryColor="#a0a0a0"
          ariaLabel="oval-loading"
        />

        <h1 className="font-bold mt-4 text-2xl">Carregando Jogos</h1>

        <p className="text-lg">Preparando a melhor experiência para você...</p>
      </div>
    </div>
  );
}
