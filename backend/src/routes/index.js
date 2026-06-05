import express from "express";
import livrosRoutes from "./livrosRoutes.js";
import manipuladorErros from "../middlewares/manipuladorErros.js";

function routes(app){
  app.use(express.json());
  app.use(livrosRoutes);
  app.use(manipuladorErros);
}

export default routes;