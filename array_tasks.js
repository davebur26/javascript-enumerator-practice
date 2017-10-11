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
		var arrSquare = arr.map(function(parameter){
			 return parameter**2
		});
		return arrSquare;
	},

	sum: function (arr) {
    var total = 0;
		var total = arr.reduce(function(runningTotal, currentTotal){
			return runningTotal + currentTotal
		},0);
		return total;
	},

	findDuplicates: function (arr) {
		var arrFiltered = []
		var arrDuplicates = []
		arr.forEach(function(item){
			if (arrFiltered.includes(item) === false){
				arrFiltered.push(item)
			} else {
				if (arrDuplicates.includes(item) === false){
					arrDuplicates.push(item)
				}
			}
		})
		return arrDuplicates
	},

	removeAndClone: function (arr, valueToRemove) {
		var arrFiltered = arr.filter(function(value){
			return value !== valueToRemove
			})
		return arrFiltered
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
			arr.forEach(function(number){
				if(number % 2 == 0){
					total += (number **2)
				}
			})
		return total
	}

}

module.exports = arrayTasks
