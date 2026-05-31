 const name = "mayank"
 const repoCount = 5

 console.log(name + " has " + repoCount + " repositories") // concatenation

 // with string interpoliation -->
    console.log(`${name} has ${repoCount} repositories`) // string interpolation

    const gameName = "MayankChauhan"
    console.log(gameName[2]) // Output: "y" (the character at index 2)
    console.log(gameName.length) // Output: 12 (length of the string)
    console.log(gameName.toUpperCase()) // Output: "MAYANKCHAUHAN" (string converted to uppercase)
    console.log(gameName.toLowerCase()) // Output: "mayankchauhan" (string converted to lowercase)
    console.log(gameName.includes("Chauhan")) // Output: true (checks if the substring "Chauhan" is present in the string)
    console.log(gameName.startsWith("Mayank")) // Output: true (checks if the string starts with "Mayank")
    console.log(gameName.endsWith("Chauhan")) // Output: true (checks if the string ends with "Chauhan")
    console.log(gameName.indexOf("a")) // Output: 1 (returns the index of the first occurrence of "a" in the string)
    console.log(gameName.charAt(3)) // Output: "a" (returns the character at index 3)
    console.log(gameName.slice(0, 6)) // Output: "Mayank" (returns a substring from index 0 to 6, excluding index 6)
    console.log(gameName.replace("Mayank", "John")) // Output: "JohnChauhan" (replaces "Mayank" with "John" in the string) 

    // In summary, JavaScript provides various string methods that allow you to manipulate and analyze strings in different ways. These methods can be used to perform operations such as changing the case of a string, checking for the presence of substrings, extracting parts of a string, and replacing content within a string. Understanding these string methods is essential for working effectively with strings in JavaScript. 