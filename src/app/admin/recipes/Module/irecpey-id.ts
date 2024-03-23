
    export interface IRecpeyId  {
        id:               number;
        name:             string;
        imagePath:        string;
        description:      string;
        price:            number;
        creationDate?:     Date;
        modificationDate?: Date;
        category:         Tag[];
        tag:              Tag;
    }
    
    export interface Tag {
        id:               number;
        name?:             string;
        creationDate?:     Date;
        modificationDate?: Date;
    }