const jsonVentas = [
          {
            "fecha": "27/09/2022",
            "idCliente": "111111",
            "idVenta": "123",
            "valor": 35,
            "confirmado": true,
            "detalleCompra": [
              {
                "idProducto": "1",
                "cantidad": 2
              }
            ]
          },
          {
            "fecha": "28/09/2022",
            "idCliente": "22222",
            "idVenta": "234",
            "valor": 50,
            "confirmado": false,
            "detalleCompra": [
              {
                "idProducto": "2",
                "cantidad": 2
              }
            ]
          },
          {
            "fecha": "29/09/2022",
            "idCliente": "1231",
            "idVenta": "543",
            "valor": 10,
            "confirmado": true,
            "detalleCompra": [
              {
                "idProducto": "2",
                "cantidad": 2
              },
              {
                "idProducto": "4",
                "cantidad": 4
              }
            ]
          }
];


export default jsonVentas;