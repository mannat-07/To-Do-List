import {useContext} from 'react'
import { UserContext } from '../../Context/userContext'


export default function Dashboard() {
    const {user} = useContext(UserContext)
  return (
    <div>
      {user && (<h1>Hi {user.name}!</h1>)}
      <h3>Dashboard</h3>
    </div>
  )
}
