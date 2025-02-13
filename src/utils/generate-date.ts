/**
 * Formats a given date into the DD/MM/YYYY format.
 * 
 * @function formatDate
 * @param {string} appointmentDatedate - The date to be formatted (e.g. YYYY-MM-DD)
 * @returns {string} A formatted date string in the format DD/MM/YYYY.
 */
const formatDate = (appointmentDatedate: string): string => {
    const [year, month, day] = appointmentDatedate.split('-')
    return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`
}

/**
 * Generates a random future date.
 * This function creates a new date between 3 and 10 days after today.
 * 
 * @function generateDate
 * @returns {string} A date string formatted as DD/MM/YYYY.
 */
const generateDate = (): string => {
    const today = new Date()
    const minDays = 3
    const maxDays = 10

    const randomDay = Math.floor(Math.random() * (maxDays - minDays + 1)) + minDays

    today.setDate(today.getDate() + randomDay)

    return formatDate(today.toISOString().split('T')[0])
}

export { generateDate }