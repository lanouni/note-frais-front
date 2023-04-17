export class NoteFrais{
  id! : number;
  dateFrais! : Date;
  client! : string;
  projet! : string;
  status!:string;
  typeIntervention! : string;
  remarque! : string;


}

export  interface DepenseNote{
  id : number;
  dateFrais : Date;
  description : string;
  taxi: number;
  Hotel : number;
  repas : number;
  hebergement : number;
}
