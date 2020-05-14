/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const promo = document.querySelector('.promo__adv');
const genre = document.querySelector('.promo__genre');
const bgImage = document.querySelector('.promo__bg');
const listBlock = document.querySelector('.promo__interactive div');
const filmList = document.querySelector('.promo__interactive-list');
const filmItems = document.querySelectorAll('.promo__interactive-item');
const addingForm = document.querySelector('.add');
const inputFilm = addingForm.querySelector('.adding__input');
const checkbox = addingForm.querySelector('[type="checkbox"]');





promo.remove();
genre.textContent = 'Драма';
bgImage.style.backgroundImage = 'url(./img/bg.jpg)';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...", 
    ]
};


addingForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let newFilm = inputFilm.value;
    const favorite = checkbox.checked;

    if (favorite) {
        console.log('Добавляем любимый фильм');
    }
    
   if (newFilm) {
        if (newFilm.length > 21) {
            newFilm = `${newFilm.substring(0, 22)}...`;
        }

        movieDB.movies.push(newFilm);

        movieDB.movies.sort();

        createMovies();
    }

    inputFilm.value = '';
});


function createMovies() {
    movieDB.movies.sort();

    filmList.innerHTML = '';

    movieDB.movies.forEach((item, index) => {
        filmList.innerHTML += ` <li class="promo__interactive-item">${index + 1 + '. '} ${item}
        <div class="delete"></div>
        </li>`;
    });
    
    const deleteBtns = document.querySelectorAll('.delete');

    deleteBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            console.log('delete');
            btn.parentElement.remove();

            movieDB.movies.splice(index, 1);

            createMovies();
        });
    });
}

createMovies();