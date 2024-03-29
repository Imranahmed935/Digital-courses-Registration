import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Courses from "./Components/Courses/Courses";
import Header from "./Components/Header/Header";

const App = () => {
  const [courseNames, setCourseNames] = useState([]);
  const [credit, setCredit]=useState(20)
  const [total, setTotal]=useState(0)

  const handleTotal =(course)=>{
    const newValue = total + course.credit_hours
    setTotal(newValue)
    handleCredit(newValue)
  }
  const handleCredit = (newValue)=>{
    const newResult = credit - newValue;
   setCredit(newResult)
  }

  const handleCourseName = (course)=>{
    const newValue = [...courseNames, course]
    setCourseNames(newValue);
    handleTotal(course);
    handleCredit(course.credit_hours);
}

 return (
    <div>
     <Header></Header>
     <main className="container w-9/12 mx-auto mt-6 flex">
      <Courses 
      handleCourseName={handleCourseName}
      handleTotal={handleTotal}
      ></Courses>
      <Cart 
      courseNames={courseNames}
      handleCredit={handleCredit}
      credit={credit}
      total={total}
      ></Cart>
     </main>
    </div>
  );
};

export default App;