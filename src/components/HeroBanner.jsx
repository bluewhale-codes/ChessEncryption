import BounceCards from './miniComponents/BounceCards'
import TextType from "./miniComponents/TextType"

export default function HeroBanner() {
  const images = [
    "https://img.freepik.com/free-photo/player-playing-black-king-chessboard_114579-6026.jpg?t=st=1768910739~exp=1768914339~hmac=4bee0e8216ebb360058dffe6dd82b5c9132aa7ca2ffdcd60d7695846537f0111&w=1480",
    "https://img.freepik.com/free-photo/man-making-his-move_53876-20932.jpg?t=st=1768910821~exp=1768914421~hmac=300aad46318a87a27a6f06edd690dc2cfba6a40f5c42633bb70d6d742b35e46b&w=1480",
    "https://img.freepik.com/free-vector/four-set-chess-pieces-illustration_1308-2486.jpg?t=st=1768911090~exp=1768914690~hmac=0bec5285b0a414b92a579adb4037446ceaf506d3126b297c41ebb41b81add009&w=1480",
    "https://img.freepik.com/free-photo/abstract-chess-pieces-digital-art-style_23-2151476120.jpg?t=st=1768910976~exp=1768914576~hmac=f45232be813367dc3d6130b601ec069f5d4a51a46d534a2cce348c69ec70aac4&w=1480",
    "https://img.freepik.com/free-photo/digital-art-style-scene-with-people-playing-chess_23-2151499399.jpg?t=st=1768910881~exp=1768914481~hmac=b9b5fb1a8e2b40d3d5319be25082328380e5e875ca76b87b1ab8ec883a45a5c1&w=1480"
  ];

  const transformStyles = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)"
  ];

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <section
      className="
         
        w-full
        min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh]
        flex flex-col md:flex-row
        items-center justify-center
        px-4 sm:px-6 md:px-12 lg:px-20
        py-8 md:py-12 lg:py-16
        
        relative bg-cover bg-center bg-no-repeat
      "
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-photo/chess-pieces-standing-board-with-binary-code-raining-down-representing-ai_967812-24006.jpg?w=1480')"
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content Wrapper */}
      <div className="relative w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 lg:gap-16">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center text-center md:text-left">
          <TextType
            className="
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
              font-bold text-white leading-snug sm:leading-snug md:leading-tight
            "
            text={[
              "Enterprise-Grade Data Hiding via Chess Algorithms"
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            cursorClassName="text-white"
          />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="
              relative z-10
              bg-white/15 backdrop-blur-md
              p-4 sm:p-5 md:p-6 lg:p-8
              rounded-2xl
              max-w-full
            "
          >
            <BounceCards
              className="custom-bounceCards"
              images={images}
              containerWidth={320}
              containerHeight={280}
              animationDelay={1}
              animationStagger={0.08}
              easeType="elastic.out(1, 0.5)"
              transformStyles={transformStyles}
              enableHover={false}
            />

            <div className="mt-4 flex justify-center md:justify-start">
                <a href="/products">
                  <button
                    className="
                      px-4 sm:px-6 md:px-8
                      py-2 sm:py-2.5 md:py-3
                      bg-red-600 text-white
                      text-xs sm:text-sm md:text-base lg:text-lg
                      font-semibold rounded-full shadow-md
                      hover:bg-red-700 hover:shadow-lg
                      focus:outline-none focus:ring-2 focus:ring-red-400
                      transition-all duration-300
                    "
                  >
                    Explore more..
                  </button>
                </a>
              </div>

          </div>
        </div>
      </div>
    </section>
  );
}
