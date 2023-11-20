import { useState } from 'react'
import './App.css'
import { addUser, getUsers } from './endpoints/users'
import UploadImage from './UploadImage';
function App() {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ name: '', age: '', gender: 'male' });

  const getAllUsers = async () => {
    setUsers(await getUsers());
  }

  const handleUser = (e) => {
    const { name, value } = e.target;
    setUser((u) => {
      return { ...u, [name]: value };
    })
  }
  const handleUserAdd = async () => {
    await addUser(user);
    console.log("USER ADDED...", user);
  }

  return (
    <>
      <UploadImage />
      {/* <button onClick={getAllUsers}>Say Hi to Backend</button>
      <div style={{
        height: '200px',
        overflow: 'scroll'
      }}>
        {users.map(({ name, age, gender }) => {
          return <>
            <h1>{name}</h1>
            <h2>{age} - {gender}</h2>
          </>
        })}
      </div>
      <hr />
      <form>
        <label>Enter your Name:</label>
        <input name='name' onChange={(e) => { handleUser(e) }} />
        <label>Enter your Age:</label>
        <input name='age' type="number" onChange={(e) => { handleUser(e) }} />
        <label>Enter your gender:</label>
        Male<input type={"radio"} name='gender' value={"male"} onChange={(e) => { handleUser(e) }} />
        Female<input type={"radio"} name='gender' value={"female"} onChange={(e) => { handleUser(e) }} />
        <button type='button' onClick={handleUserAdd}>Add User</button>
      </form> */}
    </>
  )
}

export default App
