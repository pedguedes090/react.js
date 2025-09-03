import React,{useEffect} from 'react'

function Baitap3() {
  useEffect(() => {
    console.log('Component đã được render lần đầu ');
  }, []);

  return (
    <h3>Chào mừng bạn đã đến với chúng tôi </h3>
  )
}

export default Baitap3
