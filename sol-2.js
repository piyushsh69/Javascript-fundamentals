const pattern = /Development/i;
const string1 = 'Full Stack Development'
const string2 = 'full stack development'
const string3 = 'full stack dev'

const checkRegEx = (pattern, string) => {
    return console.log(pattern.test(string));
}

checkRegEx(pattern, string1);
checkRegEx(pattern, string2);
checkRegEx(pattern, string3);