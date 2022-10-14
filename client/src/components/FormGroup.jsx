import React from "react";
import { Form } from "react-bootstrap";

export default function FormGroup({ children }) {
    return <Form.Group className="mb-3">{children}</Form.Group>;
}
