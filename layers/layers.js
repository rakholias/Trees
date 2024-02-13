var wms_layers = [];

var lyr_Imagery_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Imagery",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Imagery_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [9490026.975157, 2365659.903633, 9492566.676431, 2371238.365881]
                            })
                        });
var format_Tree_Species_Points_1 = new ol.format.GeoJSON();
var features_Tree_Species_Points_1 = format_Tree_Species_Points_1.readFeatures(json_Tree_Species_Points_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tree_Species_Points_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tree_Species_Points_1.addFeatures(features_Tree_Species_Points_1);
var lyr_Tree_Species_Points_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tree_Species_Points_1, 
                style: style_Tree_Species_Points_1,
                interactive: true,
                title: '<img src="styles/legend/Tree_Species_Points_1.png" /> Tree_Species_Points'
            });

lyr_Imagery_0.setVisible(true);lyr_Tree_Species_Points_1.setVisible(true);
var layersList = [lyr_Imagery_0,lyr_Tree_Species_Points_1];
lyr_Tree_Species_Points_1.set('fieldAliases', {'Species': 'Species', 'Lat': 'Lat', 'Long': 'Long', 'SN': 'SN', });
lyr_Tree_Species_Points_1.set('fieldImages', {'Species': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'SN': 'TextEdit', });
lyr_Tree_Species_Points_1.set('fieldLabels', {'Species': 'header label', 'Lat': 'header label', 'Long': 'header label', 'SN': 'header label', });
lyr_Tree_Species_Points_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});