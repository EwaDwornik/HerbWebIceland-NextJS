import React from 'react';
import Link from "next/link";

function Navigation() {
    return (<header className="navigation">
            <span className="arrow"></span>
            <div className="navigation-links">
                <Link href="/herbs-by-name">Herbs by name</Link>
                <Link href="/herbs-by-symptom">Herbs by symptom</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/workshops">Workshops</Link>
                <Link href="/articles">Articles</Link>
            </div>
        </header>
    )
}

export default Navigation;


