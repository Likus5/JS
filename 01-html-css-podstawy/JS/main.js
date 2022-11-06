// Alert to jest komenda ktora uruchamia okno dialogowe z tekstem zawartym w nawiasach
// alert('Hello Damian');

// Wyswietlanie rzeczy w konsoli
console.log('Hello Władysław');

// Javascript dziala do 1 bledu
// saoijjdosajodiasojdidsa

console.log('Hello Damian');

// 1. Okna dialogowe

// alert('Hello')

// const to jest przypisane to zmiennej

// const nazwaZmiennej = wartosc

// konwencja nazywania zmiennych: camelCase
// do klas CSS uzywamy konwencji kebab-case

// camelCase: mojeImieToDaamian
// kebab-case: moje-imie-to-damian

// const myName = prompt('Jak masz na imie?');

// console.log(myName);

// Tworzenie zdań ze zmiennych

// 1. sposob - za pomoca znaka +
// console.log('Hello ' + myName);

// 2. za pomoca tzw template string (ES6)
// console.log(`Hello ${myName}`);

// Warunki

// Jednym z typow zmiennych w JS jest tzw boolean (prawda/falsz)

// Znaki: >, >=, <, <=, ==, ===

// console.log(10 > 10); // false
// console.log(10 == 10); // true
// console.log('Damian' == 'Pawel'); // false
// console.log('Damian' == 'Damian'); //true

// Instrukcje warunkowe

// const age = prompt('Ile masz lat?'); 
// const number1 = prompt('Napisz 1 liczbe od 1 do 10?');
// const number2 = prompt('Napisz 2 liczbe od 1 do 10?');


// if(number1 > number2) {
//     console.log(`Liczba pierwsza ${number1} jest wieksza od drugiej ${number2}`)
// } else if(number1 < number2) {
//     console.log(`Liczba pierwsza ${number1} jest mniejsza od drugiej ${number2}`);
// } else {
//     console.log(`Liczba perwsza ${number1} jest równa drugiej ${number2}`)};


// if(age >= 18) {
//   console.log('Mozesz wejsc');
// } else {
//   console.log('Jestes za mlody');
// }

// Rozszerzone instrukcje warunkowe

// else if dziala tak, ze jesli nie wejdzie do pierwszego warunku, to szuka czy moze spelnic drugi warunek
// if(age >= 25) {
//   console.log('Mozesz wejsc do sali VIP')
// } else if (age >= 18) {
//   console.log('Mozesz wejsc');
// } else {
//   console.log('Jestes za mlody');
// }

// 1. Napisz program, ktory pobiera dwie liczby (uzyj dwa razy funkcji prompt). Nastepnie napisz w konsoli, ktora liczba jest wieksza (jesli pierwsza liczba jest wieksza, napisz "Liczba pierwsza X jest wieksza od drugiej Y"). W przeciwnym wypadku, napisz inna wiadomosc :)

// 2*. Napisz program, ktory imituje gre papier, kamien, nozyce. Popros najpierw o wybor pierwszego uzytkownika, potem popros o wybor drugiego uzytkownika, a nastepnie napisz program, ktory decyduje kto wygral.

// console.log('Hello World');
// const choice1 = prompt('Kamien, Nozyce czy Papier?');
// const choice2 = prompt('Kamien, Nozyce czy Papier?');

console

// if(choice1 === 'Kamien' && choice2 === 'Nozyce' || choice1 === 'Nozyce' && choice2 === 'Papier' || choice1 === 'Papier' && choice2 ==='Kamien' ) {
//     console.log('Wygral gracz1')
// } 
// if(choice1 === 'Nozyce' && choice2 === 'Kamien' || choice1 === 'Papier' && choice2 === 'Nozyce' || choice1 === 'Kamien' && choice2 === 'Papier') {
//     console.log('Wygral gracz2')
// } 
// if(choice1 === choice2) {
//     console.log('remis')
// }

// Zajęcia 06.11

// 1. Zmienne

