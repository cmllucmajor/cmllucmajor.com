import React, { Component } from "react";

export class Navigation extends Component {
  constructor(props) {
    super(props);
    this.onChangeLang = props.onChangeLang
    this.state = {
      lang: props.lang,
      data: props.data
    }
  }

  componentDidUpdate(prevProps) {
    if(prevProps.lang !== this.props.lang) {
      this.setState({lang: this.props.lang});
    }
    if(prevProps.data !== this.props.data) {
      this.setState({data: this.props.data});
    }
  }

  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
            {this.state.data.title}
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <div>
              <div 
                onClick={this.onChangeLang}
                className="nav navbar-nav navbar-right"
                style={{zIndex: 6}}
              >
                  <img
                    src={(this.state.lang === 'cast')? 'img/catala.gif': 'img/castella.gif'}
                    alt=""
                  />
                    
              </div>
            </div>
            <ul className="nav navbar-nav navbar-right" style={{position:'relative', zIndex: -1}}>
              <li>
                <a href="#features" className="page-scroll">
                  {this.state.data.queOfrecemos}
                </a>
              </li>
              <li>
                <a href="#about" className="page-scroll">
                {this.state.data.quienesSomos}
                </a>
              </li>
              <li>
                <a href="#services" className="page-scroll">
                {this.state.data.dondeEstamos}
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                {this.state.data.contacto}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
