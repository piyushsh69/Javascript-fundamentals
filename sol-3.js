const checkRegEx = (string) => {
    let pattern = /[fldm23@!]/g;
    let output = string.match(pattern);
    console.log(output);
}

checkRegEx('@full stack development 2!');
