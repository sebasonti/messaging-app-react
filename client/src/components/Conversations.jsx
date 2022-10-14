import React from "react";
import { ListGroup } from "react-bootstrap";

import { useConversations } from "../contexts/ConversationProvider";

export default function Conversations() {
    const { conversations, selectConversationByIndex } = useConversations();

    return (
        <ListGroup variant="flush">
            {conversations.map((conversation, index) => (
                <ListGroup.Item
                    key={index}
                    action
                    onClick={() => selectConversationByIndex(index)}
                    active={conversation.selected}
                >
                    {conversation.recipients.map((r) => r.name).join(", ")}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}
