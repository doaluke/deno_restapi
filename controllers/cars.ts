
import cars from "../database/db.ts";
import { Car } from '../interfaces/index.ts';
import httpResponse from './helpers/responses.ts';
import logger from './helpers/logger.ts';
import { httpCodes } from '../constants/index.ts';



class CarsController {

    static getCars = async ({ response }: { response: any }) => {
        const car = await cars.find();
        httpResponse( response , httpCodes.HTTP_OK , car );
    };
      
      
    static getCar = async ({
        params,
        response,
    }: {
        params: { id: string };
        response: any;
    }) => {
        const car = await cars.findOne({ _id: { $oid: params.id } });
        httpResponse( response , httpCodes.HTTP_OK , car );
       
    };

    static CreateCar = async ({
        response,
        request,
    }: {
        response: any,
        request: any
    }) => {
        if (!request.hasBody) {
            response.body = { error: "Request body cannot be empty" };
            httpResponse( response , httpCodes.INTERNAL_SERVER_ERROR );
        }
        const body = await request.body();
        const values = await body.value;
        logger.debug(values);
        let carRes = null;
        if(values instanceof Array) {
            carRes = await cars.insertMany(values);
        } else{
            carRes = await cars.insertOne(values);
        }

        httpResponse( response , httpCodes.HTTP_OK , carRes );
    }

    static DeleteCarById = async ({
        response,
        request,
        params
    }: {
        response: any,
        request: any,
        params: any
    }) => {
        logger.debug(params);
        const delteCarCount = await cars.deleteOne({ _id: params.id });
        // logger.debug(delteCarCount);
        
        if (delteCarCount == 0) {
            response.body = { error: "ID does not exist" };
            httpResponse( response , httpCodes.INTERNAL_SERVER_ERROR );
        }

        httpResponse( response , httpCodes.HTTP_OK , delteCarCount );
    }

    static updateCar = async ({
        params,
        request,
        response,
    }: {
        params: any;
        request: any;
        response: any;
    }) => {
        const body = await request.body();
        const values = await body.value;
        const { matchedCount, modifiedCount, upsertedId } = await cars.updateOne(
            { _id: { $oid: params.id } },
            { $set: { name: values.name, series: values.series } }
        );

        if (matchedCount == 0) {
            response.body = { error: "ID does not exist" };
            httpResponse( response , httpCodes.INTERNAL_SERVER_ERROR );
        }

        httpResponse( response , httpCodes.HTTP_OK , { updateId: upsertedId } );
    }
      
    static root = ({ response }: { response: any }) => {
          response.body =
            " Welcome to the cars selling api ";
    };

}


export default CarsController;