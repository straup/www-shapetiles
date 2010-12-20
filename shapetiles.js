function shapetiles_loadmap(dims){

	var lat = 37.764857;
	var lon = -122.419363;
	var zoom = 2;

	var mm = com.modestmaps;

	var template = 'http://s3.amazonaws.com/info.aaronland.tiles.shapetiles/{Z}/{X}/{Y}.png';

	var provider = new mm.TileStacheStaticMapProvider(template);
	provider.setZoomRange(1, 9);

	// var dims = undefined;
	var handlers = undefined;

	if (document.ontouchmove !== undefined){
		var touch = new com.modestmaps.TouchHandler();
		var handlers = new Array();
		handlers.push(touch);
	}

	var map = new mm.Map('map', provider, dims, handlers);
	var loc = new mm.Location(lat, lon);
    	map.setCenterZoom(loc, zoom);
}