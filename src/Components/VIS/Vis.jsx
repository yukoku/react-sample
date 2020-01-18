import React from 'react';
import '../../../node_modules/react-vis/dist/style.css';
import { Grid, Table } from 'semantic-ui-react';
import {
  XYPlot,
  LineSeries,
  VerticalGridLines,
  VerticalBarSeries,
  HorizontalGridLines,
  XAxis,
  YAxis,
} from 'react-vis';

const height = 300;
const width = 450;

const genRandom = (num) => {
  const arr = []
  for(let i = 0; i < num; i++){
    arr.push({x: i, y: Math.random()})
  }
  return arr;
}

const data = genRandom(10);

const renderDataTable = (data) => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>X</Table.HeaderCell>
        <Table.HeaderCell>Y (random)</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
        {data.map((d, i) => {
          return (
            <Table.Row key={`vis-data-${i}`}>
              <Table.Cell>{d.x}</Table.Cell>
              <Table.Cell>{d.y}</Table.Cell>
            </Table.Row>
          );
        })}
    </Table.Body>
  </Table>
)

const renderLineSeries = () => (
  <XYPlot height={height} width={width}>
    <VerticalGridLines />
    <HorizontalGridLines />
    <XAxis />
    <YAxis />
    <LineSeries data={data} />
  </XYPlot>
);

const renderVerticalBarSeries = () => (
  <XYPlot height={height} width={width}>
    <VerticalGridLines />
    <HorizontalGridLines />
    <XAxis />
    <YAxis />
    <VerticalBarSeries data={data} />
  </XYPlot>
)

const Vis = () => (
  <div>
    <h2>React-VIS</h2>
    <Grid>
      <Grid.Column width={8}>
        <h4>LineSeries</h4>
        {renderLineSeries()}
      </Grid.Column>
      <Grid.Column width={8}>
        <h4>VerticalBarSeries</h4>
        {renderVerticalBarSeries()}
      </Grid.Column>
    </Grid>
    <h4>Data</h4>
    {renderDataTable(data)}
  </div>
);

export default Vis;
