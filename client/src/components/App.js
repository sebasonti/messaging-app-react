import React from "react";
import ContactsProvider from "../contexts/ContactsProvider";
import ConversationsProvider from "../contexts/ConversationProvider";
import SocketProvider from "../contexts/SocketProvider";
import useLocalStorage from "../hooks/useLocalStorage";
import Dashboard from "./Dashboard";
import Login from "./Login"

export default function App() {
  const [id, setId] = useLocalStorage('id');

  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  );

  return (
    id ? dashboard : <Login onIdSubmit={setId} />
  );
}
