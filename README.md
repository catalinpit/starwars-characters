# STARWARS CHARACTERS

## Steps Taken (Backend - NodeJS)

1. Create the Node.js backend
2. Set up Mysql
3. Create routes to retrieve all the characters and one character
4. Return the information as JSON, so we can use it in React

## Steps I would have taken (Frontend - React)

1. Split the application in different components => Layout, Character, App
2. The Character component represents each character queried
3. The Layout represents the whole app - nav bar, body, footer, etc.
4. The App holds the routing information

## TO DO

1. Add sorting by height and/or species

## How to run the application

**RUN** in your terminal: 
1. `docker run -e MYSQL_ROOT_PASSWORD=password -p 3306:3306 -it mysql:5.6` 
2. In another terminal `mysql -u root -p -h 127.0.0.1`
3. `CREATE DATABASE starwars`
4. `USE starwars`
5. Run the following:
```
CREATE TABLE IF NOT EXISTS `characters` (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  height varchar(255) NOT NULL,
  species varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

**Go into the cloned application**:
1. Run `yarn`
2. Run `node server`
3. Go to Postman/Postwoman
4. Make the following requests:
   * `POST` request to `http://localhost:3000/characters` (example below)
  
```
{
  "name": "C-3PO",
  "height": 167,
  "species": "Droid"
}
```

   * `GET` request to `http://localhost:3000/characters`
   * `GET` request to `http://localhost:3000/characters/1`