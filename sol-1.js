const outerFunction = (a) => {
    let b = 5;
    const innerFunction = () => {
        console.log(a + b);
    }
    return innerFunction;
};

const finalFunction = outerFunction(5);
finalFunction();
