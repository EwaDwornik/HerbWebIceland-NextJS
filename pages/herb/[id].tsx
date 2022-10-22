import {useRouter} from 'next/router'
import {herbsDB} from "../api/herbs";
import {Herb, Language} from "../../model";
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
                    {values.map((lang: Language) => (
                        <div>{herb.names[lang]}</div>
                    ))}</div>
                <div className="herb-name-box">
                    <div>
                        {herb.medicalUses.map((use: string) => (
                            <Link
                                href={"/symptom/#" + deleteSpace(use)}
                                scroll={true}>
                                <a><h5>{use}</h5></a>
                            </Link>)
                        )}
                    </div>
                    <div>
                        <Image className="herb-img" src={herb.imageHerb} alt={herb.names[Language.english]}/>
                    </div>
                    <div>
                        {herb.precautions.map((precaution: string) => (
                            <h5>{precaution}</h5>)
                        )}
                    </div>
                </div>
                <div className="space-around ">
                    <h3>Vegetation information</h3>
                </div>
                <div className="herb-name-box">
                    <div>{herb.vegetation}</div>
                    <img className="vegetation-img" src={herb.vegetationPhoto} alt={herb.names.english}/>
                </div>
            </div>
        )
    } else {
        return (<div className="page">
            <h4>Herb with this id doesn't exist in the data base yet.</h4>
        </div>)
    }
}

