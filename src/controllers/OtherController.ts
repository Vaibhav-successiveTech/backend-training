let mockData: { id: number, desc: string }[] = [];

import { Request, Response, NextFunction } from "express";

class dataSeedingControllerClass {
  dataSeedingController = (req: Request, res: Response) => {

    const id: number = Number(req.params.id);

    mockData.push({ id: id, desc: `object : ${id}` });

    res.status(200).json({
      dataCount: mockData,
    });
  }
}

class AddStrigHandlerClass {
  AddStrigHandler = (req: Request, res: Response) => {
    res.status(200).json({
      token: req.body.token
    });
  }
}

class VerifyStringHandlerClass {
  VerifyStringHandler = (req: Request, res: Response) => {
    res.status(200).json({
      string: req.body.stringData
    });
  }
}

class loggingMiddelwareHandlerClass {
  loggingMiddelwareHandler = (req: Request, res: Response) => {
    res.status(200).send('Consoled URL,method and timeStamp');
  }
}


class middlewareChainingHandlerClass {
  middlewareChainingHandler = (req: Request, res: Response) => {
    res.status(200).json({
      message1: req.body.middleware1,
      message2: req.body.middleware2,
    });
  }
}

class customMiddlewareHandlerClass {
  customMiddlewareHandler = (req: Request, res: Response) => {
    res.status(200).send(req.headers);
  }
}


class limitMiddlewareHandlerClass {
  limitMiddlewareHandler = (req: Request, res: Response) => {
    res.status(200).send(`Request Fullfilled ${req.body.limit}`);
  }
}

class errorMiddlewareHandlerClass {
  errorMiddlewareHandler = (req: Request, res: Response, next: NextFunction) => {
    try {
      throw new Error('Error Occured in routes');
    } catch (err) {
      next(err);
    }
  }
}

const dataSeedingControllerObject = new dataSeedingControllerClass();
const customMiddlewareHandlerObject = new customMiddlewareHandlerClass();
const AddStrigHandlerObject = new AddStrigHandlerClass();
const VerifyStringHandlerObject = new VerifyStringHandlerClass();
const loggingMiddelwareHandlerObject = new loggingMiddelwareHandlerClass();
const middlewareChainingHandlerObject = new middlewareChainingHandlerClass();
const limitMiddlewareHandlerObject = new limitMiddlewareHandlerClass();
const errorMiddlewareHandlerObject = new errorMiddlewareHandlerClass()

export { dataSeedingControllerObject, AddStrigHandlerObject, VerifyStringHandlerObject, loggingMiddelwareHandlerObject, middlewareChainingHandlerObject, customMiddlewareHandlerObject, limitMiddlewareHandlerObject, errorMiddlewareHandlerObject };
