import { generateDate } from "./generate-date"

/**
 * Generates an array of appointment dates.
 * 
 * This function creates and returns an array of 'n' appointment dates,
 * each randomly chosen between 3 and 10 days after today.
 * 
 * @function availableDates
 * @param {number} n - The number of appointment dates to generate.
 * @returns {string[]} An array of appointment dates formatted as DD/MM/YYYY.
 */
const availableDates = (n: number): Array<string> => {
    // Tracker to count occurrences of each date
    let availableDates = []
    let dateCount = new Map()

    for (let i = 0; i < n; i++) {
        let newDate
        let attemptCounter = 0

        do {
            attemptCounter++
            newDate = generateDate()
        } while (dateCount.get(newDate) >= 10 || attemptCounter === 70)

        // Add the generated date to the appointment array
        availableDates.push(newDate)

        // Update the appointment count
        dateCount.set(newDate, (dateCount.get(newDate) || 0) + 1)
    }

    return availableDates
}

/**
 * Generates an array of appointment shifts.
 * 
 * This function creates and returns an array of 'n' appointment shifts,
 * each randomly chosen between 'Matutino' (Morning shift) and 'Vespertino' (Afternoon shift).
 * 
 * @function defineShift
 * @param {number} n - The number of appointment shifts to generate.
 * @returns {string[]} An array of randomly appointment shifts.
 */
const defineShift = (n: number): Array<string> => {
    let availableTime = []

    for (let i = 0; i < n; i++) {
        let numRandom = Math.floor(Math.random() * 153)
        availableTime.push(numRandom % 2 === 0 ? 'Matutino' : 'Vespertino')
    }

    return availableTime
}

export { availableDates, defineShift }