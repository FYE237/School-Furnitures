export class LivreModel{
    constructor( public auteur: string,public intitule: string,
            public lieuStockage:string
            ,public maisonEdition:string,
            public prix:number,public propriétaire:string,
            public type:string,public recu:boolean) 
            {     
    }
}