var wms_layers = [];

var format_Tasaporcomuna_0 = new ol.format.GeoJSON();
var features_Tasaporcomuna_0 = format_Tasaporcomuna_0.readFeatures(json_Tasaporcomuna_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tasaporcomuna_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tasaporcomuna_0.addFeatures(features_Tasaporcomuna_0);
var lyr_Tasaporcomuna_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tasaporcomuna_0, 
                style: style_Tasaporcomuna_0,
                interactive: true,
    title: 'Tasa por comuna<br />\
    <img src="styles/legend/Tasaporcomuna_0_0.png" /> 30 o menos<br />\
    <img src="styles/legend/Tasaporcomuna_0_1.png" /> 30 - 45<br />\
    <img src="styles/legend/Tasaporcomuna_0_2.png" /> 45 - 80<br />\
    <img src="styles/legend/Tasaporcomuna_0_3.png" /> 80 - 120<br />\
    <img src="styles/legend/Tasaporcomuna_0_4.png" /> 120 o más<br />'
        });
var format_Tasaporbarrio_1 = new ol.format.GeoJSON();
var features_Tasaporbarrio_1 = format_Tasaporbarrio_1.readFeatures(json_Tasaporbarrio_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tasaporbarrio_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tasaporbarrio_1.addFeatures(features_Tasaporbarrio_1);
var lyr_Tasaporbarrio_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tasaporbarrio_1, 
                style: style_Tasaporbarrio_1,
                interactive: true,
    title: 'Tasa por barrio<br />\
    <img src="styles/legend/Tasaporbarrio_1_0.png" /> 30 o menos<br />\
    <img src="styles/legend/Tasaporbarrio_1_1.png" /> 30 - 40<br />\
    <img src="styles/legend/Tasaporbarrio_1_2.png" /> 40 - 60<br />\
    <img src="styles/legend/Tasaporbarrio_1_3.png" /> 60 - 120<br />\
    <img src="styles/legend/Tasaporbarrio_1_4.png" /> 120 o más<br />'
        });
var format_Espacioprivado_2 = new ol.format.GeoJSON();
var features_Espacioprivado_2 = format_Espacioprivado_2.readFeatures(json_Espacioprivado_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Espacioprivado_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Espacioprivado_2.addFeatures(features_Espacioprivado_2);
var lyr_Espacioprivado_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Espacioprivado_2, 
                style: style_Espacioprivado_2,
                interactive: true,
                title: '<img src="styles/legend/Espacioprivado_2.png" /> Espacio privado'
            });
var format_Espacionacional_3 = new ol.format.GeoJSON();
var features_Espacionacional_3 = format_Espacionacional_3.readFeatures(json_Espacionacional_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Espacionacional_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Espacionacional_3.addFeatures(features_Espacionacional_3);
var lyr_Espacionacional_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Espacionacional_3, 
                style: style_Espacionacional_3,
                interactive: true,
                title: '<img src="styles/legend/Espacionacional_3.png" /> Espacio nacional'
            });
var format_Espaciodelministerio_4 = new ol.format.GeoJSON();
var features_Espaciodelministerio_4 = format_Espaciodelministerio_4.readFeatures(json_Espaciodelministerio_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Espaciodelministerio_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Espaciodelministerio_4.addFeatures(features_Espaciodelministerio_4);
var lyr_Espaciodelministerio_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Espaciodelministerio_4, 
                style: style_Espaciodelministerio_4,
                interactive: true,
                title: '<img src="styles/legend/Espaciodelministerio_4.png" /> Espacio del ministerio'
            });
var format_OtrosespaciosculturalesdeGCBA_5 = new ol.format.GeoJSON();
var features_OtrosespaciosculturalesdeGCBA_5 = format_OtrosespaciosculturalesdeGCBA_5.readFeatures(json_OtrosespaciosculturalesdeGCBA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OtrosespaciosculturalesdeGCBA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OtrosespaciosculturalesdeGCBA_5.addFeatures(features_OtrosespaciosculturalesdeGCBA_5);
var lyr_OtrosespaciosculturalesdeGCBA_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OtrosespaciosculturalesdeGCBA_5, 
                style: style_OtrosespaciosculturalesdeGCBA_5,
                interactive: true,
                title: '<img src="styles/legend/OtrosespaciosculturalesdeGCBA_5.png" /> Otros espacios culturales de GCBA'
            });
