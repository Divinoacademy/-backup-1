const express = require('express');
const app = express();
let PORT =  3000;

//GET Request
app.get('/', (req, res) => {
	res.send('hello World')
});

app.listen(PORT, () => {
	console.log(`Server listening from Port ==> ${PORT}...`)
})
