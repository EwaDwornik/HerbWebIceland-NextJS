import React, {useState} from 'react';
import {artcilesDB} from "./api/articles";
import Image from "next/image";

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
        <div>
            <div className="article-box">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut
                    labore et dolore magna aliqua. Lectus vestibulum mattis ullamcorper velit sed ullamcorper.
                    In
                    nibh mauris cursus mattis. Amet est placerat in egestas erat. Tristique senectus et netus et
                    malesuada fames ac. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien.
                    Pellentesque elit uillamcorper dignissim cras tincidunt lobortis feugiat. At tempor commodo
                    ullamcorper a lacus vestibulum sed arcu non.</p>
                <input
                    type="text"
                    className="form-control searching-child searching-articles"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleChange}
                />
            </div>
            <div>


                {results.map((article) =>
                    <div>
                        <div>
                            <div className="article-card">
                                <div className="article-img">
                                    <Image src={article.imageArtilces} className="img-fluid rounded-start"/>
                                </div>
                                <div>
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
                    </div>
                )
                }
            </div>
        </div>
    );
}

export default Articles;





