import * as XLSX from 'xlsx'
import * as fs from 'fs'

import { CONSTANTS } from '../constants'

const outputPath = CONSTANTS.OUTPUT_FILE

/**
 * Writes data to an Excel (.xlsx) file.
 * 
 * This function creates a new Excel workbook, adds a worksheet with the provided data,
 * and saves the file to the specified output path.
 * 
 * @async
 * @function writeFileXLSX
 * @param {string[][]} data - A 2D array where each sub-array represents a row in the Excel file.
 * @returns {Promise<boolean>} `true` if the file was successfully written, otherwise `false`.
 * @throws Will log an error if the file cannot be written.
 */
const writeFileXLSX = async (data: string[][]): Promise<boolean> => {
    try {
        if (data.length === 1) {
            console.log('\nNo data...\n\nProcess completed...')
            return false
        }

        const workbook = XLSX.utils.book_new()
        const worksheet = XLSX.utils.aoa_to_sheet(data)

        XLSX.utils.book_append_sheet(workbook, worksheet, 'Citas')

        const excelFile = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' })

        fs.writeFileSync(outputPath, excelFile)

        console.log(`\nExcel file saved at:\n${outputPath}`)
        return true
    } catch (err: unknown) {
        console.error('\nAn unexpected error has occurred: ', (err as Error).message)
        return false
    }
}

export { writeFileXLSX }