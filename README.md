# Firebase Asynchronous Data Access Error

This repository demonstrates a common error in Firebase when accessing document data before the promise from a query resolves.  The `bug.js` file shows the erroneous code, attempting to access data prematurely.  The corrected version is in `bugSolution.js`, showcasing the proper use of `.then()` to handle the asynchronous operation.

## How to Reproduce

1. Clone the repository.
2. Install the Firebase SDK: `npm install firebase`
3. Configure your Firebase project (add your config to `firebase-config.js`).
4. Run `bug.js` - observe the error.
5. Run `bugSolution.js` - observe the successful data retrieval.

## Solution

Always use asynchronous methods like `.then()` or `async/await` when working with Firebase data to avoid undefined errors.