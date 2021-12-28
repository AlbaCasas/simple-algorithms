const { prompt } = require("enquirer");

const books = [];

async function addBook() {
  const { title, author, numberOfPages } = await prompt([
    {
      type: "input",
      message: "Title:",
      name: "title",
    },
    {
      type: "input",
      message: "Author:",
      name: "author",
    },
    {
      type: "numeral",
      message: "Number of pages:",
      name: "numberOfPages",
    },
  ]);
  const book = { title, author, numberOfPages };
  books.push(book);
}

function view() {
  if (books.length === 0) {
    console.log("Your library is empty");
    return;
  }
  console.log("\nBooks in your collection:");
  books.forEach((book) => {
    console.log(book.title);
  });
}

async function main() {
  console.log("\nWelcome to your library!\n");
  let executeLoop = true;
  while (executeLoop) {
    const { selectedItem } = await prompt({
      message: "Choose an option",
      type: "select",
      choices: ["Add a book", "View collection", "Exit"],
      name: "selectedItem",
    });
    switch (selectedItem) {
      case "Exit":
        console.log("Bye!");
        executeLoop = false;
        break;
      case "Add a book":
        await addBook();
        continue;
      case "View collection":
        view();
        break;
    }
  }
}

main();
