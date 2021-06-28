# Movis
Site which uses TMDb API to search for movies or actors

Ogólnie rzecz biorąc, mój pomysł odrobinę mnie przerósł.
Planowałem wykonać go w Vue js, później w ASP.NET, lecz nie udało mi się. Koniec końców wyszedł skromny, przy pomocy:
HTML
CSS
JAVASCRIPT
BOOTSTRAP
JQUERY
POPPER
AJAX
AXIOS

Strona "Movis" umożliwia wyszukiwanie interesujących nas filmów, a nawet aktorów.
Strona korzysta z API TMDb, w celu wyszukiwania filmów, aktorów itp. (link to API: https://www.themoviedb.org/)
Po wprowadzeniu czegokolwiek do pola wyszukiwania, wysyłane jest zapytanie do API. 
Pod wyszukiwarką pokazuje się odpowiedź(topowe wyniki wyszukiwania w API) w postaci zdjęc filmów.
Po najechaniu na zdjęcie pokazuje się jego tytuł, opis oraz ocena w skali 0-10.

Wyszukiwanie aktorów polega mniej więcej na tym samym, z tym, że po najechaniu na aktora wyświetla się jego imię, filmy, z których jest znany oraz popularność.
Jeśli API nie posiada zdjęcia aktora, jest ono zastępowane domyślną grafiką wektorową(pic.svg).

Pod rozwijaną listą "Check for..." można sprawdzić:
Tytuły grane w ostatnim czasie w kinach,
Popularne tytuły,
Najwyżej oceniane tytuły,
Tygodniowe trendy,
Dzienne trendy,
Nadchodzące tytuły,
Popularnych aktorów

Strona oferuje możliwość logowania i rejestracji.
Po zalogowaniu pojawia się okienko użytkownika, w nim informacje o nazwie, emailu, zdjęciu, oraz przycisk do usuwania konta. Po usunięciu konta dane z przeglądarki są czyszczone.
Napisałem serwer Backend, jest dostępny online, baza danych również. Kod do backend'u również znajduje się w folderze z projektem.

URL serwera backend online:
* https://vmi616437.contaboserver.net/movies/

IP bazy danych:
* 194.163.151.109:5432


Sama strona jest responsywna. Sprawdzałem na telefonie i na "google checker". Najwięcej czasu poświęciłem na responsywność, bo w pewnym momencie tworzenia jej, zorientowałem się, że responsywna nie jest.
Stronę wrzuciłem na kilka hostingów. Ich adresy to:

* http://movis.cba.pl/ (niestety, coś w niej chyba szwankuje. Nie czyta całości .css. Strona lokalnie działa lepiej. Spowodowało to, że między .css, a html może istnieć jakaś redundancja kodu, lub to, że kod html różni się nieco od kodu html strony na hostingu)

* https://mohrm.vot.pl/movis/ (tutaj podobnie, .css nie chce się załadować. Dziwne jest to jak różnie te hostingi reagują. Wrzuciłem ten sam kod na obydwa, a efekty były różne. Teraz myślę, że może być to też wina kodowania lub interpretera?)
