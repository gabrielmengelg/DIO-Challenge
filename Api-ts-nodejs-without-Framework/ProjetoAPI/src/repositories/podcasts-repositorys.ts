import fs from "fs";
import path from "path";
import { PodcastModel } from "../models/podcast-model";


const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcast = async (podcastName?: string): Promise<PodcastModel[]> => {
    const rawdata = fs.readFileSync(pathData, "utf-8");
    let jsonFL = JSON.parse(rawdata);


    if (podcastName) {
        jsonFL = jsonFL.filter((podcast: PodcastModel ) => podcast.podcastName === podcastName);

    }


    return jsonFL;

}

/*

'path' recebe o diretorio dos dados que esta em formato json


é criado uma funcao async 'repositoryPodcast' que recebe um paramentro, com uma promise no formato 'PodcastModel'
'rawdata' ler os dados
'jsonFL' colocar 'rawdata' no formato json

Faz um filtro do paramentro com o model
e retorna com o filtro, mas só é filtrado se a função receber algum paramentro, caso n receba ele retorna sem filtro
*/