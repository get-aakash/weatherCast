import React, { useState } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { fetchData } from '../utils/axiosHelper'

export default function MyForm({weatherData}) {
    const [city, setCity] = useState('')
    const [data, setData] = useState({})
    const handleChange = (e)=>{
        setCity(e.target.value)
    }
    
    const handleOnSubmit = async(e)=>{
        e.preventDefault()
        const value = await fetchData(city)
        setData(value)
        weatherData(data)
        

    }
    
    return (
        <Form onSubmit={handleOnSubmit} className='border p-2 rounded shadow-lg ms-3 mt-3'>
            <Row>
                <Col md={3}>
                    <h2>WeatherCast</h2>
                </Col>
                <Col md={5}>
                    <Form.Control onChange={handleChange} placeholder="search for a city.." />
                </Col>
                <Col>
                    <Button type='submit'>
                        <i className="icon fa-solid fa-magnifying-glass mt-1 "></i>
                    </Button>
                </Col>
                <Col>

                </Col>

            </Row>
        </Form>
    )
}
