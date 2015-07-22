function StaticMapProvider() {

	var _protocol;

	this.forceProtocol = function (protocol) {
		if (angular.isString(protocol)) {

			_protocol = protocol ? (protocol.replace(/:$/, '') + ':') : protocol;
			return this;
		}

		return _protocol;
	}

	this.$get = [function () {
		return {
			getProtocol: function () {
				return _protocol || '';
			}
		};
	}];
}

GoogleStaticMaps.$inject = ['staticMap'];
function GoogleStaticMaps(staticMap) {
	var directive = {
		link: link,
		template: '<img alt="Google Static Map">',
		replace: true,
		restrict: 'E',
	};
	function link(scope, element, attrs) {
		var el = element[0];

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

		var urlBase = staticMap.getProtocol() + '//maps.googleapis.com/maps/api/staticmap?center=';

		var sizeParam = "&size=" + attrs.mapWidth + "x" + attrs.mapHeight;
		var endEncoding = encodeURIComponent(attrs.address);
		var markerParam = "&markers=color:red|" + endEncoding;

		el.alt = attrs.address;
		el.src = urlBase + endEncoding + sizeParam + zoomParam + markerParam;
	}
	return directive;
}
angular.module('ngGoogleStaticMaps', []).provider('staticMap', StaticMapProvider).directive('staticMap', GoogleStaticMaps);