import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function Home() {
  return (
		<>
		<div>HI!</div>
		<div><Link href='/test/a'><a>Page A</a></Link></div>
		<div><Link href='/test/b'><a>Page B</a></Link></div>
		<div><Link href='/'><a>Home</a></Link></div>
		</>
  )
}