// Zmienna zawsze trzyma wartosc

// 2 sposoby zapisu zmiennych
const name = 'Damian';
let surname = 'Rogulski'

// Roznica pomiedzy const i let jest taka, ze const nie mozna nadpisac, a let mozna.

// UWAGA: const nie mozna nadpisac
// name = 'Paweł';

// const bedziemy uzywac w 80-90% przypadkow

// Do nadpisywania nie powtarzamy slowa let
// surname = 'Włodarczyk';

// console.log(name, surname)



// Rodzaje zmiennych

// Stringi
const string = 'Damian';

// Number

// const number = 10; // Int - liczby calkowite
const number = 10.30; // Float - liczby zmiennoprzecinkowe

// operatory
// +, -, *, /, %
// modulo (%) to jest reszta z dzielenia
// 10 % 7 = 3

// const myResult = 10 * 7;

// Uwaga: przy odejmowania floatow mozemy napotkac sie na problem z dziwnym wynikiem, wynika to z architektury JS przyjetej lata temu.
// console.log(0.3 - 0.2);

// console.log(myResult);



// Konwersja typow zmiennych

const result2 = 25
// const result3 = "30";

// Funkcja wbudowana parseInt/parseFloat powoduje zmiane stringa na number
// const result3 = parseInt("30");
const result3 = parseFloat("30.25");

// JS dziala tak ze string + number = string

console.log(result2 + result3);

// zamiana number na string

const result4 = 25;
console.log(String(result4));

// Typ boolean (prawda, falsz)
// dobra praktyka: zmienne boolean powinny posiadac przedrostek is/has/should/was

// const isAdult = true;
// const isDog = false;

// Operatory porownywania
// Glownie porownuje sie ze soba stringi, natomiast sprawdzanie czy cos jest wieksze/mniejsze jest przypisane do numberow

// >, >=, ==, ===, <, <=

const age = 15;

const isAdult = age >= 18;

// Operatory logiczne
// && operator i
// || operator lub

const agePerson1 = 20;
const agePerson2 = 15;

// w operatorze && wszystie warunki musza byc spelnione
const canTheyGoIntoClub =
  agePerson1 >= 18 && agePerson2 >= 18;

// w operatorze || tylko jeden warunek musi byc spelniony

const canTheyBuyAlkohol =
  agePerson1 >= 18 || agePerson2 >= 18;

console.log('Czy moga wejsc do klubu', canTheyGoIntoClub)
console.log('Czy moga kupic alko', canTheyBuyAlkohol)

// instrukcje warunkowe

// if
const name3 = 'Paweł';

// Jesli warunek nie jest spelniony, to kod wewnatrz if sie nie wykona.

// == sprawdza tylko wartosc '12' == 12 -> true
// === sprawdza wartosc i typ '12' === 12 -> false

if(name3 === 'Damian') {
  console.log('Czesc! Witaj na imprezie');
}

// if/else
// const age5 = 15;

// if(age5 >= 18) {
//   console.log('Witaj na imprezie!')
// } else {
//   console.log('Jesteś za młody');
// }


// if/elseif/else

const age6 = 20;

// if(age6 >= 30) {
//   console.log('Mozesz zamowic cygaro')
// } else if(age6 > 18) {
//   console.log('Mozesz wejsc na sale');
// } else {
//   console.log('Jestes za mlody');
// }

// switch

const name7 = 'Paweł';
// przy instrukcji switch, musimy pamietac o slowie break w kazdym case
switch(name7) {
  case 'Damian': { //sprawdzenie czy name7 === 'Damian'
    console.log('Cześć Damian!')
    break;
  }
  case 'Paweł': { //sprawdzenie czy name7 === 'Paweł'
    console.log('Cześć Paweł!')
    break;
  }
  default: { //Zadna z powyzszych
    console.log('Nie jestes zaproszony na impreze');
  }
}

// 1. Pobierz od uzytkownika 2 liczby a nastepnie wyswietl w konsoli wynik dodawania

