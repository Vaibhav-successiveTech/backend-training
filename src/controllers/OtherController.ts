let mockData : {id:number,desc : string}[] = []; 

import {Request,Response} from 'express';

const dataSeedingController = (req:Request,res:Response)=>{
    
    const id : number = Number(req.params.id);

    mockData.push({id:id,desc:`object : ${id}`});

    res.status(200).json({
    dataCount: mockData,
  });
}


export {dataSeedingController};