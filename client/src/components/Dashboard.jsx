import React from "react";
import { useConversations } from "../contexts/ConversationProvider";
import CurrentConversation from "./CurrentConversation";
import SideBar from "./SideBar";

export default function Dashboard({ id }) {
    const { selectedConversation } = useConversations();

    return (
        <div className="d-flex" style={{ height: "100vh" }}>
            <SideBar id={id} />
            {selectedConversation && <CurrentConversation />}
        </div>
    );
}
