// Activity 01 objects creation and access

// task 01 (create an object representing a book with properties like title , author and year and log the object to the console)
const book = {
    title: "MALGUDI DAYS",
    author: "R.K. NARAYAN",
    year: 1943,
}
//console.log(book);

// task 02 ( acces and log the title and author properties of the book object)
// const author = book.author;
// const title = book.title;
// console.log(author);
// console.log(title);

// console.log(book.author);
// console.log(book.title);

// Activity 02 objects methods

// task 03 ( add a method to the book object that return a string with book's title and author and log of the result of calling this method)
// function addMethod(book){
//     return book.title+" "+ book.author;
// }
// console.log(addMethod(book));

// task 04 ( add a method to the book object that takes a paramenter(year) and update the book's years propertiy, log the updated year property)
// book.updatedYear = function(year){
//     return year ;
// }
// console.log(book.updatedYear(1950));

// Activity 03 nested objects

// task 05 (ceate a nested object representing a library with properties like name and books(an array of book object) log the library object to the console)
// const library = {
//     libraryName:"Hitesh Library",
//     location:"Jaipur(RJ)",
//     book1:[
//         "title - MALGUDI DAYS",
//         "year - 1943",
//     ],
//     book2:[
//         "title - The Private Life of an Indian Prince",
//         "year - 1953",
//     ]
// }
//  console.log(library);

// task 06 (acces and log the name of the library and the title of the books in the library)
// const library1 = {
//     libraryName:"Hitesh Library",
//     location:"Jaipur(RJ)",
    
//     book1_title:"MALGUDI DAYS",
//     book1_year:1943,
    
    
//     book2_title:"The Private Life of an Indian Prince",
//     book2_year:1953,
    
// }
// console.log(library1.libraryName);
// console.log(library1.book2_title);

// Activity 04 The this keyword
 
// task 07 ( add a method to the book object to use this keyword to return a string with the book's title and year and log the reasult to calling this method)
// const book1 = {
//     title: "MALGUDI DAYS",
//     author: "R.K. NARAYAN",
//     year: 1943,
//     m1:function(){
//         return this.title+" "+this.year;
        
//     }
// }
// console.log(book1.m1());

// Activity 05 object iteration

// task 08 (use for .... in loop to iterate over the properties of the book objects and log each properties and it's value)
// for (i in book){
//     console.log(i+":"+book[i]);
// }

// task 09 (use object.key and object.value method to log all the key and value of the book object)
console.log(book);