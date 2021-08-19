import React, { useEffect, useState } from 'react';
import { Header, Body } from 'Components/Table';
import { Data } from 'Data/DatasetTypes';
import './App.css';

const App: React.FC = () => {
  const [data, setData] = useState<Data>();

  useEffect(() => {
    fetch('Data/Dataset.json')
      .then((response) => response.json())
      .then((dataset) => {
        setData({
          aggregates: dataset.aggregateGroupings[0].aggregates,
          tags: Object.values(dataset.objects.tags),
          workflows: Object.values(dataset.objects.workflows),
          results: dataset.results,
          totals: dataset.totals
        });
      });
  }, []);

  return (
    <div className="app">
      <Header aggregateGroupings={data?.aggregates} />
      <Body data={data} aggregateGroupings={data?.aggregates ?? []} />
    </div>
  );
};

export default App;
