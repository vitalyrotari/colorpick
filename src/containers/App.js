import React from 'react';
import Container from '../components/Container';
import Tabs from '../components/Tabs';
import ColorPicker from './ColorPicker';
import SelectedColors from './SelectedColors';
import PredefinedColors from './PredefinedColors';

const App = () => (
  <Container>
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
  </Container>
);

export default App;
