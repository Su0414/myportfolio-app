import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

class App extends Component {
  render() {
    return (
      <div>

      {/* Uses a header that scrolls with the text, rather than staying locked at the top */}
      <div className="demo-big-content">
          <Layout>
              <Header title="My Portfolio" scroll>
                  <Navigation>
                      <a href="#">Contact</a>
                      <a href="#">Projects</a>
                      <a href="#">Blog</a>
                      <a href="#">Resume</a>
                  </Navigation>
              </Header>
              <Drawer title="My Portfolio">
                  <Navigation>
                      <a href="#">Contact</a>
                      <a href="#">Projects</a>
                      <a href="#">Blog</a>
                      <a href="#">Resume</a>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
              </Content>
          </Layout>
      </div>

      </div>
    );
  }
}

export default App;
