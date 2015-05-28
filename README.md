# ngGoogleStaticMaps
AngularJS directive for Google Static Maps.

## Usage

1. `bower install --save ngGoogleStaticMaps`
2. Include bower_componets/ngGoogleStatisMaps/ngGoogleStaticMaps.min.js in your HTML.
3. Load the `ngGoogleStaticMaps` module for your Angular app.
4. Use the `static-map` directive.

## Example

See the [live demo](http://duartepatriani.github.io/ngGoogleStaticMaps)

```html
<static-map map-width="400" map-height="400" zoom="14" address="eiffel tower"></static-map>
```

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

The sensor attribute must explicitly be set to either `true` or `false`.

## Contributing

Pull requests welcome. Only change files in `src`

## License

MIT