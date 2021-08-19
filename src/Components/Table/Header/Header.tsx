import React from 'react';
import './Header.css';

interface HeaderProps {
  aggregateGroupings: string[] | undefined;
}

const Header: React.FC<HeaderProps> = ({ aggregateGroupings }) => {
  return (
    <div className="header-root border">
      <div className="tags">Workflows {'>'} All Tags</div>
      <div className="sections-container">
        {aggregateGroupings?.map((grouping, index) => (
          <div key={index} className="section">
            <div>
              {new Date(grouping).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric'
              })}
            </div>
            <div># Interaction Cases</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
