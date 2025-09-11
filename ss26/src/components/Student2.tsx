import React from 'react'
import { useSearchParams } from 'react-router-dom'
function Student2() {
    const [name, setName] = React.useState('')
    const [searchParams, setSearchParams] = useSearchParams();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearchParams({ name });
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                <button type="submit">submit</button>
                <h1>name student {searchParams.get('name')}</h1>
            </form>
        </div>
    )
}

export default Student2
