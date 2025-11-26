import * as http from 'http';
import {getFilterEpsodios, getListEpsodios} from './controllers/podcasts-controllers';
import { Routes } from './routes/routes';
import { HttpMethod } from './utils/http-methods';


export const app  = async (req: http.IncomingMessage, res: http.ServerResponse) => {

    const [baseURL, queryString] = req.url?.split("?") ?? [" ", " "];


    if (req.method === HttpMethod.GET && baseURL === Routes.LIST_EPSODIO) {
        await getListEpsodios(req, res);
    }

    if (req.method === HttpMethod.GET && baseURL === Routes.FILTER_EPSODIO){
        await getFilterEpsodios(req, res);
    }

};