var format_Espacioalairelibre_6 = new ol.format.GeoJSON();
var features_Espacioalairelibre_6 = format_Espacioalairelibre_6.readFeatures(json_Espacioalairelibre_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Espacioalairelibre_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Espacioalairelibre_6.addFeatures(features_Espacioalairelibre_6);
var lyr_Espacioalairelibre_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Espacioalairelibre_6, 
                style: style_Espacioalairelibre_6,
                interactive: true,
                title: '<img src="styles/legend/Espacioalairelibre_6.png" /> Espacio al aire libre'
            });
var format_Espaciosporcomuna_7 = new ol.format.GeoJSON();
var features_Espaciosporcomuna_7 = format_Espaciosporcomuna_7.readFeatures(json_Espaciosporcomuna_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Espaciosporcomuna_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Espaciosporcomuna_7.addFeatures(features_Espaciosporcomuna_7);
var lyr_Espaciosporcomuna_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Espaciosporcomuna_7, 
                style: style_Espaciosporcomuna_7,
                interactive: true,
    title: 'Espacios por comuna<br />\
    <img src="styles/legend/Espaciosporcomuna_7_0.png" /> 55 o menos<br />\
    <img src="styles/legend/Espaciosporcomuna_7_1.png" /> 55 - 80<br />\
    <img src="styles/legend/Espaciosporcomuna_7_2.png" /> 80 - 165<br />\
    <img src="styles/legend/Espaciosporcomuna_7_3.png" /> 165 - 220<br />\
    <img src="styles/legend/Espaciosporcomuna_7_4.png" /> 220 o más<br />'
        });
var format_Espaciosporbarrio_8 = new ol.format.GeoJSON();
var features_Espaciosporbarrio_8 = format_Espaciosporbarrio_8.readFeatures(json_Espaciosporbarrio_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Espaciosporbarrio_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Espaciosporbarrio_8.addFeatures(features_Espaciosporbarrio_8);
var lyr_Espaciosporbarrio_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Espaciosporbarrio_8, 
                style: style_Espaciosporbarrio_8,
                interactive: true,
    title: 'Espacios por barrio<br />\
    <img src="styles/legend/Espaciosporbarrio_8_0.png" /> 10 o menos<br />\
    <img src="styles/legend/Espaciosporbarrio_8_1.png" /> 10 - 15<br />\
    <img src="styles/legend/Espaciosporbarrio_8_2.png" /> 15 - 25<br />\
    <img src="styles/legend/Espaciosporbarrio_8_3.png" /> 25 - 90<br />\
    <img src="styles/legend/Espaciosporbarrio_8_4.png" /> 90 o más<br />'
        });
var format_Saladeteatro_9 = new ol.format.GeoJSON();
var features_Saladeteatro_9 = format_Saladeteatro_9.readFeatures(json_Saladeteatro_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Saladeteatro_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Saladeteatro_9.addFeatures(features_Saladeteatro_9);
var lyr_Saladeteatro_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Saladeteatro_9, 
                style: style_Saladeteatro_9,
                interactive: true,
                title: '<img src="styles/legend/Saladeteatro_9.png" /> Sala de teatro'
            });
var format_Saladecine_10 = new ol.format.GeoJSON();
var features_Saladecine_10 = format_Saladecine_10.readFeatures(json_Saladecine_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Saladecine_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Saladecine_10.addFeatures(features_Saladecine_10);
var lyr_Saladecine_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Saladecine_10, 
                style: style_Saladecine_10,
                interactive: true,
                title: '<img src="styles/legend/Saladecine_10.png" /> Sala de cine'
            });
var format_Museo_11 = new ol.format.GeoJSON();
var features_Museo_11 = format_Museo_11.readFeatures(json_Museo_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Museo_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Museo_11.addFeatures(features_Museo_11);
var lyr_Museo_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Museo_11, 
                style: style_Museo_11,
                interactive: true,
                title: '<img src="styles/legend/Museo_11.png" /> Museo'
            });
