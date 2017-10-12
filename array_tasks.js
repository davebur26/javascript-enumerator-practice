// map/filter etc Enumeration


var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0 ,itemToAdd)
		return arr;
	},

	square: function (arr) {
		return arrSquare = arr.map(function(parameter){
			 return parameter**2
		});
	},

	sum: function (arr) {
    var total = 0;
		var total = arr.reduce(function(runningTotal, currentTotal){
			return runningTotal + currentTotal
		},0);
		return total;
	},

	findDuplicates: function (arr) {
		var counts = {}
		var newSolution = arr.filter(function(item){
			if(!counts[item]) {
				counts[item] = 1
			} else {
				counts[item] += 1
				if (counts[item] === 2){
					return true
				}
			}
		})
	return newSolution;
	},




	removeAndClone: function (arr, valueToRemove) {
		return arrFiltered = arr.filter(function(value){
			return value !== valueToRemove
		})
	},

	findIndexesOf: function (arr, itemToFind) {
		var arrFiltered = []
		var index = 0
		arr.forEach(function(value){
			if (value === itemToFind){
				arrFiltered.push(index)
			}
			index ++
		})
		return arrFiltered
	},

	sumOfAllEvenNumbersSquared: function (arr) {
	    var total = 0;
			return arr.reduce(function(total, number){
				if(number % 2 == 0){
					return total + Math.pow(number, 2)
				}
				return total
			}, 0)
	}

}

module.exports = arrayTasks
