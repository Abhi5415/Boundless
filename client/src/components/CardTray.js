import { Drawer, Button } from "antd";
import React, { Component } from "react";
import CardDrawer from "./CardDrawer";

export default class CardTray extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showDrawer}>
          Open
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={true}
          mask={false}
          onClose={this.onClose}
          visible={this.state.visible}>
          <CardDrawer
            column={this.props.column}
            columnIndex={this.props.columnIndex}
            key={this.props.columnIndex}
            handleRemove={this.props.handleRemove}
            handleAdd={this.props.handleAdd}
          />
        </Drawer>
      </div>
    );
  }
}
