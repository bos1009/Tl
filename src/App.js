import logo from './logo.svg';
import React,{ Component } from 'react';
//import Customer from './components/Customer';
import './App.css';
import Customer from './components/Customer';
/*
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import { render } from '@testing-library/react';
*/

const customers = [{
  'id':1,
  'image':'https://source.unsplash.com/random/64x64',
  'name':'홍길동',
  'birthday': '760225',
  'gender':'남자',
  'job': '직장인'
  },
  {
    'id':2,
    'image':'https://source.unsplash.com/random/64x64',
    'name':'김대중',
    'birthday': '760225',
    'gender':'남자',
    'job': '국회의원'
  },
  {
    'id':3,
    'image':'https://source.unsplash.com/random/64x64',
    'name':'이재명',
    'birthday': '760225',
    'gender':'남자',
    'job': '당대표'
  },
  {
    'id':4,
    'image':'https://source.unsplash.com/random/64x64',
    'name':'윤석열',
    'birthday': '760225',
    'gender':'남자',
    'job': '대통령'
  }
]

class App extends Component{
  render(){
    return(
      <div>
        {
          customers.map(c => {
            return(
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            )
          })
        }
      </div>
    );
  }
}
export default App;

/*
const styles = theme => ({
  root:{
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }


})


const customers = [
  {
    'id' : 1,
    'image' : 'https://placeimg.com/64/64/1',
    'name' : '홍길동',
    'birthday' : '760225',
    'gender' : '남자',
    'job' : '직장인',
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/2',
    'name' : '이재명',
    'birthday' : '630331',
    'gender' : '남자',
    'job' : '국회의원',
  },
  {
    'id' : 3,
    'image' : 'https://placeimg.com/64/64/3',
    'name' : '윤석열',
    'birthday' : '660205',
    'gender' : '남자',
    'job' : '대통령',
  }
]


class App extends Component {
  render(){
    const { classes } = this.props;

  return (
    <Paper className={classes.root}> 
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>            
          </TableRow>
        </TableHead>


        <TableBody>
        {
        customers.map(c => {
          return(
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          ); } )
        }    

          
        </TableBody>
      </Table>      
    </Paper>
  );
};
}
export default withStyles(styles)(App);
*/