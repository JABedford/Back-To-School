const names = ['Afghanistan', 'Aruba', 'Bahamas', 'Chile', 'Fiji', 'Gabon', 'Luxembourg', 'Nepal', 'Singapore', 'Uganda', 'Zimbabwe'];

const longNames = names.filter(function(name) {
  return name.length > 6;
});

// Which of the following choices does the same thing, but replaces .filter()'s function with an arrow function?

const longNames = names.filter(name => name.length > 6);
