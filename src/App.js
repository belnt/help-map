import React, { useState } from 'react';
import './App.css';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { Route, Switch, useHistory } from 'react-router-dom'
import { YMaps } from 'react-yandex-maps';
import MainMap from './Maps/MainMap';
import HeaderContent from './Components/HeaderContent';
import SubHeaderContent from './Components/SubHeaderContent';
import FooterContent from './Components/FooterContent';
import { EVENT } from './Core/event';
import { CONFIG } from './Core/config';

const { Header, Content, Footer } = Layout;

function getDirectionFromPath() {
  return window.location.pathname === '/' ? 'to' : 'from';
}

export default function App() {
  const history = useHistory();

  const [direction, setDirection] = useState(getDirectionFromPath());

  function onChangeDirection(direction) {
    setDirection(direction);

    const path = direction === 'to' ? '/' : '/back';
    history.push(path);
  }

  return (
    <Layout className="layout">
      <Header>
          <HeaderContent />
          <SubHeaderContent
            event={EVENT}
            direction={direction}
            changeDirection={onChangeDirection} />
      </Header>
      <Content className="content">
        <div className="map-wrapper">
            <YMaps query={{ apikey: CONFIG.yandexMapsApiKey }}>
              <Switch>
                <Route path="/" exact>
                  <MainMap
                    direction="to"
                    event={EVENT} />
                </Route>
                <Route path="/back">
                  <span></span>
                  <MainMap
                    direction="from"
                    event={EVENT} />
                </Route>
              </Switch>
            </YMaps>
        </div>
      </Content>
      <Footer>
          <FooterContent telegramBot={CONFIG.telegramBot} />
      </Footer>
    </Layout>
  )
}
