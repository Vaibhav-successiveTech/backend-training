let mockData = [];

class dataSeedingControllerClass {
  dataSeedingController = (req, res) => {

    const id = Number(req.params.id);

    mockData.push({ id: id, desc: `object : ${id}` });

    res.status(200).json({
      dataCount: mockData,
    });
  }
}

class AddStrigHandlerClass {
  AddStrigHandler = (req, res) => {
    res.status(200).json({
      token: req.body.token
    });
  }
}

class VerifyStringHandlerClass {
  VerifyStringHandler = (req, res) => {
    res.status(200).json({
      string: req.body.stringData
    });
  }
}

class loggingMiddelwareHandlerClass {
  loggingMiddelwareHandler = (req, res) => {
    res.status(200).send('Consoled URL,method and timeStamp');
  }
}


class middlewareChainingHandlerClass {
  middlewareChainingHandler = (req, res) => {
    res.status(200).json({
      message1: req.body.middleware1,
      message2: req.body.middleware2,
    });
  }
}

class customMiddlewareHandlerClass {
  customMiddlewareHandler = (req, res) => {
    res.status(200).send(req.headers);
  }
}


class limitMiddlewareHandlerClass {
  limitMiddlewareHandler = (req, res) => {
    res.status(200).send(`Request Fullfilled ${req.body.limit}`);
  }
}

class errorMiddlewareHandlerClass {
  errorMiddlewareHandler = (req, res, next) => {
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
