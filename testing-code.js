let nums = [10, -20, 300, 50, 100, -50];


// First Method

// let maxNumber = Math.max(...nums);

// Second Method
// let maxNumber = [];
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > 0 && nums[i] > 100) {
//         maxNumber.push(nums[i])
//     }
// }


// console.log(maxNumber); // 300

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
    let result = theName.trim().toLowerCase().split(" ").map((ele) => ele[0]).join(".")
    return result[0].toUpperCase() + result.slice(1)
}

console.log(formatName("Osama Elzero")); // O.e
console.log(formatName("Elzero Web School")); // E.w.s
console.log(formatName("  Osama   Elzero  ")); // O..e