// const number1 = prompt('Wybierz pierwsza liczbe');
// const number2 = prompt('Wybierz druga liczbe');

// console.log(parseInt(number1) + parseInt(number2));

// 2. Pobierz od uzytkownika jego wiek, a nastepnie napisz warunek, w ktorym jesli ma powyzej 18 lat, to moze kupic alkohol w sklepie. W przeciwnym wypadku napisz ze nie moze kupic alkoholu.

// const agePerson = prompt('Podaj swoj wiek');
// if(agePerson >= 18) {
//     console.log('Mozesz kupic alkohol')
// } else {
//     console.log('Nie mozesz kupic alkoholu')
// }
// 3. Napisz program, ktory pobierze od uzytkownika wartosc 1, 2 lub 3. Jesli uzytkownik wpisze 1, to napisz mu komunikat 'Wygrales'. Jesli wpisze komunikat 2, wyswietl 'Wygrales nagrode pocieszenia. Jesli wpisal 3, wyswietl "Przegrales". Uzyj instrukcji switch

// const number3 = prompt('Wpisz 1, 2 lub 3');
// switch (number3) {
//     case '1': { 
//         console.log('Wygrales!')
//         break;
//       }
//       case '2': { 
//         console.log('Wygrales nagrode pocieszenia')
//         break;
//       }
//       default: { 
//         console.log('Przegrales');
//       }
//     } 

// 4*. Przeksztalsc zadanie pierwsze tak, zeby uzytkownik oprocz 2 liczb, podal jeszcze operacje jaka ma zostac wykonana (+, -, *, /), a nastepnie dokonaj operacji

// const number6 = prompt('Wybierz pierwsza liczbe');
// const number7 = prompt('Wybierz druga liczbe');
// const operation = prompt('+, -, *, /')

// if(operation === '+') {
//     console.log(parseInt(number6) + parseInt(number7))
// } else if(operation === '-') {
//     console.log(parseInt(number6) - parseInt(number7))
// } else if(operation === '*') {
//     console.log(parseInt(number6) * parseInt(number7))
// }  else if(operation === '/') { 
//     console.log(console.log(parseInt(number6) / parseInt(number7)))
// }


// Typy zlozone i specjalne

// typ specjalny undefined oznacza, ze nie istnieje taka zmienna, ktorej szukamy lub nie zostala przypisana;

let sum;
console.log(sum); //undefined

// typ specjalny null oznacza, ze zmienna istnieje, ale jest pusta

// null jest uzywany w komunikacji FE i BE i oznacza ze nie ma danej rzeczy
// null jest tez uzywany przy interakcji HTML <-> CSS i oznacza ze nie ma takiego elementu HTML

let element = null;
console.log(element);

// Typy specjalne dzialaja jak warunek logiczny false

// null dziala jak false
if(null) {
  console.log('Czy dzialam?')
}
// undefined dziala jak false
if(undefined) {
  console.log('czy dzialam?')
}


// Typy zlozone

// typy zlozone to takie typy, ktore moga trzymac wiecej niz 1 wartosc

// Array (tablica)

const array = [1, 2, 3, 5, 10, 15, 20, 'Damian', true, ['Paweł'], 100];
console.log(array);

// TABLICE NUMERUJEMY OD 0 (TZW INDEKS)
console.log(array[0]) // pierwszy element - 1
console.log(array[5]); // szosty element - 15
console.log(array[7]); // osmy element - Damian
console.log(array[9][0]); // wyswietlenie imienia pawel

// Metoda length: Wywolanie ile elementow ma tablica
console.log(array.length) // tablica ma 11 elementow w srodku

// CHEATSHEET
// Zeby dostac sie do ost el tablicy, musimy wziac cala jej dlugosc i odjac 1, bo indeks tablicy liczy sie od 0
console.log(array[array.length - 1])

// Metoda push: Dodawanie elementow do tablicy
// dodawanie do tablicy, zawsze dodaje element na koncu

