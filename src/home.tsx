import { Link } from "preact-router";
import { useEffect, useState } from "preact/hooks";

const SCROLL_LIMIT = 3180;
const getPOVScale = (scroll: number) => {
  if (scroll > 96) {
    return 0;
  }
  if (scroll <= 0) {
    return 1.2;
  }

  return 1.2 / scroll;
};

const getPOVBrightness = (scroll: number) => {
  if (scroll <= 96) {
    return 50;
  }
  if (scroll > 192) {
    return 100;
  }
  return Math.floor(50 + scroll / 10);
};

const getFeatureY = (scroll: number) => {
  if (scroll <= 300) {
    return 0;
  }

  if (scroll >= 2100) {
    return 300;
  }

  if (scroll >= 648) {
    return 200;
  }

  return Math.floor(((scroll - 312) * 6) / 10);
};

const getLeftFeatureY = (scroll: number) => {
  if (scroll <= 648) {
    return 0;
  }

  if (scroll >= 1452) {
    return 400;
  }

  return Math.floor(((scroll - 648) * 5) / 10);
};

const getRightFeatureY = (scroll: number) => {
  if (scroll <= 1452) {
    return 0;
  }

  if (scroll >= 2064) {
    return 400;
  }

  return Math.floor(((scroll - 1452) * 5) / 10);
};

const getMeetCollectionY = (scroll: number) => {
  if (scroll >= SCROLL_LIMIT) {
    return 600;
  }
  return Math.floor(((scroll - 2088) * 5) / 10);
};

