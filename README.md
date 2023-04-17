# questions-bank
Node API that uses MongoDB with Mongoose to store questions and their tags, to search and retrive questions based on tags from a topic tree.

## Requirements
- Node
- Express
- mongodb
- npm

## Setup
- Clone this Repo
- Install requirements using npm install
- Setup the .env file from the .env.sample file
- Start setup account on mongodb Atlas and use your credentials in the .env file
- Start the server using `npm start`
- Seed question and topics using the POST requests to `/questions` and `/tags`


## Endpoints available
| Endpoints                              | Method  | Description                                         |
|----------------------------------------|---------|-----------------------------------------------------|
|  /questions/populate                   | POST    | add all questions to database from JS file          |
|  /questions/all                        | GET     | fetch all questions from database                   | 
|  /tags/populate                        | POST    | add all topics to database from JS   file           |
|  /tags/all                             | GET     | fetch all topics from database                      |
|  /questions/search?q=query             | GET     | returns an array questions with the annotation query|

## Hosting
### Database
The database is hosted on [Mongo Atlas](https://cloud.mongodb.com/)

### App
The app is hosted on https://railway.app
Access questions the API via http://questions-bank-production.up.railway.app/tags/
Access tags the API via http://questions-bank-production.up.railway.app/questions/

## Queries
To query the database make a get request to the route `http://questions-bank-production.up.railway.app/questions/search?q=<query>`
E.g.
`http://questions-bank-production.up.railway.app/questions/search?q=Cytoplasm`
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

`http://questions-bank-production.up.railway.app/questions/search?q=Absorption – root hair cells`
```
{
    "Questions": [
        "105",
        "132",
        "139"
    ]
}
```

