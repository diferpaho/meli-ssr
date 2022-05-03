import express from 'express';
import path from 'path';
import axios from 'axios';
import React from 'react';
import ReactDom from 'react-dom/server';

import App from '../client/components/app';
import Navbar from '../client/components/navbar';
import List from '../client/components/list';
import Detail from '../client/components/detail';


const app = express();

app.use('/static', express.static(path.join(__dirname, '..', '..', 'dist', 'static')));

let base = 
    {
        "author": {
            "name": "diego",
            "lastname": "palacios",
        },
        "categorie": "smartphones",
    }

const items= require('./data.json');

app.route('/').get((req, res) => {

    const root = (
        <html lang="es">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />

                <title>Meli</title>
            </head>
            <body>
                <div id="root3">
                    <div className="App bg-light">
                        <Navbar />
                    </div>
                </div>
                <script src="/static/bundle.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>

            </body>
        </html>
    );
    const html = ReactDom.renderToString(root);

    res.send(html);
});

app.route('/list').get((req, res) => {

    const root = (
        <html lang="es">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />

                <title>Meli</title>
            </head>
            <body>
                <div id="root2">
                    <div className="App bg-light">
                        <Navbar />
                        <List />
                    </div>
                </div>
                <script src="/static/bundle.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>

            </body>
        </html>
    );
    const html = ReactDom.renderToString(root);

    res.send(html);
});

app.route('/items/:id').get(async (req, res) => {
    const response = await axios('http://localhost:3000/api/items/1');
    const item = response.data;
    console.log(response.data)
    const root = (
        <html lang="es">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />

                <title>Meli</title>
            </head>
            <body>
                <div id="root2">
                    <div className="App bg-light">
                        <Navbar />
                        <Detail items={JSON.stringify(item)}/>
                    </div>
                </div>
                <script src="/static/bundle.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>

            </body>
        </html>
    );
    const html = ReactDom.renderToString(root);

    res.send(html);
});

app.get('/api/items/', (request, response) => {
    response.json(items)
})

app.get('/api/items/:id', (request, response) => {
    const id = request.params.id
    const smartphone = items.items.find(smartphone => smartphone.id === id)
    base["items"] = smartphone ;
    if (base) {
        return response.json(base)
    } else {
        response.status(404).end()
    }
    base["items"] = "" ;
})

app.get('/api/items/search/:title', (request, response) => {
    const title = request.params.title.toLowerCase()
    const smartphone = items.items.filter(smartphone => smartphone.title.toLowerCase().includes(title))
    base["items"] = smartphone ;
    if (smartphone) {
        return response.json(base)
    } else {
        response.status(404).end()
    }
    base["items"] = "" ;
})

app.listen(3000, () => {
    console.log('server started: http://localhost:3000')
});