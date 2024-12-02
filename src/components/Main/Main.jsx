import { useState } from "react"
import Card from '../Card/Card'
import style from './Main.module.css'
import initialPosts from '../posts'

export default function Main() {

  const [posts, setPosts] = useState(initialPosts)
  const [title, setTitle] = useState('')



  const addBlog = event => {
    event.preventDefault()
    console.log("Titolo inviato:" + title)


    const newBlog = {
      id: Date.now(),
      title: title,
      image: undefined,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
      tags: [],
      published: true,
    }

    if (title === '') return

    setPosts([...posts, newBlog])
    setTitle('')
  }

  function deleteBlog(blogtext) {
    setPosts(posts.filter(post => post !== blogtext))
  }

  return (
    <main>
      <section>
        <form onSubmit={addBlog} action="">
          <input type="text" value={title} onChange={e => { setTitle(e.target.value) }} placeholder="Inserisci il titolo" />
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


      <section className={style.section}>
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