import * as React from 'react';

interface ColorTileProps {
  title: string;
};

const ColorTile: React.SFC<ColorTileProps> = ({ title, children }) => (
  <div className="color-tile">
    {children}
    <span className="color-tile__title">
      {title}
    </span>
  </div>
);

export default ColorTile;;
