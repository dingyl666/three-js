package main

import (
	"fmt"

	"rsc.io/quote"
)

type Person struct {
	name string
	sex  string
	age  int
	flag bool
}

func main() {

	// createIntParent() ;
	// 正常情况
	// if result, errorMsg := Divide(100, 10); errorMsg == "" {
	// 	fmt.Println("100/10 = ", result)
	// }
	// 当除数为零的时候会返回错误信息
	if _, errorMsg := Divide(100, 0); errorMsg != "" {
		fmt.Println("errorMsg is: ", errorMsg)
	}

	student := Student{name: "dyl", age: 20}

	var personal Personal
	personal = student

	fmt.Printf("name:%s,age:%d", personal.getName(), personal.getAge())

	var phone Phone
	phone = new(NokiaPhone)
	phone.call()
	phone = new(IPhone)
	phone.call()
	me := Person{"dyl", "男", 20, true}
	var me2 Person
	me2 = Person{name: "ddd"}
	fmt.Println(me2)
	fmt.Println(me)
	fmt.Println(me.name)
	var dd int
	dd = add(1, 2)
	x, y := ArrayTest()
	var cta = createArray()
	pointerArray()
	fmt.Println(cta)
	fmt.Println(x, y)
	fmt.Println(dd)
	fmt.Println(quote.Go())
}

func add(a int, b int) int {
	var c int
	c = a + b
	return c
}

func ArrayTest() (int, int) {
	var array = [...]int{1, 2, 3, 4, 5}
	var array2 = [2]int{5, 10}
	length := len(array)
	return length, array2[0]
}

func createArray() [10]int {
	var array [10]int

	for i := 0; i < 10; i++ {
		array[i] = i
	}

	return array
}

func pointerArray() {
	//指针数组
	const Max int = 3
	a := [3]int{10, 100, 200}
	var i int
	var prt [Max]*int
	for i = 0; i < Max; i++ {
		prt[i] = &a[i]
	}
	fmt.Println("原数组:", a, "指针数组：", prt, *prt[0])
}

type Phone interface {
	call()
}
type NokiaPhone struct {
	name string
}

func (nokiaPhone NokiaPhone) call() {
	fmt.Println("i am NokiaPhone", nokiaPhone.name)
}

type IPhone struct {
	name string
}

func (iPhone IPhone) call() {
	fmt.Println("i am IPhone", iPhone.name)
}

type Personal interface {
	getName() string
	getAge() int
}

type Student struct {
	name string
	age  int
}

func (s Student) getAge() int {
	return s.age
}

func (s Student) getName() string {
	return s.name
}

type DivideError struct {
	dividee int
	divider int
}

//实现error接口

type error interface {
	Error() string
}

func (de *DivideError) Error() string {
	strError := `
	Cannot proceed, the divider is zero.
    	dividee: %d
    	divider: %d
`
	return fmt.Sprintf(strError, de.dividee, de.divider)
}

func Divide(varDividee, varDivider int) (result int, errorMessage string) {
	if varDivider == 0 {
		dData := DivideError{
			dividee: varDividee,
			divider: varDivider,
		}

		errorMessage = dData.Error()

		return 
	} else {
		return varDividee / varDivider, ""
	}
}

func createInt() *int {
	var aa = 0
	return &aa
}

func createIntParent() {
	var a *int
	a = createInt()
	fmt.Println(a, *a, &a)
}



