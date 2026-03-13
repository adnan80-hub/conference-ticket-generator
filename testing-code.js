

let textArea = document.querySelector("textarea");
let button = document.querySelector("button");
let inputFile = document.querySelector("input");


button.onclick = function () {
    let blob = new Blob([textArea.value], {
        type: "text/plain",
    })

    let link = document.createElement("a");
    link.download = `${inputFile.value}.txt`;
    link.href = URL.createObjectURL(blob);
    link.click();
}

function first_non_repeating_letter(word) {
    let convert = word.toLowerCase();
    return convert.split("").find((ele, ind) => convert.indexOf(convert[ind]) === convert.lastIndexOf(convert[ind]))
}

console.log(first_non_repeating_letter("stress")) // t
console.log(first_non_repeating_letter("sTreSS")) // T
console.log(first_non_repeating_letter("sssssss")) // ""    

console.log("=".repeat(33));


function formatName(theName) {
    let convert = theName.toLowerCase();
    let result = convert.trim().split(/\s+/).map((ele) => ele[0]).join(".")
    return result[0].toUpperCase() + result.slice(1).toLowerCase()
}

console.log(formatName("  Osama   Elzero  ")); // O.e
console.log(formatName("Osama Elzero")); // O.e
console.log(formatName("Elzero Web School")); // E.w.s

console.log("=".repeat(33));

