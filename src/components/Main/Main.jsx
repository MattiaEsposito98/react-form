import { useState } from "react"
import Card from '../Card/Card'
import style from './Main.module.css'
import initialPosts from '../posts'

export default function Main() {

  const [posts, setPosts] = useState(initialPosts)
  const [title, setTitle] = useState('')
  const [newTag, setTag] = useState('')



  const addBlog = event => {
    event.preventDefault()
    console.log("Titolo inviato:" + title)
    console.log("tag inviato:" + newTag)


    const newBlog = {
      id: Date.now(),
      title: title,
      image: undefined,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Numquam eaque vero unde ipsa aut veritatis labore quidem ut fuga! Dolorum odit maxime iusto harum, doloremque provident nisi porro vero quidem.",
      tags: newTag.split(',').map(el => el.trim()), //Separare i tag da virgole in un array, perche nella card tags è un array e dopo rimuovo gli spazi su ogni elemento dell'array
      published: true,
    }

    if (title === '') return

    setPosts([...posts, newBlog])
    setTitle('')
    setTag('')
  }

  function deleteBlog(blogtext) {
    setPosts(posts.filter(post => post !== blogtext))
  }

  return (
    <main>
      <section className={style.section}>
        <form onSubmit={addBlog} action="">
          <input type="text" value={title} onChange={e => { setTitle(e.target.value) }} placeholder="Inserisci il titolo" />
          <input type="text" value={newTag} onChange={e => { setTag(e.target.value) }} placeholder="Inserisci il tag" />
          <button type="submit"> Aggiungi</button>
        </form>
        <div className={style.listItem}>
          <ul>
            {posts.filter(post => post.published === true).map(post => (

              <li key={post.id}> {post.title}
                <button onClick={() => deleteBlog(post)}>Elimina</button>
              </li>
            ))}
          </ul>
        </div>
      </section>


      <section>
        <div className="container">
          {
            posts.length ?
              <div className="row">
                {posts.map((post) => (
                  <div key={post.id} className="col-6" >
                    <Card
                      title={post.title}
                      tags={post.tags}
                      image={post.image}
                      published={post.published}
                    />
                  </div>
                ))}
              </div> :
              <p>Non ci sono post</p>
          }
        </div>
      </section>


    </main>

  )
}