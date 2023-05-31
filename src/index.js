import React from "react";
import  ReactDom from "react-dom";
import './index.css'



const firstBook={
img :"https://images.unsplash.com/uploads/14115120538776712c565/a699942a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTM4OTU3fHxlbnwwfHx8fHw%3D&dpr=1&auto=format&fit=crop&w=294&h=294&q=60",

title:"The throne",
author:"Robel"

}
const secondBook={
img :"https://images.unsplash.com/uploads/14115120538776712c565/a699942a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTM4OTU3fHxlbnwwfHx8fHw%3D&dpr=1&auto=format&fit=crop&w=294&h=294&q=60",

title:"The throne 2",
author:"Yonas"

}

function BookList(){

  return(
   <section className="booklist">
    <Book 
    img={firstBook.img}
    title={firstBook.title}
    author={firstBook.author}
    >
      <p>Qui mollit dolor aute cupidatat pariatur labore ex esse ex magna. Irure non ex irure incididunt commodo sit mollit aute. Lorem voluptate laboris magna magna enim pariatur veniam ex nostrud sint incididunt consequat sint. Fugiat esse cupidatat irure sit.</p>
    </Book>
    <Book 
      img={secondBook.img}
    title={secondBook.title}
    author={secondBook.author}
    
    />
   
   </section> 
    )
}

const Book=({img,title,author,children})=>{


return <article className="book">

<img src={img} alt="" />
<h1>{title}</h1>
<h4>{author}</h4>
{children}
  </article>
}


ReactDom.render( <BookList />,document.getElementById('root'))