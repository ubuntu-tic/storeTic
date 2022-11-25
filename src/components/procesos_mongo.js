//Crear la BD
/*
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/storeTic";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
});
*/

//Crear la collections
/*
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/storeTic";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("storeTic");
    dbo.createCollection("ventas", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});
*/

//Insertar datos
/*
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/storeTic";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("storeTic");
    var myobj = [
        {
            "_id": 1,
            "urlImagen": "https://exitocol.vtexassets.com/arquivos/ids/11463148-500-auto?v=1752884775&width=500&height=auto&aspect=true",
            "nombre": "Jabon Rey",
            "descripcion": "Jabón azul en barra x3 unidades",
            "características": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
            "precio": 2350,
            "stock": 10
        },
        {
            "_id": 2,
            "urlImagen": "https://exitocol.vtexassets.com/arquivos/ids/11458345-500-auto?v=1753386663&width=500&height=auto&aspect=true",
            "nombre": "Detergente FAB en polvo",
            "descripcion": "Detergente en polvo multi uso",
            "características": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
            "precio": 23350,
            "stock": 100
        },
        {
            "_id": 3,
            "urlImagen": "https://exitocol.vtexassets.com/arquivos/ids/13315271-500-auto?v=1752889218&width=500&height=auto&aspect=true",
            "nombre": "Clorox",
            "descripcion": "Blanqueador ropa aroma floral",
            "características": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
            "precio": 16050,
            "stock": 36
        },
        {
            "_id": 4,
            "urlImagen": "https://exitocol.vtexassets.com/arquivos/ids/11455567-500-auto?v=1752893488&width=500&height=auto&aspect=true",
            "nombre": "Esponja eterna",
            "descripcion": "Esponja doble uso",
            "características": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
            "precio": 4760,
            "stock": 40
        },
        {
            "_id": 5,
            "urlImagen": "https://stockimages.tiendasd1.com/stockimages.tiendasd1.com/kobastockimages/IMAGENES/12001316.png",
            "nombre": "Bonaropa",
            "descripcion": "Detergente liquido para ropa oscura",
            "características": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
            "precio": 6450,
            "stock": 20
        },
        {
            "_id": 6,
            "urlImagen": "https://stockimages.tiendasd1.com/stockimages.tiendasd1.com/kobastockimages/IMAGENES/12000130.png",
            "nombre": "Polvo abrasivo brilla king",
            "descripcion": "polvo abrasivo para limpieza",
            "características": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
            "precio": 2150,
            "stock": 50
        },
        {
            "_id": 7,
            "urlImagen": "https://stockimages.tiendasd1.com/stockimages.tiendasd1.com/kobastockimages/IMAGENES/12000232.png",
            "nombre": "Limpia vidrios brilla king",
            "descripcion": "Liquido limpia vidrios brilla king",
            "características": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
            "precio": 2990,
            "stock": 30
        },
        {
            "_id": 8,
            "urlImagen": "https://stockimages.tiendasd1.com/stockimages.tiendasd1.com/kobastockimages/IMAGENES/12000231.png",
            "nombre": "Lavaloza brilla king",
            "descripcion": "lavaloza liquido brilla king",
            "características": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
            "precio": 2550,
            "stock": 21
        },
        {
            "_id": 9,
            "urlImagen": "https://exitocol.vtexassets.com/arquivos/ids/11456937-500-auto?v=1753752124&width=500&height=auto&aspect=true",
            "nombre": "Limpia Ya",
            "descripcion": "Detergente liquido limpia ya 1000 ml",
            "características": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
            "precio": 4840,
            "stock": 10
        },
        {
            "_id": 10,
            "urlImagen": "https://exitocol.vtexassets.com/arquivos/ids/1973296-500-auto?v=1753738811&width=500&height=auto&aspect=true",
            "nombre": "Dersa",
            "descripcion": "Suavizante manzana durazno",
            "características": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
            "precio": 29650,
            "stock": 17
        }
    ]
    dbo.collection("productos").insertMany(myobj, function(err, res) { //insertMany es para insertar varios objetos, insertOne para insertar uno solo
      if (err) throw err;
      console.log("Number of documents inserted: " + res.insertedCount);
      db.close();
    });
});
*/

