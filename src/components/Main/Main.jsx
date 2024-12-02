import { useState } from "react"
import Card from '../Card/Card'
import style from './Main.module.css'
import posts from '../posts'

export default function Main() {

  const [title, setTitle] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    console.log("Titolo inviato:" + title)
  }

  return (
    <main>

      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={e => { setTitle(e.target.value) }} placeholder="Inserisci il titolo" />
        <button>Invia</button>
      </form>


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