var format_Librera_12 = new ol.format.GeoJSON();
var features_Librera_12 = format_Librera_12.readFeatures(json_Librera_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Librera_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Librera_12.addFeatures(features_Librera_12);
var lyr_Librera_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Librera_12, 
                style: style_Librera_12,
                interactive: true,
                title: '<img src="styles/legend/Librera_12.png" /> Librería'
            });
var format_Galeradearte_13 = new ol.format.GeoJSON();
var features_Galeradearte_13 = format_Galeradearte_13.readFeatures(json_Galeradearte_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Galeradearte_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Galeradearte_13.addFeatures(features_Galeradearte_13);
var lyr_Galeradearte_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Galeradearte_13, 
                style: style_Galeradearte_13,
                interactive: true,
                title: '<img src="styles/legend/Galeradearte_13.png" /> Galería de arte'
            });
var format_Espacioferial_14 = new ol.format.GeoJSON();
var features_Espacioferial_14 = format_Espacioferial_14.readFeatures(json_Espacioferial_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Espacioferial_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Espacioferial_14.addFeatures(features_Espacioferial_14);
var lyr_Espacioferial_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Espacioferial_14, 
                style: style_Espacioferial_14,
                interactive: true,
                title: '<img src="styles/legend/Espacioferial_14.png" /> Espacio ferial'
            });
var format_Espaciodeformacin_15 = new ol.format.GeoJSON();
var features_Espaciodeformacin_15 = format_Espaciodeformacin_15.readFeatures(json_Espaciodeformacin_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Espaciodeformacin_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Espaciodeformacin_15.addFeatures(features_Espaciodeformacin_15);
var lyr_Espaciodeformacin_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Espaciodeformacin_15, 
                style: style_Espaciodeformacin_15,
                interactive: true,
                title: '<img src="styles/legend/Espaciodeformacin_15.png" /> Espacio de formación'
            });
var format_Disquera_16 = new ol.format.GeoJSON();
var features_Disquera_16 = format_Disquera_16.readFeatures(json_Disquera_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Disquera_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Disquera_16.addFeatures(features_Disquera_16);
var lyr_Disquera_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Disquera_16, 
                style: style_Disquera_16,
                interactive: true,
                title: '<img src="styles/legend/Disquera_16.png" /> Disquería'
            });
var format_Clubdemsicaenvivo_17 = new ol.format.GeoJSON();
var features_Clubdemsicaenvivo_17 = format_Clubdemsicaenvivo_17.readFeatures(json_Clubdemsicaenvivo_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clubdemsicaenvivo_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clubdemsicaenvivo_17.addFeatures(features_Clubdemsicaenvivo_17);
var lyr_Clubdemsicaenvivo_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clubdemsicaenvivo_17, 
                style: style_Clubdemsicaenvivo_17,
                interactive: true,
                title: '<img src="styles/legend/Clubdemsicaenvivo_17.png" /> Club de música en vivo'
            });
var format_Centrocultural_18 = new ol.format.GeoJSON();
var features_Centrocultural_18 = format_Centrocultural_18.readFeatures(json_Centrocultural_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centrocultural_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centrocultural_18.addFeatures(features_Centrocultural_18);
var lyr_Centrocultural_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Centrocultural_18, 
                style: style_Centrocultural_18,
                interactive: true,
                title: '<img src="styles/legend/Centrocultural_18.png" /> Centro cultural'
            });
var format_Biblioteca_19 = new ol.format.GeoJSON();
var features_Biblioteca_19 = format_Biblioteca_19.readFeatures(json_Biblioteca_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Biblioteca_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Biblioteca_19.addFeatures(features_Biblioteca_19);
var lyr_Biblioteca_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Biblioteca_19, 
                style: style_Biblioteca_19,
                interactive: true,
                title: '<img src="styles/legend/Biblioteca_19.png" /> Biblioteca'
            });
