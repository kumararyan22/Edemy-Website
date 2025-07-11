import React, { useEffect, useState } from 'react'
import { dummyStudentEnrolled } from '../../assets/assets';
import Loading from '../../components/student/Loading';

const StudentsEnrolled = () => {

  const [enrolledStudents , setEnrolledStudents] = useState(null);

  const fetchEnrolledStudents = async()=> {
         setEnrolledStudents(dummyStudentEnrolled);
  }

  useEffect(() => {
    fetchEnrolledStudents();
  }, [])

  const name = "Aryan Kumar";

  return enrolledStudents ? (

    <div className='h-screen flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0'>
      <div className='flex flex-col w-full items-center overflow-hidden rounded-md border border-gray-500/20 bg-white max-w-4xl'>
        <table className='table-fixed md:table-auto w-full overflow-hidden pb-4 '>
          <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left">
             <tr>
              <th className="px-4 py-3 font-semibold text-center hidden sm:table-cell">#</th>
              <th className="px-4 py-3 font-semibold">Student Name</th>
              <th className="px-4 py-3 font-semibold">Course Title</th> 
              <th className='px-4 py-3 font-semibold hidden sm:table-cell'>Date</th>
             </tr>
            </thead>  

            <tbody className="text-sm text-gray-500">
              {enrolledStudents.map((item,index) => (
                <tr key={index} className="border-b border-gray-500/20">
                  <td className="px-4 py-3 text-center hidden md:table-cell">{index+1}</td>
                  <td className="md:px-4 px-2 py-3 flex items-center space-x-3 ">
                    <img src='https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yeGx3RGtPR2ZTZVEwaDdEeHNyQlVqbWFCRjUifQ?width=160' alt="Portfolio" className="w-9 h-9 rounded-full"/>
                    <span className="truncate">{name}</span>
                  </td>
                  <td className="pc-4 py-3 truncate">{item.courseTitle}</td>
                  <td className='px-4 py-3 hidden sm:table-cell'>{new Date(item.purchaseDate).toLocaleDateString()}</td>
                </tr> 
              ))}
            </tbody>

        </table>
      </div>
    </div>
  ) : <Loading />
}

export default StudentsEnrolled
