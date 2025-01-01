The correct way to access the data is to use `.then()` to handle the promise resolution:

```javascript
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const db = getFirestore();
const docRef = doc(db, 'yourCollection', 'yourDocumentId');

getDoc(docRef).then((doc) => {
  if (doc.exists()) {
    console.log('Document data:', doc.data().someProperty);
  } else {
    console.log('Document does not exist.');
  }
}).catch((error) => {
  console.log('Error getting document:', error);
});
```

Alternatively, you can use `async/await`:

```javascript
import { getFirestore, doc, getDoc } from 'firebase/firestore';

async function getData() {
  const db = getFirestore();
  const docRef = doc(db, 'yourCollection', 'yourDocumentId');
  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data().someProperty);
    } else {
      console.log('Document does not exist!');
    }
  } catch (error) {
    console.error('Error getting document:', error);
  }
}

getData();
```