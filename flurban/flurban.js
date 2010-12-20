function flurban_loadmap(dims){

	var mm = com.modestmaps;

	var lat = 37.764915;
	var lon = -122.419873;
	var zoom = 2;

	var static = 'http://s3.amazonaws.com/info.aaronland.tiles.flurban/{Z}/{X}/{Y}.png';
	var provider = new mm.TileStacheStaticMapProvider(static);
	provider.setZoomRange(2, 9);

	var dims = undefined;
	var handlers = undefined;

	if (document.ontouchmove !== undefined){
		var touch = new mm.TouchHandler();
		var handlers = new Array();
		handlers.push(touch);
	}

	var map = new mm.Map('map', provider, dims, handlers);
	var loc = new mm.Location(lat, lon);
    	map.setCenterZoom(loc, zoom);
}