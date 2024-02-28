// export interface Icategory {
    
// creationDate:string;

// id:number;
 

// modificationDate:string
 
// name:string
 

// }
export interface Icategory {
    pageNumber:           number;
    pageSize:             number;
    data:                 Itable[];
    totalNumberOfRecords: number;
    totalNumberOfPages:   number;
}

export interface Itable {
    id:               number;
    name:             string;
    creationDate:     Date;
    modificationDate: Date;
}