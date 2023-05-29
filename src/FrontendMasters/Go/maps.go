package main

import "fmt"

func maps() {
	// need to use make for long hand
	var userEmails1 map[int]string = make(map[int]string)
	userEmails1[1] = "user1@gmail.com"
	userEmails1[2] = "user2@gmail.com"

	// Shorthand version
	userEmails := map[int]string{
		1: "user1@gmail.com",
		2: "user2@gmail.com",
	}

	// Assign after declaration
	userEmails[1] = "user3@gmail.com"

	// fmt.Println(userEmails)

	// This prints nothing, 4 doesn't exist
	firstEmail := userEmails[4]
	fmt.Println(firstEmail)

	// Check if it's okay, returns true/false
	firstEmail, ok := userEmails[4]
	fmt.Println(firstEmail, ok)

	// If ok, execute {}, else nothing
	if email, ok := userEmails[1]; ok {
		fmt.Println("email exists", email)

	} else {
		fmt.Println("email doesn't exist")
	}

}

func main() {
	maps()
}
