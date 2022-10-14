import React, { useState, useCallback } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { useConversations } from "../contexts/ConversationProvider";

export default function CurrentConversation() {
    const [text, setText] = useState("");
    const setRef = useCallback((node) => {
        if (node) {
            node.scrollIntoView({ smooth: true });
        }
    }, []);
    const { sendMessage, selectedConversation } = useConversations();

    function handleSubmit(e) {
        e.preventDefault();
        sendMessage(
            selectedConversation.recipients.map((recipient) => recipient.id),
            text
        );
        setText("");
    }

    return (
        <div className="d-flex flex-column flex-grow-1">
            <div className="flex-grow-1 overflow-auto">
                <div className="d-flex flex-column align-items-start justify-content-end px-3">
                    {selectedConversation.messages.map((message, index) => {
                        const isLastMessage =
                            selectedConversation.messages.length - 1 === index;
                        return (
                            <div
                                ref={isLastMessage ? setRef : null}
                                key={index}
                                className={`my-1 d-flex flex-column ${
                                    message.fromMe ? "align-self-end" : ""
                                }`}
                            >
                                <div
                                    className={`rounded px-2 py-1 ${
                                        message.fromMe
                                            ? "bg-primary text-white"
                                            : "border"
                                    }`}
                                >
                                    {message.text}
                                </div>
                                <div
                                    className={`text-muted small ${
                                        message.fromMe ? "text-right" : ""
                                    }`}
                                >
                                    {message.fromMe
                                        ? "You"
                                        : message.senderName}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <InputGroup>
                        <Form.Control
                            as="textarea"
                            required
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            style={{ height: "75px", resize: "none" }}
                        />
                        <Button type="submit">Send</Button>
                    </InputGroup>
                </Form.Group>
            </Form>
        </div>
    );
}
