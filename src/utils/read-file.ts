import { promises as fs } from 'fs'

import { CONSTANTS } from '../constants'

const inputFile = CONSTANTS.INPUT_FILE

/**
 * Reads the input file and returns an array of numbers.
 * The file should contain one number per line.
 * 
 * @async
 * @function readFile
 * @returns {Promise<number[]>} A promise that resolves to an array of numbers. If an error occurs, an empty array is returned.
 * @throws Will log an error message if the file cannot be read.
 */
const readFile = async (): Promise<number[]> => {
    try {
        const data = await fs.readFile(inputFile, 'utf-8')
        const arrayValues = data
            .split('\n')
            .map(line => parseInt(line.trim(), 10))
            .filter(value => !isNaN(value))

        if (arrayValues.length === 0) return []

        console.log(`\nThe file at:\n${inputFile}\nwas successfully readed...`)
        return arrayValues
    } catch (err: unknown) {
        console.error('\nThe file cannot be read: ', (err as Error).message)
        return []
    }
}

export { readFile }