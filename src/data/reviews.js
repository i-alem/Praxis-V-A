// Review data for the website
export const reviews = [
    {
        name: "Maria Schmidt",
        rating: 5,
        comment: "Truncation Truncation Truncation Truncation Truncation Truncation Truncation Truncation Truncation Sehr professionelle Behandlung! Das Team ist kompetent und freundlich. Die Praxis ist modern ausgestattet und das Personal nimmt sich viel Zeit für jeden Patienten. Ich kann diese Praxis nur weiterempfehlen und komme gerne wieder.",
        googleUrl: "https://www.google.com/maps/reviews/@52.5200,13.4050,17z",
        date: "vor 2 Wochen"
    },
    {
        name: "Thomas Müller",
        rating: 5,
        comment: "Moderne Praxis mit top Ausstattung. Kann ich nur weiterempfehlen! Die Behandlung war sehr effektiv und ich habe schnell Fortschritte gemacht. Das gesamte Team ist sehr professionell und geht individuell auf die Bedürfnisse ein.",
        googleUrl: "https://www.google.com/maps/reviews/@52.5200,13.4050,17z",
        date: "vor 1 Monat"
    },
    {
        name: "Anna Weber",
        rating: 5,
        comment: "Individuelle Behandlung und sehr gute Beratung.",
        googleUrl: "https://www.google.com/maps/reviews/@52.5200,13.4050,17z",
        date: "vor 3 Wochen"
    },
    {
        name: "Michael Klein",
        rating: 5,
        comment: "Sehr zufrieden mit der Behandlung. Das Personal ist sehr nett.",
        googleUrl: "https://www.google.com/maps/reviews/@52.5200,13.4050,17z",
        date: "vor 1 Woche"
    },
    {
        name: "Sarah Fischer",
        rating: 5,
        comment: "Nach nur wenigen Sitzungen deutliche Verbesserung meiner Rückenschmerzen. Das Team ist sehr professionell und erklärt jeden Behandlungsschritt ausführlich. Die moderne Ausstattung und die angenehme Atmosphäre machen jeden Termin zu einem positiven Erlebnis. Besonders beeindruckt hat mich die individuelle Betreuung und die Tatsache, dass sich das Personal wirklich Zeit nimmt.",
        googleUrl: "https://www.google.com/maps/reviews/@52.5200,13.4050,17z",
        date: "vor 4 Wochen"
    },
    {
        name: "Robert Wagner",
        rating: 5,
        comment: "Kompetente Beratung und effektive Behandlung. Ich kann diese Praxis jedem empfehlen, der professionelle Physiotherapie sucht. Die Räumlichkeiten sind sehr sauber und modern eingerichtet, was sofort Vertrauen schafft.",
        googleUrl: "https://www.google.com/maps/reviews/@52.5200,13.4050,17z",
        date: "vor 2 Wochen"
    }
];

// Helper function to generate star SVGs
export function generateStars(rating) {
    return Array.from({ length: 5 }, (_, index) => {
        if (index < rating) {
            return '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
        } else {
            return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
        }
    }).join('');
}