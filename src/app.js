function generateDomains() {
  let middle = ["apple", "popcorn", "water"];
  var prefixes = ["coding", "testcoding", "learncoding"];
  var suffix = [".com", ".org", ".edu"];

  for (var i = 0; i < prefixes.length; i++)
    for (var a = 0; a < middle.length; a++)
      for (var b = 0; b < suffix.length; b++)
        console.log(prefixes[i] + middle[a] + suffix[b]);
}
console.log(generateDomains());
