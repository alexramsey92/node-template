var map = new ol.Map({
    layers: [
        new ol.layer.Tile({
                source: new ol.source.XYZ({
                url: "http://localhost:3000/tiles/{z}/{x}/{y}.png"
            })
        })
    ],
    target: 'map',
    view: new ol.View({
        center: [0, 0],
        zoom: 2
    })
});