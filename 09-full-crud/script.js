const { prompt } = require("enquirer");

let books = [];

async function addBook() {
  const uuid = Math.random().toString(36).slice(-6);
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
  const book = { title, author, numberOfPages, uuid };
  books = [...books, book];
}

function display() {
  if (books.length === 0) {
    console.log("Your library is empty");
    return;
  }
  console.log("\nBooks in your collection:");
  books.forEach((book) => {
    console.log(`${book.uuid} - ${book.title}`);
  });
}

async function update() {
  if (books.length === 0) {
    console.log("Your library is empty");
    return;
  }
  display();
  const { uuidToUpdate } = await prompt({
    type: "input",
    name: "uuidToUpdate",
    message: "Which uuid do you want to edit?",
  });
  const chosenBook = books.find((book) => {
    return book.uuid === uuidToUpdate;
  });
  if (chosenBook === undefined) {
    console.log("Ese uuid no es valido");
    return;
  }
  const { newTitle, newAuthor, newPages } = await prompt([
    {
      name: "newTitle",
      type: "input",
      message: `New title for ${chosenBook.title}`,
    },
    {
      name: "newAuthor",
      type: "input",
      message: `New author for ${chosenBook.title}`,
    },
    {
      name: "newPages",
      type: "numeral",
      message: `New number of pages for ${chosenBook.title}`,
    },
  ]);
  books = books.map((book) => {
    if (book.uuid === chosenBook.uuid) {
      return {
        title: newTitle,
        author: newAuthor,
        numberOfPages: newPages,
        uuid: chosenBook.uuid,
      };
    }
  });
  console.log(`The book ${chosenBook.title} has been updated!`);
}

async function remove() {
  if (books.length === 0) {
    console.log("there is nothing to remove");
    return;
  }
  display();
  const { uuidChosen } = await prompt({
    type: "input",
    name: "uuidChosen",
    message: "Enter a uuid to remove",
  });
  const bookToRemove = books.find((book) => {
    return book.uuid === uuidChosen;
  });
  books = books.filter((book) => {
    return book.uuid !== bookToRemove.uuid;
  });
  console.log(`The book ${bookToRemove.title} has been deleted`);
}

async function main() {
  console.log("\nWelcome to your library!\n");
  let executeLoop = true;
  while (executeLoop) {
    const { selectedItem } = await prompt({
      message: "Choose an option",
      type: "select",
      choices: [
        "Add a book",
        "Update collection",
        "Display collection",
        "Remove a book",
        "Exit",
      ],
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
      case "Update collection":
        await update();
        continue;
      case "Remove a book":
        await remove();
        continue;
      case "Display collection":
        display();
        break;
    }
  }
}

main();
