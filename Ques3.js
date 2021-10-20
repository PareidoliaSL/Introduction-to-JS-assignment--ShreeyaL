
var ToDoArray = [];
var check;

do{
    inTitle = prompt(" Add a task title");
    inDescription = prompt(" Add a task description");
    ToDoArray.push({title: inTitle, description: inDescription});
    console.log("Task added successfully!");
    check = prompt("more tasks(Y/N)?", "Y");
    console.log(check.toUpperCase());
}while (check.toUpperCase()=="Y")

console.log("\n TO DO LIST");

for ( let i in ToDoArray){
    console.log("Title: ", ToDoArray[i].title);
    console.log("Description: ", ToDoArray[i].description);
    }
