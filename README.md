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
Teoretycznie, można uznać to API jako bazę danych, która ma dostęp online i jedyne co można w niej zrobić to READ, ale to raczej nie ma sensu.

Pod rozwijaną listą "Check for..." można sprawdzić:
Tytuły grane w ostatnim czasie w kinach,
Popularne tytuły,
Najwyżej oceniane tytuły,
Tygodniowe trendy,
Dzienne trendy,
Nadchodzące tytuły,
Popularnych aktorów

Strona miała oferować możliwość logowania i rejestracji. Poza tym parę funkcjonalności więcej, ale nie udało mi się tego zaimplementować.
Napisałem serwer Backend, jest nawet dostępny online, baza danych również. Kod do backend'u również znajduje się w folderze z projektem.

Sama strona jest responsywna. Sprawdzałem na telefonie. Najwięcej czasu poświęciłem na responsywność, bo w pewnym momencie tworzenia jej, zorientowałem się, że responsywna nie jest.
Stronę wrzuciłem na kilka hostingów. Ich adresy to:

http://movis.cba.pl/ (niestety, coś w niej chyba szwankuje. Nie czyta całości .css. Strona lokalnie działa lepiej. Spowodowało to, że między .css, a html może istnieć jakaś redundancja kodu, lub to, że kod html różni się nieco od kodu html strony na hostingu)

https://mohrm.vot.pl/movis/ (tutaj podobnie, .css nie chce się załadować. Na tym hostingu jest wcześniejsza wersja strony, bez przeróbek dla hostingu cda.pl. Dziwne jest to jak różnie te hostingi reagują. Wrzuciłem ten sam kod na obydwa, a efekty były różne. Teraz myślę, że może być to też wina kodowania)
