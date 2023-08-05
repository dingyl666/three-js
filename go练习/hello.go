package main 

import(
	"fmt"
)


import "rsc.io/quote"


func main () {
	var dd int ;
	dd = add(1,2) ;
	x,y := ArrayTest() ;
	var cta = createArray() ;
	pointerArray() ;
	fmt.Println(cta) ;
	fmt.Println(x,y) ;
	fmt.Println(dd) ;
	fmt.Println(quote.Go()) ;
}

func add (a int,b int) int {
	var c int ;
	c = a + b ;
	return c
}

func ArrayTest() (int ,int){
	var array = [...] int {1,2,3,4,5} ;
	var array2 = [2] int {5,10} ;
	length := len(array)  ;
	return length ,array2[0] ;
}

func createArray() [10]int {
	var array [10] int ;

	for i := 0; i < 10; i++ {
		array[i] = i ;
	}


	return array ;
}

func pointerArray() {
	//指针数组
	const Max int = 3 ;
	a := [3]int {10,100,200}
	var i int ;
	var prt [Max] * int ;
for i = 0; i  < Max; i++{
	prt[i] = &a[i] ;
}
fmt.Println("原数组:",a,"指针数组：",prt,*prt[0])
}