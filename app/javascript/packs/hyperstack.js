// Import all the modules
import React from 'react';
import ReactDOM from 'react-dom';

// for opal/hyperstack modules to find React and others they must explicitly be saved
// to the global space, otherwise webpack will encapsulate them locally here
global.React = React;
global.ReactDOM = ReactDOM;

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
