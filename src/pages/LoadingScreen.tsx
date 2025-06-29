export function LoadingScreen() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-purple-400 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
          <div
            className="absolute inset-0 w-20 h-20 border-4 border-blue-400 border-b-transparent rounded-full animate-spin mx-auto"
            style={{ animationDirection: "reverse", animationDuration: "1s" }}
          ></div>
        </div>

        <h1 className="font-bold mt-4 text-2xl text-primary">
          Carregando Jogos
        </h1>
        <p className="text-lg text-primary/90">
          Preparando a melhor experiência para você...
        </p>
      </div>
    </div>
  );
}
