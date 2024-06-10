import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';

function Admin({people, setPeople}) {
    const [Name, setName] = useState("");

    function deletePerson({target}) {
        
    }

    return (
        <div>
            <form >
                <h2>Create User Here</h2>
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='Last Name'/>
                <input type="text" placeholder='Position'/>
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
                        <tr>
                            <td>person.name</td>
                            <td>person.lastName</td>
                            <td>person.position</td>
                            <td>
                                <button onClick={deletePerson}>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Admin;