import React,{useContext, useState,useEffect} from 'react'
import { DataContext } from '../context/DataProvider'
export default function Result() {
	const {html,css,js} = useContext(DataContext);
	const [src,setSrc]= useState('');
	const srcCode =`
	<html>
	   <body>${html}</body>
	   <style>${css}<style>
	   <script>${js}<script>
	</html>`

	useEffect(()=>{
		const timeOut=	setTimeout(()=>{setSrc(srcCode)},1000)
		return ()=>clearTimeout(timeOut);
	},[html,css,js])
	return (
		<div>
			 <iframe srcDoc={src} title="Output" sandbox='allow-script' frameBorder={0} width="100%" height="100%"></iframe>
		</div>
	)
}
