import './App.css';
import { Button } from './components/Button';
import { createStitches } from "@stitches/react";
import {
    gray,
    blue,
    red,
    green,
    grayDark,
    blueDark,
    redDark,
    greenDark,
  } from '@radix-ui/colors';

const { createTheme } = createStitches({
    theme: {
        colors: {
        ...gray,
        ...blue,
        ...red,
        ...green,
        },
    },
});

const darkTheme = createTheme({
    colors: {
      ...grayDark,
      ...blueDark,
      ...redDark,
      ...greenDark,
    },
  });

function App() {
  return (
      <div className="App">
        <header className="App-header" style={{fontSize: "0.5rem"}}>
          <p>Fill button</p>
          <Button size="small">Hello there</Button>
          <p>Ghost button</p>
          <Button size="small" ghost="true">Hello there</Button>
          <p>Outline button</p>
          <Button size="small" outline="true">Hello there</Button>
          <p>Link button</p>
          <Button size="small" link="true">Hello there</Button>
        </header>
      </div>
  );
}

export default App;
