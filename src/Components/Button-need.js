import React, { Component } from 'react';

import { Button, Drawer } from 'antd';
import {CloseOutlined} from '@ant-design/icons';

class ButtonNeed extends Component {
    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <div>
                <Button className="ant-btn ant-btn-primary ant-btn-round ant-btn-lg" onClick={this.showModal}>Мне нужна помощь</Button>
                
                <Drawer
                    placement="right"
                    closable={false}
                    onClose={this.handleCancel}
                    visible={this.state.visible}
                    className="drawerForm"
                >
                    <div className="gamburgerMenuWrapper">
                        <Button type="" className="" onClick={this.handleCancel} shape="circle" icon={<CloseOutlined />} />
                    </div>
                    <div className="frameWrapper">
                        <iframe className='googleForms' src="https://docs.google.com/forms/d/e/1FAIpQLSf0WrxY_AKJdRxCjJ6NpRpzzIfrY93gtPt77EKpf1Zk3oauaw/viewform?embedded=true"  frameborder="0" marginheight="0" marginwidth="0">Загрузка…</iframe>
                    </div>
                </Drawer>
            </div>
        );
    }
}

export default ButtonNeed;