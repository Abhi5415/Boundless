import { Drawer, Form, Button, Col, Row, Input, Select, Icon } from "antd";
import React, { Component } from "react";

const { Option } = Select;

class AddCardForm extends React.Component {
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
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Resource Name">
                  {getFieldDecorator("name", {
                    rules: [
                      { required: true, message: "Enter the resource name" }
                    ]
                  })(<Input placeholder="Enter the resource name" />)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Url">
                  {getFieldDecorator("url", {
                    rules: [{ required: true, message: "Please enter url" }]
                  })(
                    <Input
                      style={{ width: "100%" }}
                      placeholder="Please enter url"
                    />
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={5}>
              <Col span={24}>
                <Form.Item label="Description">
                  {getFieldDecorator("description", {
                    rules: [
                      {
                        required: true,
                        message: "please enter url description"
                      }
                    ]
                  })(
                    <Input.TextArea
                      rows={1}
                      placeholder="please enter url description"
                    />
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={5}>
              <Col span={24}>
                <Form.Item label="Notes">
                  {getFieldDecorator("note", {
                    rules: [
                      {
                        required: true,
                        message: "Write your notes here"
                      }
                    ]
                  })(
                    <Input.TextArea
                      rows={50}
                      placeholder="Write your notes here"
                    />
                  )}
                </Form.Item>
              </Col>
            </Row>
          </Form>
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
            <Button onClick={this.onClose} type="primary">
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
