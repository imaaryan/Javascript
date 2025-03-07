function shinyDiamondRug(n) {
  let result = "";

  for (let i = 1; i <= n; i++) {
    result += " ".repeat(n - i) + "*".repeat(i * 2 - 1) + "\n";
  }
  for (let i = n - 1; i >= 1; i--) {
    result += " ".repeat(n - i) + "*".repeat(i * 2 - 1);
    if (i !== 1) result += "\n";
  }

  console.log(result);
}

shinyDiamondRug(3);

// Example Output :
// console.log("  *  ");
// console.log(" *** ");
// console.log("*****");
// console.log(" *** ");
// console.log("  *  ");
