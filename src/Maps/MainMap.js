import React, { Component } from 'react';
import { Map, ObjectManager } from 'react-yandex-maps';
import { message } from 'antd';
import './MainMap.css';
import { getCanPersons, getNeedPersons } from '../Core/Api';
import { getCanPointFeature } from './CanPoint';
import { getNeedPointFeature } from './NeedPoint';

class MainMap extends Component {
    state = {
        points: [],
    }

    async componentDidMount() {
        const points = await this.loadData();
        this.setState({ 
            points: [...points.can_persons, ...points.need_persons],
         });
    }

    async loadData() {
        try {
            const [can_persons, need_persons] = await Promise.all([
                getCanPersons(),
                getNeedPersons(),
            ]);
            console.log(getCanPersons())
            return {
                can_persons,
                need_persons
            }
        } catch (e) {
            message.error('Не удалось загрузить данные. Пожалуйста, повторите позже.');

            return {};
        }
    }

    render() {
        return (
            <Map
                className="map"
                defaultState={{
                    center: [53.902512, 27.561481],
                    zoom: 12,
                    controls: [
                        'geolocationControl',
                        'fullscreenControl',
                        'searchControl',
                        'zoomControl',
                    ],
                }}
                defaultOptions={{
                    maxZoom: 18
                }}
                modules={[
                    'control.GeolocationControl',
                    'control.FullscreenControl',
                    'control.SearchControl',
                    'control.ZoomControl',
                ]}
            >
                <ObjectManager
                    defaultOptions={{
                        clusterize: true,
                        gridSize: 64,
                        clusterOpenBalloonOnClick: true,
                        clusterDisableClickZoom: false,
                        clusterHideIconOnBalloonOpen: false,
                        geoObjectHideIconOnBalloonOpen: false,
                    }}
                    defaultClusters={{
                        clusterIconLayout: 'default#pieChart',
                        clusterIconPieChartRadius: 30,
                        clusterIconPieChartCoreRadius: 20,
                        clusterIconPieChartStrokeWidth: 5,
                    }}
                    modules={[
                        'geoObject.addon.balloon',
                        'geoObject.addon.hint',
                        'objectManager.addon.clustersBalloon',
                        'objectManager.addon.objectsBalloon',
                        'objectManager.addon.objectsHint',
                        'layout.PieChart',
                    ]}
                    features={this.state.points.map((point, index) => {
                        return point.type === 'can-help' ?
                            getCanPointFeature(point, index) :
                            getNeedPointFeature(point, index);
                    })}
                ></ObjectManager>
            </Map>
        );
    }
}

export default MainMap;