const Home = () => {
  const [scroll, setScroll] = useState(0);
  const [povAppear, setPovAppear] = useState(false);

  const handleScroll = (ev: WheelEvent) => {
    ev.preventDefault();
    const y = Math.floor(ev.deltaY / 10);
    setScroll((prev) => {
      const newy = prev + y;
      if (newy >= SCROLL_LIMIT) {
        return SCROLL_LIMIT;
      } else if (newy <= 0) {
        return 0;
      }
      return newy;
    });
  };

  useEffect(() => {
    document.body.addEventListener("wheel", handleScroll, { passive: false });
    setTimeout(() => setPovAppear(true), 500);
    return () => document.body.removeEventListener("wheel", handleScroll);
  }, []);
  return (
    <>
      <div className="flex h-screen justify-center bg-black">
        <img
          src="/pov.jpg"
          width="100%"
          alt=""
          className={`${scroll > 1000 ? "hidden" : ""}`}
          style={{
            filter: `brightness(${getPOVBrightness(scroll)}%)`,
            transition: "filter 0.2s ease-in-out",
          }}
        />
        <div
          className={`${
            povAppear ? "opacity-100" : "opacity-0"
          } absolute self-center text-center flex flex-col gap-12 transition-all`}
          style={{
            transitionDuration: "900ms",
            transform: `translateY(${
              povAppear ? "0" : "150px"
            }) scale(${getPOVScale(scroll)})`,
          }}
        >
          <p className="text-6xl text-pink-300 font-bold">SALTY</p>
          <h2 className="text-9xl text-pink-300 font-bold">Premium Speakers</h2>
          <p className="text-6xl text-pink-300 font-bold">
            Simple. Powerful. Versatile. A Better Sound
          </p>
          <div className="flex gap-2 items-center justify-center">
            <button className="bg-pink-300 rounded-full p-8 text-4xl">
              WATCH THE VIDEO
            </button>
            <Link
              path="/shop"
              className="bg-pink-300 rounded-full p-8 text-4xl"
            >
              SHOP NOW
            </Link>
          </div>
        </div>
      </div>
      <div
        className="h-screen bg-pink-300 transition-transform duration-750 gap-4 flex flex-col text-center items-center justify-center"
        style={{
          transform: `translateY(-${getFeatureY(scroll)}%)`,
        }}
      >
        <p className="text-white text-6xl">WHY SALTY?</p>
        <p className="text-4xl w-2/3">
          Our speakers are designed to reproduce every nuance of your favorite
          music, movies, and games. With crystal-clear highs, deep, resonant
          bass, and a wide soundstage, you'll feel like you're right in the
          middle of the action. Whether you're a music aficionado, a movie buff,
          or an avid gamer, our speakers will redefine your listening
          experience.
        </p>
      </div>
      <div
        className="h-screen flex w-full items-center self-center transition-transform duration-750"
        style={{
          transform: `translateY(-${getFeatureY(scroll)}%)`,
        }}
      >
        <div
          className="h-screen w-1/2 transition-transform duration-750"
          style={{
            transform: `translateY(-${getLeftFeatureY(scroll)}%)`,
          }}
        >
          <div className="bg-blue-900 h-screen w-full flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1585605109191-03cc36051fcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVkaW8lMjBzcGVha2VyfGVufDB8MXwwfHx8MA%3D%3D"
              alt="speaker a"
            />
          </div>
          <div className="bg-pink-300 h-screen w-full flex items-center justify-center p-4 text-center">
            we are passionate about delivering exceptional audio experiences
            that elevate your listening pleasure to new heights. Our speakers
            are meticulously crafted to provide you with the purest, most
            immersive sound imaginable, transforming your living space into a
            concert hall, cinema, or studio.
          </div>
          <div className="bg-yellow-400 h-screen w-full flex items-center justify-center">
            <img
              alt="speaker b"
              src="https://images.unsplash.com/photo-1558755982-60df5c86537f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXVkaW8lMjBzcGVha2VyfGVufDB8MXwwfHx8MA%3D%3D"
            />
          </div>
          <div className="bg-pink-300 h-screen w-full flex items-center justify-center p-4 text-center">
            Our speakers are not only sonically superior, but they also exude
            elegance and sophistication. Their sleek, modern designs complement
            any décor, adding a touch of luxury to your home. Our commitment to
            aesthetics ensures that our speakers not only sound amazing but also
            look stunning.
          </div>
          <div className="bg-green-400 h-screen w-full flex items-center justify-center">
            <img
              alt="speaker c"
              src="https://images.unsplash.com/photo-1552252210-2e1dca567ae6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF1ZGlvJTIwc3BlYWtlcnxlbnwwfDF8MHx8fDA%3D"
            />
          </div>
        </div>
        <div
          className="h-screen w-1/2 transition-transform duration-750"
          style={{
            transform: `translateY(-${getRightFeatureY(scroll)}%)`,
          }}
        >
          <div className="bg-green-900 h-screen flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1624089735305-63854867db06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGF1ZGlvJTIwc3BlYWtlcnxlbnwwfDF8MHx8fDA%3D"
              alt="speaker d"
              style={{
                width: "40%",
              }}
            />
          </div>
          <div className="bg-pink-300 h-screen w-full flex items-center justify-center  p-4 text-center">
            We are committed to providing our customers with the highest quality
            products. Our speakers are built to last, using only the finest
            materials and craftsmanship. We are confident that our speakers will
            provide you with years of enjoyment.
          </div>
          <div className="bg-orange-400 h-screen w-full flex items-center justify-center">
            <img
              alt="speaker e"
              src="https://images.unsplash.com/photo-1610725582058-4a0df189965b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGF1ZGlvJTIwc3BlYWtlcnxlbnwwfDF8MHx8fDA%3D"
            />
          </div>
          <div className="bg-pink-300 h-screen w-full flex items-center justify-center p-4 text-center">
            We are constantly innovating to bring you the latest in speaker
            technology. Our speakers incorporate cutting-edge features that
            enhance your listening experience, such as wireless connectivity,
            multi-room compatibility, and voice control.
          </div>
          <div className="bg-purple-400 h-screen w-full flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1611655046113-aa3c8e209f10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGF1ZGlvJTIwc3BlYWtlcnxlbnwwfDF8MHx8fDA%3D"
              alt="speaker f"
            />
          </div>
        </div>
      </div>
      <div
        className="h-screen flex flex-col w-full items-center self-center transition-transform duration-750"
        style={{
          transform: `translateY(-${getFeatureY(scroll)}%)`,
        }}
      >
        <div
          className="w-full border-b-4 border-white bg-black text-center transition-transform duration-750 flex items-center justify-center"
          style={{
            transform: `translateY(-${getMeetCollectionY(scroll)}%)`,
            minHeight: "80vh",
          }}
        >
          <p className="text-pink-300 text-9xl font-bold">
            Meet Our Collection
          </p>
        </div>
        <div
          className="w-full bg-black border-b-4 border-white text-center transition-transform duration-750 flex items-center justify-center gap-8 px-20"
          style={{
            transform: `translateY(-${getMeetCollectionY(scroll)}%)`,
            minHeight: "80vh",
          }}
        >
          <div
            className="w-1/3 rounded-lg"
            style={{
              height: "50%",
            }}
          >
            <img
              className="rounded-lg"
              src="https://images.unsplash.com/photo-1585605109191-03cc36051fcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHNwZWFrZXJ8ZW58MHx8MHx8fDA%3D"
              alt="audiophile"
            />
          </div>
          <div className="w-2/3">
            <p className="text-pink-300 text-4xl font-bold">
              The Audiophile Collection
            </p>
            <p className="text-pink-300 text-lg text-center my-2">
              For those who demand the absolute best in sound quality, our
              Audiophile Collection is the pinnacle of acoustic perfection.
              These speakers are meticulously crafted with premium components
              and cutting-edge technology to deliver a truly unparalleled audio
              experience. Immerse yourself in the rich, detailed sound of your
              favorite music, movies, and games with these exceptional speakers.
            </p>
          </div>
        </div>
        <div
          className="w-full bg-black border-b-4 border-white text-center transition-transform duration-750 flex items-center justify-center gap-8 px-20"
          style={{
            transform: `translateY(-${getMeetCollectionY(scroll)}%)`,
            minHeight: "80vh",
          }}
        >
          <div className="w-2/3">
            <p className="text-pink-300 text-4xl font-bold">
              The Home Theater Collection
            </p>
            <p className="text-pink-300 text-lg text-center my-2">
              Transform your living room into a cinematic haven with our Home
              Theater Collection. These speakers are designed to create a truly
              immersive surround sound experience that will transport you to the
              heart of the action. Experience the thrill of roaring explosions,
              the subtlety of whispered dialogue, and the captivating atmosphere
              of your favorite films with these powerful and versatile speakers.
            </p>
          </div>
          <div
            className="w-1/3 rounded-lg"
            style={{
              height: "50%",
            }}
          >
            <img
              className="rounded-lg"
              src="https://images.unsplash.com/photo-1595432541891-a461100d3054?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHNwZWFrZXJ8ZW58MHx8MHx8fDA%3D"
              alt="home theater"
            />
          </div>
        </div>
        <div
          className="w-full bg-black border-b-4 border-white text-center transition-transform duration-750 flex items-center justify-center gap-8 px-20"
          style={{
            transform: `translateY(-${getMeetCollectionY(scroll)}%)`,
            minHeight: "80vh",
          }}
        >
          <div
            className="w-1/3 rounded-lg"
            style={{
              height: "50%",
            }}
          >
            <img
              className="rounded-lg"
              src="https://images.unsplash.com/photo-1507878566509-a0dbe19677a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHNwZWFrZXJ8ZW58MHx8MHx8fDA%3D"
              alt="wireless"
            />
          </div>
          <div className="w-2/3">
            <p className="text-pink-300 text-4xl font-bold">
              The Wireless Collection
            </p>
            <p className="text-pink-300 text-lg text-center my-2">
              Unleash the freedom of wireless audio with our Wireless
              Collection. These speakers seamlessly integrate with your existing
              devices, allowing you to enjoy your favorite music, podcasts, and
              audiobooks without the clutter of wires. Stream your music from
              your smartphone, tablet, or computer, and experience the
              convenience of wireless audio without compromising on sound
              quality.
            </p>
          </div>
        </div>
        <div
          className="w-full bg-black border-b-4 border-white text-center transition-transform duration-750 flex items-center justify-center gap-8 px-20"
          style={{
            transform: `translateY(-${getMeetCollectionY(scroll)}%)`,
            minHeight: "80vh",
          }}
        >
          <div className="w-2/3">
            <p className="text-pink-300 text-4xl font-bold">
              The Outdoor Collection
            </p>
            <p className="text-pink-300 text-lg text-center my-2">
              Bring the party outdoors with our Outdoor Collection. These
              speakers are weather-resistant and durable, making them the
              perfect companions for backyard barbecues, pool parties, and
              summer gatherings. Fill your outdoor space with vibrant, dynamic
              sound that will set the mood for any occasion.
            </p>
          </div>
          <div
            className="w-1/3 rounded-lg"
            style={{
              height: "50%",
            }}
          >
            <img
              className="rounded-lg"
              src="https://images.unsplash.com/photo-1596457941236-c0611cc87551?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHNwZWFrZXJ8ZW58MHx8MHx8fDA%3D"
              alt="outdoor"
            />
          </div>
        </div>
        <div
          className="w-full bg-black border-b-4 border-white text-center transition-transform duration-750 flex items-center justify-center gap-8 px-20"
          style={{
            transform: `translateY(-${getMeetCollectionY(scroll)}%)`,
            minHeight: "80vh",
          }}
        >
          <div
            className="w-1/3 rounded-lg"
            style={{
              height: "50%",
            }}
          >
            <img
              className="rounded-lg"
              src="https://images.unsplash.com/photo-1593906106036-9fa76d556af3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNtYXJ0JTIwc3BlYWtlcnxlbnwwfDF8MHx8fDA%3D"
              alt="smart"
            />
          </div>
          <div className="w-2/3">
            <p className="text-pink-300 text-4xl font-bold">
              The Smart Collection
            </p>
            <p className="text-pink-300 text-lg text-center my-2">
              Embrace the future of audio with our Smart Collection. These
              speakers integrate seamlessly with smart home systems, allowing
              you to control your music with simple voice commands. Enjoy
              hands-free operation, personalized playlists, and a truly
              connected audio experience with these innovative speakers.
            </p>
          </div>
        </div>
        <div
          className="bg-blend-hard-light hover:bg-blend-normal bg-blue-900 gap-4 flex flex-col w-full items-center justify-center self-center transition-transform duration-750"
          style={{
            transform: `translateY(-${getMeetCollectionY(scroll)}%)`,
            minHeight: "80vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundImage:
              "url(https://images.unsplash.com/photo-1609702847389-b8aec1b0b929?q=80&w=963&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}
        >
          <p className="text-pink-300 text-6xl font-bold">
            Experience It Yourself
          </p>
          <Link path="/shop" className="bg-pink-300 p-8 rounded-full text-4xl">
            Shop Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
