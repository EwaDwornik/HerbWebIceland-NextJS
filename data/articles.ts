import {Article} from "../model";
import name from "../public/images/name.png"
import ewablom from "../public/images/ewablóm.jpeg"

let nextIdArticle = 0;

export function generateIdArticle() {
    return nextIdArticle++;
}

export const artcilesDB: Article[] = [
    {
        id: generateIdArticle(),
        title: 'How to make a herbal infusion',
        imageArtilces: name,
        shortDescription: 'How long shall we infuse herbs, can we decoct them? Roots and artial parts of a herb need a different approach, read an articles to know more about that.',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n' +
            '                    ut\n' +
            '                    labore et dolore magna aliqua. Lectus vestibulum mattis ullamcorper velit sed ullamcorper.\n' +
            '                    In\n' +
            '                    nibh mauris cursus mattis. Amet est placerat in egestas erat. Tristique senectus et netus et\n' +
            '                    malesuada fames ac. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien.\n' +
            '                    Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. At tempor commodo\n' +
            '                    ullamcorper a lacus vestibulum sed arcu non.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n' +
            '                    ut\n' +
            '                    labore et dolore magna aliqua. Lectus vestibulum mattis ullamcorper velit sed ullamcorper.\n' +
            '                    In\n' +
            '                    nibh mauris cursus mattis. Amet est placerat in egestas erat. Tristique senectus et netus et\n' +
            '                    malesuada fames ac. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien.\n' +
            '                    Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. At tempor commodo\n' +
            '                    ullamcorper a lacus vestibulum sed arcu non.',
    },
    {
        id: generateIdArticle(),
        title: 'Cleaning the roots',
        imageArtilces: ewablom,
        shortDescription: 'What to do next after picking the roots. ',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n' +
            '                    ut\n' +
            '                    labore et dolore magna aliqua. Lectus vestibulum mattis ullamcorper velit sed ullamcorper.\n' +
            '                    In\n' +
            '                    nibh mauris cursus mattis. Amet est placerat in egestas erat. Tristique senectus et netus et\n' +
            '                    malesuada fames ac. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien.\n' +
            '                    Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. At tempor commodo\n' +
            '                    ullamcorper a lacus vestibulum sed arcu non.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n' +
            '                    ut\n' +
            '                    labore et dolore magna aliqua. Lectus vestibulum mattis ullamcorper velit sed ullamcorper.\n' +
            '                    In\n' +
            '                    nibh mauris cursus mattis. Amet est placerat in egestas erat. Tristique senectus et netus et\n' +
            '                    malesuada fames ac. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien.\n' +
            '                    Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. At tempor commodo\n' +
            '                    ullamcorper a lacus vestibulum sed arcu non.',
    }
];

