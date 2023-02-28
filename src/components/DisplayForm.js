import React from 'react'
import { Col, Row } from 'react-bootstrap'
import circle from "../assets/circle.jpg"

export default function DisplayForm({ filteredData }) {
    console.log(filteredData)
    return (
        <div>
            <Row className="display">
                <Row className='text-center mt-5'>
                    <Col><h2>{filteredData.name}</h2></Col>
                </Row>
                <Row className='temp mt-5 '>
                    <Col md={4} className=''>
                        <h3>{filteredData.main.temp} F</h3>
                        
                    </Col>
                    <Col md={4}  className='circle'>

                    </Col>
                    <Col md={4}>
                        <h3>Humidity:{filteredData.main.humidity} %</h3>
                        <h3>Wind:{filteredData.wind.speed} km/hr</h3>
                    </Col>
                </Row>
            </Row>
        </div>
    )
}
