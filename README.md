# Avatar: The Last API
A REST API to retreive information on the TV shows [Avatar: The Last Airbender](https://en.wikipedia.org/wiki/Avatar:_The_Last_Airbender) and [Avatar: The Legend of Korra](https://en.wikipedia.org/wiki/The_Legend_of_Korra).  Users can get information on characters, episodes, seasons as well quotes.

* [Documentation Page](https://avatar-the-last-api.herokuapp.com/)

## Features

#### <ins>Characters</ins>
Information available:
* Name
* Age (if known)
* Elements they can bend
* Links to images of them at different ages
Can sort by:
* Elements they can bend

Example:
![Character request](https://raw.githubusercontent.com/CB721/avatar-client/3279ce4fb2b35c8a557aa0882bce3279a200a442/src/assets/images/character-example.png)

#### <ins>Elements</ins>
Information available:
* Type

Example:
![Element request](https://raw.githubusercontent.com/CB721/avatar-client/3279ce4fb2b35c8a557aa0882bce3279a200a442/src/assets/images/element-example.png)

#### <ins>Episodes</ins>
Information available:
* Chapter Title
* Title
* Season

Example:
![Episode request](https://raw.githubusercontent.com/CB721/avatar-client/3279ce4fb2b35c8a557aa0882bce3279a200a442/src/assets/images/episode-example.png)

#### <ins>Quotes</ins>
* Randomly selected from over 500 available quotes

Information available:
* Content (the quote itself)
* Character that said it
* Episode appeared in
Can sort by:
* Character
* Episode
* Season
#### <ins>Seasons</ins>
Information available:
* Title
* Number of episodes


Example:
![Quote request](https://raw.githubusercontent.com/CB721/avatar-client/3279ce4fb2b35c8a557aa0882bce3279a200a442/src/assets/images/quote-example.png)

#### Documentation Page
![Client-side documentation](https://raw.githubusercontent.com/CB721/avatar-client/3279ce4fb2b35c8a557aa0882bce3279a200a442/src/assets/images/v1-screenshot.png)

##### Repositories
* [Documentation](https://github.com/CB721/avatar-client)
* [API](https://github.com/CB721/avatar-api)

### Technologies Used
#### Front-end
    1) Vue
    2) Axios
    3) Vue Rellax 
#### Back-end
    1) Express
    2) PostgreSQL
    3) Memory Cache
    4) CORS

## Author
* Clint Brodar

### License
Copyright © 2020 Clint Brodar All Rights Reserved