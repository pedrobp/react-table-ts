import { render, screen } from '@testing-library/react';
import { Body } from 'Components/Table';

const data = {
  aggregates: ['2021-08-01T05:00:00Z', '2021-08-02T05:00:00Z'],
  tags: [
    {
      _id: '5a7096a6e9948201475532e2',
      active: true,
      color: '#ffd130',
      name: 'Order Placed'
    }
  ],
  workflows: [
    {
      _id: '5bfc339cc8cd2f015b74baa2',
      active: true,
      name: 'ACME'
    }
  ],
  results: [
    {
      collection: 'workflows',
      fieldName: 'Workflow',
      fieldIndex: 0,
      value: '5bfc339cc8cd2f015b74baa2',
      aggregates: [null],
      aggregateGroups: {
        ALL: {
          aggregates: {
            ALL: [
              {
                unavailable: false,
                value: 6669,
                branchTotal: 6669,
                branchPercent: 1
              }
            ]
          }
        },
        TimeGrouping: {
          aggregates: {
            '2021-08-01T05:00:00Z': [
              {
                unavailable: false,
                value: 393,
                branchTotal: 393,
                branchPercent: 1
              }
            ]
          }
        }
      },
      children: null,
      fieldCutoff: true,
      statisticsSaturation: 0,
      valueNode: true,
      isTruncated: false
    }
  ],
  totals: {
    collection: null,
    fieldName: '',
    fieldIndex: 0,
    value: null,
    aggregates: null,
    aggregateGroups: {
      ALL: {
        aggregates: {
          ALL: [
            {
              unavailable: false,
              value: 6669,
              branchTotal: 6669,
              branchPercent: 6669
            }
          ]
        }
      },
      TimeGrouping: {
        aggregates: {
          '2021-08-01T05:00:00Z': [
            {
              unavailable: false,
              value: 393,
              branchTotal: 393,
              branchPercent: 393
            }
          ],
          '2021-08-02T05:00:00Z': [
            {
              unavailable: false,
              value: 1145,
              branchTotal: 1145,
              branchPercent: 1145
            }
          ],
          '2021-08-03T05:00:00Z': [
            {
              unavailable: false,
              value: 1117,
              branchTotal: 1117,
              branchPercent: 1117
            }
          ],
          '2021-08-04T05:00:00Z': [
            {
              unavailable: false,
              value: 1216,
              branchTotal: 1216,
              branchPercent: 1216
            }
          ],
          '2021-08-05T05:00:00Z': [
            {
              unavailable: false,
              value: 1189,
              branchTotal: 1189,
              branchPercent: 1189
            }
          ],
          '2021-08-06T05:00:00Z': [
            {
              unavailable: false,
              value: 995,
              branchTotal: 995,
              branchPercent: 995
            }
          ],
          '2021-08-07T05:00:00Z': [
            {
              unavailable: false,
              value: 614,
              branchTotal: 614,
              branchPercent: 614
            }
          ]
        }
      }
    },
    children: null,
    fieldCutoff: false,
    statisticsSaturation: 0,
    valueNode: false,
    isTruncated: false
  }
};

test('renders the table rows', () => {
  render(<Body data={data} aggregateGroupings={data.aggregates} />);
  const workflowElement = screen.getByText(/ACME/i);
  expect(workflowElement).toBeInTheDocument();
});
