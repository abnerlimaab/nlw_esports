import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";

import { CreateAdBanner } from "./componentes/CreateAdBanner";
import GameBanner from "./componentes/GameBanner";

import logoImage from "./assets/logo-nlw.svg";

import CreateAddModal from "./componentes/CreateAddModal";
import "./styles/main.css";
interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [games, setGames] = useState<Game[]>([] as Game[]);

  useEffect(() => {
    fetch("http://localhost:3000/games")
      .then((response) => response.json())
      .then(setGames);
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImage} alt="Logo" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{" "}
        está aqui
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => (
          <GameBanner
            key={game.id}
            title={game.title}
            bannerUrl={game.bannerUrl}
            adsCount={game._count.ads}
          />
        ))}
      </div>

      <Dialog.Root>
        <CreateAdBanner />

        <CreateAddModal />
      </Dialog.Root>
    </div>
  );
}

export default App;
