{


    const countWordOccurrences = (sentence: string, word: string): number => {
        let arrayOfAllWords: string[] = sentence.split(" ");
        let wordCount: number = 0;
        for (const arrayOfAllWord of arrayOfAllWords) {
            if (arrayOfAllWord.toLowerCase() == word.toLowerCase())
                wordCount += 1;
        }
        return wordCount;
    }

    console.log(countWordOccurrences("I love typescript", "typescript"))




}