const array2 = ['Damian', 'Paweł'];
console.log(array2);
console.log(array2[2]); // Zwroci undefined, bo nie ma elementu o indeksie 2

array2.push('Michał');

console.log(array2);
console.log(array2[2]); // To juz zwroci poprawnie imie Michał, bo zostalo dodane

// Metoda pop: Usuwanie ostatniego elementu
array2.pop();
console.log(array2);
console.log(array2[2]); // Zwroci undefined


// Zadania

// 1. Stworz tablice numbers, ktora zawiera 3 rozne numery. Nastepnie za pomoca indeksow, oblicz sume elementow tablicy
// [10, 20, 30] -> 60

const array3 = [1, 3, 6];
console.log(array3[0] + array3[1] + array3[2]);


// 2. Do tablicy numbers, dodaj nastepny numer. Nastepnie za pomoca indeksow, oblicz sume elementow tablicy

array3.push(8);
console.log(array3[0] + array3[1] + array3[2] + array3[3]);

// 3. Policz sume pierwszego i ostatniego elementu tablicy

console.log(array3[0] + array3[array3.length - 1]);

// 4. Pobierz od uzytkownika liczbe, a nastepnie dodaj ja do tablicy numbers. Nastepnie wyswietl w konsoli wynik mnozenia wszystkich elementow tablicy.

const number8 = prompt('Podaj liczbe');
array3.push(parseInt(number8));
console.log(array3);
console.log(array3[0] * array3[1] * array3[2] * array3[3] * array3[4]);


// 4. Pobierz od uzytkownika liczbe, a nastepnie dodaj ja do tablicy numbers. Nastepnie wyswietl w konsoli wynik mnozenia wszystkich elementow tablicy.

// const userNumber = prompt("Podaj liczbe, ktora dodam do tablicy");
// const parsedUserNumber = parseInt(userNumber);

// Jesli nie ma elementu
// NaN = Not a Number
// 10 * undefined = ?? (NaN)

// numbers.push(parsedUserNumber)
// console.log(numbers[0] * numbers[1] * numbers[2] * numbers[3] * numbers[4]);

// const w przypadku typow zlozonych


// const myNumber2 = 5;
// myNumber2 = 10; // wyskoczy blad

// JavaScript nie sprawdza zawartosci typow zlozonych
const myArray3 = ['Damian']

// myArray3 = ['Paweł']; //wyskoczy blad

myArray3.push('Paweł');
console.log(myArray3)



// Object (obiekt)

const shoeNumber = 43;
const shoeBrand = 'Nike';
const shoeIsUsed = true;

// Obiekt sluzy do przechowywania wielu cech danej rzeczy
const shoe = {
  number: 43, // pole obiektu lub klucz obiektu
  brand: 'Nike',
  isUsed: true
}

// Odczytywanie z obiektu
console.log(shoe);

// Metoda 1 - Uzywane prawie zawsze
console.log(shoe.brand);
console.log(shoe.isUsed);

// Metoda 2
console.log(shoe['brand']);
console.log(shoe['isUsed']);
// Glownie w ten sposob uzywana jest ta metoda (b. rzadko)
const whatShouldBeDisplayed = 'brand';
console.log(shoe[whatShouldBeDisplayed]);

// Zapisywanie do obiektu

// Musze uzyc nieistniejacego klucza, inaczej mi go nadpisze
shoe.color = 'red';

console.log(shoe);

// Cwiczenie z obiektu

const student = {
  name: 'Damian',
  shoeNumber: 43,
  grades: [2, 4, 5, 6],
  attendExercices: true
}

// 1. Napisz instrukcje, ktora sprawdza czy damian uczeszcza na WF. Jesli tak to wypisz w konsoli wiadomosc "Jestes wysportowany".

if(student.attendExercices) {
  console.log('Jestes wysportowany!')
}

// 2. Napisz instrukcje warunkowa, ktora sprawdzi czy but Damiana jest duzy (czyli rozmiar jest wieksz niz 42).

