import React from 'react';
import {Button, Card, Col, Container, Row, Image} from "react-bootstrap";
import star from "../shared/assets/star.png"

const DevicePage = () => {
    const device = {id: 1, name: 'Dark Project HS5', price: 9000, rating: 5, img: `https://c.dns-shop.ru/thumb/st1/fit/500/500/f5642b004598008e37407ecec45265b9/6c04fac1563ed9a2aad0ae97e4af65b5dec226c4108ced21068aab3c4a827c35.jpg.webp`}
    const description = [
        {id: 1, title: 'Оперативная память', description: '8 гб'},
        {id: 2, title: 'Оперативна', description: '8 б'},
        {id: 3, title: 'Операвная память', description: 'б'},
        {id: 4, title: 'Оперативь', description: '8'},
    ]
    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{background: `url(${star}) no-repeat center center`, width:240, height: 240, backgroundSize: 'cover', fontSize:64}}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>От: {device.price} руб.</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {description.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;