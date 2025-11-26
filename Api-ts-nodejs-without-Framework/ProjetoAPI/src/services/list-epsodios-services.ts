import { FilterPodCastModel } from "../models/filter-podcast-model";
import {repositoryPodcast} from "../repositories/podcasts-repositorys"
import { Status } from "../utils/status-code";

export const serviceListEpsodios = async (): Promise<FilterPodCastModel> => {

    let responseFormat: FilterPodCastModel = {
        statusCode: 0,
        body: [],
    };

    const data = await repositoryPodcast();

    if (data.length === 0 && data === undefined) {
        responseFormat.statusCode = Status.NoContent;

    }else{
        responseFormat.statusCode = Status.OK;
    
    }

    responseFormat.body = data;

    return responseFormat;
    
}