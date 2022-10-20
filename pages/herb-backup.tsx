import Link from 'next/link';
import {herbsDB} from "./api/herbs";

//Linked to
const ROUTE_HERB_ID = "herb/[id]";

export default function HerbBackup() {

    return (

        <div>
            {herbsDB.map((herb) => (
                <div key={`herb-${herb.id}`}>
                    <Link
                        href={{
                            pathname: ROUTE_HERB_ID,
                            query: {id: herb.id}
                        }}
                    >
                        <a>{herb.names.english}</a>
                    </Link>
                </div>
            ))}
        </div>
)
}