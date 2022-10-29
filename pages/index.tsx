import {Herb, Language} from "../model";
import {herbsDB} from "../data/herbs";
import Link from "next/link";
import Image from "next/image";
import arrowup from "/public/images/arrow-up.png"

import React, {useState} from "react";

//Page where you can see all herbs in alphabetic chronology.

//function that sorts herbs by a chosen language
function sortByLanguage(herbs: Herb[], lang: Language): Herb[] {
    return [...herbs].sort((a: Herb, b: Herb) => (a.names[lang] > b.names[lang]) ? 1 : -1)
}

function Home() {
    const defaultLanguage = Language.english;
    const [herbs, setHerbs] = useState(sortByLanguage(herbsDB, defaultLanguage));
    const [sortedBy, setSortedBy] = useState(defaultLanguage);

    function sortStateBy(lang: Language) {
        setHerbs(sortByLanguage(herbs, lang));
        setSortedBy(lang)
    }

    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = (event: any) => {
        setSearchTerm(event.target.value);
    };

    const results = herbs.filter(herb =>
        (herb.names[Language.latin]).toLowerCase().includes(searchTerm) ||
        (herb.names[Language.english]).toLowerCase().includes(searchTerm) ||
        (herb.names[Language.icelandic]).toLowerCase().includes(searchTerm)
    );

    return (<div>
            <div id="first">
                <p className="animated bounceInLeft">YOU MIGHT THINK THAT ICELANDIC FLORA IS POOR...</p>
            </div>
            <div className="home-page-decription">
                <h5>...and you might be right</h5>
                But! Between the lava fields and glaciers you can find plenty of medical herbs, at least 85,
                that can help you to improve your life.<br/>
                Tough climate made them very potent, few leaves taken from birch won’t harm the tree, but their
                diuretic properties can help you with getting rid of excess water in your body. <br/>Some
                things are just good to know and that’s why this website exists. <br/>
                We categorised local herbs to
                help you find the ones for your current needs. <br/>
                Enjoy!
            </div>
            <div id="first"></div>
            <div className="high-div home-page-navigation ">
                <div><Link href="/#herbs-by-name" scroll={false}>Herbs by name</Link></div>
                <div><Link href="/symptom">Herbs by symptom</Link></div>
                <div><Link href="/contact">Contact</Link></div>
                <div><Link href="/workshops">Workshops</Link></div>
                <div><Link href="/articles">Articles</Link></div>
            </div>
            <div id="second"></div>
            <div id="herbs-by-name" className="center-element">
                <div className="space-around pos-relative">
                    <select
                        onChange={(e: any) => sortStateBy(e.target.value)}
                        className="effect-green">
                        <option selected>    sort by language</option>
                        <option value="icelandic">Icelandic</option>
                        <option value="english">English</option>
                    </select>
                    <span className="focus-border"></span>

                </div>

                <div className="center-element pos-relative">
                    <input
                        type="text"
                        placeholder=" search"
                        className="effect-green"
                        value={searchTerm}
                        onChange={handleChange}
                    />
                    <span className="focus-border"></span>

                </div>
            </div>


            <div className="space-around ">
                {results.map((single) =>
                    // eslint-disable-next-line react/jsx-key
                    <Link href={"/herb/" + single.id}>
                        <div className="herb-card">
                            <div>
                                <Image src={single.imageHerb}/>
                            </div>
                            <div>
                                <h5>{single.names[sortedBy]} </h5>
                                <p>{single.names[Language.latin]}</p>
                            </div>

                        </div>
                    </Link>
                )}
            </div>
            <div id="second">
                <Link href="/#first" scroll={false}><Image src={arrowup}/></Link>
                <div className="credits">
                    photos by <Link href="https://clementcoudeyre.com" target="_blank">Clément
                    Coudeyre</Link></div>
            </div>

        </div>

    )
}

export default Home;

