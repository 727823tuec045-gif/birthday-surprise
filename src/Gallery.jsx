
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

function Gallery() {

  const photos = [
    {
      image: '/photos/photos1.jpeg',
      title: 'A memory to treasure',
      caption: 'A beautiful moment'
    },
    {
      image: '/photos/photos2.jpeg',
      title: 'My favourite smile',
      caption: 'A special day'
    },
    {
      image: '/photos/photos3.jpeg',
      title: 'Together is my favourite place',
      caption: 'Unforgettable'
    },
    {
      image: '/photos/photos4.jpeg',
      title: 'Little moments, big memories',
      caption: 'Forever precious'
    },
    {
      image: '/photos/photos5.jpeg',
      title: 'Happiness looks like you',
      caption: 'My happy place'
    },
    {
      image: '/photos/photos6.jpeg',
      title: 'A moment I wish to relive',
      caption: 'Always in my heart'
    }
  ]

  return (
    <section className="gallery-section">

      <div className="gallery-heading">

        <p className="gallery-subtitle">
          OUR PRECIOUS MEMORIES
        </p>

        <h2>
          Beautiful <span>Memories</span>
        </h2>

        <p className="gallery-intro">
          Every picture holds a memory, and every
          memory reminds me how special you are.
        </p>

      </div>

      <div className="photo-gallery">

        {photos.map((photo, index) => (

          <motion.div
            className="polaroid"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >

            <div className="photo-frame">

              <img
                src={photo.image}
                alt={photo.title}
              />

            </div>

            <div className="photo-caption">

              <h3>{photo.title}</h3>

              <p>{photo.caption}</p>

              <Heart
                size={17}
                fill="#e8799b"
                color="#e8799b"
              />

            </div>

          </motion.div>

        ))}

      </div>

      <div className="gallery-ending">

        <Heart
          size={30}
          fill="#e8799b"
          color="#e8799b"
        />

        <h3>Every moment with you is special</h3>

        <p>
          And these are just a few of my favourite memories. ❤️
        </p>

      </div>

    </section>
  )
}

export default Gallery
