/*
1.	Stwórz funkcję, która przyjmuje dwa parametry
2.	nazwij ją getTriangleArea - function getTriangleArea(a, h) {}.
3.	Za pomocą instrukcji warunkowej sprawdź, czy przekazane parametry a oraz h mają wartość większą od zera.
4.	Jeśli któryś z parametrów nie spełni tego warunku (będzie mniejszy bądź równy zero), zwróć wartość 'Nieprawidłowe dane'.
5.	Jeśli oba parametry są dodatnie, to poniżej instrukcji warunkowej dodaj polecenie return, aby funkcja zwracała wynik działania a*h/2.
6.	Poniżej deklaracji funkcji wywołaj następujące polecanie: console.log( getTriangleArea(10,6) ).

7.	Jeśli wszystko zrobiłeś prawidłowo, w konsoli powinien pojawić się wynik działania.

8.	Zrób trzy zmienne, które będą przechowywały pole trójkąta, za każdym razem przekazując różne liczby w parametrze.
(8a.	Podpowiedź: var triangle1Area = getTriangleArea(10, 15);
9.	Stwórz nowe repozytorium i wyślij tam swoje zadanie, a link do niego wklej poniżej.
*/
function getTriangleArea(a, h) {
    "use strict";
    var triangleArea = a * h * 0.5;
    if ((a <= 0) || (h <= 0) || isNaN(triangleArea)) {
        return("Nieprawidłowe dane");
    } else {
        return triangleArea;
    }
}


console.log(getTriangleArea(10, 6));
var triangle1Area = getTriangleArea(10, 15);
console.log(triangle1Area);
var triangle2Area = getTriangleArea(5, 10);
console.log(triangle2Area);
var triangle3Area = getTriangleArea(-10, 5);
console.log(triangle3Area);