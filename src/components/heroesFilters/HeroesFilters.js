import { useDispatch } from 'react-redux';
import { filterHeroes } from '../../reducers/filterReducer';

const HeroesFilters = () => {

   const dispatch = useDispatch();

  const buttons = [
    { name: "Все", dataElement: "all", class: "btn btn-outline-dark active" },
    { name: "Огонь", dataElement: "fire", class: "btn btn-danger" },
    { name: "Вода", dataElement: "water", class: "btn btn-primary" },
    { name: "Ветер", dataElement: "wind", class: "btn btn-success" },
    { name: "Земля", dataElement: "earth", class: "btn btn-secondary" },
  ];

  return (
    <div className="card shadow-lg mt-4">
      <div className="card-body">
        <p className="card-text">Отфильтруйте героев по элементам</p>
        <div className="btn-group">
          {buttons.map((el) => {
            return (
              <button
                key={el.dataElement}
                data-element={el.dataElement}
                className={el.class}
                onClick={()=> dispatch(filterHeroes(el.dataElement))}
              >
                {el.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroesFilters;
