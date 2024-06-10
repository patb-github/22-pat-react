import React, { useState } from 'react';

function Admin({people, setPeople, id, setId}) {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [position, setPosition] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        setPeople(prev => [...prev, {
            id: id,
            name: name, 
            lastName: lastName, 
            position: position
        }])
        
        setId(prev => prev + 1);
        // clear input fields
        setName("");
        setLastName("");
        setPosition("");
    }

    function deletePerson({target}) {
        setPeople(prev => prev.filter(
            // use loose equality because person.id is a number, while target.id is a string
            person => person.id != target.id 
        ));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Create User Here</h2>
                <input 
                    required
                    type="text" 
                    placeholder='Name' 
                    onChange={e => setName(e.target.value)}
                    value={name}/>
                <input 
                    required
                    type="text" 
                    placeholder='Last Name'
                    onChange={e => setLastName(e.target.value)}
                    value={lastName}/>
                <input 
                    required
                    type="text" 
                    placeholder='Position'
                    onChange={e => setPosition(e.target.value)}
                    value={position}/>
                <button type='submit'>Save</button>
            </form>
            <table className="table-auto">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Position</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {people.map(person => 
                        <tr key={person.id}>
                            <td>{person.name}</td>
                            <td>{person.lastName}</td>
                            <td>{person.position}</td>
                            <td>
                                <button id={person.id} onClick={deletePerson}>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Admin;