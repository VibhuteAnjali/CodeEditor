import React, { useContext, useState } from 'react'
import CodeMirror from 'react-codemirror2';
import { DataContext } from '../context/DataProvider';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import "../App.css"
import img from "../images/icons8-fullscreen-64.png"
import { Controlled as ControlledEditor } from 'react-codemirror2';
export default function Code() {
	const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);
   const [open, setOpen] =useState(true)
	const handleChangeHTML = (editor, data, value) => {
		setHtml(value)
	}
	const handleChangeCSS = (editor, dat, value) => {
		setCss(value)
	}
	const handleChangeJs = (editor, data, value) => {
		setJs(value)
	}
	return (
		<div className='flex' style={open ? null : {display:'block'}}>
			<div className="html box">
				<div className="flex1">
					<h3 className='header'><span className='icon'>/</span>HTML</h3>
					<img src={img} alt="close" onClick={()=>{
						setOpen(prevState=>!prevState	)}} />
				</div>

				<ControlledEditor className='controlled-editor'
					onBeforeChange={handleChangeHTML}
					value={html}
					options={{
						lineWrapping: true,
						lint: true,
						mode: "xml",
						lineNumbers: true,
						theme: 'material'
					}}>

				</ControlledEditor>
			</div>
			<div className="css box">
			<div className="flex1">
					<h3 className='header'><span className='icon blue'>*</span>CSS</h3>
					<img src={img} alt="close" onClick={()=>{
						setOpen(prevState=>!prevState	)}} />
				</div>
				<ControlledEditor className='controlled-editor'
					onBeforeChange={handleChangeCSS}
					value={css}
					options={{
						lineWrapping: true,
						lint: true,
						mode: "css",
						lineNumbers: true,
						theme: 'material'
					}}>

				</ControlledEditor>
			</div>
			<div className="js box">
			<div className="flex1">
					<h3 className='header'><span className='icon yellow'> &#123; &#125; </span>JavaScript</h3>
					<img src={img} alt="close" onClick={()=>{
						setOpen(prevState=>!prevState	)}} />
				</div>
				<ControlledEditor className='controlled-editor'
					onBeforeChange={handleChangeJs}
					value={js}
					options={{
						lineWrapping: true,
						lint: true,
						mode: "javascript",
						lineNumbers: true,
						theme: 'material'
					}}>

				</ControlledEditor>
			</div>

		</div>
	)
}
