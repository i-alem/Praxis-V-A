import { PRAXIS } from '../data/config.js';

const BASE = 'https://maps.googleapis.com/maps/api/place';

async function findPlaceId(apiKey) {
    const query = encodeURIComponent(`${PRAXIS.name} ${PRAXIS.street} ${PRAXIS.city}`);
    const url = `${BASE}/findplacefromtext/json?input=${query}&inputtype=textquery&fields=place_id&key=${apiKey}&language=de`;
    const res = await fetch(url);
    const data = await res.json();
    return data.candidates?.[0]?.place_id ?? null;
}

export async function fetchGoogleReviews() {
    const apiKey = import.meta.env.GOOGLE_PLACES_API_KEY;
    if (!apiKey) return null;

    try {
        const placeId = await findPlaceId(apiKey);
        if (!placeId) return null;

        const url = `${BASE}/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}&language=de&reviews_sort=newest`;
        const res = await fetch(url);
        const data = await res.json();
        const raw = data.result?.reviews;
        if (!raw?.length) return null;

        return raw.map(r => ({
            name:      r.author_name,
            rating:    r.rating,
            comment:   r.text,
            date:      r.relative_time_description,
            googleUrl: r.author_url,
        }));
    } catch {
        return null;
    }
}
