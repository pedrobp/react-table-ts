import React from 'react';
import { Data } from 'Data/DatasetTypes';
import Row from 'Components/Table/Body/Row';
import './Body.css';

interface BodyProps {
  data: Data | undefined;
  aggregateGroupings: string[];
}

const Body: React.FC<BodyProps> = ({ data, aggregateGroupings }) => {
  return (
    <div className="body-root">
      {data?.results.map((row, index) => (
        <Row
          key={index}
          row={row}
          tags={data.tags}
          workflows={data.workflows}
          aggregateGroupings={aggregateGroupings}
          depth={1}
        />
      ))}
      {data?.totals && (
        <Row
          row={data.totals}
          tags={data.tags}
          workflows={data.workflows}
          aggregateGroupings={aggregateGroupings}
          depth={0}
        />
      )}
    </div>
  );
};

export default Body;
