import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [data, setData] = useState([])
  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/api/hello")
    const datas = await response.json();
    setData(datas)
  }

  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div>
      {data.map((item) => {
        return (
          <div className='flex border-2 p-10'>
            <div>
              <img style={{ padding: '3px', width: '74px', border: '2px solid', borderRadius: '50%'}} src={item.avatar} />
            </div>
            <div className='flex flex-col w-96 justify-start items-start h-7'>
              <p>Name: {item.name}</p>
              <p>Points: {item.points}</p>
            </div>
            <br />
          </div>
        )
      })}
    </div>
  )
}
