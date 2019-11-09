const RankedTier = require('./rankedTier');
const EloRankingSystem = require('./eloRatingSystem');

const tiers = new RankedTier('Platinum', {
    subTiers: [
        new RankedTier('Platinum I', { minRating: 1680 }),
        new RankedTier('Platinum II', { minRating: 1744 })
    ],
    ratingSystem: new EloRankingSystem(32)
});

console.log(tiers.toString());