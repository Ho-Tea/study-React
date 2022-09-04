import React from "react";

const students = [
  {
    id : 1,
    name : "Inje",
  },
  {
    id : 2,
    name : "Steve",
  },
  {
    id : 3,
    name : "Bill",
  },
  {
    id : 4,
    name : "Jeff",
  },
];

function AttendanceBook(props){
  return (
    <ul>
      {students.map((student) => {  //임의의 객체 student
        return <li key={student.id}>{student.name}</li>;
      })}
    </ul>
  );
}

export default AttendanceBook;