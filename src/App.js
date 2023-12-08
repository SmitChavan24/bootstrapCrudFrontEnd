import { useEffect, useState } from "react";
import "./App.css";
import NavbarComponent from "./components/Navbar";
import { Breadcrumb } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";

function App() {
  const [employees, setemployees] = useState([]);

  useEffect(() => {
    console.log("hii smit");
    FetchEmployee();
  }, []);

  const FetchEmployee = async () => {
    let resposne = await axios.get("http://localhost:5100/api/fetchEmployee");
    setemployees(resposne.data.responsefetch);
  };

  return (
    <div>
      <NavbarComponent></NavbarComponent>
      <div class="container-fluid">
        <Breadcrumb>
          <Breadcrumb.Item active>
            <div class="d-flex  flex-row align-items-center">
              <div class="p-1 mg">
                <Spinner animation="grow" />
              </div>
              <div class="p-1">
                <h2>Employee Information List</h2>
              </div>
            </div>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div class="overflow-scroll">
          <table class="table" responsive="lg">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Full Name</th>
                <th scope="col">Gender</th>
                <th scope="col">Age</th>
                <th scope="col">Phone No</th>
                <th scope="col">Email Address</th>
                <th scope="col">Account No</th>
                <th scope="col">Salary</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            <tbody class="table-group-divider">
              {employees.map((data,index) => (
                <tr>
                   <th scope="row">{index}</th>
                  <td>{data.fullname}</td>
                  <td>{data.gender}</td>
                  <td>{data.age}</td>
                  <td>{data.phone}</td>
                  <td>{data.email}</td>
                  <td>{data.accountno}</td>
                  <td>{data.salary}</td>
                  <td>Action</td>
                </tr>
              ))}

              {/* <tr>
                 <td>Mark</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>Update</td>
                </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
