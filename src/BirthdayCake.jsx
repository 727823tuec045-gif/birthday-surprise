
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Sparkles } from 'lucide-react'

function BirthdayCake() {
  const [blown, setBlown] = useState(false)

  const confetti = Array.from({ length: 35 }, (_, i) => i)

  return (
    <section className="cake-section">

      <div className="cake-heading">
        <p className="cake-subtitle">A WISH JUST FOR YOU</p>

        <h2>
          For My <span>Superlady</span>
        </h2>

        <p>
          A beautiful cake for the most beautiful person in my world.
        </p>
      </div>

      {/* DECORATIVE CAKE */}

      <motion.div
        className="cake-container fancy-cake"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >

        {/* CANDLES */}

        <div className="candles">
          {[1, 2, 3].map((candle) => (
            <div className="candle" key={candle}>
              <AnimatePresence>
                {!blown && (
                  <motion.div
                    className="flame"
                    animate={{
                      opacity: [1, 0.65, 1],
                      scale: [1, 1.2, 0.95],
                      rotate: [-5, 5, -5]
                    }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity
                    }}
                  />
                )}
              </AnimatePresence>
              <div className="candle-body" />
            </div>
          ))}
        </div>

        {/* CAKE TOP */}

        <div className="cake-top fancy-top">
          <span>♥</span>
          <span className="top-flower">🌸</span>
          <span className="top-strawberry">🍓</span>
          <span className="top-flower second-flower">🌼</span>
          <span className="top-strawberry second-berry">🍓</span>
        </div>

        {/* TOP TIER */}

        <div className="cake-layer cake-layer-one fancy-layer">
          <div className="cream-drips">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="cake-flower">🌸</div>
        </div>

        {/* MIDDLE TIER */}

        <div className="cake-layer cake-layer-two fancy-layer">
          <div className="cream-drips">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="cake-heart-decoration">♡ ♥ ♡</div>
          <div className="cake-side-flower">🌷</div>
        </div>

        {/* BOTTOM TIER */}

        <div className="cake-base fancy-base">
          <div className="base-cream"></div>

          <div className="superlady-text">
            My Superlady
          </div>

          <div className="cake-pearls">
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
            <span>•</span>
          </div>
        </div>

        {/* CAKE PLATE */}

        <div className="cake-plate fancy-plate">
          <span>♡</span>
          <span>♡</span>
          <span>♡</span>
        </div>

      </motion.div>

      {/* FLOATING HEARTS AFTER BLOWING */}

      <AnimatePresence>
        {blown && (
          <div className="cake-celebration-hearts">
            {Array.from({ length: 12 }, (_, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.5 }}
                animate={{
                  opacity: [0, 1, 0],
                  y: -160 - (i % 4) * 25,
                  x: (i - 6) * 22,
                  scale: [0.5, 1.2, 0.7]
                }}
                transition={{
                  duration: 2.5,
                  delay: i * 0.08
                }}
              >
                {i % 2 === 0 ? '💗' : '💕'}
              </motion.span>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* CONFETTI */}

      <AnimatePresence>
        {blown && (
          <div className="confetti-container">
            {confetti.map((item) => (
              <motion.span
                key={item}
                initial={{ opacity: 1, y: -50, rotate: 0 }}
                animate={{
                  opacity: [1, 1, 0],
                  y: 350 + (item % 5) * 35,
                  x: ((item * 37) % 300) - 150,
                  rotate: 720
                }}
                transition={{
                  duration: 2.5 + (item % 4) * 0.3,
                  delay: (item % 10) * 0.08
                }}
                style={{
                  left: `${(item * 29) % 100}%`,
                  background: [
                    '#f06292',
                    '#ffd166',
                    '#ffffff',
                    '#c77dff',
                    '#ff8fab'
                  ][item % 5]
                }}
                className="confetti-piece"
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* BLOW CANDLES BUTTON */}

      {!blown ? (
        <motion.button
          className="blow-button"
          onClick={() => setBlown(true)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          Make a Wish & Blow Candles 🕯️
        </motion.button>
      ) : (
        <motion.div
          className="birthday-wish"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Sparkles size={38} color="#d65d89" />

          <h2>Happy Birthday, My Superlady!</h2>

          <p>
            To the most beautiful soul in my world,
            may your life always sparkle with happiness,
            love and endless beautiful moments.
          </p>

          <Heart
            size={38}
            fill="#e8799b"
            color="#e8799b"
          />

          <p className="wish-ending">
            You deserve the whole universe. ❤️
          </p>
        </motion.div>
      )}

    </section>
  )
}

export default BirthdayCake
