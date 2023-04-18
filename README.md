# questions-bank
Node API that uses MongoDB with Mongoose to store questions and their tags, to search and retrive questions based on tags from a topic tree.

## Requirements
- Node
- Express
- mongodb
- npm

## Setup
- Clone the repo
- Install requirements using `npm install`
- Setup account on mongodb Atlas and create your username/pass, cluster, database then use your credentials in the .env file
- Copy paste tese variable in your .env file and set the values you got from Mongo Atlas 
    - DB_SU=
    - DB_SU_PASS=
    - CLUSTER=
    - DBNAME=
    - TESTENV=
    - PRODENV=
- Start the server using `npm start`
- Seed question and topics using the POST requests to `/api/v1/questions` and `/api/v1/tags`


## Endpoints available
| Endpoints                                     | Method  | Description                                         |
|-----------------------------------------------|---------|-----------------------------------------------------|
|  /api/v1/questions/populate                   | POST    | add all questions to database from JS file          |
|  /api/v1/questions                            | GET     | fetch all questions from database                   | 
|  /api/v1/tags/populate                        | POST    | add all topics to database from JS   file           |
|  /api/v1/tags                                 | GET     | fetch all topics from database                      |
|  /api/v1/questions/search?q=query             | GET     | returns an array questions with the annotation query|

## Hosting
### Database
The database is hosted on [Mongo Atlas](https://cloud.mongodb.com/)

### App
The app is hosted on https://railway.app
- Access questions the API via http://questions-bank-production.up.railway.app/api/v1/tags/
- Access tags the API via http://questions-bank-production.up.railway.app/api/v1/questions/

## Queries
To query the database make a get request to the route `http://questions-bank-production.up.railway.app/api/v1/questions/search?q=<query>`
E.g.
`http://questions-bank-production.up.railway.app/api/v1/questions/search?q=Cytoplasm`
should return
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

