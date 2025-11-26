import {IncomingMessage, ServerResponse} from 'http';
import {serviceListEpsodios} from '../services/list-epsodios-services'
import { serviceFilter } from '../services/servicesFilterName';
import { FilterPodCastModel } from '../models/filter-podcast-model';


export const getListEpsodios = async (req: IncomingMessage, res: ServerResponse) => {
    const data: FilterPodCastModel = await serviceListEpsodios();
    res.writeHead(data.statusCode, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(data.body))

};

export const getFilterEpsodios = async (req: IncomingMessage, res: ServerResponse) => {

    
    const data: FilterPodCastModel = await serviceFilter(req.url);
    res.writeHead(data.statusCode, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(data.body))

};
