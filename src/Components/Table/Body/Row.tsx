import React, { useState } from 'react';
import { Result, Tag, Workflow } from 'Data/DatasetTypes';
import { Collapse } from 'react-collapse';
import {
  RiArrowDropDownLine as ArrowDown,
  RiArrowDropUpLine as ArrowUp
} from 'react-icons/ri';
import clsx from 'clsx';

interface RowProps {
  row: Result;
  tags: Tag[];
  workflows: Workflow[];
  aggregateGroupings: string[];
  depth: number;
}

const Row: React.FC<RowProps> = ({
  row,
  tags,
  workflows,
  aggregateGroupings,
  depth
}) => {
  const [opened, setOpened] = useState<boolean>(false);

  const tag = tags.find((tag) => tag._id === row.value);
  const workflow = workflows.find((wf) => wf._id === row.value);
  const name = tag?.name ?? workflow?.name ?? 'Totals';

  return (
    <>
      <div className="row-item">
        <div
          className="workflow-container border"
          onClick={() => setOpened(!opened)}
          style={{ cursor: row.children ? 'pointer' : 'default' }}
        >
          {tag && (
            <div
              className="tag-indicator"
              style={{
                backgroundColor: tag?.color,
                marginLeft: `${15 * depth}px`
              }}
            />
          )}

          <div
            className={clsx('name-container', tag == null && 'white-label')}
            title={name}
          >
            {name}
          </div>

          {row.children &&
            (opened ? (
              <ArrowUp className="arrow-icon" />
            ) : (
              <ArrowDown className="arrow-icon" />
            ))}
        </div>

        <div className="values-container">
          {Object.entries(row.aggregateGroups.TimeGrouping.aggregates).map(
            (item, index) => (
              <div
                key={index}
                className={clsx(
                  'row-values border',
                  tag == null && workflow == null && 'white-label'
                )}
              >
                {item[0] === aggregateGroupings[index]
                  ? item[1][0].value ?? '-'
                  : '-'}
              </div>
            )
          )}
        </div>
      </div>

      {row.children && (
        <Collapse className="children-container" isOpened={opened}>
          {row.children.map((child, index) => (
            <Row
              key={index}
              row={child}
              tags={tags}
              workflows={workflows}
              aggregateGroupings={aggregateGroupings}
              depth={depth + 1}
            />
          ))}
        </Collapse>
      )}
    </>
  );
};

export default Row;
