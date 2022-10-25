import React, {useEffect} from 'react';
import {Language} from "../model";
import ginkgo from '../public/images/ginkgo-pill.png'
import {allMedicalUses, deleteSpace} from "../services/utilities";
import {herbsDB} from "./api/herbs";
import {useRouter} from 'next/router'
import Image from 'next/image'
import Link from 'next/link';

// Page where user can see what herbs are good for a certain issue.
function Symptom() {
    const hash: any = useRouter();
    let activeClassName: string;
    console.log(hash);


    const symptomsCard: any[] = [];
    allMedicalUses.map((use) => {
        let herbsWithSymptom = herbsDB.filter(herb => (herb.medicalUses).includes(use))

        if ('#' + deleteSpace(use) === hash) {
            activeClassName = 'card m-2 symptom-card text-center activated';
        } else {
            activeClassName = 'card m-2 symptom-card text-center'
        }

        symptomsCard.push(
            <div id={'#' + deleteSpace(use)}>
                <div className={"symptom-card" + activeClassName}>
                    <div>
                        <h5>{use}</h5>
                    </div>
                    <div>
                        {herbsWithSymptom.map((i) => (
                                <Link href={"/herb/" + i.id}>
                                    <a><p>{i.names[Language.english]}</p></a>
                                </Link>
                            )
                        )}
                    </div>
                </div>
            </div>
        )
    })

    return (<div>
            <div className="symptom-box">
                <div>
                    <Image src={ginkgo} alt="ginkgo"/>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut
                    labore et dolore magna aliqua. Lectus vestibulum mattis ullamcorper velit sed ullamcorper.
                    In
                    nibh mauris cursus mattis. Amet est placerat in egestas erat. Tristique senectus et netus et
                    malesuada fames ac. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien.
                    Pellentesque elit uillamcorper dignissim cras tincidunt lobortis feugiat. At tempor commodo
                    ullamcorper a lacus vestibulum sed arcu non.
                </p>
            </div>
            <div className="space-around ">
                {symptomsCard}
            </div>
        </div>
    )
}

export default Symptom;



