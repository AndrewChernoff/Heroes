

// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

import { useState } from "react";
import nextId from "react-id-generator";
import { useHttp } from "../../hooks/http.hook";
import { useDispatch } from 'react-redux';
import { addHeroAC } from "../../actions";

const HeroesAddForm = () => {

    const dispatch = useDispatch();
    const {request} = useHttp();
    const  generatedId = nextId();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [element, setElement] = useState('Я владею элементом...');

    const postItem = (e) => {
     e.preventDefault();     
     let obj = {
            id: generatedId,
            name: name,
            description: description,
            element: element
          } 
          request("http://localhost:3001/heroes", "POST", JSON.stringify(obj))
          .then(res => console.log(res))
          .then(() => dispatch(addHeroAC(obj)))
     
        setName('');
        setDescription('');
        setElement('Я владею элементом...');
    }

    return (
        <form className="border p-4 shadow-lg rounded">
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input 
                    required
                    type="text" 
                    name="name" 
                    className="form-control" 
                    id="name" 
                    value={name}
                    onChange={(e) => setName(e.currentTarget.value)}
                    placeholder="Как меня зовут?"/>
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    required
                    name="text" 
                    className="form-control" 
                    id="text"
                    value={description}
                    onChange={(e) => setDescription(e.currentTarget.value)} 
                    placeholder="Что я умею?"
                    style={{"height": '130px'}}/>
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select
                onChange={(e) => setElement((e.currentTarget.value))}
                value={element}
                    required
                    className="form-select" 
                    id="element" 
                    name="element">
                    <option >Я владею элементом...</option>
                    <option value="fire">Огонь</option>
                    <option value="water">Вода</option>
                    <option value="wind">Ветер</option>
                    <option value="earth">Земля</option>
                </select>
            </div>

            <button type="submit" disabled={!name || !description || element === 'Я владею элементом...'?
             true : false} onClick={postItem} className="btn btn-primary">Создать</button>
        </form>
    )
}

export default HeroesAddForm;