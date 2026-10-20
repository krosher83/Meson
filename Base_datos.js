// ==========================================
// BASE DE DATOS EXTERNA - MESON 2.0
// ==========================================

const initialClientsFromPhotos = [
    { id: 'cli_1', name: 'PEDROSA LOPEZ PEDRO J.', debt: 0 },
    { id: 'cli_2', name: 'BUSTOS IGLESIAS DANIEL', debt: 14.20 },
    { id: 'cli_3', name: 'PEREZ VEGA JOSE ANTONIO', debt: 0 },
    { id: 'cli_4', name: 'ROLDAN RUIZ SERGIO', debt: 5.60 },
    { id: 'cli_5', name: 'SANTIAGO FERNANDEZ LUIS', debt: 3.20 },
    { id: 'cli_6', name: 'MARTIN MARTINEZ ALEJANDRO', debt: 1.00 },
    { id: 'cli_7', name: 'MARTIN GARCIA JOSE', debt: 0 },
    { id: 'cli_8', name: 'LINARES ALONSO DAVID', debt: 0 },
    { id: 'cli_9', name: 'GRANADOS GONZALEZ RAFAEL', debt: 0 },
    { id: 'cli_10', name: 'GALLO RANDO RAUL', debt: 0 },
    { id: 'cli_11', name: 'SUTIL BUONGIOVANNI JOEL', debt: 0 },
    { id: 'cli_12', name: 'BARRASO MENDEZ, CARLOS J.', debt: 0 },
    { id: 'cli_13', name: 'CARMONA RUS, SERGIO', debt: 0 },
    { id: 'cli_14', name: 'ROJAS LIRIA ALEJANDRO', debt: 6.60 },
    { id: 'cli_15', name: 'AZANZA ROMERO GONZALO', debt: 1.20 },
    { id: 'cli_16', name: 'MEDINA GALLEGO ANTONIO', debt: 0 },
    { id: 'cli_17', name: 'UBEDA UBEDA FRANCISCO', debt: 0 },
    { id: 'cli_18', name: 'FLORES FLORES SARAY', debt: 5.50 },
    { id: 'cli_19', name: 'ALVAREZ ALVAREZ SARA', debt: 3.00 },
    { id: 'cli_20', name: 'BASTIDA RODRIGUEZ CARMEN', debt: 1.10 },
    { id: 'cli_21', name: 'GARCIA MARIN JUAN JOSE', debt: 0 },
    { id: 'cli_22', name: 'MORENO JORGOSO JORGE', debt: 0 },
    { id: 'cli_23', name: 'URBINA SANCHEZ DANIEL', debt: 4.60 },
    { id: 'cli_24', name: 'POZO MOLINA, IVAN', debt: 6.80 },
    { id: 'cli_25', name: 'NAVALÓN REOLID, ALBERTO', debt: 12.20 },
    { id: 'cli_26', name: 'OLMEDO CASTILLO, JUAN CARLOS', debt: 0.40 },
    { id: 'cli_27', name: 'LOAIZA ESCOBAR KEWIN', debt: 0 },
    { id: 'cli_28', name: 'JIMENEZ REGEN ESTEBAN', debt: 7.00 },
    { id: 'cli_29', name: 'RUIZ LOPEZ LADISLAO', debt: 0 },
    { id: 'cli_30', name: 'ALVAREZ RUBIO ALFREDO', debt: 2.50 },
    { id: 'cli_31', name: 'BUSTOS PEÑALVER BENJAMIN', debt: 0.60 },
    { id: 'cli_32', name: 'RUIZ REINA MARIO', debt: 0.80 },
    { id: 'cli_33', name: 'PEREZ LISBONA FELIPE', debt: 0 },
    { id: 'cli_34', name: 'REY GALLEGO DAVID', debt: 0 },
    { id: 'cli_35', name: 'CRIADO MANZANARES ENRIQUE', debt: 0 },
    { id: 'cli_36', name: 'FERRERA MAÑAS, ALBERTO', debt: 0 },
    { id: 'cli_37', name: 'DEL RIO GOMEZ MARC', debt: 0 },
    { id: 'cli_38', name: 'COBO MUÑOZ SERGIO', debt: 0 },
    { id: 'cli_39', name: 'GOMEZ GARCIA JAVIER', debt: 8.50 },
    { id: 'cli_40', name: 'GARCIA TORTOSA CAYETANO', debt: 2.60 },
    { id: 'cli_41', name: 'CERVILLA MARTIN JUAN F', debt: 0 },
    { id: 'cli_42', name: 'HOYOS CASTAÑO MARISOL', debt: 0 },
    { id: 'cli_43', name: 'IBAÑEZ LORITE CARLOS', debt: 0 },
    { id: 'cli_44', name: 'RODRIGUEZ BONILLA ROBERTO', debt: 0.50 },
    { id: 'cli_45', name: 'PORTILLO RODRIGUEZ SERGIO', debt: 0 },
    { id: 'cli_46', name: 'GONZALEZ ACOSTA SERGIO', debt: 0 },
    { id: 'cli_47', name: 'BARRANQUERO GALVEZ MANUEL', debt: 0 },
    { id: 'cli_48', name: 'ONTANEDA SHULCA JULIO CESAR', debt: 4.60 },
    { id: 'cli_49', name: 'CUERVA SORIANO JUAN A.', debt: 0 },
    { id: 'cli_50', name: 'GARCIA LOPEZ FCO. JAVIER', debt: 0 },
    { id: 'cli_51', name: 'GOMEZ MORENO LUIS', debt: 0 },
    { id: 'cli_52', name: 'LOPEZ LOPEZ ISRAEL', debt: 0 },
    { id: 'cli_53', name: 'AGUILERA SANCHEZ VICENTE', debt: 10.20 },
    { id: 'cli_54', name: 'PACHON TOCADO MANUEL F', debt: 0 },
    { id: 'cli_55', name: 'MARTINEZ SALMERON JUAN J', debt: 0 },
    { id: 'cli_56', name: 'CORREA GARCIA ANTONIO M', debt: 0 },
    { id: 'cli_57', name: 'IGLESIAS CACERES JUAN E', debt: 0 },
    { id: 'cli_58', name: 'ORELLANA CORTES JUAN JOSE', debt: 0 },
    { id: 'cli_59', name: 'GONZALEZ NAVARRO ANTONIO', debt: 0 },
    { id: 'cli_60', name: 'DELGADO MAYTA CRISTHIAN', debt: 0 },
    { id: 'cli_61', name: 'BAENA RODRIGUEZ SAMUEL', debt: 0 },
    { id: 'cli_62', name: 'GRIÑAN ZAFRA FRANCISCO', debt: 0 },
    { id: 'cli_63', name: 'OUAHMED TALHAOUI SAMIA', debt: 0 },
    { id: 'cli_64', name: 'MOLINO MORAL IVAN', debt: 0 },
    { id: 'cli_65', name: 'PAREJA ADANEZ, SAMUEL', debt: 15.00 },
    { id: 'cli_66', name: 'DEL AGUILA GUILLERMO', debt: 0 },
    { id: 'cli_67', name: 'MOROCHO COFRE JUAN F', debt: 0 },
    { id: 'cli_68', name: 'BENKHALI BAHRI RABIH', debt: 1.90 },
    { id: 'cli_otros', name: 'OTROS / BARRA GENERAL', debt: 0 }
];

