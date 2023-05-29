package main

import "fmt"

func iterateArray() {
	scores := [5]float64{1, 2, 3, 4, 5}
	for i, value := range scores {
		fmt.Println(i, value)
	}
}

func main() {
	// var scores [5]float64

	// Declare initial values
	// var scores2 [5]float64 = [5]float64{9, 1.5, 4.5, 7, 8}

	// Without setting the size directly
	//scores2 := [...]float64{9, 1.5, 4.5, 7, 8}

	// fmt.Println(scores2)

	iterateArray()
}
