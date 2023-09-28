const coding = ["JS", "Ruby", "Java", "Python", "cpp"];

// coding.map((c)=>{
//     console.log(c);
// })

coding.forEach(function (item) {
  // console.log(item);
  // printItem(item);
});

// function printItem(item) {
//   console.log(item);
// }

// coding.forEach(printItem);

// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });


const myCoding = [
    {
        languageName : "JavaScript",
        languageFileName: "JS"
    },
    {
        languageName : "CPP",
        languageFileName: ".cpp"
    },
    {
        languageName : "Java",
        languageFileName: ".java"
    },
    {
        languageName : "python",
        languageFileName: ".py"
    },
]

myCoding.forEach((item)=>{
    // console.log(item);
    console.log(item.languageName);
    console.log(item.languageFileName);
})