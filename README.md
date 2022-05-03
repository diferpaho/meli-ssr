# meli-ssr

## Cloning the repository

In your terminal run the command:

```` 
git clone https://github.com/diferpaho/meli-ssr.git
````

```` 
cd meli-ssr
````

### Install dependencies


```` 
npm install
````


### Running the project


```` 
npm run dev
````

### Available views

```` 
http://localhost:3000/
```` 
In the case of , the search API works fine, but from the view, the input search didn't work for me.

```` 
http://localhost:3000/list
```` 

```` 
http://localhost:3000/items/:id
```` 

```` 
http://localhost:3000/items/search/:title
```` 

### Activated API Urls

```` 
http://localhost:3000/api/items/
```` 

```` 
http://localhost:3000/api/items/:id
```` 

```` 
http://localhost:3000/api/items/search/:title
```` 
In the case of , the search API works fine, but from the view, the input search didn't work for me.

## Test

```` 
npm run test
````

If you get the message "No tests found related to files changed since last commit" you can press the letter "a" to run the tests
