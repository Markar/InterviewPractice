package main

import "fmt"

// 4c
func avg(scores [5]float64) float64 {
	var total float64 = 0.0
	for _, value := range scores {
		total += value
	}
	var len = float64(len(scores))
	return total / len
}

var petNames map[string]string = map[string]string{
	"Mark":  "Lowchen",
	"Laura": "Chen",
}

func exists(str string) bool {
	_, ok := petNames[str]
	return ok
	// var res = false

	// for key, value := range petNames {
	// 	fmt.Println(key, value)
	// 	if key == str {
	// 		res = true
	// 	}
	// }

	// return res
}
func printGroceries(elements ...string) []string {
	var groceries = make([]string, 1, 5)
	groceries[0] = "rice"

	for _, grocery := range elements {
		groceries = append(groceries, grocery)
	}

	return groceries
}
func main() {
	// var scores [5]float64
	// scores[0] = 10
	// scores[1] = 20
	// fmt.Println("Avg:", avg(scores))

	var nameExists bool = exists("Mark")
	fmt.Println("Exists: ", nameExists)

	var groceries = printGroceries("tuna", "peppers")
	fmt.Println("Groceries: ", groceries)

}

// func average(nums ...float64) float64 {
// 	var total float64
// 	for _, value := range nums {
// 		total = total + value
// 		fmt.Println(value)
// 	}
// 	var len = float64(len(nums))
// 	return total / len
// }
//func main() {
// fmt.Println("Hello World")
// fmt.Printf("Name %s", "Mark")

// for i := 1; i <= 100; i++ {
// 	fmt.Println(i)
// }

// 3a
// var sentence string = "Mark"

// for index, letter := range sentence {

// 	if index%2 == 0 {
// 		fmt.Println(index, string(letter))
// 	}
// }

// 4a
// avg := average(10, 20, 30)
// fmt.Println(avg)

// 4c
// }
