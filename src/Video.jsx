
import { motion } from 'framer-motion'
import { Heart, PlayCircle } from 'lucide-react'

function Video() {

  // Notify App.jsx when video starts
  const handlePlay = () => {
    window.dispatchEvent(
      new Event('birthday-video-play')
    )
  }

  // Notify App.jsx when video pauses
  const handlePause = () => {
    window.dispatchEvent(
      new Event('birthday-video-stop')
    )
  }

  // Notify App.jsx when video finishes
  const handleEnded = () => {
    window.dispatchEvent(
      new Event('birthday-video-stop')
    )
  }

  return (
    <section
      className="video-section"
      id="video-memories"
    >

      <motion.div
        className="video-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        <p className="video-subtitle">
          A LITTLE MOVIE OF US
        </p>

        <h2>
          Our Little World ❤️
        </h2>

        <p>
          Every picture has a story,
          and every moment with you is special.
        </p>

      </motion.div>

      <motion.div
        className="video-card"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        <div className="video-frame">

          <video
            controls
            playsInline
            preload="metadata"
            poster="/photos/photos1.jpeg"
            onPlay={handlePlay}
            onPause={handlePause}
            onEnded={handleEnded}
          >
            <source
              src="/videos/our-memories.mp4"
              type="video/mp4"
            />

            Your browser does not support video playback.

          </video>

        </div>

        <div className="video-caption">

          <PlayCircle
            size={25}
            color="#e8799b"
          />
         <p>
             Some moments deserve to be watched again and again🫂😚
         </p>
          <h3>
           
            Every Moment With You ❤️
          </h3>

        </div>

      </motion.div>

      <motion.div
        className="video-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >

        <Heart
          size={20}
          fill="#e8799b"
          color="#e8799b"
        />

        <p>
          Made with endless love 💗
        </p>

      </motion.div>

    </section>
  )
}

export default Video
