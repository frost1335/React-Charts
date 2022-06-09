import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Tooltip,
  Category,
  DataLabel,
  ColumnSeries,
} from "@syncfusion/ej2-react-charts";

export let data1 = [
  { x: "USA", y: 46 },
  { x: "GBR", y: 27 },
  { x: "CHN", y: 26 },
];
export let data2 = [
  { x: "USA", y: 37 },
  { x: "GBR", y: 23 },
  { x: "CHN", y: 18 },
];
export let data3 = [
  { x: "USA", y: 38 },
  { x: "GBR", y: 17 },
  { x: "CHN", y: 26 },
];

const Bar = () => {
  return (
    <ChartComponent
      id="area-chart"
      height="420px"
      primaryXAxis={{ valueType: "Category", majorGridLines: { width: 0 } }}
      primaryYAxis={{
        labelFormat: "{value}˚F",
        edgeLabelPlacement: "Shift",
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
      }}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={"#fff"}
    >
      <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />

      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={data1}
          xName="x"
          yName="y"
          name="Bronze"
          type="Column"
          marker={{
            dataLabel: {
              visible: true,
              position: "Top",
              font: { fontWeight: "600", color: "#ffffff" },
            },
          }}
        ></SeriesDirective>
        <SeriesDirective
          dataSource={data2}
          xName="x"
          yName="y"
          name="Bronze"
          type="Column"
          marker={{
            dataLabel: {
              visible: true,
              position: "Top",
              font: { fontWeight: "600", color: "#ffffff" },
            },
          }}
        ></SeriesDirective>
        <SeriesDirective
          dataSource={data3}
          xName="x"
          yName="y"
          name="Bronze"
          type="Column"
          marker={{
            dataLabel: {
              visible: true,
              position: "Top",
              font: { fontWeight: "600", color: "#ffffff" },
            },
          }}
        ></SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Bar;
