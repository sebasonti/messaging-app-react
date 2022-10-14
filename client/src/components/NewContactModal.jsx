import React from "react";
import { useRef } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useContacts } from "../contexts/ContactsProvider";

import FormGroup from "./FormGroup";

export default function NewContactModal() {
    const idRef = useRef();
    const nameRef = useRef();
    const { createContact } = useContacts();

    function handleSubmit(e) {
        e.preventDefault();

        createContact(idRef.current.value, nameRef.current.value);
    }

    return (
        <>
            <Modal.Header closeButton>Create Contact</Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Form.Label>Id</Form.Label>
                        <Form.Control type="text" ref={idRef} required />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" ref={nameRef} required />
                    </FormGroup>
                    <Button type="submit">Create</Button>
                </Form>
            </Modal.Body>
        </>
    );
}
