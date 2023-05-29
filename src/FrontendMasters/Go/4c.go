package main

import "fmt"

func avg(scores [5]float64) float64 {
	var avg float64
	for _, value := range scores {
		avg += value
	}

	avg = avg / float64(len(scores))

	return avg
}

func petExists(petName string, animalMap map[string]string) bool {

	for key := range animalMap {
		if key == petName {
			return true
		}
	}

	return false
}

var groceries = []string{"mark", "laura"}

func addGrocery(items ...string) []string {
	fmt.Println(items)
	var list string = ""
	for _, value := range items {
		list = list + " " + string(value)
	}
	addedList := append(groceries, list)
	//fmt.Println(groceries)
	return addedList
}

func main() {
	// scores := [5]float64{1, 2, 3, 4, 5}
	// var avgScore = avg(scores)
	// fmt.Println("Avg Score: ", avgScore)

	// animalMap := map[string]string{
	// 	"meow meow": "cat",
	// }
	// fmt.Println("Main", petExists("meow meow", animalMap))

	list := addGrocery("blueberry", "cherry")
	fmt.Println("Full list of groceries: ", list)

	// fmt.Println(animalMap)
}
