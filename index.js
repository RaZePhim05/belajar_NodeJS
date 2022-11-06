const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/test", (req, res) => {
  let response = {
    message: "Ini end-point pertama",
    method: req.method,
    code: res.statusCode,
  };
  res.json(response);
});

// endpoint "/profil/nama/umur" dengan method GET
app.get("/profil/:name/:age", (req, res) => {
  // :name dan :age → diberikan titik dua didepan menunjukkan "name" dan "age"
  // bersifat dinamis yang dapat diganti nilai nya saat melakukan request
  // menampung data yang dikirimkan
  let name = req.params.name;
  // mengambil nilai pada parameter name
  let age = req.params.age;
  // mengambil nilai pada parameter age
  // membuat objek yang berisi data yang akan dijadikan response
  // response berisi data nama dan umur sesuai dengan nilai parameter
  let response = {
    nama: name,
    umur: age,
  };
  // memberikan response dengan format JSON yang berisi objek di atas
  res.json(response);
});

app.get("/convert/celcius/:suhu", (req, res) => {
  let suhu = Number(req.params.suhu);
  let reamur = (suhu * 4) / 5;
  let fahrenheit = (9 / 5) * suhu + 32;
  let kelvin = suhu + 273;
  let response = {
    celcius: suhu,
    result: {
      reamur: reamur,
      fahrenheit: fahrenheit,
      kelvin: kelvin,
    },
  };
  res.json(response);
});

app.get("/convert/reamur/:suhu", (req, res) => {
  let suhu = Number(req.params.suhu);
  let celcius = (suhu * 5) / 4;
  let fahrenheit = (9 / 4) * suhu + 32;
  let kelvin = (5 / 4) * suhu + 273;
  let response = {
    reamur: suhu,
    result: {
      celcius: celcius,
      fahrenheit: fahrenheit,
      kelvin: kelvin,
    },
  };
  res.json(response);
});

app.get("/convert/fahrenheit/:suhu", (req, res) => {
  let suhu = Number(req.params.suhu);
  let celcius = (5 / 9) * (suhu - 32);
  let reamur = (4 / 9) * (suhu - 32);
  let kelvin = (5 / 9) * (suhu - 32) + 273;
  let response = {
    fahrenheit: suhu,
    result: {
      celcius: celcius,
      reamur: reamur,
      kelvin: kelvin,
    },
  };
  res.json(response);
});

app.get("/convert/kelvin/:suhu", (req, res) => {
  let suhu = Number(req.params.suhu);
  let celcius = suhu - 273;
  let reamur = (4 / 5) * (suhu - 273);
  let fahrenheit = (9 / 5) * (suhu - 273) + 32;
  let response = {
    kelvin: suhu,
    result: {
      celcius: celcius,
      reamur: reamur,
      fahrenheit: fahrenheit,
    },
  };
  res.json(response);
});

// end-point "/bujur_sangkar" dengan method POST
app.post("/bujur_sangkar", (req, res) => {
  // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
  let panjang = Number(req.body.panjang);
  // mengambil nilai panjang dari body
  let lebar = Number(req.body.lebar);
  // mengamil nilai lebar dari body
  let luas = panjang * lebar;
  let keliling = 2 * (panjang + lebar);
  // membuat objek yang berisi data yang akan dijadikan response
  let response = {
    panjang: panjang,
    lebar: lebar,
    luas: luas,
    keliling: keliling,
  };
  // memberikan response dengan format JSON yang berisi objek di atas
  res.json(response);
});

app.get("/bilangan/:bil", (req, res) => {
  let bil = Number(req.params.bil);

  if (bil % 2 == 0) {
    let response = {
      message: bil + " merupakan bilangan genap",
    };
    res.json(response);
  } else {
    let response = {
      message: bil + " merupakan bilangan ganjil",
    };
    res.json(response);
  }
});

app.listen(8000, () => {
  console.log("Sever run on port 8000");
});
