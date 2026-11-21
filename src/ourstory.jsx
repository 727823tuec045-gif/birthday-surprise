
import { motion } from 'framer-motion'
import { Heart, Stars } from 'lucide-react'

function OurStory() {

  const memories = [
    {
      date: 'The Beginning',
      title: 'The Day We Met',
      description: 'Every beautiful story has a beginning. And ours became one of my favourite stories.',
      emoji: '🌸'
    },
    {
      date: 'A Special Moment',
      title: 'Our First Conversation',
      description: 'A simple conversation that slowly became something so special.',
      emoji: '💌'
    },
    {
      date: 'A Beautiful Memory',
      title: 'Moments Together',
      description: 'The little moments, the smiles and the memories that I will always treasure.',
      emoji: '🥰'
    },
    {
      date: 'Forever Special',
      title: 'My Favourite Person',
      description: 'No matter how many days pass, you will always hold a special place in my heart.',
      emoji: '❤️'
    }
  ]

  return (
    <section className="our-story">

      <div className="story-heading">
        <Stars size={28} color="#d65d89" />

        <p className="story-subtitle">
          EVERY MOMENT MATTERS
        </p>

        <h2>
          Our Beautiful <span>Story</span>
        </h2>

        <p className="story-intro">
          Every little moment became a beautiful memory.
          Here's a little journey through our story.
        </p>
      </div>

      <div className="timeline">

        {memories.map((memory, index) => (

          <motion.div
            className={`timeline-item ${
              index % 2 === 0 ? 'left' : 'right'
            }`}
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="timeline-heart">
              <Heart size={19} fill="#e8799b" color="#e8799b" />
            </div>

            <div className="memory-card">

              <div className="memory-emoji">
                {memory.emoji}
              </div>

              <p className="memory-date">
                {memory.date}
              </p>

              <h3>{memory.title}</h3>

              <p className="memory-description">
                {memory.description}
              </p>

            </div>

          </motion.div>

        ))}

      </div>

      <div className="story-ending">
        <Heart fill="#e8799b" color="#e8799b" size={30} />

        <h3>And Our Story Continues...</h3>

        <p>
          The best memories are still waiting to be made. 💗
        </p>
      </div>

    </section>
  )
}

export default OurStory
