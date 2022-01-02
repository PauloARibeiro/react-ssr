var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};

// src/scripts/helpers.js
import chalk from "chalk";
import path from "path";
import { spawn } from "child_process";
var colors = {
  error: chalk.hex("#C30F16"),
  success: chalk.hex("#0dbc79"),
  blue: chalk.hex("#11a8cd"),
  darkBlue: chalk.hex("#3b8eea"),
  lightGray: chalk.hex("#787878")
};
var strings = {
  dev: {
    start() {
      console.clear();
      console.log(`${chalk.bold(colors.success("Starting Server..."))}`);
      console.log("");
    },
    changes() {
      console.log(`[${colors.blue("web server")}] Restarting...`);
    },
    error(message) {
      console.log(`[${colors.darkBlue("dev server")}] ${colors.error(message)}`);
    },
    listen(port) {
      console.log(`[${colors.blue("web server")}] Port: ${chalk.bold(colors.success(`http://localhost:${port}`))}`);
      console.log(`[${colors.darkBlue("dev server")}] Looking good. Watching for file changes...`);
    }
  }
};

// src/index.ts
import fastify from "fastify";
import React from "react";
import ReactDOMServer from "react-dom/server.js";
import fetch from "node-fetch";
import fs from "fs";
import path2 from "path";
import DomParser from "dom-parser";
var parser = new DomParser();
global.fetch = fetch;
var server = fastify();
server.get("/", async (request, reply) => {
  const __dirname = path2.resolve(path2.dirname("")) + "/dist";
  const page = fs.readFileSync(__dirname + "/resources/pages/index/index.page.html", "utf-8");
  const dom = parser.parseFromString(page);
  const sections = dom.getElementsByTagName("section");
  const apps = [];
  const name = sections[1].getAttribute("data-uniquename");
  const App = await import(`../dist/resources/applications/${name}/${name}.js`);
  const newApp = new App.default();
  const props = await newApp.getInitalProps();
  const string = ReactDOMServer.renderToString(React.createElement(App.default, __spreadValues({ name: "shit" }, props[0]), null));
  reply.type("text/html");
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
