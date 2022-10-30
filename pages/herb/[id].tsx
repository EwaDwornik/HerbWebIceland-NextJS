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
                    ))}</div>
                <div className="herb-background">

                <div className="herb-name-box">                     <div>
                            {herb.medicalUses.map((use: string, key) => (
                                <Link key={deleteSpace(use)}
                                      href={"/symptom?searchedSymptom=" + deleteSpace(use)}
                                      scroll={true}>
                                    <a><h5>{use}</h5></a>
                                </Link>)
                            )}
                        </div>
                        <div>
                            <Image src={herb.imageHerb} alt={herb.names[Language.english]}/>
                        </div>
                        <div>
                            {herb.precautions.map((precaution: string, key) => (
                                <h5 key={herb.id}>{precaution}</h5>)
                            )}
                        </div>
                    </div>

                    <div className="herb-name-box">
                        <div>{herb.vegetation}</div>
                        <img className="vegetation-img" src={herb.vegetationPhoto} alt={herb.names.english}/>
                    </div>
                </div>
            </div>
        )
    } else {
        return (<div className="page">
            <h4>Herb with this id does not exist in the data base yet.</h4>
        </div>)
    }
}

