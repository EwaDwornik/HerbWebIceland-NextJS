import {StaticImageData} from "next/image";

export enum Language {
    english = 'english',
    latin = "latin",
    icelandic = 'icelandic'
}

export interface Herb {
    id: number,
    names: { [name in Language]: string },
    imageHerb: string | StaticImageData,
    imageVegetation?: string,
    medicalUses: string[],
    sideEffects: string[],
    precautions: string[],
    description?: string,
    vegetation?: string,
    vegetationPhoto?: string,
}

export interface Workshop {
    id: number,
    title: string,
    date: string,
    imageWorkshop: any,
    email: string,
    description?: string,
    event?: string,
}

export interface Article {
    id: number,
    title: string,
    imageArtilces: any,
    shortDescription: string,
    longDescription: string,
}


export interface ContactValues {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
}