import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React, { Component } from 'react'

export default class TodoTable extends Component {
    state={
        todo:[
        {
            Title: "abc", 
        Description: "abcdef",
         date: "2021-08-31", 
         remark: "remark"
        },
        {
            Title: "ABC",
             Description: "BJHBJK",
              date: "2021-09-31",
               remark: "essential"
            },
        {
            Title: "BH12",
             Description: "abcdef",
              date: "2021-08-21",
               remark: "required"
            },
        {
            Title: "abc",
             Description: "abcdef", 
             date: "2021-08-31",
              remark: "agree"
            }
    ]
}
    
    render() {
        return (
            <div>
                <TableContainer>
                <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>sl.no</TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>Remarks
                                </TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.todo.map(
                                (value,index)=>{
                                    return <TableRow>
                                               <TableCell>{index}</TableCell>
                                               <TableCell>{value.Title}</TableCell>
                                               <TableCell>{value.Description}</TableCell>
                                               <TableCell>{value.date}</TableCell>
                                               <TableCell>{value.remark}</TableCell>

                                    </TableRow>

                                }
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>

                   
                
                
            </div>
        )
    }
}
