import React from "react";
import {
    Container, Navbar, Nav, Form, Button
} from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


class Welcome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            querytext: '',
            persons: ''
        };

    }
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
          const persons = res.data;
          this.setState({ persons });
        })
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        const { querytext , persons} = this.state;
        return (<>
            <Container>
                <Nav fill variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                            Disabled
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <br />
                <br />
                <br />
                <br />
                <Form>
                    <Form.Group className="mb-3" controlId="query">
                        <Form.Label>QueryStatement</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Query"
                            onChange={this.handleChange}
                            value={querytext}
                            name='querytext'
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="query">
                        <Form.Label>Sample axios</Form.Label>
                        <Form.Control
                             as="textarea"
                            placeholder="Query"
                            // onChange={this.handleChange}
                            value={JSON.stringify(persons)}
                            name='querytext'
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
          
        </>);

    }
}

export default Welcome;