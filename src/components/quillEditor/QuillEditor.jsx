"use client";

import React from "react";
import dynamic from "next/dynamic";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
});

const QuillEditor = () => {
    const quillModules = {
        toolbar: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
        [{ align: [] }],
        [{ color: [] }],
        ["code-block"],
        ["clean"],
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
        <QuillNoSSRWrapper
        theme="snow"
        modules={{
            syntax: {
            highlight: (text) => hljs.highlightAuto(text).value,
            },
            toolbar: quillModules.toolbar,
        }}
        formats={quillFormats}
        />
    );
};

export default QuillEditor;
