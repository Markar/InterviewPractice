package main

import "fmt"

func average(n1, n2, n3 float64) float64 {
	return (n1 + n2 + n3) / 3.0
}

func averageX(nums ...float64) float64 {
	var avg float64 // or avg := 0.0

	for _, value := range nums {
		avg += value
	}

	return avg / float64(len(nums))
}

func main() {
	var avg = averageX(5.0, 10.0, 10, 20, 50, 100)
	fmt.Println(avg)
}
