async function Function1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Async Function 1");
    }, 1000);
  });
}

async function Function2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Async Function 2");
    }, 3000);
  });
}

async function Function3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Async Function 3");
    }, 5000);
  });
}

Function1()
  .then((result1) => {
    console.log(result1);
    return Function2();
  })
  .then((result2) => {
    console.log(result2);
    return Function3();
  })
  .then((result3) => {
    console.log(result3);
  })

  .catch((error) => {
    console.error("An error occurred:", error);
  });
