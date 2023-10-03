let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';
//console.log(storyWords)
let count = 0;
storyWords.forEach((word) => {
count++;
});
storyWords = storyWords.filter((word) => {
  if (word !== unnecessaryWord) {
    return word;
  }
});
storyWords = storyWords.map((word) => {
  if (word === misspelledWord) {
    return 'beautiful';
  } else {
    return word;
  }
}

);
const badWordIndex = storyWords.findIndex((word) => {
  if (word === badWord) {
    return word;
      }
});
storyWords[badWordIndex] = 'really';
let lengthCheck = storyWords.every((word) => {
return word.length > 10;
});
const longWord = storyWords.findIndex((word) => {
  if (word.length > 10) {
    return word;
  }
});
storyWords[longWord] = 'stunning';
storyWords = storyWords.filter((word) => { return word !== 'very'});
//console.log(storyWords[111]);
//console.log(`Long word index is:  ${longWord}`);
storyWords = storyWords.map((word) => {
  return word === "GW" ? "George Washington" : word;
});
storyWords.forEach((word) => {
  if (word === "feet") {
    let feetIndex = storyWords.indexOf(word);
    storyWords[feetIndex - 1] = Math.round(
      parseInt(storyWords[feetIndex - 1].replace(/,/g, "")) * 0.3048
    ).toString();
    storyWords[feetIndex] = "meters";
  } else if (word === "mile") {
    let mileIndex = storyWords.indexOf(word);
    // console.log(storyWords[mileIndex - 1]);
    storyWords[mileIndex - 1] = Math.round(
      parseInt(storyWords[mileIndex - 1]) * 1.60934
    ).toString();
    storyWords[mileIndex] = "kilometers";
  }
});
console.log(storyWords.join(" "));
