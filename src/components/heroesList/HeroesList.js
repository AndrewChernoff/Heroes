import { useHttp } from "../../hooks/http.hook";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./HeroesList.scss";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import {
  heroesFetching,
  heroesFetched,
  heroesFetchingError,
} from "../../actions";
import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from "../spinner/Spinner";
import { deleteHeroAC } from "../../reducers";
import { useCallback } from "react";

const HeroesList = () => {
  //const { filteredHeroes } = useSelector((state) => state.heroes); 
 const filteredHeroes = useSelector((state) => {
  if (state.filter.filter === 'all') {
    return state.heroes.filteredHeroes
  } else {
    return state.heroes.filteredHeroes.filter(el => el.element === state.filter.filter) 
  }
 }
    ); 
  const heroesLoadingStatus = useSelector((state) => state.heroes.heroesLoadingStatus);
  const dispatch = useDispatch();
  const { request } = useHttp();

  useEffect(() => {
    dispatch(heroesFetching());
    request("http://localhost:3001/heroes")
      .then((data) => dispatch(heroesFetched(data)))
      .catch(() => dispatch(heroesFetchingError()));

    // eslint-disable-next-line
  }, []);

  const deleteItem = useCallback((id) => {
    request("http://localhost:3001/heroes/" + id, "DELETE").then(() =>
      dispatch(deleteHeroAC(id))
    );
  }, []);

  if (heroesLoadingStatus === "loading") {
    return <Spinner />;
  } else if (heroesLoadingStatus === "error") {
    return <h5 className="text-center mt-5">Ошибка загрузки</h5>;
  }

  const renderHeroesList = (arr) => {
    if (arr.length === 0) {
      return <h5 className="text-center mt-5">Героев пока нет</h5>;
    }

    return (
      <TransitionGroup>
        {arr.map(({ id, ...props }) => {
          return (
            <CSSTransition key={id} timeout={500} classNames="item">
              <HeroesListItem
                key={id}
                onItemClick={() => deleteItem(id)}
                {...props}
              />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    );
  };

  const elements = renderHeroesList(filteredHeroes);
  return <ul>{elements}</ul>;
};

export default HeroesList;
