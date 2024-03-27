import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = () => {
    const [courses, setCourses] = useState([]);
    console.log(courses)

    useEffect(()=>{
        fetch('../../../public/data.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div className="w-3/4 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4"> 
            {
                courses.map(course=><Course 
                key={course.id} 
                course={course}
                ></Course> )
            }
        </div>
    );
};

export default Courses;