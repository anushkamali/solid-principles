//Single Responsibility Principle

class CalorieTracker {
    constructor(maxCalories) {
        this.maxCalories = maxCalories
        this.currentCalories = 0
    }

    trackCalories(calorieCount) {
        this.currentCalories += calorieCount
        if (this.currentCalories > this.maxCalories) {
            logMessage("Max calories exceeded")
        }
    }
}

function logMessage(message) {
    console.log(message)
}

const calorieTracker = new CalorieTracker(2000)
calorieTracker.trackCalories(500)
calorieTracker.trackCalories(1000)
calorieTracker.trackCalories(700)

