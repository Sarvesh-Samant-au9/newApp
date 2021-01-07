import { Pie } from "react-chartjs-2";
import React, { Component } from "react";

export default class LandChart extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      charData: {
        labels: [props.mainInfo.region, props.mainInfo.name],
        datasets: [
          {
            label: "Land Distribution",
            data: [props.landInfo, props.mainInfo.area],
            backgroundColor: [
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 99, 132, 0.6)",
            ],
          },
        ],
      },
    };
  }
  render() {
    return (
      <div>
        {this.state.charData.datasets[0].data.length >= 1 && (
          <Pie data={this.state.charData} options={{}} />
        )}
      </div>
    );
  }
}
