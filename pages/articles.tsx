import React, {useState} from 'react';
import {artcilesDB} from "../data/articles";
import Image from "next/image";
import Link from "next/link";

// Page where you can read articles about herbs.
function Articles() {
    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = (event: any) => {
        setSearchTerm(event.target.value);
    };

    const ExpandableText = ({children, descriptionLength}: any) => {
        const fullText = children;

        // Set the initial state of the text to be collapsed
        const [isExpanded, setIsExpanded] = useState(false);

        // This function is called when the read more/less button is clicked
        const toggleText = () => {
            setIsExpanded(!isExpanded);
        };


        return (
            <p className='text'>
                {isExpanded ? fullText : `${fullText.slice(0, descriptionLength)}...`}<br/>
                <div onClick={toggleText} className='btn btn-article'>
                    {isExpanded ? 'Show less' : 'Show more'}
                </div>
            </p>
        );
    };

    const results = artcilesDB.filter(article =>
        (article.title).toLowerCase().includes(searchTerm) ||
        (article.shortDescription).toLowerCase().includes(searchTerm)
    );

    return (
        <div className="article-background ">
            <div className="article-box animated bounceInLeft">
                <p>What are you seeking? Check if we have written an article about it!</p>
                <div><input
                    type="text"
                    className="form-control searching-child searching-articles"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleChange}
                /></div>
            </div>
            <div>

                {results.map((article, key) =>
                    <div key={article.id}>
                        <div>
                            <div className="article-card">
                                <div className="image-wrapper">
                                    <Image className="image-1" layout='fill' src={article.imageArtilces} alt={article.title}/>
                                    <Image className="image-2" layout='fill' src={article.imageArtilces} alt={article.title}/>
                                    <Image className="image-3" layout='fill' src={article.imageArtilces} alt={article.title}/>
                                    <Image className="image-4" layout='fill' src={article.imageArtilces} alt={article.title}/>
                                </div>
                                <div>
                                    <h5>{article.title}</h5>
                                    {article.shortDescription} < br/>< br/>
                                    <ExpandableText descriptionLength={120}>
                                        {article.longDescription}
                                    </ExpandableText>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                }
            </div>
            <div className="credits">
                photo by <Link href="https://www.pexels.com/@pixabay/" target="_blank">Pixabay</Link>
            </div>
        </div>
    );
}

export default Articles;





