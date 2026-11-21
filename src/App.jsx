
import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Heart, Sparkles, MailOpen, X } from 'lucide-react'

import OurStory from './ourstory'
import MemoryTree from './MemoryTree'
import Video from './Video'
import BirthdayCake from './BirthdayCake'
import FinalSurprise from './FinalSurprise'

import './App.css'

function App() {
  const [opened, setOpened] = useState(false)
  const [letterOpened, setLetterOpened] = useState(false)
  const [currentSong, setCurrentSong] = useState(0)

  const audioRef = useRef(null)
  const musicStarted = useRef(false)
  const videoVisible = useRef(false)

  const songs = [
    '/music/song1.mp4',
    '/music/song2.mp4',
    '/music/song3.mp4',
  ]

  // Open surprise and start background music
  const handleOpenSurprise = async () => {
    setOpened(true)

    if (!musicStarted.current && audioRef.current) {
      try {
        await audioRef.current.play()
        musicStarted.current = true
      } catch (error) {
        console.log('Music could not start:', error)
      }
    }
  }

  // Play next song automatically
  const handleSongEnd = () => {
    setCurrentSong((previousSong) =>
      (previousSong + 1) % songs.length
    )
  }

  // Pause/resume music according to video section visibility
  useEffect(() => {
    const videoSection = document.querySelector('.video-section')

    if (!videoSection) {
      console.warn('Video section not found')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const audio = audioRef.current

          // Pause when 30% or more of the video section is visible
          const isVideoVisible = entry.intersectionRatio >= 0.3

          videoVisible.current = isVideoVisible

          if (!audio || !musicStarted.current) return

          if (isVideoVisible) {
            audio.pause()
          } else {
            audio.play().catch((error) => {
              console.log('Music resume error:', error)
            })
          }
        })
      },
      {
        threshold: [0, 0.3, 0.5],
      }
    )

    observer.observe(videoSection)

    return () => {
      observer.disconnect()
    }
  }, [])

  // Play the next song only when the video section is not visible
  useEffect(() => {
    const audio = audioRef.current

    if (
      audio &&
      musicStarted.current &&
      !videoVisible.current
    ) {
      audio.load()

      audio.play().catch((error) => {
        console.log('Music playback error:', error)
      })
    }
  }, [currentSong])

  return (
    <div className="app">

      {/* BACKGROUND MUSIC */}
      <audio
        ref={audioRef}
        src={songs[currentSong]}
        onEnded={handleSongEnd}
        preload="auto"
      />

      {/* ORIGINAL WELCOME PAGE */}
      <section className="hero-section">

        <div className="floating-heart heart-one">♡</div>
        <div className="floating-heart heart-two">♡</div>
        <div className="floating-heart heart-three">♡</div>
        <div className="floating-heart heart-four">♡</div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >

          <motion.div
            className="hero-main-heart"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <Heart
              size={55}
              fill="#e8799b"
              color="#e8799b"
            />
          </motion.div>

          <p className="hero-subtitle">
            A LITTLE SURPRISE FOR SOMEONE SPECIAL
          </p>

          <h1>
            Happy Birthday
            <span> My Love</span>
          </h1>

          <p className="hero-description">
            Today is not just another day...
            <br />
            It's the day someone very special was born.
          </p>

          {!opened && (
            <motion.button
              className="open-surprise-button"
              onClick={handleOpenSurprise}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles size={20} />
              Open Your Surprise
              <Heart size={18} fill="white" />
            </motion.button>
          )}

          {opened && (
            <motion.p
              className="welcome-message"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
            >
              This little world is made just for you! 💗
            </motion.p>
          )}

          <div className="hero-hearts">
            <span>💕</span>
            <span>💗</span>
            <span>💖</span>
          </div>

          <p className="hero-footer">
            MADE WITH ♡ ESPECIALLY FOR YOU
          </p>

        </motion.div>
      </section>

      {/* LOVE LETTER SECTION */}
      <section className="letter-section">

        <motion.div
          className="letter-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          {!letterOpened ? (
            <div className="letter-envelope">

              <MailOpen
                size={55}
                color="#e8799b"
              />

              <h2>A Little Letter For You 💌</h2>

              <p>
                There are some feelings that words alone
                cannot express...
              </p>

              <button
                className="letter-open-button"
                onClick={() => setLetterOpened(true)}
              >
                Open My Letter 💗
              </button>

            </div>
          ) : (
            <div className="letter-content">

              <button
                className="letter-close-button"
                onClick={() => setLetterOpened(false)}
                aria-label="Close letter"
              >
                <X size={22} />
              </button>

              <Heart
                size={35}
                fill="#e8799b"
                color="#e8799b"
              />

              <h2>To My Dearest love ❤️</h2>

              <p>
                To the one who is very close to my heart ❤️‍🩹
                I love you so much athaiii! 😘
                No one can replace your place.
                Always you are my gem 💎
              </p>

              <p>
                Ethana peru vendunaalum en life la varalaam
                but unga place aa yaaralaiyum nirapa mudiyaathu athai 💞
                Ungala hurt pannathukku laam rombaa sorry 🥺
                U r always my favourite person 🫂
              </p>

              <p>
                Yaaru ungala vittu poonaalum kadaichi varaikkum
                naa irupen ungakuda 🫶
                I will be there for you in your sorrows and happiness 🫂😚
                I am very lucky to have you in my life en uyiree 🌎
              </p>

              <p>
                I don't know whether I am good to you,
                but I always try to keep u with my side with full of
                love, care and happiness 💗
                Sometimes I become too possessive because you are strictly mine and there's always a fear in my heart
                that I might lose you someday🥺I just can't imagine losing you 💯
              </p>

              <p>
                My love towards you is always pure,
                special and ♾️
                Naa yaartaiyume takkunu pesi close aagira maaten,
                but paarthoone pidichathu ungalatha.
                Mother bond la close aaganum nu nenachen 🥺🧿
              </p>

              <h2>Niga Enakku Innoru Amma 🫀</h2>

              <p>
                Niga eppovume happy aa sirichute irukkanum athai ☺️
                Nigale poonu sonnalum unga ammu pooga maaten.
                Eppovume unga kudaiye tha irupen athai ❤️‍🩹
              </p>

              <h2>Happiest Birthday En Uyiree! 💌❤️</h2>

              <h3>With lots of love,</h3>
              <h3>Your Ammu 🫂💗</h3>

            </div>
          )}

        </motion.div>
      </section>

      {/* OUR STORY */}
      <OurStory />

      {/* 37 PHOTO MEMORY TREE */}
      <MemoryTree />

      {/* VIDEO MEMORIES */}
      <Video />

      {/* BIRTHDAY CAKE */}
      <BirthdayCake />

      {/* FINAL SURPRISE */}
      <FinalSurprise />

      {/* FOOTER */}
      <footer className="footer">

        <Heart
          size={20}
          fill="#e8799b"
          color="#e8799b"
        />

        <p>
          Made with endless love for My love 💗
        </p>

        <p>
          You will always have a special place in my heart ♾️
        </p>

        <span>Forever & Always 🫂</span>

      </footer>

    </div>
  )
}

export default App
