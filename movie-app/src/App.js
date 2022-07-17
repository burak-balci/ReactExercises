import Header from "./components/Header";
import Slider from "./components/Slider";

function App() {
  return (
    <div>
      <Header />
      <div className="flex w-3/4 items-center justify-center mx-auto">
        <Slider />
      </div>
    </div>
  );
}

export default App;
