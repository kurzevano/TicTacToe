// Реализация enum в JavaScript
export default function Enum(obj) {
    // итоговый объект
    const newObj = {};

    // проходимся по каждому свойству переданного в функцию объекта
    for (const prop in obj) {
        // проверяем наличие собственного свойства у объекта
        if (Object.prototype.hasOwnProperty.call(obj, prop))
        //if (obj.hasOwnProperty(prop)) 
        {

            // помещаем в новый объект специальный примитивный тип JavaScript Symbol
            newObj[prop] = Symbol(obj[prop]);
        }
    }

    // делаем объект неизменяемым (свойства объекта нельзя будет изменить динамически)
    return Object.freeze(newObj);
}