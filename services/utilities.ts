import {herbsDB} from "../pages/api/herbs";
import {Article, Workshop} from "../model";
import {workshopsDB} from "../pages/api/workshops";
import {artcilesDB} from "../pages/api/articles";

let nextIdHerb = 0;

export function generateIdHerb() {
    return nextIdHerb++;
}

let nextIdWorkshop = 0;

export function generateIdWorkshop() {
    return nextIdWorkshop++;
}

let nextIdArticle = 0;

export function generateIdArticle() {
    return nextIdArticle++;
}



export function deleteSpace (word: string) {
    return word = word.replaceAll(' ','');
}

const allMedicalUsesSet = new Set<string>();
herbsDB.forEach(herb => herb.medicalUses.forEach( use => allMedicalUsesSet.add(use)));

export const allMedicalUses = Array.from(allMedicalUsesSet);
allMedicalUses.sort();



export function getAllArticles(): Article[] {
    return artcilesDB.map((obj) => {
        const result: Article = {...(obj)};
        return result
    })
}

export function getAllWorkshops(): Workshop[] {
    return workshopsDB.map((obj) => {
        const result: Workshop = {...(obj)};
        return result
    })
}
