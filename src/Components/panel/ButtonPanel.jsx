import React from 'react'
import MyButton from '../button/MyButton'

const ButtonPanel = () => {

    const items = [
        { key: 1, title: 'Чай', price: 30 },
        { key: 2, title: 'Мокачино', price: 30 },
        { key: 3, title: 'Венский кофе', price: 30 },
        { key: 4, title: 'Сливочный капучино', price: 30 },
        { key: 5, title: 'Американо', price: 30 },
        { key: 6, title: 'Молочный шоколад', price: 30 },
        { key: 7, title: 'Двойной крепкий кофе', price: 30 },
        { key: 8, title: 'Латте', price: 30 },
        { key: 9, title: 'Кофе со сливками', price: 30 },
        { key: 10, title: 'Горячий шоколад', price: 30 },
        { key: 11, title: 'капучино', price: 30 },
        { key: 12, title: 'Двойной шоколад', price: 30 },
        { key: 13, title: 'Капучино ваниль', price: 30 },
        { key: 14, title: 'Мокиято', price: 30 },
    ]

    const listItems = items.map((item) =>

        <div key={item.key}>
            <MyButton>{item.price}</MyButton>
            <p>{item.title}</p>
        </div>

    )

    return (
        <div>
            {listItems}
        </div>
    )
}

export default ButtonPanel