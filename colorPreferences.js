let favoriteColors = [];

for (let i = 0; i < 5; i++) {
    let color = prompt("Enter a color you like:");
    favoriteColors.push(color);  
    console.log("Updated color list:", favoriteColors);  
}

while (true) {
    let addMore = prompt("Do you want to add another color? (yes/no):").toLowerCase();
    if (addMore === "yes") {
        let newColor = prompt("Enter another color:");
        favoriteColors.push(newColor);
        console.log("Updated color list:", favoriteColors);  
    } else {
        console.log("Final color list:", favoriteColors);
        break;
    }