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

/*
aqui criamos uma variavel do tipo do FilterPodCastModel (interface que criamos)
passando o valor inicial 0 para statuscode e um array vazio para body
em seguida verificamos se os dado que retornam tem o tamanho 0, se tiver 
colocar o Status.NoContet em responseFormat.statusCode que era 0
se for maior que zero ele retornar Status.OK em responseFormat.statusCode
ele utiliza o responseFormat.statusCode para que seja feito a verificarcao dos dados
no formato estipulado pelo interface.



*/