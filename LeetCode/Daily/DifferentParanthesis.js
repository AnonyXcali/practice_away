function diffWaysToCompute(expression) {
    let result = [];
    let math = new Set(["-", "+", "*"]);
    const compute = (str) => {
        let result = [];
        if (!isNaN(Number(str)))
            return [parseInt(str, 10)];
        for (let i = 0; i < str.length; i += 1) {
            let operator = str.charAt(i);
            if (math.has(operator)) {
                let leftResults = compute(str.substring(0, i));
                let rightResults = compute(str.substring(i + 1, str.length));
                for (let left of leftResults) {
                    for (let right of rightResults) {
                        switch (operator) {
                            case "-":
                                result.push(left - right);
                                break;
                            case "+":
                                result.push(left + right);
                                break;
                            case "*":
                                result.push(left * right);
                                break;
                        }
                    }
                }
            }
        }
        return result;
    };
    return compute(expression);
}
;
const main = () => {
    let expression = "2-1-1";
    let ans = diffWaysToCompute(expression);
    console.log(ans);
};
main();
