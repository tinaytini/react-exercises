// Задание 2 ------------------------

import { useState } from "react";

function Exercise2() {
    return (
        <div className="exercise">
            <h1 className="exercise__title">Задание 2</h1>
            <Pagination from={1} to={5} />
        </div>
    );
}
/*
Создать кнопки страниц от указанного числа
в пропсе from до пропса to.
При клике на одну из кнопок, надо сменить номер страницы
в теге p  на соответствующее число.
*/
function Pagination({ from, to }) {
    const [page, setPage] = useState(1)

    let arrNum = []
    for (let i = from; i <= to; i++) {
        arrNum.push(i)
    }


    const handleClick = (num) => {
        setPage(num)
    }
    return (
        <div>
            <p>Страница: {page}</p>
            {arrNum.map(num => (
                <button onClick={() => handleClick(num)}>{num}</button>
            ))}
        </div>
    );
}

export default Exercise2;

