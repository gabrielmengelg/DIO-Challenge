import { PodcastModel } from "./podcast-model";

export interface FilterPodCastModel {
        statusCode: number;
        body: PodcastModel[];

}

/*
foi criado um interface na qual recebe um status code do tipo number
e um body do tipo PodCastModel (modelo que criamos para os dados de podcast)



*/
