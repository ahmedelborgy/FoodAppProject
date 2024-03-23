export interface IUsersLoged {
}
export interface Iusers {
    id:               number;
    userName:         string;
    email:            string;
    country:          Country;
    phoneNumber:      string;
    imagePath:        null | string;
    group:            Group;
    creationDate:     Date;
    modificationDate: Date;
}
export interface Group {
    id:               number;
    name:             string;
    creationDate:     Date;
    modificationDate: Date;
}
export enum Country {
    Eg = "eg",
    Eggg = "eggg",
    Egypt = "egypt",
}
export interface Welcome {
    pageNumber:           number;
    pageSize:             number;
    data:                string;
    totalNumberOfRecords: number;
    totalNumberOfPages:   number;
}