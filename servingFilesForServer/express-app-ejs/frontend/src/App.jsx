import { useState, useRef } from 'react'
import './App.css'
import { addUser, getUsers, deleteUser, updateUser } from './endpoints/users'
import UploadImage from './UploadImage';
function App() {

  const [users, setUsers] = useState([]);
  const [update, setUpdate] = useState(false);
  const usernameRef = useRef(null);
  const [user, setUser] = useState({ name: '', age: '', gender: '' });

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
  const handleUserUpdate = async () => {
    let updateResponse = await updateUser(user);
    console.log(updateResponse);
  }
  const updateHandler = (user) => {
    setUpdate(true);
    setUser(user);
    usernameRef.current.focus();
  }
  const deleteHandler = async (id) => {
    let deleteResponse = await deleteUser(id);
    console.log(deleteResponse);
  }

  return (
    <>
      <button onClick={getAllUsers}>Say Hi to Backend</button>
      <div style={{
        height: '200px',
        overflow: 'scroll'
      }}>
        {users.map((user) => {
          let { name, age, gender, _id } = user;
          console.log(_id);
          return <>
            <h1>{name}</h1>
            <h2>{age} - {gender}</h2>
            <button onClick={() => deleteHandler(_id)}>Delete</button>
            <button onClick={() => updateHandler(user)}>Update</button>
          </>
        })}
      </div>
      <hr />
      <form>
        <label>Enter your Name:</label>
        <input ref={usernameRef} name='name' value={user.name} onChange={(e) => { handleUser(e) }} />
        <label>Enter your Age:</label>
        <input name='age' value={user.age} type="number" onChange={(e) => { handleUser(e) }} />
        <label>Enter your gender:</label>
        Male<input type={"radio"} name='gender' value={"male"} onChange={(e) => { handleUser(e) }} checked={user.gender == 'male' ? true : false} />
        Female<input type={"radio"} name='gender' value={"female"} onChange={(e) => { handleUser(e) }} checked={user.gender == 'female' ? true : false} />
        {!update && <button type='button' onClick={handleUserAdd}>Add User</button>}
        {update && <button type='button' onClick={handleUserUpdate}>Update User</button>}
      </form>
    </>
  )
}

export default App
