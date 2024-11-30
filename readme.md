## Описание проекта



## Главная страница
<img width="1460" alt="image" src="https://github.com/user-attachments/assets/4d1cbf7a-1a9d-41f9-a2e7-1107e111f986">


## Страница продуктов "Профнастил"
<img width="1457" alt="image" src="https://github.com/user-attachments/assets/98bb18ac-0d0c-42b1-9a2e-b96d1a5d7468">


## Пустая корзина

Если товары в корзине отсутствуют, будет отображаться текущая страница
![alt text](preview/CartEmpty.png "Фото пустой корзины")


## Корзина товаров

Страница будет отображаться, если у пользователя есть хотя бы один товар в корзине. Пользователь может оформить заказ как юридическое/физическое лицо. Каждая форма имеет валидацию полей, и после успешно заполненных данных заказ будет добавлен в БД
![alt text](preview/CartCompanyOrder.png "Фото пустой корзины")
![alt text](preview/CartPersonOrder.png "Фото пустой корзины")
## Всплывающие подсказки

В текущем проекте присутствует интеграция с сервисом dadata, который помогает пользователю быстрее получить доступ к данным. В полях "ФИО" и "Компания" при вводе начинают появлятся подсказки.

![alt text](preview/DadataCompany.png)
![alt text](preview/DadataFIO.png)

## Используемые технологии при разработки
- Next.JS 13(frontend SSR).
- Laravel 8,6(Backend PHP).
- Sass
- Laravel Horizon(Queue dasbboard laravel)
- Postgres 15(СУБД)
- Redis(Для обработки очередей)
