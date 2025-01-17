const express = require('express');
const https = require('https');
const PORT = 8080;
const app = express();

/* JSON body parse*/
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// ------------------ firebase 
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://proyecto-a-fba61.firebaseio.com"
});

const db = admin.firestore();
//----------start


app.get('/hello', async (req, res, next) => {
    const r = await db.collection('users').add({ 'name': 'ricardo' });

    res.send('Welcome to Firebase Cloud Functions');
});

app.get('/products', async (req, res, next) => {
    const snapshot = await db.collection("products").get();
    var data = [];
    snapshot.forEach(doc => {
        data.push(doc.data());
    })
    res.send(data);
});

app.get('/orders', async (req, res, next) => {
    const snapshot = await db.collection("orders").get();
    var data = [];
    snapshot.forEach(doc => {
        data.push(doc.data());
    })
    res.send(data);
});

app.get('/postOrder', async (req, res, next) => {
    var data = {
        'date': Date(),
        'name': 'Andres Orozco',
        'direccion': 'Loma larga 123 mitras',
        'productos': 'Collar de oro, collar de oro',
        'total': 800
    }
    const r = await db.collection('orders').add(data);
    res.status(200).send('success')
});




//---------- end
app.listen(PORT, () => {
    console.info('Server is running on PORT:', PORT);
});
