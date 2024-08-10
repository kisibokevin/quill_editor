'use client'

import React from 'react'
import dynamic from "next/dynamic";
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'; // Or your chosen theme
import "react-quill/dist/quill.snow.css"; 


const Quill = dynamic(() => import('react-quill'), {
	ssr: false,
	loading: () => <p>Please wait ...</p>,
})

const QuillTwo = () => {

	const quillModules = {
		toolbar: [
			["bold", "italic", "underline", "strike"], // toggled buttons
			["blockquote", "code-block"],
			["link", "image", "video", "formula"],

			[{ header: 1 }, { header: 2 }], // custom button values
			[{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
			[{ script: "sub" }, { script: "super" }], // superscript/subscript
			[{ indent: "-1" }, { indent: "+1" }], // outdent/indent
			[{ direction: "rtl" }], // text direction

			[{ header: [1, 2, 3, 4, 5, 6, false] }],

			[{ color: [] }, { background: [] }], // dropdown with defaults from theme
			[{ font: [] }],
			[{ align: [] }],

			["clean"], // remove formatting button
		],
  	};

    const quillFormats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "link",
        "image",
        "align",
        "color",
        "code-block",
    ];

    return (
		<Quill
			theme='snow'
			modules={{
            syntax: {
            highlight: (text) => hljs.highlightAuto(text).value,
            },
            toolbar: quillModules.toolbar,
        }}
        formats={quillFormats}
		/>
	)
}

export default QuillTwo	