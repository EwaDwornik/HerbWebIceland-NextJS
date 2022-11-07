import {NextApiRequest, NextApiResponse} from "next";


export default async function (req: NextApiRequest, res: NextApiResponse) {
    return new Promise(async () => {
        switch (req.method) {
            case "GET":
                return res.status(200).json([
                    {
                        names: {
                            english: "Yarrow",
                            latin: "Achillea millefolium",
                            icelandic: 'Vallhumall'
                        },
                        pathImageHerb: `${process.env.NEXT_PUBLIC_URL}../public/images/alchemilla.png`,
                        medicalUses: ["fever", "common cold", "hay fever", "stomach discomfort"],
                        sideEffects: ["drowsines", "increased urination", "skin irritation"],
                        precautions: ["pregnancy", "breastfeeding", "allergy to ragweed and related plants"],
                        description: "Yarrow is a plant that grows throughout the world. The above ground parts are used to make medicine. Yarrow contains chemicals that might help to stop stomachcramps and fight infections. People commonly use yarrow for eczema, irritable bowel syndrome (IBS), wound healing, and many other conditions, but there is no good scientific evidence to support these uses.Yarrow is sometimes called bloodwort. Don't confuse this with Bloodroot.",
                        vegetation: "Yarrow vegetation description",
                        vegetationPhoto: 'https://kort.ni.is/geoserver/ni/wms?service=WMS&version=1.1.0&request=GetMap&layers=ni:island-haed,ni:Floraisl_dreifing&cql_filter=Include;nafn=%27Achillea%20millefolium%27&styles=&bbox=239093.000,290000.000,761000.00,679982.000&width=1325&height=994&srs=EPSG:3057&format=image%2Fjpeg',
                    },
                    {
                        names: {
                            english: "Lady's Mantle",
                            latin: "Alchemilla alpina",
                            icelandic: 'Maríustakkur'
                        },
                        pathImageHerb: `${process.env.NEXT_PUBLIC_URL}images/alchemilla.png`,
                        medicalUses: ["diarrhea", "vaginal disorders", "menstrual disorders", "menopausal disorders"],
                        sideEffects: [],
                        precautions: ["pregnancy", "brest feeding"],
                        description: "Alchemilla vulgaris is a herbaceous perennial found throughout Europe, especially on upland grassland and verges. Thin round green stems (up to 60 cm but usually less) bear bright green, palmately lobed leaves with toothed edges.",
                        vegetation: "Lady's mantle vegetation description",
                        vegetationPhoto: 'https://kort.ni.is/geoserver/ni/wms?service=WMS&version=1.1.0&request=GetMap&layers=ni:island-haed,ni:Floraisl_dreifing&cql_filter=Include;nafn=%27Alchemilla%20alpina%27&styles=&bbox=239093.000,290000.000,761000.00,679982.000&width=1325&height=994&srs=EPSG:3057&format=image%2Fjpeg',
                    },
                    {
                        names: {
                            english: "Garlic",
                            latin: "Allium Sativa",
                            icelandic: 'Hvítlaukur'
                        },
                        pathImageHerb: `${process.env.NEXT_PUBLIC_URL}images/garlic.png`,
                        medicalUses: ["high blood pressure", "high blood sugar", "high cholesterol", "stomach discomfort"],
                        sideEffects: ["bad breath", "might increase the risk of bleeding"],
                        precautions: ["Garlic is possibly unsafe when used in medicinal amounts during pregnancy and when breast-feeding"],
                        description: 'Garlic description',
                        vegetation: "garlic vegetation description",
                    },
                    {
                        names: {
                            english: "Angelica",
                            latin: "Angelica archangelica",
                            icelandic: 'Ætihvönn'
                        },
                        pathImageHerb: `${process.env.NEXT_PUBLIC_URL}images/angelica.png`,
                        medicalUses: ["digestive disorders", "respiratory disorders","common cold", "flu" , "stress and anxiety",  "insomnia"],
                        sideEffects: ["Might make your skin more sensitive to sunlight"],
                        precautions: ["pregnancy", "breast-feeding"],
                        description: 'Angelica description',
                        vegetation: 'Angelica vegetation description',
                        vegetationPhoto: 'https://kort.ni.is/geoserver/ni/wms?service=WMS&version=1.1.0&request=GetMap&layers=ni:island-haed,ni:Floraisl_dreifing&cql_filter=Include;nafn=%27Angelica%20archangelica%27&styles=&bbox=239093.000,290000.000,761000.00,679982.000&width=1325&height=994&srs=EPSG:3057&format=image%2Fjpeg',

                    },
                    {
                        names: {
                            english: "Birch",
                            latin: "Betula pubescens",
                            icelandic: 'Birki'
                        },
                        pathImageHerb: `${process.env.NEXT_PUBLIC_URL}images/birch.png`,
                        medicalUses: ["joint pain", "kidney stones", "bladder stones", "dandruff"],
                        sideEffects: ["drowsines", "increased urination", "skin irritation"],
                        precautions: ["pregnancy", "breast-feeding", "allergy to wild carrot, mugwort, celery, and other spices", "High blood pressure"],
                        description: 'Birch description',
                        vegetation: 'Birch vegetation description',
                        vegetationPhoto: 'https://kort.ni.is/geoserver/ni/wms?service=WMS&version=1.1.0&request=GetMap&layers=ni:island-haed,ni:Floraisl_dreifing&cql_filter=Include;nafn=%27Betula%20pubescens%27&styles=&bbox=239093.000,290000.000,761000.00,679982.000&width=1325&height=994&srs=EPSG:3057&format=image%2Fjpeg',

                    },
                ].map((herb,index) => {
                    return {...herb,id:index}
                }));
            default:
                return res.status(400).json({ error: "No Response for This Request" });
        }
    });
}

let nextIdHerb = 0;