module.exports = function(K) {
    this.K = K;
    this.getNewRating = (ratingA, ratingB, score) => calculateNewRating(this.K, ratingA, ratingB, score);
}

const calculateNewRating =
    (K, rA, rB, sA) =>
        Math.round(rA + K * (sA - calculateExpectedScore(rA, rB)));

const calculateExpectedScore =
    (rA, rB) =>
        1 / (1 + (Math.pow(10, (rB - rA) / 400)));

const team1 = [0, 1662, 1986]
const team2 = [2486, 2283, 2073]

console.log(calculateNewRating(32, 2486, (1662 + 1986) / 2, 0));