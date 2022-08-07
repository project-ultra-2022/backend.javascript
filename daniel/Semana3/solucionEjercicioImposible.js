function MinWindowSubstring(strArr) {
    let arrayN = strArr[0].split("")
    let arrayK = strArr[1].split("")
    let results = []
    // Find the positions of letters that are equal in both strings
    arrayN.forEach((n, index) => {
        arrayK.forEach((k) => {
            if (n == k) results.push({ position: index, letter: k })
        })
    });
    // Clean duplicate elements
    let aux = {}
    results = results.filter((elem) => {
        let exists = !aux[elem.position]
        aux[elem.position] = true
        return exists
    })
    // Find amount of duplicate letters in the second string
    let amountLettersK = {}
    arrayK.forEach((k) => {
        amountLettersK[k] = (amountLettersK[k] || 0) + 1
    })
    let uniqueK = arrayK.filter((k, index) => { return arrayK.indexOf(k) === index })
    // Find all possible matching options
    let options = []
    let allLettersByPosition = results.map((elem) => { return elem.position })
    let firstPosition = allLettersByPosition[0];
    let lastPosition = allLettersByPosition[allLettersByPosition.length - 1];
    uniqueK.forEach((unique) => {
        if (amountLettersK[unique] > 1) {
            let newResult = results.filter((elem) => { return elem.letter == unique })
            let arrayIndividualLetter = newResult.map((elem) => { return elem.position })
            arrayIndividualLetter.forEach((elem) => {
                if (elem != firstPosition && elem != lastPosition) {
                    options.push(strArr[0].slice(firstPosition, elem + 1))
                    options.push(strArr[0].slice(elem, lastPosition + 1))
                }
            })
        }
    })
    if (options.length == 0) options.push(strArr[0].slice(firstPosition, lastPosition + 1))
    // Find the correct answer
    let response = []
    options.forEach((option) => {
        let check = true;
        let startPositions = []
        let endPositions = []
        arrayK.forEach((k) => {
            if (!option.includes(k)) {
                check = false;
            } else {
                if (option.indexOf(k) != -1) startPositions.push(option.indexOf(k));
                if (option.lastIndexOf(k) != -1) endPositions.push(option.lastIndexOf(k));
            }
        })
        if (check) {
            startPositions = startPositions.sort((a, b) => { return a - b })
            endPositions = endPositions.sort((a, b) => { return a - b })
            let resp1 = option.slice(endPositions[0], startPositions[startPositions.length - 1] + 1);
            if (resp1.length > 0) resp1 = response.push(resp1)
            let resp2 = option.slice(startPositions[0], startPositions[startPositions.length - 1] + 1)
            if (resp2.length > 0) resp2 = response.push(resp2)
        }
    })
    let arrayAmountLettersK = []
    arrayK.forEach((k) => {
        let findK = arrayAmountLettersK.find(elem => elem.letter == k);
        if (findK != undefined) {
            findK.size++
        } else {
            arrayAmountLettersK.push({
                letter: k,
                size: 1
            })
        }
    })
    let areNot = []
    response.forEach((r) => {
        check = true;
        let amountLettersResponse = []
        r.split("").forEach((elem) => {
            let findElem = amountLettersResponse.find(e => e.letter == elem);
            if (findElem != undefined) {
                findElem.size++
            } else {
                amountLettersResponse.push({
                    letter: elem,
                    size: 1
                })
            }
        })
        arrayAmountLettersK.forEach((k) => {
            amountLettersResponse.forEach((l) => {
                if (k.letter == l.letter && !(l.size >= k.size)) {
                    areNot.push(r)
                }
            })
        })
    })
    let finalResponse = response[0];
    if (areNot.length > 0) {
        finalResponse = response.filter((final) => {
            return !areNot.includes(final)
        })
        finalResponse = finalResponse[0]
    }
    return finalResponse;
}
console.log(MinWindowSubstring(["ahffaksfajeeubsne", "jefaa"]));