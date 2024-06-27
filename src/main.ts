import * as express from "express";
import { userRouter } from "./lib/User/infrastructure";

const app = express();

app.use(express.json())
app.use(userRouter);

app.use(
  (
    err: unknown,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    if (err instanceof Error) {
      console.error(err.stack);
      return res.status(500).json({message:err.message});
    }
    console.error(err);
    return res.status(500).json({message:"something was wrong!!"});
  }
);

app.listen(3000, () => {
  console.log("running ");
});
