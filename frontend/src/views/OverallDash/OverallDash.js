import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2'
import { Button, Card, CardBody, CardHeader, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { askForPermissioToReceiveNotifications } from '../../push-notification';

const pie = {
    labels: [
        'Red',
        'Green',
        'Yellow',
    ],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
            ],
        }],
};

class OverallDash extends Component {
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
            <div>
                <Button block color="primary" onClick={askForPermissioToReceiveNotifications} >Enable notifications</Button>
                <br />
                <Card>
                    <CardHeader>
                        Division of funds among categories (across network)
            </CardHeader>
                    <CardBody>
                        <div className="project-selection">
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
                        </div>
                        <div className="chart-wrapper">
                            <Pie data={pie} />
                        </div>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default OverallDash;