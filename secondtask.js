function syncAdd(a, b) {
  return a + b;
}

async function asyncAdd(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(syncAdd(a, b));
    }, 5000);
  });
}

asyncAdd(123, 321)
  .then((result) => {
    console.log("Result:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
