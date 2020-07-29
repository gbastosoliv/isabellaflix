import React from "react";
import Menu from "./components/Menu";
import Carousel from "./components/Carousel";
import dadosInicial from "./data/dados_iniciais.json";
import BannerMain from "./components/BannerMain";

function App() {
  return (
    <div className="App">
      <Menu />
      <BannerMain
        videoTitle={dadosInicial.categorias[0].videos[0].titulo}
        videoDescription="O meliante tava de boa e tomo a rajada flamenjando to tiozão-san!"
        url={dadosInicial.categorias[0].videos[0].url}
      />
      <Carousel ignoreFirstVideo category={dadosInicial.categorias[0]} />
      <Carousel category={dadosInicial.categorias[1]} />
      <Carousel category={dadosInicial.categorias[2]} />
      <Carousel category={dadosInicial.categorias[3]} />
      <Carousel category={dadosInicial.categorias[4]} />
      <Carousel category={dadosInicial.categorias[5]} />
    </div>
  );
}

export default App;
