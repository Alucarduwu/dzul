import React from 'react';
//import ReactDOM from 'react-dom/client';
import  Button  from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

function Example() {
    return <Container>

        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <Row>
            <Col xs={12} md={8}>
                <Stack direction="horizontal" gap={3}>
                    <Form.Control className="me-auto" placeholder="Add your item here..." />
                    <Button variant="secondary">Submit</Button>
                </Stack>
            </Col>
            <Col xs={6} md={4}>
                <div className="vr" />
                <Button variant="outline-danger">Reset</Button>
            </Col>
        </Row>

        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
        <Row>
            <Col xs={6} md={4}>
                xs=6 md=4
            </Col>
            <Col xs={6} md={4}>
                xs=6 md=4
            </Col>
            <Col xs={6} md={4}>
                xs=6 md=4
            </Col>
        </Row>

        {/* Columns are always 50% wide, on mobile and desktop */}
        <Row>
            <Col xs={6}>xs=6</Col>
            <Col xs={6}>xs=6</Col>
        </Row>
    </Container>
    
}

export default Example;

/*if (document.getElementById('app')) {
    const Index = ReactDOM.createRoot(document.getElementById("app"));

    Index.render(
        <React.StrictMode>
            <Example />
        </React.StrictMode>
    )
}*/
