(function () {
	'use strict';

	angular.module('ngGoogleStaticMaps', []).directive('staticMap', function ($parse) {
		return {
			template: '<img alt="Google Static Map">',
			replace: true,
			restrict: 'E',
			link: function postLink(scope, element, attrs, ctrl) {

				var el = element[0];
				var markers = $parse(attrs.markers)(scope);

				if (!attrs.mapWidth) {
					throw new Error('The `mapWidth` is required.');
				}

				if (!attrs.mapHeight) {
					throw new Error('The `mapHeight` is required.');
				}

				if (!attrs.address) {
					throw new Error('The `address` is required.');
				}

				var zoomParam = "&zoom=";
				if (!attrs.zoom) {
					zoomParam += "14"    
				} else {
					zoomParam += attrs.zoom
				}

				var urlBase = '//maps.googleapis.com/maps/api/staticmap?center=';

				var sizeParam = "&size="+ attrs.mapWidth +"x" + attrs.mapHeight;
				var endEncoding = encodeURIComponent(attrs.address);
				var markerParam = "&markers=color:red|" + endEncoding;

				el.alt = attrs.address;
				el.src = urlBase + endEncoding + sizeParam + zoomParam + markerParam;
    		}
  		};
	});
}());