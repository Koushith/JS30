// grouping of related data togather.

let employee = {
  name: 'koushith',
  base_sal: 30000,
  shift_allowence: 5000,
  over_time: 100,
  monthly_wage: function () {
    return this.base_sal + this.shift_allowence * this.over_time;
  },
};

output = employee.monthly_wage();
console.log(output);

