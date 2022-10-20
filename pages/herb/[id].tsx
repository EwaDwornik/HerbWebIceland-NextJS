import { useRouter } from 'next/router'

export function HerbPage() {
    const router = useRouter();
    return <div>Herb #{router.query.id}</div>;
}