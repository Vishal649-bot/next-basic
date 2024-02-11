import React from 'react'
const details = [
    { id: 1, name: 'Yash', role: 'Senior Developer' },
    { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
    { id: 3, name: 'Suresh', role: 'Frontend Developer' }
  ];
const Aboutus = ({id}) => {
    const member = details.find(member=> member.id === parseInt(id))

  return (
    <div>
      {member ? (
        <div>
            <h2>{member.name}</h2>
            <p>{member.role}</p>
        </div>
      ) : (
        <div>
            <p>Developer does't exist</p>
        </div>
      )
      }
      
    </div>
  )
}

export default Aboutus
