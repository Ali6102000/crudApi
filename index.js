// Function to create a student
async function createStudent() {
      const name = document.getElementById('newStudentName').value;
      const lastName = document.getElementById('newStudentLastName').value;
      const age = document.getElementById('newStudentAge').value;
      
      //Specifying the Content-Type header as 'application/json' is important when you are sending JSON data in the body of a request.
      const response = await fetch('http://localhost:7474/student', {
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
  


async function getStudent() {
    const studentId = document.getElementById('singleStudent').value;
    console.log("Student ID:", studentId);//debugging

    const response = await fetch(`http://localhost:7474/getSingleStudent?id=${encodeURIComponent(studentId)}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        const student = await response.json();
        console.log("Student Data:", student);//debugging
        document.getElementById('studentInfo').innerHTML = `student id : ${student._id} <br> student name: ${student.name} <br> student last name: ${student.lastName} <br> student age: ${student.age}`;

        alert('Student found!');
    } else {
        alert('Error fetching student data.');
    }
}



  
  // Function to delete a student
  async function deleteStudent() {
      const studentId = document.getElementById('deleteStudentId').value;
  
      const response = await fetch('http://localhost:7474/student', {
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

    const response= await fetch('https://crudapi-v6k2.onrender.com/updateStudent',{
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

      


