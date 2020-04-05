# Cookbook NodeJS REST API

Cookbook is a NodeJS REST API

## Installation

```bash
npm install
docker run --name localmongo -p 27017:27017 -d mongo
node app.js
```

## Usage

### GET
http://localhost:3000/recipes

### POST 
http://localhost:3000/recipes

```json
{
	"title": "Sandwich",
	"description": "Classical sandwitch ",
	"ingredients": [ 
	   {
	       "name": "cheese",
	       "quantity": "5g0"
	   },
	   {
	       "name": "bread",
	       "quantity": "150g"
	   },
	   {
	       "name": "ham",
	       "quantity": "50g"
	   }
	]
}
```

You can use Robo3T to see if the data is stored well or also command-line

```bash
docker exec -it <id_container> mongo
show dbs
use recipe_db
db.recipes.find({})
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
None