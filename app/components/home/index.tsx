'use client'

export default function Home() {
  return (
      <>
            <nav className="flex justify-between items-center bg-white p-4 shadow-md">
                <div className="logo">
                    <img src="./logo.png" alt="Logo" className="h-10"></img>
                </div>
                <div className="links flex gap-6">
                    <a href="#" className="text-dark hover:text-primary hover-bg-secondary p-2 rounded">Accueil</a>
                    <a href="#" className="text-dark hover:text-primary hover-bg-secondary p-2 rounded">Règle</a>
                    <a href="#" className="text-dark hover:text-primary hover-bg-secondary p-2 rounded">Photo</a>
                  </div>
            </nav>
          <div className="px-16">
              <div className="flex justify-around items-center py-10">
                  <img className="w-80" src="./logo.png"/>
                  <h1 className="text-9xl text-center">THE RACCOON <br></br>GAME</h1>
              </div>
              <section>
                  <h1 className="text-7xl pb-10"> The game :</h1>
                  <p>The purpose of the game is to help Spiki the raccoon to escape from the fox jail.
                      For that you will have to roll the dice and get the card from the color you have obtained. After that
                      you will have to respond to the question or mission written on the card. If you succeed, you move
                      foreword your pawn from the number of points noted on your card, but if you fail you will have to
                      move back from the number of points noted on your card. The first one to arrive at the last box
                      wins and free Spiki the raccoon.
                  </p>
                  <div className="flex justify-around py-10">
                      <div className="card flex flex-col bg-amber-600 w-100 h-64 rounded-2xl items-center ">
                          <h2 className="text-white text-4xl px-5">What’s in the box ?</h2>
                          <div className="flex flex-col text-white pt-5">
                              <p>Board</p>
                              <p>70 cards</p>
                              <p>6 raccoon pawns</p>
                              <p>A 6 faces dice</p>
                          </div>
                      </div>
                      <div className="card flex flex-col bg-amber-600 w-96 h-64 rounded-2xl items-center">
                          <h2 className="text-white text-4xl text-center px-10">What do you need to play ?</h2>
                          <p className="text-white pt-5 px-3">The setup : Install the board. Each
                              player has to choose his pawn. Put
                              every pawn in the dep line.
                              Prepare the cards, in 5 different stacks
                              (separating the cards by color).
                          </p>
                      </div>
                  </div>
              </section>
              <section>
                  <h1 className="text-black text-4xl">The Cards</h1>
                  <div className="flex justify-around">
                      <div className="flex flex-col items-center">
                          <img className="w-80" src="./card1.png" alt="card1"/>
                          <p className="w-72 text-center">Guess which brand this graphic charter belongs to !</p>
                      </div>
                      <div className="flex flex-col items-center">
                          <img className="w-80" src="./card2.png" alt="card2"/>
                          <p className="w-72 text-center">Guess the brand thanks to a modified logo !</p>
                      </div>
                      <div className="flex flex-col items-center">
                          <img className="w-80" src="./card3.png" alt="card3"/>
                          <p className="w-72 text-center">On phone with internet connexion answer an online general knowledge quizz </p>
                      </div>
                      <div className="flex flex-col items-center">
                          <img className="w-80" src="./card4.png" alt="card4"/>
                          <p className="w-72 text-center">Guess which one of the two keywords noted is the most referenced word</p>
                      </div>
                      <div className="flex flex-col items-center">
                          <img className="w-80" src="./card5.png" alt="card5"/>
                          <p className="w-72 text-center">The faces of two celebrities have been mixed, guess who they belong to!</p>
                      </div>
                  </div>
              </section>
              <section>
                  <h1 className="text-center text-6xl">THE RULES</h1>
                  <div className="flex items-center bg-peach w-full p-4">
                      <div className="flex justify-around w-full max-w-xs">
                          <div className="flex flex-col items-center bg-amber-600 text-white p-4 m-1 text-center">
                              <span className="text-lg">15+</span>
                              <img src="./peoples.png" alt="Icon" className="w-8 h-8" />
                          </div>
                          <div className="flex flex-col items-center bg-amber-600 text-white p-4 m-1 text-center">
                              <span className="text-lg">30-45<br/>minutes</span>
                              <img src="./clock.png" alt="Icon" className="w-8 h-8" />
                          </div>
                          <div className="flex flex-col items-center bg-amber-600 text-white p-4 m-1 text-center">
                              <span className="text-lg">2-6<br/>joueurs</span>
                              <img src="path-to-your-icon" alt="Icon" className="w-8 h-8" />
                          </div>
                      </div>
                      <div className="flex-1 ml-4">
                          <p>Hello, agent raccoon 001, we need you! In fact, you are here today to help Spiki the raccoon to escape from the fox jail. You are allowed to do this mission only if you are 15 years old or more because it is classified as very dangerous. If you are good, this rescue going to last between 30 and 45 minutes. Only one you will be able to save Spiki, but you can be between 2 and 6 to participate.</p>
                      </div>
                  </div>

                  <p className="pt-10">The younger agent starts. After that each raccoon roll the color dice and answer to the fox question
                      written on the card corresponding to the color of their dice.
                      If you have the white face of the dice, you’re lucky, you can move foreword by 3 boxes. When you
                      get you card, you must answer to the fox question or task, if you succeed, you move foreword from
                      de boxes indicated at the top of your card, if you failed you step back from de boxes indicated at
                      the top of your card. Be careful agents, you only have 30 seconds to complete the mission of the
                      drawn card. If you failed the mission of the card and you are still on the case start, you can’t move
                      back.
                  </p>

                  <div className="flex justify-around py-10">
                      <img className="w-16" src="./pattes.png"/>
                      <img className="w-16" src="./pattes.png"/>
                      <img className="w-16" src="./pattes.png"/>
                      <img className="w-16" src="./pattes.png"/>
                      <img className="w-16" src="./pattes.png"/>
                      <img className="w-16" src="./pattes.png"/>
                      <img className="w-16" src="./pattes.png"/>
                      <img className="w-16" src="./pattes.png"/>
                  </div>

                  <p className="pb-6">
                      The foxes will try to complicate the task during your rescue, so when you arrived at a fox box, you
                      must get back to the last box you were (if you won 3 cases and you arrived at the fox case you
                      step back 3 cases before).
                  </p>
                  <p className="pb-6">
                      Fortunately for you, some of our raccoons’ friends have installed ladders that will maybe help you
                      during your mission. If you succeed in a case where there is a ladder, you can climb it and go to
                      the box at the top of the ladder. On the contrary, if you wail on a ladder box, you must get down to
                      the box at the bottom of it and lose your place.
                  </p>
                  <p className="pb-6">
                      If you don’t have a phone during the game, you have to cancell the black card «general culture».
                      If you take a black card with the raccoon and a book, you can move foreward of 3 boxes.
                  </p>
                  <p className="pb-6">
                      Agent raccoon, you only succeed in you mission when you arrive at the last case, or after.
                  </p>

                  <div className="flex justify-center items-center">
                      <img src="./logo.png" className="w-52"/>
                  </div>
              </section>
          </div>

      </>
  );
}
