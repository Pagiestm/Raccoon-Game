'use client'

export default function Home() {
    return (
        <>
            <nav className="flex justify-between items-center bg-white p-4 shadow-md">
                <div className="logo">
                    <img src="./logo.png" alt="Logo" className="h-10"></img>
                </div>
                <div className="links flex gap-6">
                    <a href="#sectionRules" className="text-dark hover:text-primary hover-bg-secondary p-2 rounded">Rules</a>
                    <a href="#sectionCards" className="text-dark hover:text-primary hover-bg-secondary p-2 rounded">Cards</a>
                    <a href="/dice" className="text-dark hover:text-primary hover-bg-secondary p-2 rounded">Dice</a>
                </div>
            </nav>
            <div className="p-2 md:p-8">
                <div className="flex flex-col md:flex-row items-center justify-center py-3">
                    <img className="w-32 md:w-64 mb-4 md:mb-0" src="./logo.png" alt="Logo" />
                    <h1 className="text-3xl md:text-6xl text-center md:ml-20">
                        THE RACCOON <br /> GAME
                    </h1>
                </div>
                <section>
                    <h2 className="text-3xl text-center md:text-left mb-4 mt-4"> The game :</h2>
                    <p className="text-sm md:text-base">The purpose of the game is to help Spiki the raccoon to escape from the fox jail.
                        For that you will have to roll the dice and get the card from the color you have obtained. After that
                        you will have to respond to the question or mission written on the card. If you succeed, you move
                        foreword your pawn from the number of points noted on your card, but if you fail you will have to
                        move back from the number of points noted on your card. The first one to arrive at the last box
                        wins and free Spiki the raccoon.
                    </p>
                    <div className="flex flex-col md:flex-row justify-around py-5 md:py-10">
                        <div className="card flex flex-col bg-amber-600 w-full md:w-1/2 lg:w-1/3 h-[350px] md:h-64 rounded-2xl items-center border-2 md:border-none mb-4 md:mb-0">
                            <h2 className="text-white text-3xl md:text-4xl text-center px-5 md:px-10">What’s in the box ?</h2>
                            <div className="flex flex-col text-white pt-2 md:pt-5">
                                <div className="flex items-center">
                                    <img className="w-16 md:w-8 ml-2" src="./board.png" alt="board" />
                                    <p className="text-sm md:text-base ml-2">Board</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-sm md:text-base ml-2">6 raccoon pawns</p>
                                    <img className="w-16 md:w-8 ml-2" src="./raccoon.png" alt="raccoon" />
                                </div>
                                <div className="flex items-center">
                                    <img className="w-16 md:w-8 ml-2" src="./cartes.png" alt="cartes" />
                                    <p className="text-sm md:text-base ml-2">70 cards</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-sm md:text-base ml-2">A 6 faces dice</p>
                                    <img className="w-16 md:w-8 ml-2" src="./2dé.png" alt="2dé" />
                                </div>
                            </div>
                        </div>
                        <div className="card flex flex-col bg-amber-600 w-full md:w-1/2 lg:w-1/3 h-56 md:h-64 rounded-2xl items-center border-2 md:border-none">
                            <h2 className="text-white text-3xl md:text-4xl text-center px-5 md:px-10">What do you need to play ?</h2>
                            <p className="text-xs md:text-base text-white md:pt-5 px-5 md:px-10">
                                The setup : Install the board. Each
                                player has to choose his pawn. Put
                                every pawn in the dep line.
                                Prepare the cards, in 5 different stacks
                                (separating the cards by color)
                            </p>
                        </div>
                    </div>
                </section>
                <section id="sectionCards">
                    <h2 className="text-3xl text-center md:text-left">The Cards :</h2>
                    <div className="flex overflow-x-auto">
                        <div className="flex flex-col items-center p-2 md:p-4">
                            <img className="w-40 md:w-80" src="./card1.png" alt="card1" />
                            <p className="w-40 md:w-72 text-center text-sm md:text-base">Guess which brand this graphic charter belongs to!</p>
                        </div>
                        <div className="flex flex-col items-center p-2 md:p-4">
                            <img className="w-40 md:w-80" src="./card2.png" alt="card2" />
                            <p className="w-40 md:w-72 text-center text-sm md:text-base">Guess the brand thanks to a modified logo!</p>
                        </div>
                        <div className="flex flex-col items-center p-2 md:p-4">
                            <img className="w-40 md:w-80" src="./card3.png" alt="card3" />
                            <p className="w-40 md:w-72 text-center text-sm md:text-base">On phone with internet connexion answer an online general knowledge quizz</p>
                        </div>
                        <div className="flex flex-col items-center p-2 md:p-4">
                            <img className="w-40 md:w-80" src="./card4.png" alt="card4" />
                            <p className="w-40 md:w-72 text-center text-sm md:text-base">Guess which one of the two keywords noted is the most referenced word</p>
                        </div>
                        <div className="flex flex-col items-center p-2 md:p-4">
                            <img className="w-40 md:w-80" src="./card5.png" alt="card5" />
                            <p className="w-40 md:w-72 text-center text-sm md:text-base">The faces of two celebrities have been mixed, guess who they belong to!</p>
                        </div>
                    </div>
                </section>
                <section id="sectionRules" className="mt-6">
                    <h2 className="text-3xl text-center md:text-left">THE RULES :</h2>
                    <div className="flex flex-col ms:flex-row items-center bg-peach w-full p-2 md:p-5">
                        <div className="flex justify-around ms:flex-1 mb-2 md:mb-0 md:mr-4">
                            <div className="flex flex-col items-center bg-amber-600 text-white p-1 md:p-2 m-1 text-center border-2 rounded-md px-5">
                                <span className="text-lg text-sm md:text-lg">15+</span>
                                <img src="./peoples.png" alt="Icon" className="w-6 h-6 md:w-8 md:h-8" />
                            </div>
                            <div className="flex flex-col items-center bg-amber-600 text-white p-1 md:p-2 m-1 text-center border-2 rounded-md">
                                <span className="text-lg text-sm md:text-lg">30-45<br />minutes</span>
                                <img src="./clock.png" alt="Icon" className="w-6 h-6 md:w-8 md:h-8" />
                            </div>
                            <div className="flex flex-col items-center bg-amber-600 text-white p-1 md:p-2 m-1 text-center border-2 rounded-md">
                                <span className="text-lg text-sm md:text-lg">2-6<br />joueurs</span>
                                <img src="./clock.png" alt="Icon" className="w-6 h-6 md:w-8 md:h-8" />
                            </div>
                        </div>
                        <div className="flex-1 ml-2 md:ml-4">
                            <p className="pt-5 md:pt-10 text-sm md:text-base">
                                Hello, agent raccoon 001, we need you !
                                In fact, you are here today to help Spiki the raccoon
                                to escape from the fox jail.
                                You are allowed to do this mission only if you are
                                15 years old or more because it is classified as very
                                dangerous. If you are good, this rescue going to last
                                between 30 and 45 minutes. Only one you will be
                                able to save Spiki, but you can be between 2 and 6 to
                                participate.
                            </p>
                        </div>
                    </div>

                    <p className="pt-5 md:pt-10 text-sm md:text-base">The younger agent starts. After that each raccoon roll the color dice and answer to the fox question
                        written on the card corresponding to the color of their dice.
                        If you have the white face of the dice, you’re lucky, you can move foreword by 3 boxes. When you
                        get you card, you must answer to the fox question or task, if you succeed, you move foreword
                        from de boxes indicated at the top of your card, if you failed you step back from de boxes indicated
                        at the top of your card. If you roll the dice and you get the same color as on the box as the box
                        you are on, then you can already move foreward one box and after draw your color card ( if the
                        box where you arrive is a ladder or a fox it has no impact). Be careful agents, you only have 30
                        seconds to complete the mission of the drawn card. If you failed the mission of the card and you
                        are still on the case start, you can’t move back.
                    </p>

                    <div className="flex justify-around py-5 md:py-10">
                        {[...Array(8)].map((_, index) => (
                            <img key={index} className="w-8 md:w-12 lg:w-16" src="./pattes.png" alt={`pattes-${index}`} />
                        ))}
                    </div>

                    <p className="pt-5 md:pt-5 text-sm md:text-base">
                        The foxes will try to complicate the task during your rescue, so when you arrived at a fox box, you
                        must get back to the last box you were (if you won 3 cases and you arrived at the fox case you
                        step back 3 cases before).
                    </p>
                    <p className="pt-5 md:pt-5 text-sm md:text-base">
                        Fortunately for you, some of our raccoons’ friends have installed ladders that will maybe help you
                        during your mission. If you succeed in a case where there is a ladder, you can climb it and go to
                        the box at the top of the ladder. On the contrary, if you wail on a ladder box, you must get down to
                        the box at the bottom of it and lose your place.
                    </p>
                    <p className="pt-5 md:pt-5 text-sm md:text-base">
                        If you don’t have a phone during the game, you have to cancell the black card «general culture».
                        If you take a black card with the raccoon and a book, you can move foreward of 3 boxes.
                    </p>
                    <p className="pt-5 md:pt-5 text-sm md:text-base">
                        Agent raccoon, you only succeed in you mission when you arrive at the last case, or after.
                    </p>

                    <div className="flex justify-center items-center mt-6">
                        <img src="./logo.png" className="w-52" />
                    </div>

                    <div className="flex justify-center items-center mt-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="mt-2 w-6 h-6 text-secondary-dark animate-bounce"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </div>

                    <div className="flex flex-col items-center mt-6">
                        <a
                            href="./RaccoonGame.pdf"
                            download="RaccoonGame.pdf"
                            className="bg-black text-white hover:text-white hover:bg-orange-500 p-2 rounded inline-block"
                        >
                            Download the Game
                        </a>
                    </div>
                </section>
            </div>

        </>
    );
}
