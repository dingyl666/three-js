
package main
import "fmt"
import "rsc.io/quote"
func main()  {
	var str string = "hello word"
	var count int = 1
	const num int = 1 
	fmt.Println("hello word")
	fmt.Println("hello" + "word")
	fmt.Println(str)
	fmt.Println(count)
	fmt.Println(num)
	fmt.Println(quote.Go())
}