if(student.shoeNumber >= 42) {
    console.log('Damian ma duzego buta')
}
// 3. Oblicz w konsoli srednia ocen Damiana (srednia to suma elementow / ilosc elementow). Powinno wyjsc 4.25

console.log((student.grades[0] + student.grades[1] + student.grades[2] + student.grades[3]) / student.grades.length);


// 4. Dopisz do obiektu, tablice o nazwie friends i dodaj tam kilka osob. Nastepnie za pomoca metody .length wyswietl w konsoli ilu przyjaciol ma Damian :)

student.friend = ['Maciej', 'Paweł', 'Fabian', 'Ignacy', 'Łukasz'];
console.log(student.friend.length);


// * Array of objects (tablica obiektów)

// * Nie jest to typ danych, ale jest najczestszym uzywanym sposobem na zapisywanie rzeczy w JS

// Petle

// Przechodzenie przez elementy recznie
console.log('1')
console.log('2')
console.log('3')
console.log('4')
console.log('5')
console.log('6')
console.log('7')
console.log('8')

// Petla oznacza ze jakas czynnosc wykonuje sie X razy.

// for (poczatkowa liczba; do ilu liczymy; w ktora strony liczymy;)
// i++ idziemy w gore (kazde wywowalnie to jest licznik + 1)
// i-- idziemy w dol (kazde wywolanie to licznik -1)

// Ta petla wywola sie 8 razy

// for(let i = 0; i < 8; i++) {
//   console.log('Cześć!');
// }

// Petle najczesciej wykonuje sie na tablicach

const names2 = ['Damian','Paweł', 'Michał'];

// Tablice maja swoje 2 petle, ktore mozemy stosowac :)

// Petla ktora przechodzi przez elementy tablicy

// slowo po let okresla nam pod jaka zmienna przetrzymujemy aktualny element w petli
for(let name of names2) {
  console.log(`Cześć ${name}`);
}

// Petle mozemy uzyc do np sumowania.

const grades2 = [5, 3, 2, 7];

let sum4 = 0;

for(let number of grades2) {
  console.log(number); // Najpierw 5, potem 3, potem 2, a potem 7
  sum4 = sum4 + number; // Wzor na liczenie sumy
}

console.log(sum4);


const peopleHeights = [170, 185, 165];

// Za pomoca petli oblicz srednia wzrostu dla peopleHeights

let sum5 = 0;

for(let height of peopleHeights) {
  sum5 = sum5 + height;
  // sum += height // to jest skrot, ktory dopisuje wartosc do poprzedniej wartosci zmiennej
}

console.log(`Srednia wzrostu to ${sum5 / peopleHeights.length}`);



// 1. Za pomoca petli for (nie forof) wyswietl 10 razy swoje imie w konsoli

for(let i = 0; i < 10; i++) {
    console.log('Władysław');
}

// 2. Stworz tablice zawierajaca imiona swoich znajomych. Nastepnie za pomoca petli forof, przywitaj sie z nimi uzywajac konstrukcji czesc + imie

const myFriends = ['Łukasz', 'Michał', 'Robert', 'Krzysztof'];
for(let friend of myFriends) {
    console.log(`Cześć ${friend}`)
}

// 3. Stworz tablice zawierająca ceny 5 dowolnych produktów. Następnie za pomocą petli forof oblicz sumę produktów

const productPrice = [ 2.99, 5.99, 3.99, 12.99, 8.99];
let sumPrice = 0;

for(let price of productPrice) {
    sumPrice = sumPrice + price;
}
console.log(sumPrice);

// 4. Pograj w gre od google https://g.co/kgs/gp3sQQ

// 5*. Zmodyfikuj zadanie 3 w taki sposób, zeby obliczyc ceny produktow, ktorych cena jest powyzej 5zl.

let sumAbove5 = 0;
for(let price of productPrice) {
    if(price >= 5) {
    sumAbove5 += price;
}}
console.log(sumAbove5);








