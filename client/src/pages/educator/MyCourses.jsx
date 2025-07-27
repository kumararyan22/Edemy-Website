import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext';
import Loading from '../../components/student/Loading';

const MyCourses = () => {

    const {currency , allCourses} = useContext(AppContext);

    const [course , setCourse] = useState(null);

    const fetchEducatorCoueses = async() => {
      setCourse(allCourses);
    }

    useEffect(()=> {
        fetchEducatorCoueses();
    }, [])
  
  return course ? (
    <div className='h-screen flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0'>
      <div className='w-full'>
        <h2 className='pb-4 text-lg font-medium'>My Courses</h2>      
      
       <div className='flex flex-col w-full items-center overflow-hidden rounded-md border border-gray-500/20 bg-white max-w-4xl'>
        <table className='md:table-auto table-fixed overflow-hidden w-full'>
          <thead className='text-gray-900 border-b border-gray-500/20 text-sm text-left'>
            <tr>
              <th className='px-4 py-3 truncate font-semibold'>All Courses</th>
              <th className='px-4 py-3 truncate font-semibold'>Earnings</th>
              <th className='px-4 py-3 truncate font-semibold'>Students</th>
              <th className='px-4 py-3 truncate font-semibold'>Published On</th>
            </tr>
          </thead>

          <tbody className='text-sm text-gray-500'>
            {course.map((course)=> (
               <tr key={course._id} className='border-b border-gray-500/20'>
                 <td className='md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate'>
                   <img src={course.courseThumbnail} alt='Course Image' className='w-16'/>
                   <span className='truncate hidden md:block'>{course.courseTitle}</span>
                 </td>
                 <td className='px-4 py-3 '>{currency} {Math.floor(course.enrolledStudents.length * (course.coursePrice - course.discount * course.coursePrice / 100))} </td>
                 
                  <td className='px-4 py-3'>{course.enrolledStudents.length}</td>
                  <td className='px-4 py-3'>{new Date(course.createdAt).toLocaleDateString()}</td>
               </tr>
            ))}

          </tbody>
        </table>
       </div>
      
      </div>
    </div>  
    ) : <Loading />
  
}

export default MyCourses
