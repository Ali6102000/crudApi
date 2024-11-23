// Function to create a student

async function createStudent() {
      const name = document.getElementById('newStudentName').value;
      const lastName = document.getElementById('newStudentLastName').value;
      const age = document.getElementById('newStudentAge').value;
      
      //Specifying the Content-Type header as 'application/json' is important when you are sending JSON data in the body of a request.
      const response = await fetch('https://crudapi-1-w1u7.onrender.com/student', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name,lastName,age })
      });
      console.log(response);
  
      if (response.ok) {
          alert('Student created successfully!');
      } else {
          alert('Error creating student.');
      }
  }
  

//Function to get a student by its id

async function getStudent() {
    const studentId = document.getElementById('singleStudent').value;

    const response = await fetch(`https://crudapi-1-w1u7.onrender.com/getSingleStudent?id=${encodeURIComponent(studentId)}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        const student = await response.json();
        //document.getElementById('studentInfo').innerHTML = `student id : ${student._id} <br> student name: ${student.name} <br> student last name: ${student.lastName} <br> student age: ${student.age}`;
        let row=document.createElement('tr');
        row.innerHTML=`
        <td>${student._id}</td>
        <td>${student.name}</td>
        <td>${student.lastName}</td>
        <td>${student.age}</td>
        `
        document.getElementById('studentInfo').appendChild(row);
        alert('Student found!');
    } else {
        alert('Error fetching student data.');
    }
}

  //Function to get all students
  async function getAllStudents(){
    
    const response = await fetch('https://crudapi-1-w1u7.onrender.com/getAllStudents', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

        if(response.ok){
            const students = await response.json();
            let studentsInfo=document.getElementById('studentsInfo');
            studentsInfo.innerHTML=`  <tr>
                <th>student id</th>
                <th>student name</th>
                <th>student last name</th>
                <th>student age</th>
            </tr>`;

            students.forEach(element => {
                let row=document.createElement("tr");
                row.innerHTML=`
                <td>${element._id}</td>
                <td>${element.name}</td>
                <td>${element.lastName}</td>
                <td>${element.age}</td>
                `
             studentsInfo.appendChild(row);
                console.log(element)
            });
            alert('students found successfully!!')
        }
        else{
            alert('error while finding students!!')
        }
    
  

  }
      

  // Function to delete a student
  async function deleteStudent() {
      const studentId = document.getElementById('deleteStudentId').value;
  
      const response = await fetch('https://crudapi-1-w1u7.onrender.com/student', {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ _id: studentId })
      });
  
      if (response.ok) {
          alert('Student deleted successfully!');
      } else {
          alert('Error deleting student.');
      }
  }


  // Function to update student
  async function updateStudent(){
    const studentId=document.getElementById("updateStudentId").value;
    const newAge=document.getElementById('newAge').value;

    const response= await fetch('https://crudapi-1-w1u7.onrender.com/updateStudent',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({studentId,newAge})
    });

    if(response.ok){
        alert('student age updated successfully!!');
    }else{
        alert("error while updating student age!!")
    }


  }


