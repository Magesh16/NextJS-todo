import Image from 'next/image'
import styles from './page.module.css'
import TodoPage from '@/components/TodoPage'

export default function Home() {
  return (
   <div>
    <TodoPage/>
   </div>
  )
}