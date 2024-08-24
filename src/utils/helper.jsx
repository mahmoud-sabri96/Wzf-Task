// make the word has specific characters length and replace the rest char with "..."
export const truncateWord = (word, specificLength) => {
    return word.length > specificLength ? word.split('').splice(0, specificLength).join('') + '.....' : word
}
