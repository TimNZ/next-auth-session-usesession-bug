import {useRouter} from 'next/router'
import {useState,useEffect} from 'react'
import {useSession} from 'next-auth/client'
import Link from 'next/link'

export default function Page()
{
	const router = useRouter()
	const [content,setContent] = useState(null)
	function getContent()
	{
		switch(router.asPath)
		{
			case '/test/a':
				return <A/>
			case '/test/b':
				return <B/>
		}
	}
	useEffect(() => {
		setContent(getContent())
	},[router.asPath])
	return (
		<>
		<div><Link href='/test/a'><a>Page A</a></Link></div>
		<div><Link href='/test/b'><a>Page B</a></Link></div>
		<div><Link href='/'><a>Home</a></Link></div>

		<div>{content}</div>
		</>
	)
}


function A()
{
	const [session,sessionLoading] = useSession()
	console.log('A')
	return <div>THIS IS PAGE A</div>
}

function B()
{
	return <div>THIS IS PAGE B</div>
}