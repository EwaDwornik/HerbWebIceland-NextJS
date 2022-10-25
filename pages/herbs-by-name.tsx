import {Herb, Language} from "../model";
import {herbsDB} from "../data/herbs";
import Link from "next/link";
import Image from "next/image";

import {useState} from "react";

//Page where you can see all herbs in alphabetic chronology.

//function that sorts herbs by a chosen language
function sortByLanguage(herbs: Herb[], lang: Language): Herb[] {
    return [...herbs].sort((a: Herb, b: Herb) => (a.names[lang] > b.names[lang]) ? 1 : -1)
}

function HerbsByName() {
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
                <h5>You might think that Icelandic flora is poor...</h5>
            </div>
            <div className="high-div homePageDecription">
                <h5>...and you might be right</h5>
                But! Between the lava fields and glaciers you can find plenty of medical herbs, at least 85,
                that can help you to improve your life.
                Tough climate made them very potent, few leaves taken from birch won’t harm the tree, but their
                diuretic properties can help you with getting rid of excess water in your body. <br/>Some
                things are just good to know and that’s why this website exists. <br/>
                We categorised local herbs to
                help you find the ones for your current needs. Enjoy!

            </div>

            <div className="center-element search-herb">
                <div className="space-around">
                    <select
                        className="form-select searching-child"
                        onChange={(e: any) => sortStateBy(e.target.value)}>
                        <option selected>sort by language</option>
                        <option value="icelandic">Icelandic</option>
                        <option value="english">English</option>
                    </select>
                </div>
                <div className="center-element">
                    <input
                        type="text"
                        className="form-control searching-child"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="space-around">
                {results.map((single) =>
                    // eslint-disable-next-line react/jsx-key
                    <Link href={"/herb/" + single.id}>
                        <div className="herb-card">
                            <div>
                                <Image src={single.imageHerb}/>
                            </div>
                            <div>
                                <h5 className="card-title">{single.names[sortedBy]} </h5>
                                <p className="card-text">{single.names[Language.latin]}</p>
                            </div>

                        </div>
                    </Link>
                )}
            </div>
            <div id="second">

            </div>
        </div>

    )
}

export default HerbsByName;

