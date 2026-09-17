export default function formatDate(locale: string, date: Date): string {
    return date.toLocaleDateString(locale, {
        year: 'numeric',
        day: '2-digit',
        month: '2-digit'
    }) 
}

export function formatDateMonth(locale: string, date: Date): string {
    return date.toLocaleDateString(locale, {
        year: 'numeric',
        month: 'short'
    })
} 

export function formatDateTimeOs(locale: string, date: Date): string {
    return date.toLocaleDateString(locale, {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    })
}