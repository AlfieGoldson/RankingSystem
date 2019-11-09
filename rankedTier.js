module.exports = function(name, parent, { subTiers = [], minRating = -1, ratingSystem = null }) {
    this.name = name;
    this.minRating = minRating;
    this.subTiers = subTiers;
    this.toString = () => `${this.name}${this.subTiers.length > 0 ? ` (${this.subTiers[0].minRating}+)${this.subTiers.reduce((str, txt) => `${str}\n  • ${txt.toString()}`, '')}`
        : ` (${minRating})`}`
    return this;
}