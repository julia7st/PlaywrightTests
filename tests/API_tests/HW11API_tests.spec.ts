import { test, expect, APIResponse } from "@playwright/test";

test("PUT - Update data for the specific user", async ({ request }) => {
  let userId = 3;
  const newData = await request.put(`https://reqres.in/api/users/${userId}`, {
    data: {
      name: "John",
      job: "QA",
    },
  });
  const responseBody = await newData.json();
  console.log(responseBody);
  expect(newData.status()).toBe(200);
  expect(responseBody.name).toBe("John");
  expect(responseBody.job).toBe("QA");
});

test("Patch the user", async ({ request }) => {
  let userId = 3;
  const response = await request.patch(
    `https://reqres.in/api/users/${userId}`,
    {
      data: {
        name: "Harry",
        job: "Dev",
      },
    }
  );
  const responseBody = await response.json();
  console.log(responseBody);
  expect(response.status()).toBe(200);
  expect(responseBody.name).toBe("Harry");
  expect(responseBody.job).toBe("Dev");
});

test("Delete the user", async ({ request }) => {
  const response = await request.delete(`https://reqres.in/api/users/2`);
  expect(response.status()).toBe(204);
});
