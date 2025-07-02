const productos = [
  {
    "codigo": "Z9Y",
    "descripcion": "BUJIA DE ENCENDIDO MOTOS 110/125/250 (CHAMPION) Precio Mercado Libre",
    "ubicacion": "LOCAL, MOSTRADOR 1, CAJON 2.",
    "proveedor": "",
    "precio": "",
    "stock": 7
  },
  {
    "codigo": "36862EX",
    "descripcion": "KIT SOPORTES RADIADOR FOX/SURAN/GOL TREND EXTERIOR",
    "ubicacion": "DEPTO 2, PASILLO1,ESTANTERIA 1, ESTANTE C CAJA Nº 15",
    "proveedor": "ML",
    "precio": "",
    "stock": 2
  },
  {
    "codigo": "898D",
    "descripcion": "OPTICA IZQUIERDA KANGOO 08/12 COMANDO ELECTRICO SIN MOTOR",
    "ubicacion": "DEPTO 1, HAB 2, ESTANTERIA LADO PUERTA",
    "proveedor": "",
    "precio": "",
    "stock": 1
  },
  {
    "codigo": "51762",
    "descripcion": "MOLDURA REJILLA RENAULT LOGAN 10/3 CAPOT SUP CROMADA",
    "ubicacion": "DEPTO 2, COCINA, ESTANTERIA 1, CAJON Nº12",
    "proveedor": "",
    "precio": "",
    "stock": 4
  },
  {
    "codigo": "a0765",
    "descripcion": "PARAGOLPE DELANTERO LOGAN F2 10/13",
    "ubicacion": "DEPTO 2, HABITACION 2, Nº 2",
    "proveedor": "CROMOSOL",
    "precio": "",
    "stock": 1
},
{
  "codigo": "83987",
  "descripcion": "JUEGO PASTILLAS DE FRENO DELANTERAS PEUGEOT 206 / 207 COMPACT / PARTNER",
  "ubicacion": "DEPTO 2, ESTANTERÍA 3, CAJA N°4",
  "proveedor": "LUSQTOFF",
  "precio": "",
  "stock": 3
},
{
  "codigo": "9547T",
  "descripcion": "MANGUERA AIRE ACONDICIONADO GOL TREND / SURAN / VOYAGE (COMPRESOR A RADIADOR)",
  "ubicacion": "DEPTO 1, MOSTRADOR, ESTANTE 2",
  "proveedor": "",
  "precio": "",
  "stock": 2
},
{
  "codigo": "K0021",
  "descripcion": "SOPORTE MOTOR IZQUIERDO RENAULT KANGOO / CLIO / SYMBOL 1.6",
  "ubicacion": "DEPTO 2, HABITACIÓN 1, ESTANTE C, CAJA 6",
  "proveedor": "KRAFT",
  "precio": "",
  "stock": 1
},
{
  "codigo": "1683E",
  "descripcion": "BARRA ESTABILIZADORA DELANTERA FIAT UNO / DUNA",
  "ubicacion": "DEPTO 2, ESTANTERÍA 2, ARRIBA DE CAJAS GRANDES",
  "proveedor": "",
  "precio": "",
  "stock": 1
}, 
{ 
    "codigo": "8332",
    "descripcion": "BUJE BARRA ESTABILIZADORA DELANTERA CLIO 2 / KANGOO / SYMBOL",
    "ubicacion": "DEPTO 2, CAJÓN DE GOMA Nº3",
    "proveedor": "",
    "precio": "",
    "stock": 4
  },
  {
    "codigo": "9578",
    "descripcion": "SOPORTE FILTRO DE AIRE PEUGEOT 206 NAFTA",
    "ubicacion": "DEPTO 1, ESTANTE A, CAJA 2",
    "proveedor": "PSA",
    "precio": "",
    "stock": 2
  },
  {
    "codigo": "V572",
    "descripcion": "VARILLA CAJA VELOCIDAD FIAT UNO / DUNA / 147",
    "ubicacion": "DEPTO 1, ESTANTERÍA LATERAL, CAJA 9",
    "proveedor": "",
    "precio": "",
    "stock": 1
  },
  {
    "codigo": "0912",
    "descripcion": "SOPORTE MOTOR DERECHO RENAULT 12",
    "ubicacion": "DEPTO 2, ESTANTERÍA 4, CAJA Nº10",
    "proveedor": "",
    "precio": "",
    "stock": 3
  },
  {
    "codigo": "M122",
    "descripcion": "MANGUERA ENTRADA AGUA MOTOR CORSA CLASSIC",
    "ubicacion": "DEPTO 1, ESTANTERÍA A, CAJA MANGUERAS Nº1",
    "proveedor": "MAVE",
    "precio": "",
    "stock": 2
  },
  {
    "codigo": "5433",
    "descripcion": "SOPORTE AMORTIGUADOR TRASERO GOL / SAVEIRO",
    "ubicacion": "DEPTO 1, ESTANTERÍA LATERAL, CAJA Nº5",
    "proveedor": "",
    "precio": "",
    "stock": 1
  },
  {
    "codigo": "T421",
    "descripcion": "TERMINAL DE DIRECCIÓN DERECHO RENAULT LOGAN / SANDERO",
    "ubicacion": "DEPTO 2, CAJÓN TERMINALES Nº1",
    "proveedor": "TRW",
    "precio": "",
    "stock": 1
  },
  {
    "codigo": "T422",
    "descripcion": "TERMINAL DE DIRECCIÓN IZQUIERDO RENAULT LOGAN / SANDERO",
    "ubicacion": "DEPTO 2, CAJÓN TERMINALES Nº1",
    "proveedor": "TRW",
    "precio": "",
    "stock": 1
  },
  {
    "codigo": "H965",
    "descripcion": "HORQUILLA EMBRAGUE PEUGEOT 504 / 505",
    "ubicacion": "DEPTO 1, ESTANTERÍA 3, CAJA Nº12",
    "proveedor": "",
    "precio": "",
    "stock": 3
  },
  {
    "codigo": "C001",
    "descripcion": "CAJA DIRECCIÓN COMPLETA RENAULT 9 / 11",
    "ubicacion": "DEPTO 1, ESTANTERÍA INFERIOR, CAJA GRANDES",
    "proveedor": "CIFAM",
    "precio": "",
    "stock": 1
  },
  {
    "codigo": "1146",
    "descripcion": "KIT LEVAS VÁLVULAS CHEVROLET CORSA 1.6 8V",
    "ubicacion": "DEPTO 1, ESTANTERÍA ALTA, CAJA 7",
    "proveedor": "",
    "precio": "",
    "stock": 2
  },
  {
    "codigo": "WP19930",
    "descripcion": "PASTILLA DE FRENO DELANTERO FIAT UNO/VIVACE",
    "stock": 1,
    "ubicacion": "LOCAL, OFICINA, ESTANTERIA 2, ESTANTE G/3",
    "precio": ""
  },
  {
    "codigo": "WP18350P",
    "descripcion": "PASTILLA DE FRENO DELANTERO TOYOTA ETIOS 12->",
    "stock": 1,
    "ubicacion": "LOCAL, OFICINA, ESTANTERIA 2, ESTANTE G/1",
    "precio": ""
  },
  {
    "codigo": "WP16330P",
    "descripcion": "PASTILLA DE FRENO TRASERO COROLLA 06->",
    "stock": 1,
    "ubicacion": "LOCAL, OFICINA, ESTANTERIA 2, ESTANTE G/10",
    "precio": ""
  },
  {
    "codigo": "WP9900",
    "descripcion": "PASTILLA DE FRENO DELANTERO PEUGEOT/CITROEN/RENAULT",
    "stock": 1,
    "ubicacion": "LOCAL, OFICINA, ESTANTERIA 2, ESTANTE G/15",
    "precio": ""
  },
  {
    "codigo": "2000/2",
    "descripcion": "TOPE APOYA CAPOT VW POLO 96/00",
    "stock": 10,
    "ubicacion": "LOCAL, MOSTRADOR 1, CAJON 3",
    "precio": ""
  },
  {
    "codigo": "2000/5",
    "descripcion": "TOPE APOYA CAPOT PEUGEOT 306 95/97",
    "stock": 9,
    "ubicacion": "LOCAL, MOSTRADOR 1, CAJON 3",
    "precio": ""
  },
  {
    "codigo": "2000/6",
    "descripcion": "TOPE APOYA CAPOT FIAT",
    "stock": 10,
    "ubicacion": "LOCAL, MOSTRADOR 1, CAJON 3",
    "precio": ""
  },
  {
    "codigo": "98210834ZD",
    "descripcion": "TERMINACION BAUL PEUGEOT 208 15/19 (GOOGLE)",
    "stock": 1,
    "ubicacion": "LOCAL, DEPTO 2, ESTANTERIA N°2, ESTANTE B",
    "precio": ""
  },
  {
    "codigo": "2000/4",
    "descripcion": "TOPE APOYA CAPOT REN 19 93/00",
    "stock": 10,
    "ubicacion": "LOCAL, MOSTRADOR 1, CAJON 3",
    "precio": ""
  },
  {
    "codigo": "SOPRANGER",
    "descripcion": "SOPORTE PARAGOLPE TRASERO RANGER 2016",
    "stock": 1,
    "ubicacion": "LOCAL, PASILLO 1, ESTANTERIA N°2, ESTANTE C",
    "precio": ""
  },
  {
    "codigo": "WP 9360",
    "descripcion": "FILTRO DE HABITACULO FORD KA/FIESTA/ECOSPORT",
    "stock": 0,
    "ubicacion": "DEPTO 1, PASILLO 1, ESTANTERIA C N°13",
    "precio": ""
  },
  {
    "codigo": "WP 9318",
    "descripcion": "FILTRO DE HABITACULO PEUGEOT/CITROEN",
    "stock": 1,
    "ubicacion": "DEPTO 1, PASILLO 1, ESTANTERIA I/8",
    "precio": ""
  },
  {
    "codigo": "WP 8440",
    "descripcion": "PASTILLA DE FRENO KANGOO/ PARTNER/ 206/ 306",
    "stock": 1,
    "ubicacion": "DEPTO 1, OFICINA, EXHIBITOR K78, G/16",
    "precio": ""
  },
  {
    "codigo": "WP 9280",
    "descripcion": "FILTRO DE HABITACULO FIAT PALIO/SIENA/STRADA/FIORINO",
    "stock": 3,
    "ubicacion": "DEPTO 1, PASILLO 1, ESTANTERIA I/7",
    "precio": ""
  },
  {
    "codigo": "WP 9166",
    "descripcion": "FILTRO DE HABITACULO VOLKSWAGEN AMAROK/TRTANSPORTER",
    "stock": 1,
    "ubicacion": "DEPTO 1, PASILLO 1, ESTANTERIA I/6",
    "precio": ""
  },
  {
    "codigo": "WP 9036",
    "descripcion": "FILTRO DE HABITACULO VOLKSWAGEN GOL TREND",
    "stock": 2,
    "ubicacion": "DEPTO 1, PASILLO 1, ESTANTERIA J/6",
    "precio": ""
  },
  {
    "codigo": "0986 BF0 587",
    "descripcion": "FILTRO DE HABITACULO FORD KA/FIESTA/ECO SPORT DURATEC SIGMA",
    "stock": 3,
    "ubicacion": "DEPTO 1 PASILLO 1 ESTANTERIA J/ 13",
    "precio": ""
  },
  {
    "codigo": "WP 6928",
    "descripcion": "FILTRO DE HABITACULO RENAULT KANGOO 01... en wega akx 35112",
    "stock": 2,
    "ubicacion": "DEPTO 1, PASILLO 1, ESTANTERIA k/1",
    "precio": ""
  },
  {
    "codigo": "0986 BF0 589",
    "descripcion": "FILTRO DE HABITACULO FORD ECOSPORT/ FIESTA/ KA",
    "stock": 3,
    "ubicacion": "DEPTO 1, PASILLO 1, ESTANTERIA J/13",
    "precio": ""
  },
  {
    "codigo": "AKX 35285",
    "descripcion": "FILTRO DE HABITACULO OPEL/ ZAFIRA/ ASTRA/ VECTRA",
    "stock": 2,
    "ubicacion": "DEPTO 1, PASILLO 1, ESTANTERIA L/6",
    "precio": ""
  }
];

export default productos;
