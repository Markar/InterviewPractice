package main

import "fmt"

func slices() {
	var myArray [5]int
	// The 10 optimizes the memory allocation
	var mySlice []int = make([]int, 5, 10)

	myArray[0] = 1
	mySlice[0] = 1

	fmt.Println(myArray)
	fmt.Println(mySlice)

	fmt.Println(len(mySlice)) // length
	fmt.Println(cap(mySlice)) // capacity
}

func test() {
	fruitArray := [5]string{"banana", "pear", "apple", "kumquat", "peach"}

	splicedFruit := fruitArray[1:3]

	// fmt.Println(splicedFruit)
	// fmt.Println(len(splicedFruit))
	// fmt.Println(cap(splicedFruit))

	fruitToAdd := append(splicedFruit, "watermelon")
	fmt.Println(fruitToAdd)
}

func main() {
	// slices()
	test()
}
