import React, { useState } from 'react';
import styles from './styles.module.css';

const Main = () => {
  const initialAttendance = [
    { date: '2024-07-01', present: true },
    { date: '2024-07-02', present: false },
    { date: '2024-07-03', present: true },
    { date: '2024-07-04', present: true },
    { date: '2024-07-05', present: false },
  ];

  const [students, setStudents] = useState([
    { id: 1, name: 'Malar', present: false, attendance: initialAttendance },
    { id: 2, name: 'Raja', present: false, attendance: initialAttendance },
    { id: 3, name: 'Mathu', present: false, attendance: initialAttendance },
    { id: 4, name: 'Mani', present: false, attendance: initialAttendance },
    { id: 5, name: 'Mohan', present: false, attendance: initialAttendance },
  ]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  const handleAttendanceChange = (id) => {
    setStudents(
      students.map((student) =>
        student.id === id ? { ...student, present: !student.present } : student
      )
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Attendance data:', students);
  };

  const dates = initialAttendance.map((record) => record.date);

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>ABC College</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <div className={styles.welcome_message}>
        <h2>Hello, Welcome!</h2>
      </div>
      <div className={styles.attendance_container}>
        <h3 align="center">Mark Attendance</h3>
        <form onSubmit={handleSubmit}>
          <table className={styles.attendance_table}>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Mark Attendance</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={student.present}
                      onChange={() => handleAttendanceChange(student.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button type="submit" className={styles.submit_btn}>
            Submit
          </button>
        </form>

        <h3 align="center">Previous Attendance Records</h3>
        <table className={styles.attendance_table}>
          <thead>
            <tr>
              <th>Student Name</th>
              {dates.map((date) => (
                <th key={date}>{date}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                {dates.map((date) => {
                  const record = student.attendance.find(
                    (record) => record.date === date
                  );
                  return (
                    <td key={date}>
                      {record
                        ? record.present
                          ? 'Present'
                          : 'Absent'
                        : 'No Record'}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Main;
