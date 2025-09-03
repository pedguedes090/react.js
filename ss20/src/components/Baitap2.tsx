import React,{useState}from 'react'

function Baitap2() {
  const [input, setInput] = useState({
    name: '',
    email: ''
  })
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setInput((prev) => ({ ...prev, [name]: value }))
  }
  const [submit, setSubmit] = useState(false)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (input.name && input.email) {
      setSubmit(true)
    }
  }

  return (
    <>
      <form action="" style={{ width: '30%' }} onSubmit={handleSubmit}>
        <input type="text" name="name" id="" onChange={handleChange} style={{ width: '100%' }} />
        <input type="email" name="email" id="" onChange={handleChange} style={{ width: '100%' }} />
        <button type="submit">Submit</button>
      </form>
      {submit && (
        <div>
          
          <p>Tên: {input.name}</p>
          <p>Email: {input.email}</p>
        </div>
      )}
    </>
  )
}

export default Baitap2
