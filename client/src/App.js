import React, { Component } from "react";
import Board from "./components/Board";
import "./App.css";
import "antd/dist/antd.css";

import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContextProvider } from "react-dnd";
import { Form } from "antd";

class DrawerForm extends Component {
  render() {
    return (
      <div>
        <DragDropContextProvider backend={HTML5Backend}>
          <Board />
        </DragDropContextProvider>
      </div>
    );
  }
}

const App = Form.create()(DrawerForm);

export default App;
