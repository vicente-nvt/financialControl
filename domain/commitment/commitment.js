class Commitment{

    constructor(description, effectiveValue, expectedValue,
        expiryDate, movement, plot, totalPlots, type, grouper) {
        this.description = description;
        this.effectiveValue = effectiveValue;
        this.expectedValue = expectedValue;
        this.expiryDate = expiryDate;
        this.movement = movement;
        this.plot = plot;
        this.totalPlots = totalPlots;
        this.grouper = grouper;
    }
}

module.exports = Commitment;