import React from "react";
import Qna from "./Components/Qna/Qna.js";
import Search from "./Components/Search/Search.js";
import AButton from "./Components/Buttons/AButton.js";
import QButton from "./Components/Buttons/QButton.js";
import axios from "axios";
import Token from './config/token'

class QnA extends React.Component {
  constructor() {
    super();
    this.state = {
      qna: [],
      initialCount: 2,
    };
    this.getQ = this.getQ.bind(this);
    this.changeView = this.changeView.bind(this);
  }

  getQ() {
    axios
      .get(
        "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/?product_id=40393",
        {
          headers: {
            authorization: Token,
          },
        }
      )
      .then((data) =>
        this.setState({
          qna: data.data,
        })
      )
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    this.getQ();
  }

  changeView() {
    this.setState({
      initialCount: this.state.qna.results.length,
    });
  }

  render() {
    return (
      <div className="app pr-16 pl-16">
        <div className="grid grid-cols-1 gap-4  w-2/3   mx-auto">
          <Search />
          <Qna initialCount={this.state.initialCount} data={this.state.qna} />
        </div>
        <div
          className="grid gap-4  w-3/5 mt-4 mx-auto"
          style={{ display: "flex" }}
        >
          <AButton changeView={this.changeView} />
          <QButton />
        </div>
      </div>
    );
  }
}

export default QnA;
