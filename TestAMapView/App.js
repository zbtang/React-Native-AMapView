/**
 * Created by tangzhibin on 16/9/12.
 */

'use strict';
import React, {Component} from 'react';
import {
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    View,
    // MapView,
    PropTypes
} from 'react-native';
import TaskMarkView from './TaskMarkView';
import MapView from 'react-native-maps';

export default class App extends Component {
    mAnnotations = [
        {
            latitude: 22.478612,
            longitude: 113.911796,
            animateDrop: true,
            draggable: false,
            onDragStateChange: ()=> null,
            onFocus: ()=> null,
            onBlur: ()=> null,
            title: '消费金融｜持案5天',
            subtitle: 'subtitle',
            // leftCalloutView: <TaskMarkView/>,
            // rightCalloutView: <View/>,
            // detailCalloutView: <TaskMarkView/>,
            // tintColor: 'red',
            // image: require('./mapMark.png'),
            view: <Image source={require('./mapMark.png')}/>,
            id: 'testId'

        }
    ];

    initialRegion = {
        latitude: 22.478612,
        longitude: 113.911796,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    render() {
        // NOTE:marker must have title
        return (
            <MapView
                style={{flex: 1}}
                initialRegion={this.initialRegion}
                showsUserLocation={true}
            >
                <MapView.Marker
                    coordinate={{
                        latitude: 22.478612,
                        longitude: 113.911796
                    }}
                    title={'fjsf'}
                    toolTip={true}
                >
                    <MapView.Callout style={{width: 270, height: 105}}>
                        <TaskMarkView/>
                    </MapView.Callout>
                </MapView.Marker>
                <MapView.Marker
                    coordinate={{
                        latitude: 22.479722,
                        longitude: 113.921899
                    }}
                    title={'fjsf'}
                >
                    <MapView.Callout toolTip={true}
                                     style={{width: 270, height: 105}}>
                        <TaskMarkView/>
                    </MapView.Callout>
                </MapView.Marker>
            </MapView>
        );
    }
}