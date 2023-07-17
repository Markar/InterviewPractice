import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Hangman } from "../Hangman/Hangman";
import { GuessDisplay } from "../Screens/GuessDisplay";
import { WordDisplay } from "../Screens/WordDisplay";
import { WinScreen } from "../Screens/WinScreen";
import { LoseScreen } from "../Screens/LoseScreen";

export const Game = () => {
  let { difficulty, language } = useParams();
  let [currentGuess, setCurrentGuess] = useState("");
  let [word, setWord] = useState("");
  let [incorrectLetters, setIncorrectLetters] = useState("");
  let [correctLetters, setCorrectLetters] = useState("");
  let [penalty, setPenalty] = useState(0);
  let [streak, setStreak] = useState(0);
  let [showWinScreen, setShowWinScreen] = useState(false);
  let [showLoseScreen, setShowLoseScreen] = useState(false);
  let [hasWon, setHasWon] = (useState < boolean) | (null > null); // This is just used to refresh the getWord call
  let [losingWord, setLosingWord] = useState("");
  let [spinning, setSpinning] = useState(false);

  const attempts = 10;
  let [remainingGuesses, setRemainingGuesses] = useState(attempts);

  const loadProfilePicture = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("photo");
    }, 3000);
  });

  function loadFriendsList(friends) {
    const friendList = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(["mark", "jane"]);
      }, 2000);
    });

    return friendList;
  }

  function loadUserStatuses(usernames: any) {
    console.log("user names", usernames);
    const getStatuses = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([{ mark: "banned" }, { bob: "free" }, { jane: "premium" }]);
      }, 2000);
    });
  }

  function getAccountStatus(user: string) {
    const isBanned = new Promise((resolve, reject) => {
      console.log("get account status", user);
      setTimeout(() => {
        if (user === "mark") {
          resolve("free");
        } else {
          resolve("banned");
        }
      }, 2000);
    });

    return isBanned;
  }
  // Axios
  useEffect(() => {
    setSpinning(true);

    Promise.all([
      loadProfilePicture,
      loadFriendsList,
      getAccountStatus("mark"),
    ]).then(async (values) => {
      console.log("values", values);
      if (values[2] == "banned") {
        setSpinning(false);
        console.log("error msg");
      } else if (!values[1]) {
        console.log("friends error");
        //proceed without friends
        setSpinning(false);
      } else {
        //return friends too
        // for (let i = 0; i < friends.length; i++) {
        //   console.log('friends list', friends[i]);
        // }
        let friends = await loadFriendsList(values[1]);
        console.log("non-banned friends", friends);
        setSpinning(false);
      }
    });

    // async function getWord() {
    //   const url = `http://localhost:3000/words/generate?difficulty=${difficulty}&language=${language}`;

    //   let word = await axios
    //     .get(url)
    //     .then(res => {
    //       return res.data;
    //     })
    //     .catch(error => {
    //       console.log('error', error);
    //     });
    //   console.log('word', word.data);

    //   let test = await myPromise3();
    //   console.log('test resolved');
    //   setSpinning(false);

    //   if ()
    //   let res = Promise.all([myPromise, myPromise2]).then(async values => {
    //     console.log('values', values);

    //     setSpinning(false);
    //     return values;
    //   });

    //   setWord(word.data);
    //   return res;

    // getWord().catch(console.error);
  }, [hasWon]);

  function handleGuessChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCurrentGuess(e.target.value);
  }

  function resetGame() {
    //Reset the state of the game, but maintain the streak
    setCurrentGuess("");
    setIncorrectLetters("");
    setCorrectLetters("");
    setPenalty(0);
    setRemainingGuesses(attempts);
  }

  function win(e: React.ChangeEvent<HTMLFormElement>) {
    setHasWon(true);
    // Transition to Win State!
    resetGame();
    setShowWinScreen(true);
    let newStreak = (streak += 1);
    setStreak(newStreak);
    setRemainingGuesses(attempts);
    e.preventDefault();
    return;
  }

  function getAttempts() {
    return attempts - (penalty + incorrectLetters.length);
  }

  function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    if (!word) {
      console.log("Missing word, skipping submit");
      return;
    }
    let guess = currentGuess;
    console.log("current guess", guess);
    guess = guess.toLowerCase();
    let correct = correctLetters;

    if (guess.length > 1) {
      if (word === guess) {
        win(e);
        return;
      } else {
        // No letters added, and add a penalty
        let newPenalty = (penalty += 1);
        setPenalty(newPenalty);
        setCurrentGuess("");
      }
    } else {
      if (word.includes(guess)) {
        // Add correct letters
        let count = word.split(guess).length - 1;
        for (let i = 0; i < count; i++) {
          correct += guess;
        }

        setCorrectLetters(correct);
      } else {
        // Add incorrect letters, but ignore duplicates
        if (incorrectLetters.indexOf(guess) === -1) {
          setIncorrectLetters((incorrectLetters += guess));
        }
      }

      let sortedLetters = [...correct].sort().toString();
      let sortedWord = [...word].sort().toString();

      if (sortedLetters === sortedWord) {
        // Automatically transition to win state if they have guessed all of the letters
        // so they don't have to retype the whole word
        win(e);
        return;
      }

      setCurrentGuess("");
    }

    let attempts = getAttempts();
    setRemainingGuesses(attempts);

    if (attempts === 0) {
      //Transition to Lose State after all of the other states have been resolved
      setShowLoseScreen(true);
      setHasWon(false);
      setLosingWord(word);
      resetGame();
      // Reset streak here, since we don't want to reset it on play again from the win screen
      setStreak(0);
    }

    e.preventDefault();
  }

  function renderMain() {
    return (
      <>
        <div className="my-2 text-lg font-bold">
          <span className="mr-1">{streak} wins</span>
          <span className="">{remainingGuesses} tries left</span>
        </div>

        {spinning ? <div>Spinning</div> : null}
        <Hangman incorrectGuessCount={penalty + incorrectLetters.length} />
        <WordDisplay letters={correctLetters} word={word} />
        <GuessDisplay letters={incorrectLetters} />

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center"
        >
          <label>
            <div className="font-base m-auto mt-6 h-12 text-xl">
              What letter or word would you like to guess next?
            </div>
            <input
              minLength={1}
              maxLength={50}
              onChange={handleGuessChange}
              id="character-input"
              className="m-auto mt-6 h-8 w-full border-b-2 text-base"
              value={currentGuess}
              autoComplete={"off"}
              autoFocus
              ref={(input) => input && input.focus()}
            />
          </label>

          <div>
            <input
              type="submit"
              value="Guess"
              className="mt-12 h-10  w-40 cursor-pointer rounded bg-gray-700 text-lg font-bold text-white"
            />
          </div>
        </form>
      </>
    );
  }

  return (
    <>
      {showWinScreen === true ? (
        <WinScreen
          setHasWon={setHasWon}
          setShowWinScreen={setShowWinScreen}
          streak={streak}
        />
      ) : null}
      {showLoseScreen === true ? (
        <LoseScreen
          setHasWon={setHasWon}
          setShowLoseScreen={setShowLoseScreen}
          streak={streak}
          word={losingWord}
        />
      ) : null}

      {!hasWon && !showLoseScreen && !showWinScreen ? renderMain() : null}
    </>
  );
};
