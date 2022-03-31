import { useCallback, useEffect, useState } from 'react';
import Head from './components/molecules/Head';
import ButtonNav from './components/organisms/ButtonNav';
import Header from './components/organisms/Header';
import Pokemon from './components/Pokemon';

import './styles/app.css';

function App() {
  const [listPokemons, setlistPokemons] = useState([]);
  const [urlPrevios, seturlPrevios] = useState([]);
  const [urlNext, seturlNext] = useState([]);

  const getPokemons = useCallback(
    async (apiPokemon = 'https://pokeapi.co/api/v2/pokemon/') => {
      const getImages = (results) => {
        return results.map((item) => {
          const name = item.name;
          const numberImg = Number(item.url.split('/')[6]);
          const urlImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numberImg}.png`;
          return { name, urlImage, pokedex: numberImg };
        });
      };
      const data = await fetch(apiPokemon);
      const { results, next, previous } = await data.json();
      const newResults = getImages(results);
      setlistPokemons(newResults);
      seturlNext(next);
      seturlPrevios(previous);
    },
    []
  );

  const onClickNext = () => {
    if (urlNext === null) return;
    getPokemons(urlNext);
  };
  const onClickPrevius = () => {
    if (urlPrevios === null) return;
    getPokemons(urlPrevios);
  };
  useEffect(() => {
    console.log('use efect ( [])');
    getPokemons();
  }, [getPokemons]);
  return (
    <div className="App">
      <Head />
      <Header />
      <br></br>
      <div className="container">
        <ButtonNav
          onClickNext={onClickNext}
          onClickPrevius={onClickPrevius}
        ></ButtonNav>
        <div className="mycontainer">
          {listPokemons.map((item) => (
            <Pokemon
              name={item.name}
              numberPokedex={item.pokedex}
              img={item.urlImage}
              key={Math.random()}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