//Leer datos de la base de datos
/*
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("storeTic");
  dbo.collection("productos").find({}).toArray(function(err, result) { //find({}) es para buscar todos los documentos de la colección, find({nombre: "Clorox"}) para buscar por nombre
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
*/

//Actualizar datos de la base de datos
/*
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("storeTic");
    var myquery = { _id: 3 };
    var newvalues = { $set: {nombre: "Clorox", descripcion: "Liquido para lavar ropa", precio: 16050, stock: 36} };
    dbo.collection("productos").updateOne(myquery, newvalues, function(err, res) {//updateOne es para actualizar un solo documento, updateMany para actualizar varios
        if (err) throw err;
        console.log("1 document updated");
        db.close();
    });
});
*/

//Borrar datos de la base de datos
/*
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("storeTic");
    var myquery = { _id: 3 };
    dbo.collection("productos").deleteOne(myquery, function(err, obj) {//deleteOne es para borrar un solo documento, deleteMany para borrar varios
        if (err) throw err;
        console.log("1 document deleted");
        db.close();
    });
}
*/

//Borrar toda la colección de datos
/*
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("storeTic");
    dbo.collection("productos").drop(function(err, delOK) { //drop es para borrar la colección
        if (err) throw err;
        if (delOK) console.log("Collection deleted");
        db.close();
    });
});
*/

//Borrar toda la base de datos
/*
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("storeTic");
    dbo.dropDatabase(function(err, delOK) { //dropDatabase es para borrar la base de datos
        if (err) throw err;
        if (delOK) console.log("Database deleted");
        db.close();
    });
}
*/

//Ordenar datos de la base de datos
/*
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("storeTic");
    var mysort = { nombre: 1 }; //1 es para ordenar de forma ascendente, -1 para descendente
    dbo.collection("productos").find().sort(mysort).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
*/

//Limitar datos de la base de datos
/*
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("storeTic");
    dbo.collection("productos").find().limit(5).toArray(function(err, result) { //limit es para limitar la cantidad de documentos que se muestran
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
*/

//Unir colecciones
/*
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("storeTic");
    dbo.collection('productos').aggregate([
        {
            $lookup:
            {
                from: 'categorias', //colección a unir
                localField: 'categoria', //campo de la colección productos
                foreignField: '_id', //campo de la colección categorias
                as: 'categoria' //nombre de la nueva colección
            }
        }
    ]).toArray(function(err, res) {
        if (err) throw err;
        console.log(JSON.stringify(res));
        db.close();
    });
});
*/

//Unir colecciones con condiciones
/*
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("storeTic");
    dbo.collection('productos').aggregate([
        {
            $lookup:
            {
                from: 'categorias', //colección a unir
                localField: 'categoria', //campo de la colección productos
                foreignField: '_id', //campo de la colección categorias
                as: 'categoria' //nombre de la nueva colección
            }
        },
        {
            $match: { //match es para agregar condiciones
                "categoria._id": 1 //condición
            }
        }
    ]).toArray(function(err, res) {
        if (err) throw err;
        console.log(JSON.stringify(res));
        db.close();
    });
});
*/

//Unir colecciones ordenar
/*
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("storeTic");
    dbo.collection('productos').aggregate([
        {
            $lookup:
            {
                from: 'categorias', //colección a unir
                localField: 'categoria', //campo de la colección productos
                foreignField: '_id', //campo de la colección categorias
                as: 'categoria' //nombre de la nueva colección
            }
        }
        {
            $sort: { //sort es para ordenar
                "categoria._id": 1 //condición
            }
        }
    ]).toArray(function(err, res) {
        if (err) throw err;
        console.log(JSON.stringify(res));
        db.close();
    });
});
*/

//Unir colecciones limitar
/*
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("storeTic");
    dbo.collection('productos').aggregate([
        {
            $lookup:
            {
                from: 'categorias', //colección a unir
                localField: 'categoria', //campo de la colección productos
                foreignField: '_id', //campo de la colección categorias
                as: 'categoria' //nombre de la nueva colección
            }
        }
        {
            $limit: 2 //limit es para limitar
        }
    ]).toArray(function(err, res) {
        if (err) throw err;
        console.log(JSON.stringify(res));
        db.close();
    });
});
*/

