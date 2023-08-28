package main 

import (
	"fmt"
	"os"
)

type Student struct {
	name string 
	id int 
}

var studentList = make(map[int] *Student)

func showList () {
	if(len(studentList) == 0) {
		fmt.Println("学生列表为空") 
	}else{
		for i,v := range studentList {
			fmt.Printf("学号：%d 姓名：%s\n", i, v.name)
		}
	}
}
func addStudent(name string,id int) *Student{
	return &Student{name,id,}
}
func main () {
	fmt.Println("欢迎来到学生管理系统")
	fmt.Println(`
         1.展示学生列表
         2.添加学生
         3.编辑学生信息
         4.删除学生
         5.退出
         `)
		 fmt.Printf("请选择你的操作：")
      var input int
      //函数扫描标准输入中给定的输入文本
      //它返回成功扫描的项目数
      fmt.Scanln(&input)
	  switch input {
	case 1:
	   listStudent()
	case 2:
	   addStudent()
	case 3:
	   editStudent()
	case 4:
	   deleteStudent()
	case 5:
	   os.Exit(1)

	default:
	   fmt.Println("请按照规则输入")
	}
}

