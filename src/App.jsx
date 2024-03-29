import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Courses from "./Components/Courses/Courses";
import Header from "./Components/Header/Header";

const App = () => {
  const [courseNames, setCourseNames] = useState([]);

  const handleCourseName = (course)=>{
    const newValue = [...courseNames, course]
    setCourseNames(newValue);
  }

 return (
    <div>
     <Header></Header>
     <main className="container w-9/12 mx-auto mt-6 flex">
      <Courses handleCourseName={handleCourseName}></Courses>
      <Cart courseNames={courseNames}></Cart>
     </main>
    </div>
  );
};

export default App;