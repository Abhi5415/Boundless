import { Drawer, Form, Button, Col, Row, Input, Select, Icon } from "antd";
import React, { Component } from "react";

const { Option } = Select;

class AddCardForm extends React.Component {
  state = { visible: false };
  constructor(props) {
    super(props);
    this.state = {
      name: undefined,
      url: undefined,
      desc: undefined,
      note: undefined
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    // TODO: add database submission here
    const card = {
      id: "random",
      name: this.state.name,
      url: this.state.url,
      desc: this.state.desc,
      note: this.state.note
    };
    this.props.handleAdd(card);
    console.log(card);
    // console.log(this.state.name);
  }

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = props => {
    this.setState({
      visible: false
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Button type="primary" onClick={this.showDrawer}>
          <Icon type="plus" /> Create a Note
        </Button>
        <Drawer
          title="Create a Note"
          width={720}
          onClose={this.onClose}
          visible={this.state.visible}
          style={{
            overflow: "auto",
            height: "calc(100% - 108px)",
            paddingBottom: "108px"
          }}>
          <form onSubmit={this.handleSubmit}>
            <label>
              Resource:
              <input
                type="text"
                value={this.state.name}
                name="name"
                onChange={e => this.handleChange(e, "name")}
              />
            </label>
            <label>
              URL:
              <input
                type="text"
                value={this.state.url}
                name="url"
                onChange={e => this.handleChange(e, "url")}
              />
            </label>
            <label>
              Description:
              <input
                type="text"
                value={this.state.desc}
                name="desc"
                onChange={e => this.handleChange(e, "desc")}
              />
            </label>
            <label>
              Note:
              <input
                type="text"
                value={this.state.note}
                name="note"
                onChange={e => this.handleChange(e, "note")}
              />
            </label>
            <Button
              type="submit"
              value="Submit"
              onClick={this.handleSubmit}
              type="primary">
              Submit
            </Button>
          </form>

          <div
            style={{
              position: "absolute",
              left: 0,
              bottom: 0,
              width: "100%",
              borderTop: "1px solid #e9e9e9",
              padding: "10px 16px",
              background: "#fff",
              textAlign: "right"
            }}>
            <Button onClick={this.onClose} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button
              type="submit"
              value="Submit"
              onClick={this.onClose}
              type="primary">
              Submit
            </Button>
          </div>
        </Drawer>
      </div>
    );
  }
}

const AddCard = Form.create()(AddCardForm);
export default AddCard;
