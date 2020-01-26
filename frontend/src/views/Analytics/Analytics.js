import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2'
import { Card, CardBody, CardHeader, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

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

class Analytics extends Component {
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
            <Card>
                <CardHeader>
                    Division on your funds among expense categories         
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
        )
    }
}

export default Analytics;