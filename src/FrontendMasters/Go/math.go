package utils

import "fmt"

func printNum(num int) {
	fmt.Println("Current num", num)
}

// Adds together multiple numbers
func Add(nums ...int) int {
	total := 0
	for _, v := range nums {
		printNum(v)
		total += v
	}
	return total
}
