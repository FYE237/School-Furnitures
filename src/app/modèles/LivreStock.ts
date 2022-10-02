export class LivreStockModel{
    constructor( 
        public Id:string,
        public auteur: string,
        public intitule: string,
            public maisonEdition:string,
            public prix:number,
            public recu:boolean,
            public photo:string) 
            {     
    }
}