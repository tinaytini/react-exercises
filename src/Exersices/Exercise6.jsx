// Задание 6 ------------------------

import { useState } from "react";

/*
Реализовать фильтр постов по тэгам.
Если выбрать нужный тэг, должны отобразиться,
посты с выбранным тэгом.
Если выбрать два тэга, тогда
надо выводить посты с первым тегом, и посты 
со вторым тэгом. И т.д.
Примечание:
Надо проверять в списке тэгов наличие
выбранного тэга, то есть один пост с несколькими
тэгами может появиться при выборе первого
или второго.
Например: Пост "Новые возможности в ES2020" появляется
и среди 'js', и среди 'code'.
*/
const posts = [
    { title: "Новые возможности в ES2020", tags: ["js", "code"] },
    { title: "Основы программирования", tags: ["code"] },
    { title: "Что нового в обновлении Реакта", tags: ["react", "js"] },
    {
        title: "Как заставить себя кодить по 8 часов в день",
        tags: ["code", "self-development"]
    },
    {
        title: "Заправляем кровать, прежде чем  изменить мир",
        tags: ["self-development"]
    },
    { title: "Хуки в Реакт", tags: ["js", "react"] },
    {
        title: 'Как получается, что "однажды" бывает дважды?',
        tags: ["self-development"]
    }
];


function Exercise6() {
    const [toDo, setToDo] = useState(new Set(''))

    const handleFilter = (value) => {
        if (toDo.has(value)) {
            toDo.delete(value)
        } else {
            toDo.add(value)
        }
        setToDo(new Set(toDo))
    }

    return (
        <div className="exercise">
            <h1 className="exercise__title">Задание 6</h1>
            <label>
                <input 
                    type="checkbox" 
                    checked={toDo.has('js')}
                    onChange={() => handleFilter('js')}
                />
                JS
            </label>
            <label>
                <input 
                    type="checkbox" 
                    checked={toDo.has('coding')}
                    onChange={() => handleFilter('coding')}
                />
                Кодинг
            </label>
            <label>
                <input 
                    type="checkbox" 
                    checked={toDo.has('react')}
                    onChange={() => handleFilter('react')}
                />
                Реакт
            </label>
            <label>
                <input 
                    type="checkbox" 
                    checked={toDo.has('self-development')}
                    onChange={() => {handleFilter('self-development')}}
                />
                Саморазвитие
            </label>
            <Posts list={posts
                .filter(post => post.tags.some(tag => (toDo.has(tag))))} />
        </div>
    );
}

function Posts({ list }) {
    return (
        <ul>
            {list.map(post => (
                <li key={post.title}>{post.title}</li>
            ))}
        </ul>
    );
}

export default Exercise6;