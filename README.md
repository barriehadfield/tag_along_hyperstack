# README

## Creating the Rails app with Hyperstack (and Postgres)

+ `rails new tag_along_hyperstack --template=https://rawgit.com/hyperstack-org/hyperstack/edge/install/rails-webpacker.rb --database=postgresql`
+ `rake db:create`

## Start the Rails app

+ `foreman start`
+ Navigate to `http://localhost:5000/`
+ Sit back and experience the joy of "Hello world from Hyperstack!" React component on your page, Webpacker, Opal HotLoader environment setup and push notifications via ActionCable all configured and working

## Install the JS packages

+ `yarn add mobx`
+ `yarn add mobx-react`
+ `yarn add react-map-gl`

+ Add the following to `hyperstack.js` (you can use a new pack, but you must remember to include it in your view template)

```js
// app/javascript/hyperstack.js
import { observable, action } from 'mobx';
import { Provider } from 'mobx-react';
import MapGL, {Marker} from 'react-map-gl';
import moment from 'react-map-gl';
import MARKER_STYLE from 'react-map-gl'
global.observable = observable;
global.action = action;
global.Provider = Provider;
global.MapGL = MapGL;
global.Marker = Marker;
global.moment = moment;
global.MARKER_STYLE = MARKER_STYLE;
```

+ Stop and restart the Rails server (`foreman start`) - this will get Webpack to rebuild the bundle
+ (Sometimes its best to do a `bin/webpack` to force a rebuild of the assets as you will see any errors prior to starting the rails server)

### Check everything is installed properly

+ In your browser, open the JS console and type `observable`

And expect to see:

```js
observable
ƒ createObservable(v, arg2, arg3) {
  // @observable someProp;
  if (typeof arguments[1] === "string") {
    return deepDecorator$$1.apply(null, arguments);
  } // it is an observable already, done
 …
```

+ Do the same for `action` and `Provider`, `MapGL`, `Marker`, `moment` and `MARKER_STYLE`
+ Sit back, have a cup of tea and smile as all the JS is installed

### Built the app in Hyperstack

....
