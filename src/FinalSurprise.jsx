
import { motion } from 'framer-motion'
import { Heart, Sparkles } from 'lucide-react'

function FinalSurprise() {
  return (
    <section className="final-surprise">

      <motion.div
        className="final-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >

        <p className="final-subtitle">
          ONE LAST SURPRISE FOR YOU
        </p>

        <Sparkles className="final-sparkle" size={30} />

        <h1 className="final-heading">
          LOVE LEVEL
        </h1>

        <motion.h2
          className="infinity-text"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          INFINITY ♾️
        </motion.h2>

        <motion.div
          className="final-photo-frame"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src="/final/our-final-photo.jpeg"
            alt="Our special memory"
          />

          <div className="photo-heart">
            <Heart fill="#e8799b" color="#e8799b" size={25} />
          </div>
        </motion.div>

        <h2 className="final-couple-text">
          You + Me = Forever ❤️
        </h2>

        <p className="final-message">
          My love for you has no limit,
          no ending and no boundaries.
          You are my favourite person,
          my happiest place and my forever.
        </p>

        <motion.div
          className="final-heart"
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ❤️
        </motion.div>

        <h2 className="final-birthday-wish">
          Happy Birthday,
          <br />
          En thagamee! 💗
        </h2>

        <p className="final-forever">
          Forever yours... ♾️
        </p>

      </motion.div>

      <div className="final-floating-heart heart-a">♡</div>
      <div className="final-floating-heart heart-b">♡</div>
      <div className="final-floating-heart heart-c">♡</div>
      <div className="final-floating-heart heart-d">♡</div>

    </section>
  )
}

export default FinalSurprise
