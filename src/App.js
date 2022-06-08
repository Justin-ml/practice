import React from "react";
import Joke from "./Joke";

export default function App() {
  const jokes = {
    setup: "I got my daughter a fridge for her birthday.",
    punchline: "I can't wait to see her face light up when she opens it",
  };
  return (
    <div>
      {/* <Joke
        setup="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it"
      /> */}
      <Joke
        setup="how did the hacker escape the police?"
        punchline="he just ransomeware!"
      />
      <Joke
        setup="why don't pirates travel on mountain roads?"
        punchline="scurvy"
      />
      <Joke
        setup="why do bees stay in the hive in the winter?"
        punchline="swarm"
      />
      <Joke
        setup="whats the best thingabout Switzerland?"
        punchline="i don't know, but flag is a big plus"
      />
      {/*can pass props from object like below example too. */}
      <Joke setup={jokes.setup} punchline={jokes.punchline} />
      {/* can pass numeric or boolean or function expressions by using curly
      braces like below example as props value */}
      <Joke punchline={20} />
    </div>
  );
}

// cat details showing function

// // import Contacts from "./Contacts";
// // import "./App.css";

// // export default function App() {
// //   return (
// //     <div className="container">
// //       <Contacts
// //         img="/images/cat-img1.jpeg"
// //         name="Mr.Whiskerson"
// //         phone="(212) 555-1234"
// //         email="mr.whisaz@catnap.meow"
// //       />
// //       <Contacts
// //         img="/images/cat-img2.jfif"
// //         name="Fluffykins"
// //         phone="(212) 555-2345"
// //         email="fluffykins@hotmail.com"
// //       />
// //       <Contacts
// //         img="/images/cat-img3.jpg"
// //         name="Felix"
// //         phone="(212) 555-4567"
// //         email="felix@catnip.com"
// //       />
// //       <Contacts
// //         img="/images/cat-img4.jpg"
// //         name="Pumpkin"
// //         phone="(0800) CAT KING"
// //         email="pumpkin@scrimba.com"
// //       />
// //     </div>
// //   );
// // }
// /*cat detail end here */
// // import React from "react";

// // export default function App() {
// //   const date = new Date();
// //   const hours = date.getHours();
// //   let timeOfDay;

// //   if (hours < 12) {
// //     timeOfDay = "morning";
// //   } else if (hours >= 12) {
// //     timeOfDay = "afternoon";
// //   } else if (hours >= 17 && hours < 19) {
// //     timeOfDay = "evening";
// //   } else {
// //     timeOfDay = "Night";
// //   }

// //   return (
// //     <div>
// //       <h1>the time of the day is {timeOfDay}</h1>
// //     </div>
// //   );
// // }

// // import "./App.css";

// // function App() {
// //   const firstName = "joe";
// //   const lastName = "schmoe";

// //   return (
// //     <div className="App">
// //       <h1>
// //         Hello {firstName} {lastName}
// //       </h1>
// //     </div>
// //   );
// // }

// // export default App;
