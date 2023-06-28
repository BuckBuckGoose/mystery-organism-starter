// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
//--------^ Predefined Methods ^--------------------

// Creating multiple objects with a factory
const pAequorFactory = (number, arr) => {
  return {
    specimenNum: number,
    dna: arr,

    // Mutate Functionality
    mutate() {
      let i = Math.floor(Math.random() * 16);
      let mutated;
      let current = dna[i];
      do {
        mutated = returnRandBase();
      } while (mutated === current);
      this.dna[i] = mutated;
    },

    // Compare DNA Functionality
    compareDNA(organism) {
      let count = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === organism.dna[i]) {
          count++;
        }
      }
      console.log(
        `Specimen 1# and specimen #2 have ${(count / 15) * 100}% DNA in common.`
      );
    },

    // Will Likely Survive Functionality
    willLikelySurvive() {
      return this.dna.filter((x) => x === "C" || x === "G").length / 15 > 0.6
        ? true
        : false;
    },
  };
};

let specimenArr = [];
let specimenCount = 0;
do {
  let newSpecimen = pAequorFactory(specimenCount, mockUpStrand());
  if (newSpecimen.willLikelySurvive()) {
    specimenArr.push(newSpecimen);
    specimenCount++;
  }
} while (specimenCount < 30);
