// Задание 5 ------------------------
/*
Достать значения с инпута компонента Search,
и выводить только те названия книг, которые содержат
введенный порядок символов.
Например: пр -> Преступление и наказание, 12 правил жизни
Подсказка: воспользуйтесь методами includes и filter
Примечания:
1. Поиск должен быть живой, то есть результат
должен сразу меняться во время ввода
2. Поиск не должен учитывать регистр букв.
*/

import { useState } from "react";

const books = [
    "12 правил жизни",
    "Символы человека",
    "Преступление и наказание",
    "Падение",
    "Эгоистичный ген"
];

function Exercise5() {
    const [value, setValue] = useState('');
    function setSearchValue(e) {
        setValue(e.target.value)
    }

    return (
        <div className="exercise">
            <h1 className="exercise__title">Задание 5</h1>
            <Search onChange={setSearchValue} />
            <ul>
                {books
                    .filter(book => (book.includes(value)))
                    .map(book => (
                        <li key={book}>{book}</li>
                ))}
            </ul>
        </div>
    );
}

function Search({ onChange }) {
    return <input type="text" onChange={onChange}/>;
}

export default Exercise5;