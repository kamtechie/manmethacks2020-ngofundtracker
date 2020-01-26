import React, { Component } from 'react';
import { Alert, Button, Card, CardBody, CardHeader, Col, Row, Form, FormGroup, Label, Input, FormText, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Invest extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: new Array(6).fill(false),
        };
    }

    toggle(i) {
        const newArray = this.state.dropdownOpen.map((element, index) => {
            return (index === i ? !element : false);
        });
        this.setState({
            dropdownOpen: newArray,
        });
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                <strong>Invest Amount</strong>
                            </CardHeader>
                            <CardBody>
                                <Form action="" method="post" className="form-horizontal">
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="invest-amount">Anount: </Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="Number" id="invest-amount" name="invest-amount" placeholder="Enter Amount" step="any" />
                                            <FormText className="help-block">Please enter amount you wish to invest</FormText>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="invest-project">Project</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Dropdown isOpen={this.state.dropdownOpen[0]} toggle={() => {
                                                this.toggle(0);
                                            }}>
                                                <DropdownToggle caret>
                                                    Select Project:
                                                 </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem>Project 1</DropdownItem>
                                                    <DropdownItem>Project 2</DropdownItem>
                                                    <DropdownItem>Project 3</DropdownItem>
                                                </DropdownMenu>
                                            </Dropdown>
                                            <FormText className="help-block">Please select the project you wish to invest in</FormText>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                        </Col>
                                        <Col xs="12" md="3">
                                            <Button color="success">
                                                Submit
                                            </Button>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Invest;
