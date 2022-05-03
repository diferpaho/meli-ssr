import express from 'express';
import path from 'path';
import axios from 'axios';
import React from 'react';
import ReactDom from 'react-dom/server';
import { StaticRouter } from 'react-router';
import bodyParser from 'body-parser';

import App from '../client/components/app';
import Navbar from '../client/components/navbar';
import List from '../client/components/list';


const app = express();

app.use('/static', express.static(path.join(__dirname, '..', '..', 'dist', 'static')));



app.route('/').get( (req, res) => {

    const root = (
        <html lang="es">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"/>
                
                <title>Meli</title>
            </head>
            <body>
                <div id="root3">
                   <Navbar/>
                </div>
                <script src="/static/bundle.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>

            </body>
        </html>
    );
    const html = ReactDom.renderToString(root);

    res.send(html);
});

app.route('/items').get( (req, res) => {

    const root = (
        <html lang="es">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"/>
                
                <title>Meli</title>
            </head>
            <body>
                <div id="root2">
                    <Navbar/>
                    <List/>
                </div>
                <script src="/static/bundle.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>

            </body>
        </html>
    );
    const html = ReactDom.renderToString(root);

    res.send(html);
});


app.listen(3000, () => {
    console.log('server started: http://localhost:3000')
});