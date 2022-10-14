import React from "react";
import { useState } from "react";
import { Tab, Nav, Button, Modal } from "react-bootstrap";
import Contacts from "./Contacts";
import Conversations from "./Conversations";
import Groups from "./Groups";
import NewConversationModal from "./NewConversationModal";
import NewContactModal from "./NewContactModal";

export default function SideBar({ id }) {
    const NAVIGATION = [
        {
            linkText: "Conversations",
            buttonText: "Conversation",
            key: "conversations",
            component: <Conversations />,
            modal: <NewConversationModal closeModal={closeModal} />,
        },
        {
            linkText: "Contacts",
            buttonText: "Contact",
            key: "contacts",
            component: <Contacts />,
            modal: <NewContactModal closeModal={closeModal} />,
        },
        {
            linkText: "Groups",
            buttonText: "Group",
            key: "groups",
            component: <Groups />,
            modal: null,
        },
    ];

    const [activeKey, setActiveKey] = useState(NAVIGATION[0].key);
    const [modalOpen, setModalOpen] = useState(false);

    function closeModal() {
        setModalOpen(false);
    }

    return (
        <div style={{ minWidth: "250px" }} className="d-flex flex-column">
            <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
                <Nav variant="tabs" className="justify-content-center">
                    {NAVIGATION.map((option) => (
                        <Nav.Item key={option.key}>
                            <Nav.Link eventKey={option.key}>
                                {option.linkText}
                            </Nav.Link>
                        </Nav.Item>
                    ))}
                </Nav>
                <Tab.Content className="border-end overflow-auto flex-grow-1">
                    {NAVIGATION.map((view) => (
                        <Tab.Pane key={view.key} eventKey={view.key}>
                            {view.component}
                        </Tab.Pane>
                    ))}
                </Tab.Content>
                <div className="p-2 border-top border-end small">
                    Your ID: <span className="text-muted">{id}</span>
                </div>
                <Button
                    onClick={() => setModalOpen(true)}
                    className="rounded-0"
                >
                    New{" "}
                    {
                        NAVIGATION.filter((view) => view.key === activeKey)[0]
                            .buttonText
                    }
                </Button>
            </Tab.Container>
            <Modal show={modalOpen} onHide={closeModal}>
                {NAVIGATION.filter((view) => view.key === activeKey)[0].modal}
            </Modal>
        </div>
    );
}
