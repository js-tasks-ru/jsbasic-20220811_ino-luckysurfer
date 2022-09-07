function showSalary(users, age) {
  users = users.filter(item => item.age <= age);
  
  let result = '';
  for (let user of users) {
    result += ((result && '\n') + `${user.name}, ${user.balance}`);
  }
  
  return result;
}
