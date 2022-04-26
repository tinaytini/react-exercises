import { useState } from "react";

// Задание 4 ------------------------
function Exercise4() {
    return (
        <div className="exercise">
            <h1 className="exercise__title">Задание 4</h1>
            <TextValidate  validate={(value) => value.length > 5}/>
        </div>
    );
}

/*
Сделать валидацию формы ввода.
border тега input должен стать
зеленым, если переданная валидация истинна,
иначе должен стать красным.
Валидация должна проверяться при каждом вводе
*/

function TextValidate({validate}) {
    const [value, setValue] = useState('');
    const isValid = validate(value);
    console.log(isValid)

    return (
        <div>
            <input type="text" 
            style={{border: `5px solid ${isValid ? 'green' : 'red'}`}} 
            onChange={(e) => {setValue(e.target.value)}}/>
        </div>
    );
}

export default Exercise4;