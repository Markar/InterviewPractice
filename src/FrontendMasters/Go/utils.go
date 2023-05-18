package utils

import "fmt"

func printNum(num int) {
	fmt.Println("Current number: ", num)
}

// Adds numbers
func Add(nums ...int) int {
	total := 0
	for _, v := range nums {
		printNum(v)
		total += v
	}
	return total
}