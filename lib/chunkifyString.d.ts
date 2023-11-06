/**
 * @description Splits a string into chunks of a maximum size, last character of each chunk is a splitter character or end of string.
 */
declare function chunkifyString(str: string, maxChunkSize: number, splitter?: string): string[];