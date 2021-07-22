import React, { Component } from "react";
import Chart from "react-apexcharts";


class OrdersChart extends Component {

    constructor(props){
        super(props);
        this.state = {
            options: {
              chart: {
                id: "basic-bar"
              },
              xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
              }
            },
            series: [
              {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91]
              }
            ]
        };
    };

    render() {

        return (    
                 
            <div className="app w-100">
                <div className="my-2">
                    <h4>Your Orders</h4>
                </div>
                <div className="">
                    <div className="mixed-chart">
                        <Chart
                        options={this.state.options}
                        series={this.state.series}
                        type="bar"
                        width="400"
                        />
                    </div>
                </div>
            </div>

        );
    }
}

export default OrdersChart;
