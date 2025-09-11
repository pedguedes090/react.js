import React from 'react'
import { useParams } from 'react-router-dom'
function Student() {
  const { name } = useParams()
  return (
    <div>
      name student {name}
    </div>
  )
}

export default Student
