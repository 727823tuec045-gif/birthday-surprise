
import React, { useState } from "react";
import "./MemoryTree.css";

// All 37 photos
const photos = Array.from({ length: 37 }, (_, index) => ({
  id: index + 1,
  src: `/memories/memory${index + 1}.jpeg`,
}));

// Positions: left, top, rotation
const positions = [
  [25, 8, -5], [39, 13, 4], [50, 7, -3], [62, 12, 5], [76, 8, -4],
  [17, 19, -5], [31, 21, 4], [45, 19, -4], [58, 22, 5], [73, 19, -3],
  [11, 31, -5], [25, 34, 4], [39, 30, -3], [53, 34, 4], [67, 31, -4],
  [81, 34, 5], [17, 45, -4], [31, 48, 4], [45, 44, -5], [59, 47, 4],
  [73, 44, -4], [86, 47, 4],
  [22, 59, -4], [36, 62, 4], [50, 58, -4], [64, 62, 4], [78, 59, -5],
  [15, 73, -4], [29, 76, 4], [43, 72, -4], [57, 76, 4], [71, 72, -4],
  [84, 75, 5], [36, 87, -4], [49, 86, 4], [63, 87, -4], [76, 85, 4],
];

const branches = [
  "M50 95 Q39 70 13 68",
  "M50 95 Q36 58 17 48",
  "M50 95 Q38 39 24 27",
  "M50 95 Q42 22 36 10",
  "M50 95 Q49 24 50 7",
  "M50 95 Q59 24 64 12",
  "M50 95 Q67 39 76 10",
  "M50 95 Q72 54 86 37",
  "M50 95 Q78 65 88 66",
  "M50 95 Q28 78 15 74",
  "M50 95 Q70 81 84 74",
];

function MemoryTree() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section className="memory-tree-section">

      {/* Heading */}
      <div className="memory-heading">
        <span className="memory-subtitle">
          A SPECIAL GIFT FOR YOU
        </span>

        <h1>
          Our Beautiful <span>Memories</span>
        </h1>

        <p>
          Every picture holds a story, every story holds you ❤️
          This tree is for your 37th birthday,Happy 37th birthday my soul!😘
        </p>
      </div>

      {/* Tree */}
      <div className="memory-tree">

        <div className="tree-trunk"></div>

        {/* Golden branches */}
        <svg
          className="tree-branches"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="goldBranch" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fff4c9" />
              <stop offset="50%" stopColor="#d99335" />
              <stop offset="100%" stopColor="#fff0b0" />
            </linearGradient>
          </defs>

          {branches.map((path, index) => (
            <g key={index}>
              <path
                d={path}
                fill="none"
                stroke="#ffc45d"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="branch-glow"
              />
              <path
                d={path}
                fill="none"
                stroke="url(#goldBranch)"
                strokeWidth="0.65"
                strokeLinecap="round"
              />
            </g>
          ))}
        </svg>

        {/* Leaves */}
        <div className="tree-leaves">
          {Array.from({ length: 35 }, (_, i) => (
            <span
              key={i}
              className="tree-leaf"
              style={{
                left: `${8 + ((i * 17) % 84)}%`,
                top: `${5 + ((i * 23) % 72)}%`,
                animationDelay: `${i * 0.15}s`,
              }}
            >
              🍃
            </span>
          ))}
        </div>

        {/* Fairy lights */}
        <div className="fairy-lights">
          {Array.from({ length: 65 }, (_, i) => (
            <span
              key={i}
              className="fairy-light"
              style={{
                left: `${8 + ((i * 29) % 84)}%`,
                top: `${5 + ((i * 19) % 83)}%`,
                animationDelay: `${(i % 8) * 0.25}s`,
              }}
            />
          ))}
        </div>

        {/* 37 visible hanging photographs */}
        <div className="memory-photos">
          {photos.map((photo, index) => {
            const [left, top, rotation] = positions[index];

            return (
              <div
                className="hanging-memory"
                key={photo.id}
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  "--rotation": `${rotation}deg`,
                  animationDelay: `${index * 0.06}s`,
                }}
                onClick={() => setSelectedPhoto(photo)}
                role="button"
                tabIndex={0}
                aria-label={`Open memory ${photo.id}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedPhoto(photo);
                  }
                }}
              >
                {/* String */}
                <div className="memory-string"></div>

                {/* Ribbon */}
                <div className="memory-bow">🎀</div>

                {/* Photo frame */}
                <div className="polaroid-frame">
                  <div className="polaroid-image">
                    <img
                      src={photo.src}
                      alt={`Our memory ${photo.id}`}
                      loading="eager"
                      draggable="false"
                      onError={(e) => {
                        console.error(
                          `Could not load ${photo.src}`
                        );
                        e.currentTarget.classList.add("photo-load-error");
                      }}
                    />

                    <span className="photo-fallback">
                      {photo.id}
                    </span>
                  </div>

                  <div className="photo-number">
                    {String(photo.id).padStart(2, "0")}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating hearts */}
        <div className="floating-hearts">
          {["♡", "♥", "♡", "♥", "♡", "♥", "♡", "♥"].map(
            (heart, i) => (
              <span
                key={i}
                style={{
                  left: `${8 + i * 12}%`,
                  top: `${12 + (i % 3) * 25}%`,
                  animationDelay: `${i * 0.5}s`,
                }}
              >
                {heart}
              </span>
            )
          )}
        </div>

        {/* Flowers */}
        <div className="tree-ground">
          <span>🌸</span>
          <span>🌷</span>
          <span>🌼</span>
          <span>🌸</span>
          <span>🌷</span>
          <span>🌼</span>
          <span>🌸</span>
        </div>

        {/* Birthday sign */}
        <div className="memory-sign">
          <div className="sign-heart">♡</div>
          <h2>37 Memories...</h2>
          <p>One Beautiful Journey ❤️</p>
        </div>

      </div>

      {/* Footer */}
      <div className="memory-footer">
        <p>FOREVER TOGETHER • FOREVER IN MY HEART</p>
        <span>Made with endless love 💗</span>
      </div>

      {/* Enlarged photo popup */}
      {selectedPhoto && (
        <div
          className="memory-lightbox"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="close-memory"
            onClick={() => setSelectedPhoto(null)}
            aria-label="Close photo"
          >
            ×
          </button>

          <div
            className="enlarged-memory"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedPhoto.src}
              alt={`Our beautiful memory ${selectedPhoto.id}`}
            />

            <h3>Our Beautiful Memory ❤️</h3>

            <p>
              Memory {selectedPhoto.id} of 37
            </p>
          </div>
        </div>
      )}

    </section>
  );
}

export default MemoryTree;
