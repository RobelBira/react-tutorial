

const Book=(props)=>{
  const {img,title,author} =props

  // attribute, eventHandler
  // onClick,onMouseOver
const onClick=()=>{
  alert('hello world')
}

return <article className="book">

<img src={img} alt="" />
<h1>{title}</h1>
<h4>{author}</h4>
<button type="button" onClick={onClick}> hello world</button>

  </article>
}

export default Book