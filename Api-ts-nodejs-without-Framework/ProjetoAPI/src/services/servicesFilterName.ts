import { IncomingMessage } from "http";
import {repositoryPodcast} from "../repositories/podcasts-repositorys"
import { FilterPodCastModel } from "../models/filter-podcast-model";
import { Status } from "../utils/status-code";

export const serviceFilter = async (podcastName: string | undefined): Promise<FilterPodCastModel> => {

    let responseFormat: FilterPodCastModel = {
        statusCode: 0,
        body: [],
    };

    const queryString = podcastName?.split("?p=")[1] ?? " ";

    const data = await repositoryPodcast(queryString);

    if (data.length === 0) {
        responseFormat.statusCode = Status.NoContent;

    }else {
        responseFormat.statusCode = Status.OK;
    }

    responseFormat.body = data;


    return responseFormat;

}
