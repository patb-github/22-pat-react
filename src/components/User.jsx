function User({people}) {
  return (
    <table className="table-auto">
        <thead>
            <tr>
                <th>Name</th>
                <th>Last Name</th>
                <th>Position</th>
            </tr>
        </thead>
        <tbody>
            {people.map(person => 
                <tr key={person.id}>
                    <td>{person.name}</td>
                    <td>{person.lastName}</td>
                    <td>{person.position}</td>
                </tr>
            )}
        </tbody>
    </table>
  )
}

export default User;