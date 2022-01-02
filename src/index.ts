import { strings } from './scripts/helpers';
import fastify from 'fastify';
import React from 'react';
import ReactDOMServer from 'react-dom/server.js';
import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
// import parse from 'html-dom-parser';
import DomParser from 'dom-parser';

const parser = new DomParser();

global.fetch = fetch;

const server = fastify();

server.get('/', async (request, reply) => {
  const __dirname = path.resolve(path.dirname('')) + '/dist';

  const page = fs.readFileSync(
    __dirname + '/resources/pages/index/index.page.html',
    'utf-8',
  );

  const dom = parser.parseFromString(page);

  const sections = dom.getElementsByTagName('section') as any[];

  const apps = [];

  const name = sections[1].getAttribute('data-uniquename');

  const App = await import(`../dist/resources/applications/${name}/${name}.js`);

  const newApp = new App.default();

  const props = await newApp.getInitalProps();

  const string = ReactDOMServer.renderToString(
    React.createElement(App.default, { name: 'shit', ...props[0] }, null),
  );

  // for await (const section of sections) {
  //   const name = section.getAttribute('data-uniquename');

  //   const app = import(`../dist/resources/applications/${name}/${name}.js`);
  // }

  // sections.map(async (section) => {
  //   const name = section.getAttribute('data-uniquename');

  //   const app = await import(
  //     __dirname + `/resources/applications/${name}/${name}.js`
  //   );

  //   console.log(app);
  // });

  // console.log(dom.querySelectorAll('[data-uniquename]'));

  // const App = await import('../dist/resources/applications/start/start.js');
  // const App2 = await import('../dist/resources/applications/start2/start2.js/index.js');

  // const props = await Promise.all([
  //   new App.default().getInitalProps(),
  //   new App2.default().getInitalProps(),
  // ]);

  // let test = ReactDOMServer.renderToString(
  //   React.createElement(App.default, { name: 'shit', ...props[0] }, null),
  // );

  // test += ReactDOMServer.renderToString(
  //   React.createElement(App2.default, { name: 'shit', ...props[1] }, null),
  // );

  reply.type('text/html');

  return `
  <!DOCTYPE html><html lang="en"><head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <h1>hello</h1>
      ${string}
    </body></html>
  `;
});

server.listen(8080, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  strings.dev.listen(8080);
});

export {};
