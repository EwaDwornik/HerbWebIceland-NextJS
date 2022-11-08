import {useRouter} from 'next/router'
import {Herb, Language} from "../../model";
import {deleteSpace} from "../../services/utilities";
import React from "react";
import Link from "next/link";
import Image from "next/image";

function HerbPage({ herbsDB }: {herbsDB:Herb[]}) {
    const router = useRouter();
    const herb = herbsDB.find((h: { id: number }) => h.id === Number(router.query.id));
    const values = Object.values(Language);

    if (herb) {
        return (
            <div>
                <div className="space-around">
                    {values.map((lang: Language) => (
                        <div key={herb.id}>{herb.names[lang]}</div>
                    ))}
                </div>
                <div id="herbID"></div>
                <div className="animated bounceInLeft">
                    <div className="herbSymptoms">

                        <div>
                            <p><h3>Medical uses</h3></p>
                            {herb.medicalUses.map((use: string) => (
                                <Link key={deleteSpace(use)}
                                      href={"/symptom?searchedSymptom=" + deleteSpace(use)}
                                      scroll={true}>
                                    <a><p>{use}</p></a>
                                </Link>)
                            )}
                        </div>
                        <div className="circleBox">
                            <Image src={herb.pathImageHerb} alt={herb.names[Language.english]} layout="fill"/>
                        </div>
                        <div>
                            <p><h3>Precautions</h3></p>

                            {herb.precautions.map((precaution: string) => (
                                <p key={herb.id}>{precaution}</p>)
                            )}
                        </div>
                    </div>
                </div>
                <div id="herbID"></div>
                <div className="vegetation-box">
                    <div>{herb.vegetation}</div>
                    <img className="vegetation-img" src={herb.vegetationPhoto} alt={herb.names.english}/>
                </div>
                <div className="credits">
                    photo is taken by <Link href="https://www.pexels.com/@arthousestudio/" target="_blank">ArtHouse Studio</Link>
                </div>
            </div>
        )
    } else {
        return (<div className="page">
            <h4>Herb with this id does not exist in the data base yet.</h4>
        </div>)
    }
}


export const getServerSideProps = async (context: any) => {
    let herbsDB;
    const responseHerbsDB = await fetch(process.env.NEXT_PUBLIC_API_URL + "herbs", {
        method: "GET",
        headers: {
            "Content-type": "application/json",
        },
    });

    try {
        herbsDB = await responseHerbsDB.json();
    } catch (e) {}

    return {
        props: { herbsDB: herbsDB?.length ? herbsDB : [] },
    };
};

export default HerbPage;