# Questions Bank
Simple restful api to store questions and their tags, to search and retrive questions based on tags from a topic tree.

## Project tree

    questions-bank/
    ├── boot/
    │   └── dbConnection.js
    ├── controllers/
    │   ├── questions.js
    │   └── tags.js
    ├── routes/
    │   ├── questions.js
    │   └── tags.js
    ├── services/
    │   ├── questions.js
    │   └── tags.js
    ├── models/
    │   ├── questions.js
    │   └── tags.js
    ├── dataset/
    │   ├── cleaned-questions.js
    │   ├── cleaned-tags.js
    │   ├── datasetSetup.js
    │   ├── questions_raw_documents.js
    │   └── tags_raw_documents.js
    ├── main.js
    ├── package.json
    ├── .env
    ├── .gitignore
    ├── README.md



## Requirements
- NodeJS
- Express
- mongodb
- mongoose
- npm

## Setup after cloning the repo
- Create `.env` file in the root directory of your application
- Install requirements in package.json using `npm install`
- Setup account on mongodb Atlas and create your username/pass, cluster, database.
- Copy/paste these values in your .env file you created and assign the values you got from Mongodb Atlas to the below variables and save it 
    - DB_SU=
    - DB_SU_PASS=
    - CLUSTER=
    - DBNAME=
    - TESTENV=
    - PRODENV=
- Start the server using `npm start`. I'm using nodemon since I was developing but you're free to do anything you like.
- Create question and topics using the POST requests to `/api/v1/questions` and `/api/v1/tags`
    - By default it will create 2 documents, quesionts and tags. If you want to change it go ahead it will be in the models directory, have fun.


## Endpoints exist
| Endpoints                                     | Method  | Description                                         |
|-----------------------------------------------|---------|-----------------------------------------------------|
|  /api/v1/questions/populate                   | POST    | Add all questions to database from JS file          |
|  /api/v1/questions                            | GET     | Fetch all questions from database                   | 
|  /api/v1/tags/populate                        | POST    | Add all topics to database from JS file             |
|  /api/v1/tags                                 | GET     | Fetch all topics from database                      |
|  /api/v1/questions/search?q=query             | GET     | Returns an array questions with the annotation query|

## Hosting
### Database
I used [Mongo Atlas](https://cloud.mongodb.com/) to host the database, hence the .env

### App
The app is hosted on https://railway.app
- Base URL>> http://questions-bank-production.up.railway.app

## Requests/responses example
E.g.
`http://questions-bank-production.up.railway.app/api/v1/questions/search?q=Cytoplasm`
```
{
    "Questions": [
        "8",
        "21",
        "76",
        "83",
        "142",
        "188"
    ]
}
```

`http://questions-bank-production.up.railway.app/api/v1/questions/search?q=Absorption – root hair cells`
```
{
    "Questions": [
        "105",
        "132",
        "139"
    ]
}
```

