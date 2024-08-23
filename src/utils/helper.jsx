// make the word has specific characters length and replace the rest char with "..."
export const truncateWord = (word, charLength) => {
    return word.split('').splice(0, charLength).join('') + '.....'
}
