import Cart from "./Components/Cart/Cart";
import Courses from "./Components/Courses/Courses";
import Header from "./Components/Header/Header";

const App = () => {
  return (
    <div>
     <Header></Header>
     <main className="container w-9/12 mx-auto mt-6 flex">
      <Courses></Courses>
      <Cart></Cart>
     </main>
    </div>
  );
};

export default App;