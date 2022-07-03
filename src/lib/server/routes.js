import AdminRouter from "admin/router";
import ProductRouter from "product/router";
import RateRouter from "rate/router";

export default (app) => {
  app.get("/", (req, res, next) => {
    res.send('<h1> hello <span style="color: red" >world</span> </h1>');
  });

  app.use("/admin/", AdminRouter);
  app.use("/product/", ProductRouter);
  app.use("/rate/", RateRouter);
};
