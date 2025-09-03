import React ,{useEffect}from 'react'

function Baitap4() {
    const [text,setText] = React.useState('');
  useEffect(() => {
    document.title = text;
  }, [text]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  return (
    <>
      <h2>Chào mừng bạn đã đến với chúng tôi </h2>
      <input type="text" name="text" id="" onChange={handleChange} />
    </>
  )
}

export default Baitap4
