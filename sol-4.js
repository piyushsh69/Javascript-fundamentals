function extractDateParts(regexPattern, inputString) {
    const regex = new RegExp(regexPattern);
    const match = regex.exec(inputString);
    if (match) {
        return {
            fullMatch: match[0],
            day: match[1],
            month: match[2],
            year: match[3]
        };
    } else {
        return null;
    }
}

const testPatterns = [
    {
        pattern: /(\d{2})-(\d{2})-(\d{4})/,
        input: "Today's date is 16-05-2024"
    },
    {
        pattern: /(\d{4})-(\d{2})-(\d{2})/,
        input: "The event will take place on 2024-05-16"
    },
    {
        pattern: /(\d{1,2})\/(\d{1,2})\/(\d{4})/,
        input: "The deadline for submission is 5/16/2024"
    }
];

testPatterns.forEach(test => {
    const result = extractDateParts(test.pattern, test.input);
    if (result) {
        console.log(`Input: "${test.input}"`);
        console.log("Matched Date Parts:");
        console.log(result);
        console.log("------------------------");
    } else {
        console.log(`No match found in input: "${test.input}"`);
    }
});
