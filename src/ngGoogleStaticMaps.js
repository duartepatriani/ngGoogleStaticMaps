(function () {
	function StaticMapProvider() {

		var _protocol;
		var _apiKey;
		
		this.useApiKey = function (key) {
			_apiKey = key;
		}

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
				},
				getApiKey: function(){
					return _apiKey || '';
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
			scope:{
				styles: "="
			}
		};
		function link(scope, element, attrs) {
			var el = element[0];

    
  function get_static_style(styles) {
    var result = [];
    styles.forEach(function(v, i, a){
      var style='';
      if (v.stylers.length > 0) {
        style += (v.hasOwnProperty('featureType') ? 'feature:' + v.featureType : 'feature:all') + '|';
        style += (v.hasOwnProperty('elementType') ? 'element:' + v.elementType : 'element:all') + '|';
        v.stylers.forEach(function(val, i, a){
          var propertyname = Object.keys(val)[0];
          var propertyval = val[propertyname].toString().replace('#', '0x');
          style += propertyname + ':' + propertyval + '|';
        });
      }
      result.push('&style='+encodeURIComponent(style))
    });

    return result.join('&');
  }
    
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
			    
			var stylesParam="";
			if(scope.styles){
			  stylesParam = get_static_style(scope.styles)
			}
    
  
			
			var scaleParam = "&scale=";
			if (!attrs.scale) {
				scaleParam += "1"
			} else {
				scaleParam += attrs.scale
			}
			
			var urlBase = staticMap.getProtocol() + '//maps.googleapis.com/maps/api/staticmap?center=';

			var sizeParam = "&size=" + attrs.mapWidth + "x" + attrs.mapHeight;
			var endEncoding = encodeURIComponent(attrs.address);
			var markerParam = "&markers=color:red|" + endEncoding;
			var keyParam = "&key=" + staticMap.getApiKey();
			
			el.alt = attrs.address;
			el.src = urlBase + endEncoding + sizeParam + zoomParam + markerParam + scaleParam + stylesParam + keyParam;
		}
		return directive;
	}

	angular.module('ngGoogleStaticMaps', []).provider('staticMap', StaticMapProvider).directive('staticMap', GoogleStaticMaps);

	

} ());
