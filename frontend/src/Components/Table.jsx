import React from 'react'
import { Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Account({ accounts }) {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Admin</th>
          <th>Staff</th>
          <th>Active</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {accounts.map(account => (
          <tr key={account._id}>
            <td>{account._id}</td>
            <td>{account.username}</td>
            <td>{account.is_admin ? 'Yes' : 'No'}</td>
            <td>{account.is_staff ? 'Yes' : 'No'}</td>
            <td>{account.is_active ? 'Yes' : 'No'}</td>
            <td>
              <Link to={`/account/${account._id}`}>
                <Button variant="primary">View Account</Button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default Account
