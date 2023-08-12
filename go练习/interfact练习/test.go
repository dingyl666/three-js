package main

import (
	"fmt"
	"math"
)

type Sizer interface {
	Area() float64
}

type Circle struct {
	Radius float64
}

type Square struct {
	Width float64
	Height float64  
}

type String interface {
	String() string
}

func (s Square) Area() float64 {
	return s.Width * s.Height
}
func (s Square) String() string {
	return fmt.Sprintf("Square {Width: %.2f, Height: %.2f}", s.Width, s.Height)
}



func (c Circle) Area() float64 {
	return math.Pi * math.Pow(c.Radius , 2)
}
func (c Circle) String() string {
	return fmt.Sprintf("Circle {Radius: %.2f}", c.Radius)
}

type Shaper interface {
	Sizer
	fmt.Stringer
}
func main () {
	c := Circle{10} 
	PrintArea(c)
	s := Square{Height:10,Width:5}
	PrintArea(s)
	l := Less(c,s)

	fmt.Printf("%+v is the smallest\n",l)
}

func PrintArea(s Shaper) {
	fmt.Printf("area of %s is %.2f\n", s.String(), s.Area())
}

func Less (s1,s2 Sizer) Sizer {
	if s1.Area() < s2.Area() {
		return s1
	}

	return s2
}
