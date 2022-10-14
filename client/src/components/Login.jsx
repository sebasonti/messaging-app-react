import React, { useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { v4 as uuidV4 } from "uuid";

import FormGroup from "./FormGroup";

export default function Login({ onIdSubmit }) {
    const idRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();

        onIdSubmit(idRef.current.value);
    }

    function createNewId() {
        onIdSubmit(uuidV4());
    }

    return (
        <Container
            className="align-items-center d-flex"
            style={{ height: "100vh" }}
        >
            <Form onSubmit={handleSubmit} className="w-100">
                <FormGroup>
                    <Form.Label>Enter Your Id</Form.Label>
                    <Form.Control type="text" ref={idRef} required />
                </FormGroup>
                <Button type="submit" className="me-2">
                    Login
                </Button>
                <Button variant="secondary" onClick={createNewId}>
                    Create A New Id
                </Button>
            </Form>
        </Container>
    );
}
