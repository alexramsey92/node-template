// campus map

var extent = ol.proj.transformExtent([-180, -89.15476244, 179.99496396, 88.92573852],
    'EPSG:4326', 'EPSG:3857');
var center = ol.proj.transform([0, 0],
    'EPSG:4326', 'EPSG:3857');
var view = new ol.View({
    projection: 'EPSG:3857',
    center: center,
    zoom: 0
});

// grand canyon map

var mapMinZoom = 1;
var mapMaxZoom = 15;
var mapExtent = [-112.261791, 35.983744, -112.113981, 36.132062];

var view = new ol.View({
    projection: 'EPSG:3857',
    center: ol.proj.transform([-112.18688965, 36.057944835],
        'EPSG:4326', 'EPSG:3857'),
    zoom: 12
});

var map = new ol.Map({
    layers: [
        /*
            new ol.layer.Tile({
                source: new ol.source.XYZ({
                    url: "http://localhost:3000/tiles/{z}/{x}/{y}.png"
                })
            }),*/
        new ol.layer.Tile({
            extent: ol.proj.transformExtent(mapExtent, 'EPSG:4326', 'EPSG:3857'),
            source: new ol.source.XYZ({
                attributions: 'Tiles © USGS, rendered with ' +
                    '<a href="http://www.maptiler.com/">MapTiler</a>',
                url: 'https://tileserver.maptiler.com/cassini-terrestrial/{z}/{x}/{y}.jpg',
                tilePixelRatio: 1, // THIS IS IMPORTANT
                minZoom: 0,
                maxZoom: 5
            })
        }),
        new ol.layer.Tile({
            extent: ol.proj.transformExtent(mapExtent, 'EPSG:4326', 'EPSG:3857'),
            source: new ol.source.XYZ({
                attributions: 'Tiles © USGS, rendered with ' +
                    '<a href="http://www.maptiler.com/">MapTiler</a>',
                url: 'https://tileserver.maptiler.com/grandcanyon@2x/{z}/{x}/{y}.png',
                tilePixelRatio: 2, // THIS IS IMPORTANT
                minZoom: mapMinZoom,
                maxZoom: mapMaxZoom
            })
        })
    ],
    target: 'map',
    view: view
});

// how much detail do we need
// where do we need to be
// how can we localize display of details in the map

// how to provide from a less than complete set without erroring out


function olMapPan(x, y) {
    console.log(`x: ${x} y: ${y}`);
    view.animate({
      center: ol.proj.fromLonLat([this.x, this.y])
    })
    // need to pan with given x and y vals above or similar
    // eventually can pass these vals into this method to provide dynamic functionality

};