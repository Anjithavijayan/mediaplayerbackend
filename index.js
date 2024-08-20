//import json-server

const jsonServer = require('json-server');

//create server using create() method

const mediaPlayerServer = jsonServer.create()

//create a path/route to db.json file

const router=jsonServer.router('db.json')

//create a middle ware used to convert JSON data to JS object
const middleware = jsonServer.defaults();

//add middleware and router to media player server

mediaPlayerServer.use(middleware);
mediaPlayerServer.use(router);

const PORT=4000;

// run the mediaplayer server

mediaPlayerServer.listen(PORT,()=>{
    console.log(`Mediaplayer  server running on PORT ${PORT}`);
})