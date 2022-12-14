import { Workshop} from "../model";
import workshopimg1 from "../public/images/workshop-img1.jpg";
import workshopimg2 from "../public/images/workshop-img2.jpg"


let nextIdWorkshop = 0;

export function generateIdWorkshop() {
    return nextIdWorkshop++;
}

export const workshopsDB: Workshop[] = [
    {
        id: generateIdWorkshop(),
        title: "Jurtaganga og súpa",
        date: "2020-03-03",
        imageWorkshop: workshopimg1,
        email: "callunaherbs@gmail.com",
        description: "Verið Velkomin í fræðandi og nærandi jurtagöngu við Krókatjörn. Í þessari göngu stoppum við hjá ýmsum lækningajurtum sem kunna að vera á vegi okkar og fræðumst um þær, og látum okkur sogast inn í heim plantnana. Við förum svo í tesmökkun og virkjum þannig öll skynfærin. \n" +
            "Við endum gönguna heima í kofanum mínum (sem liggur við vatnið) í nærandi grænmetissúpu.\n" +
            "Þegar við fræðumst um náttúruna styrkjum við tenginguna okkar við hana ",
        event: "https://www.facebook.com/events/2297405753740513/?ref=newsfeed"
    },
    {
        id: generateIdWorkshop(),
        title: "NÁTTÚRAN KALLAR",
        date: "2022-01-01",
        imageWorkshop: workshopimg2,
        email: "callunaherbs@gmail.com",
        description: "Vilt þú efla þína tengingu við náttúruna í kring um þig? \n" +
            "Leyfa náttúrunni að vera þinn leiðarvísir, akkeri og innblástur?\n" +
            "Upplifa sjálfan þig í gegnum trén, grösin, vötnin og vinda?\n" +
            "\n" +
            "Þú, Ert, Náttúran.",
        event: "https://www.facebook.com/events/466423291839590/?ref=newsfeed",
    }
];
