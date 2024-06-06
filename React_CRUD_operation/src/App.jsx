import React, { useEffect, useState } from 'react';
import axios from "axios"

const initialData = {
  name: "",
  mobile: ""
};

const Crud = () => {
  const [data, setData] = useState(initialData);
  const [details, setDetails] = useState([]);
  const [updateId, setUpdateId] = useState(null);////create for cond.renering

  // < ------------------for getting value when user type in input boxes------>
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };


  //Patch Request Function(PATCH Request)
  const updateData = async () => {
    try {
      const response = await axios.patch(
        `http://localhost:8080/data/${updateId}`,
        data
      );
      console.log(response.data);
      getData();


    } catch (error) {
      console.log(error);
    }
  };
  // <--------------for Delete data------>
  const deletData = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/data/${id}`);
      console.log(response.data);
      alert("deleted")
      getData();


    } catch (error) {
      console.log(error);
    }
  };
  // <----------For getting value inside input box when click on edit button-----
  const handleUpdate = (id) => {
    const selectedItem = details.find(
      (item) => item.id === id
    );

    if (selectedItem) {
      setData(selectedItem)
      setUpdateId(id);///used for making if condition based on it i will run post and update function in handleSubmit
    }
  };
  // <-----------postData---------->
  const postData = async () => {
    try {
      let res = await axios.post("http://localhost:8080/data", data)
      setData(res.data)
      getData()
      console.log(res.data);
    } catch (error) {
      console.log(error)
    }
    setData(initialData)
  }

  // <-----------handelsubmit for post and update data---------->
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (updateId) {
      updateData()
      alert("updated")
      setData(initialData)///for reset input
      setUpdateId(null);///for change the innertext of submit button
    } else {
      postData()
      alert("added")
    }

  };
  // < ------------For Get Data----------------------------->
  const getData = async () => {
    try {
      let res = await axios.get("http://localhost:8080/data")
      setDetails(res.data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className='container'>
      <form action="">
        Name: <input type="text" value={data.name} placeholder="enterName" onChange={handleChange} name="name" /> <br /><br />
        Mobile: <input type="text" value={data.mobile} name="mobile" onChange={handleChange} placeholder="enterMobile" /> <br /><br />
        <button onClick={handleSubmit}>{updateId ? "Update" : "Submit"}</button>
      </form>
      <hr />
      <div className='table'>
        <thead>
          <tr>
            <td>Sr.No</td>
            <td>Name</td>
            <td>Email</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {details.map((ele, index) => {
          index ++
            return <tr>
              <th>{index}</th>
              <th>{ele.name}</th>
              <th>{ele.mobile}</th>
            <th>   <button onClick={() =>
                handleUpdate(ele.id)
              }>Edit</button></th>
              <th>  <button onClick={() =>
                deletData(ele.id)
              }>Delete</button> </th>

            </tr>
          })}
        </tbody>
      </div>


    </div>
  );
};

export default Crud;
