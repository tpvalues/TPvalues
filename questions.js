// questions.js
const questions = [
  // STATE / Interference (25 questions) - corrected
  { text: "Total workplace democracy is desirable.", axis: "interference", direction: 1 },
  { text: "The highest leadership must have final control over all production goals.", axis: "interference", direction: -1 },
  { text: "Tripartite cooperation between the state, employees and employers is essential for the economy.", axis: "interference", direction: -1 },
  { text: "The DPRK has a foreign policy that we should emulate.", axis: "interference", direction: -1 },
  { text: "All within the state, nothing outside the state, nothing against the state.", axis: "interference", direction: -1 },
  { text: "Different trades and regions should develop their own economic traditions.", axis: "interference", direction: 1 },
  { text: "The nation can only prosper if the capital city controls the economic direction.", axis: "interference", direction: -1 },
  { text: "All major economic resources should be directed from a single central command.", axis: "interference", direction: -1 },
  { text: "State surveillance is an essential tool.", axis: "interference", direction: -1 },
  { text: "People in each trade or area should choose their own leaders for economic matters.", axis: "interference", direction: 1 },
  { text: "The government is the only entity that can fairly and effectively regulate institutions and organizations.", axis: "interference", direction: -1 },
  { text: "The best economy relies on cooperation.", axis: "interference", direction: 1 },
  { text: "Local and trade-based groups should have the freedom to adapt to their own conditions.", axis: "interference", direction: 1 },
  { text: "The state ought to be a means to an end.", axis: "interference", direction: 1 },
  { text: "Family farms and small workshops should be the backbone of the economy.", axis: "interference", direction: 1 },
  { text: "Large state bureaucracies and administrations are wasteful/evil and should be minimized or abolished whenever possible.", axis: "interference", direction: 1 },
  { text: "Local groups of workers and owners should handle most day-to-day economic matters themselves.", axis: "interference", direction: 1 },
  { text: "Some regions deserve autonomy.", axis: "interference", direction: 1 },
  { text: "A federal union is more desirable than a unitary state.", axis: "interference", direction: 1 },
  { text: "The welfare state should be abolished and replaced with voluntary charitable organizations.", axis: "interference", direction: 1 },
  { text: "Wage amounts should not be delegated solely to employers and should be handled or regulated by the state or community.", axis: "interference", direction: -1 },
  { text: "My ideal society would consist of tightly knit communities.", axis: "interference", direction: 1 },
  { text: "Different regions and trades should be free to organize production in their own way.", axis: "interference", direction: 1 },
  { text: "Worker guilds or syndicates cannot work without a state.", axis: "interference", direction: -1 },
  { text: "The state should not care what two consenting adults do in their bedroom.", axis: "interference", direction: 1 },

  // OWNERSHIP (25 questions) - corrected
  { text: "All material wealth should be held collectively.", axis: "ownership", direction: -1 },
  { text: "The right to property is fundamental.", axis: "ownership", direction: 1 },
  { text: "There is nothing wrong with permitting small businesses.", axis: "ownership", direction: 1 },
  { text: "Private ownership promotes responsibility, innovation and virtue in society.", axis: "ownership", direction: 1 },
  { text: "The state should actively intervene to break up large concentrations of private property and redistribute it more broadly.", axis: "ownership", direction: -1 },
  { text: "Market competition is essential to a healthy state.", axis: "ownership", direction: 1 },
  { text: "The workers need to own the means of production.", axis: "ownership", direction: -1 },
  { text: "Tax land, not labour.", axis: "ownership", direction: 1 },
  { text: "Communism is better than capitalism.", axis: "ownership", direction: -1 },
  { text: "Everyone should own their home.", axis: "ownership", direction: 1 },
  { text: "Essential goods and industries, like water, healthcare or housing, should not be commodified or left solely to the market.", axis: "ownership", direction: -1 },
  { text: "Infrastructure, like roads, power grids or internet access, should be publicly owned.", axis: "ownership", direction: -1 },
  { text: "Cities, towns and large plots of land should be privately owned and used solely in the interests of their owners.", axis: "ownership", direction: 1 },
  { text: "Regulations on goods and services are detrimental to the economy and to private property.", axis: "ownership", direction: -1 },
  { text: "The employer is not the worker's friend.", axis: "ownership", direction: -1 },
  { text: "The bourgeoisie can be re-socialized under our new system.", axis: "ownership", direction: 1 },
  { text: "We should bring back collective farming.", axis: "ownership", direction: -1 },
  { text: "The ideal economy balances private initiative with collective responsibility.", axis: "ownership", direction: 1 },
  { text: "Money made under my system should not be taxed as much.", axis: "ownership", direction: 1 },
  { text: "Land should not be a commodity to be bought and sold.", axis: "ownership", direction: -1 },
  { text: "There should only be one national bank.", axis: "ownership", direction: -1 },
  { text: "Workers should have stakes in the industries they work in.", axis: "ownership", direction: -1 },
  { text: "The businessperson and the manufacturer are more important than the writer and the artist.", axis: "ownership", direction: 1 },
  { text: "Economic independence is difficult when all property belongs to the collective.", axis: "ownership", direction: 1 },
  { text: "Distributism is an achievable economic system.", axis: "ownership", direction: 1 },

  // TRADITION (25 questions) - corrected
  { text: "Empire-building and conquering can be virtuous.", axis: "tradition", direction: -1 },
  { text: "War imposes the stamp of nobility upon the people who have the courage to make it.", axis: "tradition", direction: -1 },
  { text: "Cultural adaptation to foreign ideas and values is necessary for societies to thrive in the modern world.", axis: "tradition", direction: -1 },
  { text: "The monarchy is an important aspect of our culture that must be preserved.", axis: "tradition", direction: 1 },
  { text: "We must revolt against modernity — not just the modern world as it is, but modernity itself.", axis: "tradition", direction: 1 },
  { text: "The distant past had a superior method of societal organisation.", axis: "tradition", direction: 1 },
  { text: "Accelerationism is our best means to achieve anything.", axis: "tradition", direction: -1 },
  { text: "We must erase all traces of past civilisations.", axis: "tradition", direction: -1 },
  { text: "In the future we should improve our biology with technology.", axis: "tradition", direction: -1 },
  { text: "Damage to the environment is acceptable if it furthers the nation's goals.", axis: "tradition", direction: -1 },
  { text: "The Industrial Revolution was a necessary development in history.", axis: "tradition", direction: -1 },
  { text: "Cultural and societal traditions strengthen communities and society at large.", axis: "tradition", direction: 1 },
  { text: "A better world will come from automation, science and technology.", axis: "tradition", direction: -1 },
  { text: "We must protect nature, even if that means lowering our quality of life.", axis: "tradition", direction: 1 },
  { text: "Urbanism is superior to agrarian and rural living.", axis: "tradition", direction: -1 },
  { text: "We should be sceptical of new technologies.", axis: "tradition", direction: 1 },
  { text: "Agriculture didn't just domesticate the pig and the cow, but man himself.", axis: "tradition", direction: 1 },
  { text: "Drug and substance use are immoral acts and should be socially punished.", axis: "tradition", direction: 1 },
  { text: "A violent future must be embraced.", axis: "tradition", direction: -1 },
  { text: "The LGBTQ+ community should be able to have civil partnerships.", axis: "tradition", direction: -1 },
  { text: "It is the government's responsibility to enforce morality.", axis: "tradition", direction: 1 },
  { text: "People should be able to do whatever they want with their own bodies.", axis: "tradition", direction: -1 },
  { text: "Sexual deviancy is perfectly fine.", axis: "tradition", direction: -1 },
  { text: "There is now a worrying fusion of information and entertainment.", axis: "tradition", direction: 1 },
  { text: "The most important thing for children to learn is to accept discipline.", axis: "tradition", direction: 1 },

  // FAITH (25 questions) - corrected
  { text: "There is such a thing as inalienable rights.", axis: "faith", direction: 1 },
  { text: "All religions should be treated equally before the state.", axis: "faith", direction: -1 },
  { text: "Religious values should not influence governance.", axis: "faith", direction: -1 },
  { text: "Religion is a psychic disease of the brain.", axis: "faith", direction: -1 },
  { text: "Religious morality only hinders progress.", axis: "faith", direction: -1 },
  { text: "The separation between church and state is paramount.", axis: "faith", direction: -1 },
  { text: "There are moral rules that should never be broken.", axis: "faith", direction: 1 },
  { text: "Schools should include spiritual education.", axis: "faith", direction: 1 },
  { text: "Respect for my earliest ancestors is important.", axis: "faith", direction: 1 },
  { text: "My religion must be respected.", axis: "faith", direction: 1 },
  { text: "Atheism is deplorable.", axis: "faith", direction: 1 },
  { text: "You cannot be moral without being religious.", axis: "faith", direction: 1 },
  { text: "Paganism is barbaric.", axis: "faith", direction: -1 },
  { text: "I believe in the supernatural.", axis: "faith", direction: 1 },
  { text: "Churches should pay federal income and property taxes.", axis: "faith", direction: 1 },
  { text: "I accept other denominations of my faith.", axis: "faith", direction: -1 },
  { text: "Atheism breeds degeneracy.", axis: "faith", direction: 1 },
  { text: "Ethnicity is connected to the land.", axis: "faith", direction: 1 },
  { text: "The idols and memorabilia of other faiths must be destroyed.", axis: "faith", direction: 1 },
  { text: "Satanism is just another religion.", axis: "faith", direction: -1 },
  { text: "Traditional gender roles ought to be abolished.", axis: "faith", direction: -1 },
  { text: "Abortion is abhorrent and ought to be made illegal.", axis: "faith", direction: 1 },
  { text: "It's best if the leader is not religious.", axis: "faith", direction: -1 },
  { text: "Gnosticism is mostly imagination and conspiracy theories.", axis: "faith", direction: -1 },
  { text: "Astrology accurately explains many things.", axis: "faith", direction: -1 }
];

// Shuffle questions randomly every time the page loads
function shuffle(array) {
  let currentIndex = array.length;
  while (currentIndex !== 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

// Shuffle once on load
shuffle(questions);
