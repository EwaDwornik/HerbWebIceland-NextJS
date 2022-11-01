import {useRouter} from 'next/router'
import {herbsDB} from "../../data/herbs";
import {Language} from "../../model";
import {deleteSpace} from "../../services/utilities";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function HerbPage() {
    const router = useRouter();
    const herb = herbsDB.find((h: { id: number }) => h.id === Number(router.query.id));
    const values = Object.values(Language);

    if (herb) {
        return (
            <div>
                <div className="space-around">
                    {values.map((lang: Language, key) => (
                        <div key={herb.id}>{herb.names[lang]}</div>
                    ))}
                </div>

                <div className="herb-background animated bounceInLeft">
                    <div className="lightBoxShadow">
                        <div className="circleBox">
                            <Image src={herb.imageHerb} alt={herb.names[Language.english]}/>
                        </div>
                        <div>
                            <p><h3>Medical uses:</h3></p>
                            {herb.medicalUses.map((use: string, key) => (
                                <Link key={deleteSpace(use)}
                                      href={"/symptom?searchedSymptom=" + deleteSpace(use)}
                                      scroll={true}>
                                    <a><p>{use}</p></a>
                                </Link>)
                            )}
                        </div>
                        <div>
                            <p><h3>Precautions:</h3></p>

                            {herb.precautions.map((precaution: string, key) => (
                                <p key={herb.id}>{precaution}</p>)
                            )}
                        </div>
                    </div>
                </div>
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

