import * as React from 'react';
import ColorPicker from './ColorPicker';
import PredefinedColors from './PredefinedColors';
import SelectedColors from './SelectedColors';
import Tabs from './Tabs';

const App: React.SFC = () => (
  <div className="container">
    <SelectedColors />
    <Tabs
      tabs={[
        'Predefined Colors',
        'Color Picker',
      ]}
      panels={[
        <PredefinedColors />,
        <ColorPicker/>,
      ]}
    />
  </div>
);

export default App;
