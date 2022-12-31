# EVENTHUB

## Introduction

This is our final project to conclude our CS50 journey! For our final project we decided to develop a web-based application to make event attending and socializing easier and accessible! A platform where everyone can find events nearby and book his own seat so he doesn't miss the experience!

The project is a collaboration of:

-Stavros Kostopoulos (edX username: stavroskostopoulos) <br/>
-Giannis Symeonidis (edX username: j_symeonidis) 

## Specs

For the <b>backend</b> side of our application (mostly implemented by jsy10), we used python Flask web framework. We intergrated it with SQLite3 and [smptlib](https://docs.python.org/3/library/smtplib.html) as our server sends an email whenever a user books a ticket. Our backend consists of several routes that serve HTTP GET requests (ex. http://127.0.0.1:5000/theater?month=September&city=Litochoro&year=2022), except the /event route that also serves HTTP POST requests, so the user's data are not included in the URL. The user's input or any inspector geek's cruelty error checking, is performed in the frontend, so we avoid excess HTTP requests.

For the <b>frontend</b> side of our application (mostly implemented by stavroskostopoulos), we used the ReactJS framework, alongside the MaterialUI and JoyUI component libraries.


## Database

For the requirements of this project we decided to use the SQLite database engine, which being a part of the CS50 course, was very familiar in the Python Flask Framework. Our vision is a platform full of events, of every category and interest. For our database initialization, we statically generated data of Theater, Cinema, Music and Sports events from viva.gr (a popular event booking platform in Greece).

Our database consists of an "events" table, were all our events alongside with their useful information are stored. 

## User Interface - UI

Considering it a challenge, we tried to copy viva.gr's user inteface, building it from <ins>scratch</ins>. The interface of the application is totally responsive, even in mobile mode!

![Homepage1](/ui_screenshots/homepage1.png "Homepage1")

![Homepage2](/ui_screenshots/homepage2.png "Homepage2")

![Homepage3](/ui_screenshots/homepage3.png "Homepage3")


![EventCat](/ui_screenshots/eventcategorypage.png "Event category page")

![EventCat2](/ui_screenshots/eventcategorypage2.png "Event category page 2")

![Eventpage](/ui_screenshots/eventpage.png "Event page")

![Book](/ui_screenshots/book.png "Book ticket modal")

![Movie](/ui_screenshots/movie.png "Movie page")

#### Responsive UI screenshots

![Homepage1](/ui_screenshots/responsive//homepage1.png "Homepage1")

![Homepage2](/ui_screenshots/responsive//homepage2.png "Homepage2")

![Homepage3](/ui_screenshots/responsive//homepage3.png "Homepage3")


![EventCat](/ui_screenshots/responsive//eventcategorypage.png "Event category page")

![EventCat2](/ui_screenshots/responsive//eventcategorypage2.png "Event category page 2")

![Eventpage](/ui_screenshots/responsive//eventpage.png "Event page")

![Book](/ui_screenshots/responsive//book.png "Book ticket modal")

![Movie](/ui_screenshots/responsive//movie.png "Movie page")

