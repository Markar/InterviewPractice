// Convert Casing
// { foo_bar: 1} -> { fooBar : 1}

class Comment {
  constructor(id, parentId) {
    this.id = id;
    this.parentId = parentId;
  }

}
let data = [
  new Comment(1, null),
  new Comment(2, null),
  new Comment(3, null),
  new Comment(4, 1),
  new Comment(5, 4),
];

// Convert these to output that you can print 