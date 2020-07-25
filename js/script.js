"use strict";

let nubmerOfFilms;

function start() {
    nubmerOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

    while (nubmerOfFilms == '' || nubmerOfFilms == null || isNaN(nubmerOfFilms)) {
        nubmerOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();


const personalMovieDB = {
    count: nubmerOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;

        }

    }
}

    rememberMyFilms();




    function detectPersonalLevel() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Ошибка');
        }
    }
    detectPersonalLevel();

    function writeYourGenres() {
        for (let i = 0; i < 3; i++) {
            const c = prompt(`Ваш любимый жанр под номером ${i + 1}`);
            personalMovieDB.genres.push(c);
        }
    }
    writeYourGenres();

    function showMyDB() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    }
    showMyDB();

