import logo from "./logo.svg";
import "./App.css";
import { Terminal } from "./Terminal";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: "black",
    height: "2000px",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App" className={classes.background}>
      <Terminal></Terminal>
    </div>
  );
}

export default App;
