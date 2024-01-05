import { useParams } from "react-router-dom";
import { CourseCard } from "../components/courseCard";
import { useEffect,useState } from "react";

export default function Blog() {

    const [allCourses,setAllCourses] = useState([]);

useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_MOCKS_COURSES_PATH}`)
    .then(respone => respone.json())
    .then((result) => {
        if(result.courses){
            setAllCourses(result.courses)
        }
    })
    .catch(error => console.log(error))
},[]);

    const param = useParams();
    console.log(param);
    return (
        <div className="row g-5">
                {
                    allCourses.map((item,index) => 
                            <CourseCard key={index} details={item}/>
                    )
                }
            </div>
    );
}