var format_Bar_20 = new ol.format.GeoJSON();
var features_Bar_20 = format_Bar_20.readFeatures(json_Bar_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bar_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bar_20.addFeatures(features_Bar_20);
var lyr_Bar_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bar_20, 
                style: style_Bar_20,
                interactive: true,
                title: '<img src="styles/legend/Bar_20.png" /> Bar'
            });
var format_Anfiteatro_21 = new ol.format.GeoJSON();
var features_Anfiteatro_21 = format_Anfiteatro_21.readFeatures(json_Anfiteatro_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anfiteatro_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anfiteatro_21.addFeatures(features_Anfiteatro_21);
var lyr_Anfiteatro_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anfiteatro_21, 
                style: style_Anfiteatro_21,
                interactive: true,
                title: '<img src="styles/legend/Anfiteatro_21.png" /> Anfiteatro'
            });

        var lyr_Positron_22 = new ol.layer.Tile({
            'title': 'Mapa Base',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Variedaddeespaciosculturalesporbarrio_23 = new ol.format.GeoJSON();
var features_Variedaddeespaciosculturalesporbarrio_23 = format_Variedaddeespaciosculturalesporbarrio_23.readFeatures(json_Variedaddeespaciosculturalesporbarrio_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Variedaddeespaciosculturalesporbarrio_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Variedaddeespaciosculturalesporbarrio_23.addFeatures(features_Variedaddeespaciosculturalesporbarrio_23);
var lyr_Variedaddeespaciosculturalesporbarrio_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Variedaddeespaciosculturalesporbarrio_23, 
                style: style_Variedaddeespaciosculturalesporbarrio_23,
                interactive: true,
    title: 'Variedad de espacios culturales por barrio<br />\
    <img src="styles/legend/Variedaddeespaciosculturalesporbarrio_23_0.png" /> Baja<br />\
    <img src="styles/legend/Variedaddeespaciosculturalesporbarrio_23_1.png" /> Media<br />\
    <img src="styles/legend/Variedaddeespaciosculturalesporbarrio_23_2.png" /> Alta<br />\
    <img src="styles/legend/Variedaddeespaciosculturalesporbarrio_23_3.png" /> Muy alta<br />'
        });
var group_Espaciosculturalessegntipo = new ol.layer.Group({
                                layers: [lyr_Saladeteatro_9,lyr_Saladecine_10,lyr_Museo_11,lyr_Librera_12,lyr_Galeradearte_13,lyr_Espacioferial_14,lyr_Espaciodeformacin_15,lyr_Disquera_16,lyr_Clubdemsicaenvivo_17,lyr_Centrocultural_18,lyr_Biblioteca_19,lyr_Bar_20,lyr_Anfiteatro_21,],
                                title: "Espacios culturales según tipo"});
var group_Cantidaddeespaciosculturales = new ol.layer.Group({
                                layers: [lyr_Espaciosporcomuna_7,lyr_Espaciosporbarrio_8,],
                                title: "Cantidad de espacios culturales"});
var group_Espaciosculturalessegngestin = new ol.layer.Group({
                                layers: [lyr_Espacioprivado_2,lyr_Espacionacional_3,lyr_Espaciodelministerio_4,lyr_OtrosespaciosculturalesdeGCBA_5,lyr_Espacioalairelibre_6,],
                                title: "Espacios culturales según gestión"});
var group_Tasadeespaciosculturalescada100000habitantes = new ol.layer.Group({
                                layers: [lyr_Tasaporcomuna_0,lyr_Tasaporbarrio_1,],
                                title: "Tasa de espacios culturales cada 100.000 habitantes"});

lyr_Tasaporcomuna_0.setVisible(false);lyr_Tasaporbarrio_1.setVisible(true);lyr_Espacioprivado_2.setVisible(false);lyr_Espacionacional_3.setVisible(false);lyr_Espaciodelministerio_4.setVisible(false);lyr_OtrosespaciosculturalesdeGCBA_5.setVisible(false);lyr_Espacioalairelibre_6.setVisible(false);lyr_Espaciosporcomuna_7.setVisible(false);lyr_Espaciosporbarrio_8.setVisible(false);lyr_Saladeteatro_9.setVisible(false);lyr_Saladecine_10.setVisible(false);lyr_Museo_11.setVisible(false);lyr_Librera_12.setVisible(false);lyr_Galeradearte_13.setVisible(false);lyr_Espacioferial_14.setVisible(false);lyr_Espaciodeformacin_15.setVisible(false);lyr_Disquera_16.setVisible(false);lyr_Clubdemsicaenvivo_17.setVisible(false);lyr_Centrocultural_18.setVisible(false);lyr_Biblioteca_19.setVisible(false);lyr_Bar_20.setVisible(false);lyr_Anfiteatro_21.setVisible(false);lyr_Positron_22.setVisible(true);lyr_Variedaddeespaciosculturalesporbarrio_23.setVisible(false);
var layersList = [lyr_Positron_22,lyr_Variedaddeespaciosculturalesporbarrio_23,group_Tasadeespaciosculturalescada100000habitantes,group_Espaciosculturalessegngestin,group_Cantidaddeespaciosculturales,group_Espaciosculturalessegntipo];
lyr_Tasaporcomuna_0.set('fieldAliases', {'fid': 'fid', 'COMUNA': 'Comuna', 'poblacion_2010': 'Población (2010)', 'tasa_espacios': 'Tasa', });
lyr_Tasaporbarrio_1.set('fieldAliases', {'fid': 'fid', 'barrio': 'Barrio', 'poblacion_2010': 'Población (2010)', 'tasa_espacios': 'Tasa', });
lyr_Espacioprivado_2.set('fieldAliases', {'fid': 'fid', 'Establecimiento': 'Establecimiento', 'Dirección': 'Dirección', 'Tipo': 'Tipo', });
lyr_Espacionacional_3.set('fieldAliases', {'fid': 'fid', 'Establecimiento': 'Establecimiento', 'Dirección': 'Dirección', 'Tipo': 'Tipo', });
lyr_Espaciodelministerio_4.set('fieldAliases', {'fid': 'fid', 'Establecimiento': 'Establecimiento', 'Dirección': 'Dirección', 'Tipo': 'Tipo', });
lyr_OtrosespaciosculturalesdeGCBA_5.set('fieldAliases', {'fid': 'fid', 'Establecimiento': 'Establecimiento', 'Dirección': 'Dirección', 'Tipo': 'Tipo', });
lyr_Espacioalairelibre_6.set('fieldAliases', {'fid': 'fid', 'Establecimiento': 'Establecimiento', 'Dirección': 'Dirección', 'Tipo': 'Tipo', });
lyr_Espaciosporcomuna_7.set('fieldAliases', {'fid': 'fid', 'COMUNA': 'Comuna', 'n_espacios': 'Espacios', });
lyr_Espaciosporbarrio_8.set('fieldAliases', {'fid': 'fid', 'barrio': 'Barrio', 'n_espacios': 'Espacios', });
lyr_Saladeteatro_9.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Saladecine_10.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Museo_11.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Librera_12.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Galeradearte_13.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Espacioferial_14.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Espaciodeformacin_15.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Disquera_16.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Clubdemsicaenvivo_17.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Centrocultural_18.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Biblioteca_19.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Bar_20.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Anfiteatro_21.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Variedaddeespaciosculturalesporbarrio_23.set('fieldAliases', {'fid': 'fid', 'barrio': 'Barrio', 'variedad': 'Variedad (%)', });
lyr_Tasaporcomuna_0.set('fieldImages', {'fid': 'Hidden', 'COMUNA': 'Range', 'poblacion_2010': 'Range', 'tasa_espacios': 'TextEdit', });
lyr_Tasaporbarrio_1.set('fieldImages', {'fid': 'Hidden', 'barrio': 'TextEdit', 'poblacion_2010': 'Range', 'tasa_espacios': 'TextEdit', });
lyr_Espacioprivado_2.set('fieldImages', {'fid': 'Hidden', 'Establecimiento': 'TextEdit', 'Dirección': 'TextEdit', 'Tipo': 'TextEdit', });
lyr_Espacionacional_3.set('fieldImages', {'fid': 'Hidden', 'Establecimiento': 'TextEdit', 'Dirección': 'TextEdit', 'Tipo': 'TextEdit', });
lyr_Espaciodelministerio_4.set('fieldImages', {'fid': 'Hidden', 'Establecimiento': 'TextEdit', 'Dirección': 'TextEdit', 'Tipo': 'TextEdit', });
lyr_OtrosespaciosculturalesdeGCBA_5.set('fieldImages', {'fid': 'Hidden', 'Establecimiento': 'TextEdit', 'Dirección': 'TextEdit', 'Tipo': 'TextEdit', });
lyr_Espacioalairelibre_6.set('fieldImages', {'fid': 'Hidden', 'Establecimiento': 'TextEdit', 'Dirección': 'TextEdit', 'Tipo': 'TextEdit', });
lyr_Espaciosporcomuna_7.set('fieldImages', {'fid': 'Hidden', 'COMUNA': 'Range', 'n_espacios': 'Range', });
lyr_Espaciosporbarrio_8.set('fieldImages', {'fid': 'Hidden', 'barrio': 'TextEdit', 'n_espacios': 'Range', });
lyr_Saladeteatro_9.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Saladecine_10.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Museo_11.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Librera_12.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Galeradearte_13.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Espacioferial_14.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Espaciodeformacin_15.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Disquera_16.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Clubdemsicaenvivo_17.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Centrocultural_18.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Biblioteca_19.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Bar_20.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Anfiteatro_21.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Variedaddeespaciosculturalesporbarrio_23.set('fieldImages', {'fid': 'Hidden', 'barrio': 'TextEdit', 'variedad': 'TextEdit', });
lyr_Tasaporcomuna_0.set('fieldLabels', {'COMUNA': 'inline label', 'poblacion_2010': 'inline label', 'tasa_espacios': 'inline label', });
lyr_Tasaporbarrio_1.set('fieldLabels', {'barrio': 'inline label', 'poblacion_2010': 'inline label', 'tasa_espacios': 'inline label', });
lyr_Espacioprivado_2.set('fieldLabels', {'Establecimiento': 'inline label', 'Dirección': 'inline label', 'Tipo': 'inline label', });
lyr_Espacionacional_3.set('fieldLabels', {'Establecimiento': 'inline label', 'Dirección': 'inline label', 'Tipo': 'inline label', });
lyr_Espaciodelministerio_4.set('fieldLabels', {'Establecimiento': 'inline label', 'Dirección': 'inline label', 'Tipo': 'inline label', });
lyr_OtrosespaciosculturalesdeGCBA_5.set('fieldLabels', {'Establecimiento': 'inline label', 'Dirección': 'inline label', 'Tipo': 'inline label', });
lyr_Espacioalairelibre_6.set('fieldLabels', {'Establecimiento': 'inline label', 'Dirección': 'inline label', 'Tipo': 'inline label', });
lyr_Espaciosporcomuna_7.set('fieldLabels', {'COMUNA': 'inline label', 'n_espacios': 'inline label', });
lyr_Espaciosporbarrio_8.set('fieldLabels', {'barrio': 'inline label', 'n_espacios': 'inline label', });
lyr_Saladeteatro_9.set('fieldLabels', {'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Saladecine_10.set('fieldLabels', {'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Museo_11.set('fieldLabels', {'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Librera_12.set('fieldLabels', {'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Galeradearte_13.set('fieldLabels', {'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Espacioferial_14.set('fieldLabels', {'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Espaciodeformacin_15.set('fieldLabels', {'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Disquera_16.set('fieldLabels', {'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Clubdemsicaenvivo_17.set('fieldLabels', {'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Centrocultural_18.set('fieldLabels', {'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Biblioteca_19.set('fieldLabels', {'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Bar_20.set('fieldLabels', {'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Anfiteatro_21.set('fieldLabels', {'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Variedaddeespaciosculturalesporbarrio_23.set('fieldLabels', {'barrio': 'inline label', 'variedad': 'inline label', });
lyr_Variedaddeespaciosculturalesporbarrio_23.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});