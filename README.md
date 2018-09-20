# note

data fetched from [beteasy](https://beteasy.com.au/api/home/next-jumps/1,2,3) every 5 seconds. the UI is roughly in sync with https://beteasy.com.au/  "next to jump" section

# how to run locally 

`npm i` or `yarn install` then `npm start`

# unit test
`npm test` 

unit test is the only sophisticated part in this project. I've tested the case where 
1. component did a `fetch` inside `componentDidMount`, should render with mocked fetch result;
2. component has a timer to repaint UI every second. Use jest fake timer to test it. 

