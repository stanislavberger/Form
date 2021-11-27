import React, { Component } from 'react';
import styles from './assets/style.css';
import { Row, Col, Container } from 'react-bootstrap';
import Navigation from './Navigation';
import {Routes, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import FormBasic from './FormBasic';
import Form from './Form';
import Home from './Home';


export class Layout extends Component {
    render() {
        return (
            <div className="wrapper">
                <Container>
                    <Row>
                        <Col className="left-sidebar">
                            <div className="sidebar">
                                <img src={logo} className="App-logo" alt="logo" />
                                <Navigation />
                            </div>
                        </Col>
                        <Col xs={8} >
                            <div className="main-container">
                                <Routes>
                                    <Route excat path="/" element={<Home />} />
                                    <Route path="1" element={<FormBasic />} />
                                    <Route path="2" element={<Form />} />
                                </Routes>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <div className="footer mt-5">
                            <p>Stanislav Berger, 2021</p>
                        </div>
                        </Col>
                    </Row>
                </Container>
                
            </div>
        )
    }
}

export default Layout
