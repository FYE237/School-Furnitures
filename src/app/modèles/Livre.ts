export class LivreModel{
    constructor( 
        public Id:string,
        public auteur: string,
        public intitule: string,
            public lieuStockage:string
            ,public maisonEdition:string,
            public prix:number,public proprietaire:string,
            public type:string,public recu:boolean,
            public matiere: string,
            public photo:string) 
            {     
    }
}