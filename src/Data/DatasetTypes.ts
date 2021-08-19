export interface Tag {
  _id: string;
  active: boolean;
  color: string;
  name: string;
}

export interface Workflow {
  _id: string;
  active: boolean;
  name: string;
}

export interface Result {
  collection: null | string;
  fieldName: string;
  fieldIndex: number;
  value: null | string;
  aggregates: null[] | null;
  aggregateGroups: AggregateGroups;
  children: Result[] | null;
  fieldCutoff: boolean;
  statisticsSaturation: number;
  valueNode: boolean;
  isTruncated: boolean;
}

interface Aggregate {
  unavailable: boolean;
  value: number | null;
  branchTotal: number | null;
  branchPercent: number;
}

interface AggregateGroups {
  ALL: {
    aggregates: { ALL: Aggregate[] };
  };
  TimeGrouping: TimeGrouping;
}

interface TimeGrouping {
  aggregates: { [key: string]: Aggregate[] };
}

export interface Data {
  aggregates: string[];
  tags: Tag[];
  workflows: Workflow[];
  results: Result[];
  totals: Result;
}
