"use strict;" 
//Jokes you've been 'awaiting' for ... promise
async function sayJoke(apiUrl, jokeId) {
  const response = await fetch(apiUrl)
  const jsonResponse = await response.json()
  if (!jsonResponse.hasOwnProperty('jokes')) {
    throw new Error(`No jokes at url: ${apiUrl}`)
  }
  const joke = jsonResponse.jokes.find(function (joke) {
    return joke.id === jokeId
  })
  if (!joke) {
    throw new Error(`No jokes found id: ${jokeId}`)
  }
  return {
    saySetup: () => joke.setup,
    sayPunchLine: () => joke.punchLine,
  }
}