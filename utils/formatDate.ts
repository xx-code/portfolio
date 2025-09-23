export default function formatDate(locale: string, date: Date): string {
    return date.toLocaleDateString(locale, {
        year: 'numeric',
        day: '2-digit',
        month: '2-digit'
    }) 
}