const defaultCatalog = {
    bebidas: {
        "Cafés e Infusiones": [
            { id: 'c1', name: 'Café Solo', price: 0.50 },
            { id: 'c2', name: 'Café con Leche', price: 0.60 },
            { id: 'c3', name: 'Café Cortado', price: 0.60 },
            { id: 'c4', name: 'Café Manchado', price: 0.60 },
            { id: 'c5', name: 'Descafeinado', price: 0.60 },
            { id: 'c6', name: 'ColaCao / Batido', price: 1.00 },
            { id: 'c7', name: 'Infusión / Té', price: 0.60 },
            { id: 'c8', name: 'Anís', price: 1.00 }
        ],
        "Refrescos y Cerveza": [
            { id: 'r1', name: 'Cerveza', price: 0.80 },
            { id: 'r2', name: 'Coca-Cola', price: 1.00 },
            { id: 'r3', name: 'Nestlé / Nestea', price: 1.00 },
            { id: 'r4', name: 'Aquarius', price: 1.00 },
            { id: 'r5', name: 'Fanta Naranja/Limón', price: 1.00 },
            { id: 'r6', name: 'Zumo', price: 1.00 },
            { id: 'r7', name: 'Agua Mineral', price: 0.60 }
        ]
    },
    tostadas: {
        "Medias Tostadas": [
            { id: 'tm1', name: 'Media Aceite y Sal', price: 0.80 },
            { id: 'tm2', name: 'Media Aceite y Tomate', price: 0.90 },
            { id: 'tm3', name: 'Media Mantequilla/Mermelada', price: 0.90 },
            { id: 'tm4', name: 'Media Paté / Sobrasada', price: 1.00 },
            { id: 'tm5', name: 'Media Jamón Serrano', price: 1.40 },
            { id: 'tm6', name: 'Media Jamón York y Queso', price: 1.30 },
            { id: 'tm7', name: 'Media Pavo y Queso', price: 1.30 },
            { id: 'tm8', name: 'Media Carne Mechada', price: 1.50 },
            { id: 'tm9', name: 'Media Tortilla', price: 1.40 }
        ],
        "Tostadas Enteras": [
            { id: 'te1', name: 'Entera Aceite y Sal', price: 1.40 },
            { id: 'te2', name: 'Entera Aceite y Tomate', price: 1.60 },
            { id: 'te3', name: 'Entera Mantequilla/Mermelada', price: 1.60 },
            { id: 'te4', name: 'Entera Paté / Sobrasada', price: 1.80 },
            { id: 'te5', name: 'Entera Jamón Serrano', price: 2.50 },
            { id: 'te6', name: 'Entera Jamón York y Queso', price: 2.30 },
            { id: 'te7', name: 'Entera Pavo y Queso', price: 2.30 },
            { id: 'te8', name: 'Entera Carne Mechada', price: 2.60 },
            { id: 'te9', name: 'Entera Tortilla', price: 2.50 }
        ]
    },
    otros: {
        "Snacks y Otros Productos": [
            { id: 'o1', name: 'Patatas Fritas', price: 1.40 },
            { id: 'o2', name: 'Bollería / Magdalena', price: 1.00 },
            { id: 'o3', name: 'Producto Extra', price: 1.00 }
        ]
    }
};