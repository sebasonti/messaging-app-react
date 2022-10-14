import React from "react";
import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

import FormGroup from "./FormGroup";
import { useContacts } from "../contexts/ContactsProvider";
import { useConversations } from "../contexts/ConversationProvider";

export default function NewConversationModal({ closeModal }) {
    const [selectedContactIds, setSelectedContactIds] = useState([]);
    const { contacts } = useContacts();
    const { createConversation } = useConversations();

    function handleSubmit(e) {
        e.preventDefault();

        createConversation(selectedContactIds);
        closeModal();
    }

    function handleCheckboxChange(id) {
        setSelectedContactIds((prevSelectedContactIds) => {
            if (prevSelectedContactIds.includes(id)) {
                return prevSelectedContactIds.filter((prevId) => prevId !== id);
            } else {
                return [...prevSelectedContactIds, id];
            }
        });
    }

    return (
        <>
            <Modal.Header closeButton>Create Conversation</Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    {contacts.map((contact) => (
                        <FormGroup key={contact.id} controlId={contact.id}>
                            <Form.Check
                                type="checkbox"
                                value={selectedContactIds.includes(contact.id)}
                                label={contact.name}
                                onChange={() =>
                                    handleCheckboxChange(contact.id)
                                }
                            />
                        </FormGroup>
                    ))}
                    <Button type="submit">Create</Button>
                </Form>
            </Modal.Body>
        </>
    );
}
