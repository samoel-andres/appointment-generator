import { readFile } from './src/utils/read-file'
import { availableDates, defineShift } from './src/utils/available-dates'
import { writeFileXLSX } from './src/utils/write-file'

/**
 * Launches the process of generating and saving appointment data..
 * 
 * This function reads folios from a file, generates appointment dates and shifts,
 * and writes the data to an Excel file.
 */
const main = async (): Promise<void> => {
    try {
        const folios = await readFile()

        if (folios.length === 0) {
            console.log('\nNo folios found in the file...')
            return
        }

        const n = folios.length

        // Generate appointment dates and shifts
        const dates = availableDates(n)
        const shifts = defineShift(n)

        // Prepare rows for Excel file
        const rows = [
            ['Folio', 'Cita', 'Horario']
        ]

        for (let i = 0; i < n; i++) {
            const newRow = [String(folios[i]), String(dates[i]), String(shifts[i])]
            rows.push(newRow)
        }

        // Write the data to an Excel file
        const written = await writeFileXLSX(rows)

        // Log result
        if (written) {
            console.log('\nProcess completed...')
        } else {
            console.error('\nAn error occurred while writting the file...')
        }
    } catch (err: unknown) {
        console.error('An unexpected error occured: ', (err as Error).message)
    }
}

main()