import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import Features from './components/features';
import About from './components/about';
import Services from './components/services';
import Gallery from './components/gallery';
import Testimonials from './components/testimonials';
import Team from './components/Team';
import Contact from './components/contact';
import dataCast from './data/data_cast';
import dataCat from './data/data_cat';

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lang: 'cast',
      // catData: dataCat,
      // castData: dataCast,
      landingPageData: dataCast,
    }
    this.toggleLang = this.toggleLang.bind(this);
  }
  toggleLang() {
    console.log("ASD", this.state.lang)
    if(this.state.lang === 'cast'){
      this.setState({
        landingPageData : dataCat,
        lang: 'cat'
      })
    } else if(this.state.lang === 'cat'){
      this.setState({
        landingPageData : dataCast,
        lang: 'cast'
      })
    }
  }

  render() {
    return (
      <div>
        <Navigation data={this.state.landingPageData.Navigation} onChangeLang={this.toggleLang} lang={this.state.lang}/>
        <Header data={this.state.landingPageData.Header} />
        <Features data={this.state.landingPageData.Features} />
        <About data={this.state.landingPageData.About} />
        <Services data={this.state.landingPageData.Services} />
        <Gallery />
        <Testimonials data={this.state.landingPageData.Testimonials} />
        <Team data={this.state.landingPageData.Team} />
        <Contact data={this.state.landingPageData.Contact} />
      </div>
    )
  }
}

export default App;
