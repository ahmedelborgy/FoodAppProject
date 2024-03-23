export interface IcurrentUser {
[x: string]: any;
}
export interface currentUser {
    id:               number;
    userName:         string;
    email:            string;
    country:          string;
    phoneNumber:      string;
    imagePath:        any;
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
