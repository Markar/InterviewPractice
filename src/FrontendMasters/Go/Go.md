# Intro
- Fast compile time, similar to C but reduced complexity, fast build times
- Lightweight type system, concurrency, automatic garbage collection, strict dependencies, convention

### Installation
Download Go

export GOPATH=$HOME/go
export GOBIN=$GOPATH/bin
export PATH=$PATH:$GOBIN

echo $PATH
echo $GOPATH

### Practice
- There can only been one main function per folder
    - Print, Println, Printf - print to stdout console
    - Fprint, Fprintln, Fprint - print to external source
    - Sprint, Sprintln, Sprintf - returns the string you want to print

go doc fmt
go doc fmt.Println

### Types
Type def, but Go can also infer type based on the right hand side
var name string = "Test"
// Go assigns a default value

var name string, similar to "let"


- int, int8, int16, int32, int64
- uint ... uint64
- float32 float64
- string, always double quotes
- bool, != not equal, == only for equality check

Type Conversion
```
var x = 4
fmt.Println(reflect.TypeOf(x * 5.5)) ->
fmt.Println(reflect.TypeOf(float64(x) * 5.5))
```

```
// Shorthand syntax, has to be inside a function block, assigns variable and associates a type

func main() {
    name := "Beyonce"
    fmt.Println(name)
}
```

# Packages
- fmt
- reflect

Check types: fmt.Println(reflect.TypeOf("Brenna"))

# Control structure
Parens not necessary, but need brackets
```
err := someFunction()

if err != nul {
    fmt.Println(err.Error())
}

// Shorthand
if err := someFunction(); err != null {
    fmt.Println(err.Error())
}
```

### Switch
Go stops as soon as it matches a case, otherwise you need fallthrough
```
var city string

switch city {
    case "Des Moines":
        x
    case "Seattle,", "Bellevue":
        y
    default: : 
        z
}

var i int
switch {
    case i != 10: 
        fallthrough
    case i > 10: 
        x
    case i < 10: 
        y
    default: 
        fmt.Println("z")
}
```

### For loops

```
// while style
 i := 1
 for i <= 100 {
    fmt.Println(i)
    i += 1
 }

 var mySentence = "This is a sentence"

 for index, letter := range mySentence {
    // Prints index and bytes for character
    fmt.Println("Index: ", index, "Letter:", letter)
    // convert type
    fmt.Println("Index: ", index, "Letter", string(letter))
 }

```

# Complex Structures

### Functions, Variadic functions

```
func printAge(age int) (ageOfSally int, ageOfBob int) {
    ageOfBob = 21
    fmt.Println(age)
    // default return will work if variables are set explicitly
    return
}
// assigned just by the return declaration
age1, age2 := printAge(1, 2)

// variatic function
// spread operator to return unknown quantity of integers
func printAges(ages ...int) int {
    for _, value := range ages {
        fmt.Println(value)
    }
}

printAges(16, 21, 30)
```
### Arrays
```
var scores [5]float64
scores[0] = 9
...
scores[4] = 8

var scores [5] = [5]float64{9,...8}

scores := [5]float64{9,..8}
scores := [...]float64{9...8}
```

### Slices + Make
Make initializes and allocates space in memory for a slice, map, channel
```
var array [5] int
// allocates default values, but can be changed later. Third argument is max capacity.
var slice []int = make([]int, 5, 10)
len(slice) // 5
cap(slice) // 10

spliced := blah[1:3]
```

Add memory to the slice
```
func main() {
    fruitArray := [5]string{"banana", "pear", "apple", "kumquat", "peach"}

    splicedFruit := fruitArray[1:3]

    fruitToAdd := append(splicedFruit, "canteloupe", "cherries")

    fmt.Println(splicedFruit, fruitToAdd)
    // [pear apple], [pear apple canteloupe cherries]
    fmt.Println(len(fruitToAdd))
    fmt.Println(cap(fruitToAdd))
    // 4, 4
}
```

### Maps
```
package main
import "fmt"
func main() {
    //map with ints for keys, and strings for values
    var useEmails map [int]string = make(map[int]string)
    userEmails[1] = "1@gmail.com"
    userEmails[2] = "2@gmail.com"
    fmt.Println(userEmails)
    // map[1:1@gmail.com 2:2@gmail.com]

    userEmails := map[int]string {
        1: "1@gmail.com"
        2: "2@gmail.com"
    }

    userEmails[1] = "user3@gmail.com"

    firstEmail, ok := userEmails[4]
    fmt.Println(firstEmail, ok)
     return  false
     // with ok being whether firstEmail exists

     if email, ok := userEmails[4]; ok {
        fmt.Println("email exists")
     } else {
        fmt.Println("email doesn't exist")
     }

     delete(userEmails, 2)
}
```

# Go Toolkit

### Tools & Commands
- go run main.go
- go install
- go build
- go fmt (can be run on a particular file to print errors)
- go list
- go vet
- go doc fmt.Println
- go get goland.org/x/lint/golint
- golint

### Packages
Anything with a capital letter is automatically exported, any anything exported needs to be commented

in packages.go, add the import file path, left side is the alias
```
import (
    "fmt"
    math "path/to/utils/
)
func calculateImportantData() int {
    return utils.Add(1,2,3,)
}
func main() {
    total := calculateImportantData()
}
```

Create utils folder, create math.go
```
package utils

import "fmt"

func printNum(num int) {
    fmt.Println("Current number: ", num)
}

func Add(nums ...int) int {
    total := 0
    for _, v := range nums {
        printNum(v)
        total += v
    }
    return total
}
```

### Testing
Use go testcommand to run tests
```
func TestAverage(t *testing.T) {

}
```







