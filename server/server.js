import express from "express";
import fs, { unwatchFile } from "fs";
import path from "path";
import App from "../src/App";
import React from "react";
import ReactDOMServer from "react-dom/server";
const app = express();

app.get("/page", async (req, res) => {
  const { value } = await App.getProps();
  console.log(value, "aqaaa");
  fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
    if (err) {
      return res.status(500).send("Some error happened");
    }
    const html = `<div id="root">${ReactDOMServer.renderToString(
      <App value={value} />
    )}</div>`;
    return res.send(data.replace('<div id="root"></div>', html));
  });
});
app.use(express.static(path.resolve(__dirname, "..", "build")));

app.listen(3000, function () {
  console.log("server running on 3000");
});