//Unir colecciones contar
/*
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("storeTic");
    dbo.collection('productos').aggregate([
        {
            $lookup:
            {
                from: 'categorias', //colección a unir
                localField: 'categoria', //campo de la colección productos
                foreignField: '_id', //campo de la colección categorias
                as: 'categoria' //nombre de la nueva colección
            }
        }
        {
            $count: "total" //count es para contar
        }
    ]).toArray(function(err, res) {
        if (err) throw err;
        console.log(JSON.stringify(res));
        db.close();
    });
});
*/

//Unir colecciones sumar
/*
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("storeTic");
    dbo.collection('productos').aggregate([
        {
            $lookup:
            {
                from: 'categorias', //colección a unir
                localField: 'categoria', //campo de la colección productos
                foreignField: '_id', //campo de la colección categorias
                as: 'categoria' //nombre de la nueva colección
            }
        }
        {
            $project: { //project es para promediar
                _id: 0,
                promedio: { $avg: "$total" }
            }
        }
    ]).toArray(function(err, res) {
        if (err) throw err;
        console.log(JSON.stringify(res));
        db.close();
    });
});
*/

//Unir colecciones restar
/*
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("storeTic");
    dbo.collection('productos').aggregate([
        {
            $lookup:
            {
                from: 'categorias', //colección a unir
                localField: 'categoria', //campo de la colección productos
                foreignField: '_id', //campo de la colección categorias
                as: 'categoria' //nombre de la nueva colección
            }
        }
        {
            $project: { //project es para restar
                _id: 0,
                resta: { $subtract: ["$total", 10] }
            }
        }
    ]).toArray(function(err, res) {
        if (err) throw err;
        console.log(JSON.stringify(res));
        db.close();
    });
});
*/

//Unir colecciones multiplicar
/*
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("storeTic");
    dbo.collection('productos').aggregate([
        {
            $lookup:
            {
                from: 'categorias', //colección a unir
                localField: 'categoria', //campo de la colección productos
                foreignField: '_id', //campo de la colección categorias
                as: 'categoria' //nombre de la nueva colección
            }
        }
        {
            $project: { //project es para multiplicar
                _id: 0,
                multiplicacion: { $multiply: ["$total", 10] }
            }
        }
    ]).toArray(function(err, res) {
        if (err) throw err;
        console.log(JSON.stringify(res));
        db.close();
    });
}
*/

//Unir colecciones dividir
/*
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("storeTic");
    dbo.collection('productos').aggregate([
        {
            $lookup:
            {
                from: 'categorias', //colección a unir
                localField: 'categoria', //campo de la colección productos
                foreignField: '_id', //campo de la colección categorias
                as: 'categoria' //nombre de la nueva colección
            }
        }
        {
            $project: { //project es para dividir
                _id: 0,
                division: { $divide: ["$total", 10] }
            }
        }
    ]).toArray(function(err, res) {
        if (err) throw err;
        console.log(JSON.stringify(res));
        db.close();
    });
}); 
*/

//Unir colecciones modulo
/*
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("storeTic");
    dbo.collection('productos').aggregate([
        {
            $lookup:
            {
                from: 'categorias', //colección a unir
                localField: 'categoria', //campo de la colección productos
                foreignField: '_id', //campo de la colección categorias
                as: 'categoria' //nombre de la nueva colección
            }
        }
        {
            $project: { //project es para modulo
                _id: 0,
                modulo: { $mod: ["$total", 10] }
            }
        }
    ]).toArray(function(err, res) {
        if (err) throw err;
        console.log(JSON.stringify(res));
        db.close();
    });
});
*/

//Unir colecciones potencia
/*
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("storeTic");
    dbo.collection('productos').aggregate([
        {
            $lookup:
            {
                from: 'categorias', //colección a unir
                localField: 'categoria', //campo de la colección productos
                foreignField: '_id', //campo de la colección categorias
                as: 'categoria' //nombre de la nueva colección
            }
        }
        {
            $project: { //project es para potencia
                _id: 0,
                potencia: { $pow: ["$total", 10] }
            }
        }
    ]).toArray(function(err, res) {
        if (err) throw err;
        console.log(JSON.stringify(res));
        db.close();
    });
});
*/

