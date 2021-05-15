# Getting Started with Create React App's MERN-BACKEND

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About Project

By following this project readme.md you will be able to create API calls in backend and call/make them from front end


### `npm init -y`
Firstly you have to initialize a basic description of your project that results into creation of package.json file

## Available Scripts

In the project directory, you can run

### `npm run start`

-where start includes (nodemon index.js)

Runs the app in the development mode.\
Open [http://localhost:9000](http://localhost:9000) to view it in the browser.

The page will reload if you make edits beacause of [nodemon](https://www.npmjs.com/package/nodemon)
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `project core dependencies to proceed`
dependencies: 
    
    npm i express --save (nodejs framework)
    
    npm i body-parser (parse the request)
    
    npm i nodemon --save -dev(reload page automatically each time you edit file)
    
    npm i mongoose (database)
    
    npm i cors  (cors policy to allow cross origin access for different servers)
    
### `Testing the APIs`
 
You can use [Postman](https://www.postman.com/) to test all the Api endpoints.
 
### `Methods to create Api routes & url to make request to a specific route`

-GET (to get all the post)[http://localhost/9000/posts]


-GET (to get a specific post)[http://localhost/9000/posts/id]


-POST (to add a new post)[http://localhost/9000/posts]


-PATCH (to update a post)[http://localhost/9000/posts/id]


-DELETE (to delete a post)[http://localhost/9000/posts/id]


### `sample Api call result`
[

    {
    
        "tags": [
        
            "bday",
            
            " bdaybash"
            
        ],
        
        "likeCount": 8,
        
        "createdAt": "2021-05-11T23:34:03.670Z",
        
        "_id": "609b15040164f91fa04266ed",
        
        "title": "B'day",
        
        "message": "It was a fun day. Get together with all family and friends was all what I wanted",
        
        "selectedFile": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD,
        
        "creator":Goldy,
        
         "__v": 0
         
    }
    
]
  

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
