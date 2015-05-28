# ngGoogleStaticMaps
AngularJS directive for Google Static Maps.

See the [Homepage](http://duartepatriani.github.io/ngGoogleStaticMaps)

## Usage

1. `bower install --save ngGoogleStaticMaps`
2. Include bower_componets/ngGoogleStatisMaps/ngGoogleStaticMaps.min.js in your HTML.
3. Load the `ngGoogleStaticMaps` module for your Angular app.
4. Use the `static-map` directive.

## Example

```html
<static-map map-width="400" map-height="400" zoom="14" address="eiffel tower"></static-map>
```

<img alt="eiffel tower" src="//maps.googleapis.com/maps/api/staticmap?center=eiffel%20tower&amp;size=400x400&amp;zoom=14&amp;markers=color:red|eiffel%20tower">

## Attributes

### `address` (required)

People don't speak in latitudes and longitudes; they know addresses. but you can use either address or latitudes/longitudes

```
address='40.714728,-73.998672'
or
address='City+Hall,New+York,NY'
```

### `map-width` (required)

The map-width attribute is required and must be specified in px

### `map-height` (required)

The map-width attribute is required and must be specified in px

### `zoom` (optional) (default:14)

Maps on Google Maps have an integer 'zoom level' which defines the resolution of the current view. Zoom levels between 0 (the lowest zoom level, in which the entire world can be seen on one map) and 21+ (down to streets and individual buildings) are possible within the default roadmap view. Building outlines, where available, appear on the map around zoom level 17. This value differs from area to area and can change over time as the data evolves.

## Contributing

Pull requests welcome. Only change files in `src`

## License

MIT
