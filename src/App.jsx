import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Courses from "./Components/Courses/Courses";
import Header from "./Components/Header/Header";

const App = () => {
  const [courseNames, setCourseNames] = useState([]);
  const [credit, setCredit]=useState(20)

  const handleCredit = ()=>{
    const newCredit = 20;
   setCredit(newCredit)
  }

  const handleCourseName = (course)=>{
    const newValue = [...courseNames, course]
    setCourseNames(newValue);
    handleCredit();
  }

 return (
    <div>
     <Header></Header>
     <main className="container w-9/12 mx-auto mt-6 flex">
      <Courses handleCourseName={handleCourseName}></Courses>
      <Cart 
      courseNames={courseNames}
      handleCredit={handleCredit}
      credit={credit}
      ></Cart>
     </main>
    </div>
  );
};

export default App;