The Firebase SDK might throw an error if you try to access a property of a document snapshot before the promise resolves. For example, if you use `doc.data().someProperty` before the asynchronous operation `getDoc(docRef)` completes, you will get an error because `doc.data()` will be undefined.