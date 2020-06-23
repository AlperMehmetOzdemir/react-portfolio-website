import React, { Component } from "react";

class AlternatingText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTextIndex: 0,
    };
  }

  componentDidMount() {
    this.timout = setInterval(() => {
      let currentIndex = this.state.currentTextIndex;
      this.setState({ currentTextIndex: currentIndex + 1 });
    }, this.props.rate);
  }

  componentWillUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    let changingText = this.props.textArray[
      this.state.currentTextIndex % this.props.textArray.length
    ];
    return <span>{changingText}</span>;
  }
}

export default AlternatingText;
